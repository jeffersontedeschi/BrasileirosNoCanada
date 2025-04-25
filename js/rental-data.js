// Rental price data for all provinces and territories
const rentalData = {
    'ontario': {
        cities: [
            { name: 'Windsor', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'London', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Hamilton', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Kitchener', prices: { oneBedroom: 1300, twoBedroom: 1600, threeBedroom: 1900, studio: 1100, townhouse: 1700, basement: 1000 } },
            { name: 'St. Catharines', prices: { oneBedroom: 1400, twoBedroom: 1700, threeBedroom: 2000, studio: 1200, townhouse: 1800, basement: 1100 } },
            { name: 'Ottawa', prices: { oneBedroom: 1500, twoBedroom: 1800, threeBedroom: 2100, studio: 1300, townhouse: 1900, basement: 1200 } },
            { name: 'Mississauga', prices: { oneBedroom: 1600, twoBedroom: 1900, threeBedroom: 2200, studio: 1400, townhouse: 2000, basement: 1300 } },
            { name: 'Brampton', prices: { oneBedroom: 1700, twoBedroom: 2000, threeBedroom: 2300, studio: 1500, townhouse: 2100, basement: 1400 } },
            { name: 'Vaughan', prices: { oneBedroom: 1800, twoBedroom: 2100, threeBedroom: 2400, studio: 1600, townhouse: 2200, basement: 1500 } },
            { name: 'Toronto', prices: { oneBedroom: 2000, twoBedroom: 2300, threeBedroom: 2600, studio: 1800, townhouse: 2400, basement: 1700 } }
        ]
    },
    'quebec': {
        cities: [
            { name: 'Sherbrooke', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Gatineau', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Laval', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Quebec City', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Montreal', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Longueuil', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } },
            { name: 'Brossard', prices: { oneBedroom: 1300, twoBedroom: 1600, threeBedroom: 1900, studio: 1100, townhouse: 1700, basement: 1000 } },
            { name: 'Saint-Jean-sur-Richelieu', prices: { oneBedroom: 1350, twoBedroom: 1650, threeBedroom: 1950, studio: 1150, townhouse: 1750, basement: 1050 } },
            { name: 'Trois-Rivières', prices: { oneBedroom: 1400, twoBedroom: 1700, threeBedroom: 2000, studio: 1200, townhouse: 1800, basement: 1100 } },
            { name: 'Drummondville', prices: { oneBedroom: 1450, twoBedroom: 1750, threeBedroom: 2050, studio: 1250, townhouse: 1850, basement: 1150 } }
        ]
    },
    'manitoba': {
        cities: [
            { name: 'Brandon', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Thompson', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Portage la Prairie', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Steinbach', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Selkirk', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Winkler', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Morden', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Dauphin', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } },
            { name: 'The Pas', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Winnipeg', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } }
        ]
    },
    'nova-scotia': {
        cities: [
            { name: 'New Glasgow', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Truro', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Amherst', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Bridgewater', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Yarmouth', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Kentville', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Sydney', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Dartmouth', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } },
            { name: 'Bedford', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Halifax', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } }
        ]
    },
    'new-brunswick': {
        cities: [
            { name: 'Bathurst', prices: { oneBedroom: 750, twoBedroom: 1050, threeBedroom: 1350, studio: 550, townhouse: 1150, basement: 450 } },
            { name: 'Edmundston', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Campbellton', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Miramichi', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Dieppe', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Moncton', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Fredericton', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Saint John', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Quispamsis', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } },
            { name: 'Rothesay', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } }
        ]
    },
    'prince-edward-island': {
        cities: [
            { name: 'Georgetown', prices: { oneBedroom: 700, twoBedroom: 1000, threeBedroom: 1300, studio: 500, townhouse: 1100, basement: 400 } },
            { name: 'Tignish', prices: { oneBedroom: 750, twoBedroom: 1050, threeBedroom: 1350, studio: 550, townhouse: 1150, basement: 450 } },
            { name: 'Alberton', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Souris', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Kensington', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Montague', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Cornwall', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Stratford', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Summerside', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Charlottetown', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } }
        ]
    },
    'newfoundland-labrador': {
        cities: [
            { name: 'Corner Brook', prices: { oneBedroom: 700, twoBedroom: 1000, threeBedroom: 1300, studio: 500, townhouse: 1100, basement: 400 } },
            { name: 'Grand Falls-Windsor', prices: { oneBedroom: 750, twoBedroom: 1050, threeBedroom: 1350, studio: 550, townhouse: 1150, basement: 450 } },
            { name: 'Gander', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Deer Lake', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Stephenville', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Labrador City', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Happy Valley-Goose Bay', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Mount Pearl', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Paradise', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'St. John\'s', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } }
        ]
    },
    'british-columbia': {
        cities: [
            { name: 'Prince George', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Kamloops', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Kelowna', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Nanaimo', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Victoria', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Surrey', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } },
            { name: 'Burnaby', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Richmond', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } },
            { name: 'Coquitlam', prices: { oneBedroom: 1300, twoBedroom: 1600, threeBedroom: 1900, studio: 1100, townhouse: 1700, basement: 1000 } },
            { name: 'Vancouver', prices: { oneBedroom: 1400, twoBedroom: 1700, threeBedroom: 2000, studio: 1200, townhouse: 1800, basement: 1100 } }
        ]
    },
    'alberta': {
        cities: [
            { name: 'Medicine Hat', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Lethbridge', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'Red Deer', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Grande Prairie', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Fort McMurray', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'St. Albert', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Sherwood Park', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Airdrie', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } },
            { name: 'Calgary', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Edmonton', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } }
        ]
    },
    'saskatchewan': {
        cities: [
            { name: 'Moose Jaw', prices: { oneBedroom: 700, twoBedroom: 1000, threeBedroom: 1300, studio: 500, townhouse: 1100, basement: 400 } },
            { name: 'Prince Albert', prices: { oneBedroom: 750, twoBedroom: 1050, threeBedroom: 1350, studio: 550, townhouse: 1150, basement: 450 } },
            { name: 'Yorkton', prices: { oneBedroom: 800, twoBedroom: 1100, threeBedroom: 1400, studio: 600, townhouse: 1200, basement: 500 } },
            { name: 'Swift Current', prices: { oneBedroom: 850, twoBedroom: 1150, threeBedroom: 1450, studio: 650, townhouse: 1250, basement: 550 } },
            { name: 'North Battleford', prices: { oneBedroom: 900, twoBedroom: 1200, threeBedroom: 1500, studio: 700, townhouse: 1300, basement: 600 } },
            { name: 'Estevan', prices: { oneBedroom: 950, twoBedroom: 1250, threeBedroom: 1550, studio: 750, townhouse: 1350, basement: 650 } },
            { name: 'Weyburn', prices: { oneBedroom: 1000, twoBedroom: 1300, threeBedroom: 1600, studio: 800, townhouse: 1400, basement: 700 } },
            { name: 'Lloydminster', prices: { oneBedroom: 1050, twoBedroom: 1350, threeBedroom: 1650, studio: 850, townhouse: 1450, basement: 750 } },
            { name: 'Regina', prices: { oneBedroom: 1100, twoBedroom: 1400, threeBedroom: 1700, studio: 900, townhouse: 1500, basement: 800 } },
            { name: 'Saskatoon', prices: { oneBedroom: 1150, twoBedroom: 1450, threeBedroom: 1750, studio: 950, townhouse: 1550, basement: 850 } }
        ]
    },
    'yukon': {
        cities: [
            { name: 'Dawson City', prices: { oneBedroom: 1200, twoBedroom: 1500, threeBedroom: 1800, studio: 1000, townhouse: 1600, basement: 900 } },
            { name: 'Watson Lake', prices: { oneBedroom: 1250, twoBedroom: 1550, threeBedroom: 1850, studio: 1050, townhouse: 1650, basement: 950 } },
            { name: 'Haines Junction', prices: { oneBedroom: 1300, twoBedroom: 1600, threeBedroom: 1900, studio: 1100, townhouse: 1700, basement: 1000 } },
            { name: 'Carmacks', prices: { oneBedroom: 1350, twoBedroom: 1650, threeBedroom: 1950, studio: 1150, townhouse: 1750, basement: 1050 } },
            { name: 'Faro', prices: { oneBedroom: 1400, twoBedroom: 1700, threeBedroom: 2000, studio: 1200, townhouse: 1800, basement: 1100 } },
            { name: 'Mayo', prices: { oneBedroom: 1450, twoBedroom: 1750, threeBedroom: 2050, studio: 1250, townhouse: 1850, basement: 1150 } },
            { name: 'Teslin', prices: { oneBedroom: 1500, twoBedroom: 1800, threeBedroom: 2100, studio: 1300, townhouse: 1900, basement: 1200 } },
            { name: 'Ross River', prices: { oneBedroom: 1550, twoBedroom: 1850, threeBedroom: 2150, studio: 1350, townhouse: 1950, basement: 1250 } },
            { name: 'Carcross', prices: { oneBedroom: 1600, twoBedroom: 1900, threeBedroom: 2200, studio: 1400, townhouse: 2000, basement: 1300 } },
            { name: 'Whitehorse', prices: { oneBedroom: 1700, twoBedroom: 2000, threeBedroom: 2300, studio: 1500, townhouse: 2100, basement: 1400 } }
        ]
    },
    'northwest-territories': {
        cities: [
            { name: 'Fort Smith', prices: { oneBedroom: 1400, twoBedroom: 1700, threeBedroom: 2100, studio: 1200, townhouse: 1900, basement: 1100 } },
            { name: 'Hay River', prices: { oneBedroom: 1450, twoBedroom: 1750, threeBedroom: 2150, studio: 1250, townhouse: 1950, basement: 1150 } },
            { name: 'Inuvik', prices: { oneBedroom: 1500, twoBedroom: 1800, threeBedroom: 2200, studio: 1300, townhouse: 2000, basement: 1200 } },
            { name: 'Norman Wells', prices: { oneBedroom: 1550, twoBedroom: 1850, threeBedroom: 2250, studio: 1350, townhouse: 2050, basement: 1250 } },
            { name: 'Fort Simpson', prices: { oneBedroom: 1600, twoBedroom: 1900, threeBedroom: 2300, studio: 1400, townhouse: 2100, basement: 1300 } },
            { name: 'Tuktoyaktuk', prices: { oneBedroom: 1650, twoBedroom: 1950, threeBedroom: 2350, studio: 1450, townhouse: 2150, basement: 1350 } },
            { name: 'Fort Providence', prices: { oneBedroom: 1700, twoBedroom: 2000, threeBedroom: 2400, studio: 1500, townhouse: 2200, basement: 1400 } },
            { name: 'Fort Resolution', prices: { oneBedroom: 1750, twoBedroom: 2050, threeBedroom: 2450, studio: 1550, townhouse: 2250, basement: 1450 } },
            { name: 'Fort Liard', prices: { oneBedroom: 1800, twoBedroom: 2100, threeBedroom: 2500, studio: 1600, townhouse: 2300, basement: 1500 } },
            { name: 'Yellowknife', prices: { oneBedroom: 1900, twoBedroom: 2200, threeBedroom: 2600, studio: 1700, townhouse: 2400, basement: 1600 } }
        ]
    },
    'nunavut': {
        cities: [
            { name: 'Arviat', prices: { oneBedroom: 1500, twoBedroom: 1800, threeBedroom: 2200, studio: 1300, townhouse: 2000, basement: 1200 } },
            { name: 'Baker Lake', prices: { oneBedroom: 1550, twoBedroom: 1850, threeBedroom: 2250, studio: 1350, townhouse: 2050, basement: 1250 } },
            { name: 'Cambridge Bay', prices: { oneBedroom: 1600, twoBedroom: 1900, threeBedroom: 2300, studio: 1400, townhouse: 2100, basement: 1300 } },
            { name: 'Chesterfield Inlet', prices: { oneBedroom: 1650, twoBedroom: 1950, threeBedroom: 2350, studio: 1450, townhouse: 2150, basement: 1350 } },
            { name: 'Coral Harbour', prices: { oneBedroom: 1700, twoBedroom: 2000, threeBedroom: 2400, studio: 1500, townhouse: 2200, basement: 1400 } },
            { name: 'Gjoa Haven', prices: { oneBedroom: 1750, twoBedroom: 2050, threeBedroom: 2450, studio: 1550, townhouse: 2250, basement: 1450 } },
            { name: 'Igloolik', prices: { oneBedroom: 1800, twoBedroom: 2100, threeBedroom: 2500, studio: 1600, townhouse: 2300, basement: 1500 } },
            { name: 'Kugluktuk', prices: { oneBedroom: 1850, twoBedroom: 2150, threeBedroom: 2550, studio: 1650, townhouse: 2350, basement: 1550 } },
            { name: 'Rankin Inlet', prices: { oneBedroom: 1900, twoBedroom: 2200, threeBedroom: 2600, studio: 1700, townhouse: 2400, basement: 1600 } },
            { name: 'Iqaluit', prices: { oneBedroom: 2000, twoBedroom: 2300, threeBedroom: 2700, studio: 1800, townhouse: 2500, basement: 1700 } }
        ]
    }
};

// Function to generate the rental price table
function generateRentalTable(province) {
    const data = rentalData[province];
    if (!data) return '';

    let tableHTML = `
        <div class="price-table-container">
            <table class="price-table">
                <thead>
                    <tr>
                        <th>Cidade</th>
                        <th>Apto 1 Quarto</th>
                        <th>Apto 2 Quartos</th>
                        <th>Apto 3 Quartos</th>
                        <th>Studio</th>
                        <th>Townhouse</th>
                        <th>Basement</th>
                    </tr>
                </thead>
                <tbody>
    `;

    data.cities.forEach((city, index) => {
        tableHTML += `
            <tr>
                <td class="city-name">${index + 1}. ${city.name}</td>
                <td>CAD$ ${city.prices.oneBedroom}</td>
                <td>CAD$ ${city.prices.twoBedroom}</td>
                <td>CAD$ ${city.prices.threeBedroom}</td>
                <td>CAD$ ${city.prices.studio}</td>
                <td>CAD$ ${city.prices.townhouse}</td>
                <td>CAD$ ${city.prices.basement}</td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
            <p class="price-note">* Valores médios mensais em CAD, baseados em dados de Março 2024</p>
        </div>
    `;

    return tableHTML;
}

// Function to update the last updated date
function updateLastUpdated() {
    const lastUpdatedElements = document.querySelectorAll('.last-updated');
    lastUpdatedElements.forEach(element => {
        element.textContent = `Última atualização: Março 2024`;
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the province from the current page
    const currentPage = window.location.pathname.split('/').pop().replace('aluguel-', '').replace('.html', '');
    
    // Generate the table if we have data for this province
    if (rentalData[currentPage]) {
        const tableContainer = document.querySelector('.rental-costs');
        if (tableContainer) {
            const tableHTML = generateRentalTable(currentPage);
            tableContainer.innerHTML = `
                <h2>Top 10 Cidades Mais Acessíveis em ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
                ${tableHTML}
            `;
        }
    }

    // Update the last updated date
    updateLastUpdated();
}); 