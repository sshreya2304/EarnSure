/**
 * EarnSure Risk Color Utility
 * Standardizes visual risk indicators across the platform.
 */

export const RiskColor = {
    // 1. Get Color by Score (0-100)
    // Used for AQI Index and Zone Heatmaps
    getByScore: (score) => {
        if (score >= 80) return { hex: '#10b981', label: 'Safe', class: 'risk-low' };    // Green
        if (score >= 60) return { hex: '#f59e0b', label: 'Moderate', class: 'risk-med' }; // Orange
        return { hex: '#ef4444', label: 'Critical', class: 'risk-high' };              // Red
    },

    // 2. Get Color by Status String
    // Used for Claims and Payouts
    getByStatus: (status) => {
        const s = status.toLowerCase();
        const map = {
            approved: '#10b981',
            completed: '#10b981',
            pending: '#f59e0b',
            processing: '#2563eb', // Trust Blue
            rejected: '#ef4444',
            flagged: '#ef4444'
        };
        return map[s] || '#64748b'; // Default Slate
    },

    // 3. Get Gradient (For Charts)
    getGradient: (ctx, score) => {
        const color = RiskColor.getByScore(score).hex;
        const grad = ctx.createLinearGradient(0, 0, 0, 400);
        grad.addColorStop(0, color + '66'); // 40% Opacity
        grad.addColorStop(1, color + '00'); // Transparent
        return grad;
    }
};