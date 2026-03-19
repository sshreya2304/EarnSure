// pages/auth/login.js
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const role = document.getElementById('role').value;
    
    // Simple routing logic for the hackathon
    if (role === 'agent') {
        window.location.href = '../agent/dashboard.html';
    } else if (role === 'captain') {
        window.location.href = '../captain/dashboard.html';
    } else if (role === 'admin') {
        window.location.href = '../admin/dashboard.html';
    } else if (role === 'superadmin') {
        window.location.href = '../superadmin/platformAnalytics.html';
    }
});