// js/app/authGaurd.js

export const checkAuth = (requiredRole = null) => {
    const user = JSON.parse(localStorage.getItem('earnsure_user'));

    if (!user) {
        window.location.href = '/pages/auth/login.html';
        return false;
    }

    if (requiredRole && user.role !== requiredRole) {
        alert("Access Denied: Unauthorized Role");
        window.location.href = '/index.html';
        return false;
    }

    return true;
};