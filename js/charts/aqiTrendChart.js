/**
 * EarnSure AQI (Agent Quality Index) Trend Chart
 * Visualizes the stability and risk level of a worker over 7 days.
 */

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('aqiChart');
    if (!ctx) return;

    // High-Quality Data: Represents the last 7 days of "Quality Score"
    // 100 = Perfect Stability, < 60 = High Risk
    const aqiData = [85, 88, 70, 92, 95, 80, 89]; 
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Create a Linear Gradient for the background (Fintech Look)
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)'); // Brand Blue
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');  // Fade to Transparent Green

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quality Score',
                data: aqiData,
                borderColor: '#2563eb', // Solid Trust Blue
                borderWidth: 3,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4, // Smoothing the line
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#2563eb',
                pointHoverRadius: 6,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }, // Keep it clean
                tooltip: {
                    backgroundColor: '#0f172a',
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    padding: 10,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100,
                    grid: { display: false },
                    ticks: { color: '#64748b' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748b' }
                }
            }
        }
    });
});