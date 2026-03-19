/**
 * EarnSure Zone Risk Heatmap
 * Visualizes city-wide risk levels based on claim frequency and order density.
 */

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('zoneHeatmap');
    if (!ctx) return;

    // Data Structure: x (Longitude-ish), y (Latitude-ish), r (Risk Magnitude)
    // We use the 'r' value to determine color: High R = Red (High Risk)
    const zoneData = [
        { x: 20, y: 30, r: 15, label: 'Downtown' },     // High Risk
        { x: 40, y: 10, r: 8,  label: 'Suburbs' },      // Low Risk
        { x: 10, y: 60, r: 12, label: 'Industrial' },   // Med Risk
        { x: 80, y: 80, r: 5,  label: 'Tech Park' },    // Safe
        { x: 60, y: 40, r: 10, label: 'Market East' }   // Med Risk
    ];

    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'City Zones',
                data: zoneData,
                backgroundColor: (context) => {
                    const value = context.raw ? context.raw.r : 0;
                    if (value > 12) return 'rgba(239, 68, 68, 0.7)'; // Red
                    if (value > 8) return 'rgba(245, 158, 11, 0.7)';  // Orange
                    return 'rgba(16, 185, 129, 0.7)';                // Green
                },
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const p = context.raw;
                            return ` ${p.label}: Risk Level ${p.r}`;
                        }
                    }
                }
            },
            scales: {
                y: { display: false, min: 0, max: 100 },
                x: { display: false, min: 0, max: 100 }
            }
        }
    });
});