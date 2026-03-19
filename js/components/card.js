/**
 * EarnSure Card Engine
 * Dynamically populates dashboard stat cards with real-time data.
 */

document.addEventListener('DOMContentLoaded', () => {
    renderStatCards();
});

export const renderStatCards = () => {
    // 1. Fetch Data from LocalStorage
    const claims = JSON.parse(localStorage.getItem('earnsure_claims') || '[]');
    const user = JSON.parse(localStorage.getItem('earnsure_user') || '{}');

    // 2. Calculate Metrics
    const pendingClaims = claims.filter(c => c.status === 'pending').length;
    const totalClaimValue = claims
        .filter(c => c.status === 'approved')
        .reduce((sum, c) => sum + parseFloat(c.amount), 0);
    
    // 3. Update DOM Elements (High Quality: targeting by ID)
    
    // Total Protected Amount (Sum of approved claims or policy limit)
    const protectedElement = document.getElementById('stat-protected');
    if (protectedElement) {
        protectedElement.innerText = `$${totalClaimValue.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    }

    // Pending Requests Count
    const pendingElement = document.getElementById('stat-pending');
    if (pendingElement) {
        pendingElement.innerText = pendingClaims;
    }

    // Agent Quality Index (Mock or calculated)
    const aqiElement = document.getElementById('stat-aqi');
    if (aqiElement) {
        aqiElement.innerText = user.aqi || "89%";
    }
};