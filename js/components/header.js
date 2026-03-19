/**
 * EarnSure Header & Session Controller
 * Manages user identity, greeting, and logout security.
 */

document.addEventListener('DOMContentLoaded', () => {
    updateHeaderUI();
    setupLogout();
});

/**
 * High-Quality Identity Check:
 * Grabs user data and updates the top-bar or sidebar greeting.
 */
export const updateHeaderUI = () => {
    const userData = localStorage.getItem('earnsure_user');
    
    // 1. Security Guard: If no user is found, kick them to login
    if (!userData && !window.location.pathname.includes('login.html') && !window.location.pathname.includes('register.html')) {
        console.warn("Unauthorized access. Redirecting...");
        window.location.href = '/pages/auth/login.html';
        return;
    }

    const user = JSON.parse(userData || '{}');

    // 2. Dynamic Greeting (Matches 'Welcome, John')
    const welcomeElement = document.getElementById('nav-user-name');
    if (welcomeElement && user.name) {
        welcomeElement.innerText = user.name;
    }

    // 3. Role Badge (Displays 'Agent', 'Admin', etc.)
    const roleElement = document.getElementById('nav-user-role');
    if (roleElement && user.role) {
        roleElement.innerText = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    }
};

/**
 * Secure Logout:
 * Clears the session and sends the user back to the landing page.
 */
const setupLogout = () => {
    const logoutBtn = document.querySelector('.logout-btn') || document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm("Are you sure you want to log out of EarnSure?")) {
                localStorage.removeItem('earnsure_user');
                // Path points back to root index.html
                window.location.href = '/index.html';
            }
        });
    }
};