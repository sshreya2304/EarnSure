// js/main.js
import { initRouter } from './app/router.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("EarnSure App Initialized...");
    
    // Initialize the router logic
    initRouter();

    // Check if user is already logged in (Simple check)
    const user = localStorage.getItem('earnsure_user');
    if (user) {
        console.log("User session found.");
        // You could redirect to dashboard here if you wanted
    }
});