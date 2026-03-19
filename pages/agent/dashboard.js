// js/pages/agent/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    initIncomeChart();
});

function initIncomeChart() {
    const ctx = document.getElementById('incomeChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Actual Earnings',
                data: [400, 450, 300, 500],
                borderColor: '#2563eb',
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }, {
                label: 'Guaranteed Minimum',
                data: [450, 450, 450, 450],
                borderColor: '#ef4444',
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}