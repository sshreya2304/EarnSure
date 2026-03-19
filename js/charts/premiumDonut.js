/**
 * EarnSure Premium Distribution Chart
 * Visualizes the revenue split between different policy tiers.
 */

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('premiumDonutChart');
    if (!ctx) return;

    // High-Quality Data: Revenue per Plan
    // Based on: 150 users on Basic ($750) and 200 users on Pro ($3000)
    const planData = [750, 3000]; 
    const planLabels = ['Starter Shield ($5)', 'Premium Guard ($15)'];
    
    // Psychology Colors: Slate for Basic, Trust Blue for Pro
    const brandColors = ['#64748b', '#2563eb'];

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: planLabels,
            datasets: [{
                data: planData,
                backgroundColor: brandColors,
                hoverBackgroundColor: ['#475569', '#1d4ed8'],
                borderWidth: 2,
                borderColor: '#ffffff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', // Modern thin ring look
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: { size: 12, weight: '600' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context) => ` Total Revenue: $${context.raw.toLocaleString()}`
                    }
                }
            }
        }
    });
});