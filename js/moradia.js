document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('canada-map-container');
    const provinceNameDisplay = document.getElementById('province-name-display');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    // Add event listeners to all province paths
    const provincePaths = document.querySelectorAll('#canada-map-container path');
    provincePaths.forEach(path => {
        path.addEventListener('mouseenter', function(e) {
            const provinceName = this.getAttribute('data-name');
            const provinceInfo = this.getAttribute('data-info');
            
            // Show province name in the display box
            provinceNameDisplay.textContent = provinceName;
            provinceNameDisplay.classList.add('is-visible');
            
            // Show tooltip with additional info
            tooltip.innerHTML = `
                <h3>${provinceName}</h3>
                <p>${provinceInfo}</p>
            `;
            tooltip.style.display = 'block';
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width/2}px`;
            tooltip.style.top = `${rect.top - 10}px`;
        });

        path.addEventListener('mousemove', function(e) {
            // Update tooltip position as mouse moves
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY - 10}px`;
        });

        path.addEventListener('mouseleave', function() {
            // Hide both displays
            provinceNameDisplay.classList.remove('is-visible');
            tooltip.style.display = 'none';
        });
    });
}); 