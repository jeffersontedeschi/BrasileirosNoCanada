// Rentals.ca API integration
const RENTALS_API_KEY = 'YOUR_API_KEY'; // You'll need to get this from Rentals.ca
const RENTALS_API_URL = 'https://api.rentals.ca/v1';

async function fetchRentalData(province) {
    try {
        const response = await fetch(`${RENTALS_API_URL}/rental-prices?province=${province}`, {
            headers: {
                'Authorization': `Bearer ${RENTALS_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        return processRentalData(data);
    } catch (error) {
        console.error('Error fetching rental data:', error);
        return null;
    }
}

function processRentalData(data) {
    // Sort cities by average rental price (ascending)
    const sortedCities = data.cities.sort((a, b) => a.averagePrice - b.averagePrice);
    
    // Take top 10 most affordable cities
    const top10Cities = sortedCities.slice(0, 10);
    
    return {
        cities: top10Cities.map(city => ({
            name: city.name,
            prices: {
                oneBedroom: Math.round(city.prices.oneBedroom),
                twoBedroom: Math.round(city.prices.twoBedroom),
                threeBedroom: Math.round(city.prices.threeBedroom),
                studio: Math.round(city.prices.studio),
                townhouse: Math.round(city.prices.townhouse),
                basement: Math.round(city.prices.basement)
            }
        }))
    };
}

// Update the rental data periodically
async function updateRentalData() {
    const provinces = ['ontario', 'quebec', 'manitoba', 'british-columbia', 'alberta', 
                      'saskatchewan', 'nova-scotia', 'new-brunswick', 'newfoundland-labrador', 
                      'prince-edward-island', 'northwest-territories', 'nunavut', 'yukon'];

    for (const province of provinces) {
        const data = await fetchRentalData(province);
        if (data) {
            rentalData[province] = data;
        }
    }
}

// Update data every 24 hours
setInterval(updateRentalData, 24 * 60 * 60 * 1000);

// Initial data fetch
updateRentalData(); 