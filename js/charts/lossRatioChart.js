/**
 * EarnSure Loss Ratio Analysis
 * Visualizes the financial health of the insurance pool.
 */

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('lossRatioChart');
    if (!ctx) return;

    // Professional Data: Claims vs Premiums
    const totalPremiums = 5000;
    const totalClaims = 1850;
    const lossRatio = ((totalClaims / totalPremiums) * 100).toFixed(1);

    // Dynamic Color Psychology: Red if ratio > 70%, Green if healthy
    const statusColor = lossRatio > 70 ? '#ef4444' : '#10b981';

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Claims Paid', 'Remaining Pool'],
            datasets: [{
                data: [totalClaims, totalPremiums - totalClaims],
                backgroundColor: [statusColor, '#e2e8f0'],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '80%', // Makes it a thin, modern ring
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: (item) => ` $${item.raw.toLocaleString()}`
                    }
                }
            }
        },
        // Plugin to write the percentage in the center of the doughnut
        plugins: [{
            id: 'textCenter',
            beforeDraw: (chart) => {
                const { width, height, ctx } = chart;
                ctx.restore();
                ctx.font = "bold 2rem sans-serif";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#1e293b";
                const text = lossRatio + "%";
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
});