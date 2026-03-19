// js/app/router.js

const routes = {
    '/': 'index.html',
    '/login': 'pages/auth/login.html',
    '/agent-dashboard': 'pages/agent/dashboard.html',
    '/admin-dashboard': 'pages/admin/dashboard.html',
    // Add other routes based on your file structure
};

export const navigateTo = (path) => {
    // In a real SPA, you'd fetch the HTML and inject it into a container
    // For a multi-page setup, we use window.location
    const route = routes[path] || routes['/'];
    window.location.pathname = route;
};

export const initRouter = () => {
    window.addEventListener('popstate', () => {
        // Handle back/forward buttons
    });
};