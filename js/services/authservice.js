/**
 * EarnSure Authentication Service
 * Manages user sessions, registration, and Role-Based Access Control (RBAC).
 */

const USER_KEY = 'earnsure_user';

export const AuthService = {
    // 1. Register a new user with default data
    register: (userData) => {
        // Sanitize name for security
        const sanitizedName = userData.name.replace(/[<>]/g, "");
        
        const newUser = {
            ...userData,
            name: sanitizedName,
            id: 'USR-' + Math.floor(Math.random() * 10000),
            joinedDate: new Date().toISOString(),
            aqi: 85 // Starting Agent Quality Index
        };
        
        localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        return newUser;
    },

    // 2. Login Logic with Role Validation
    login: (email, password, role) => {
        // In a hackathon demo, we simulate a check
        // Real-world: This would be an API call
        const mockUser = JSON.parse(localStorage.getItem(USER_KEY));

        if (mockUser && mockUser.role === role) {
            // Update session timestamp
            mockUser.lastLogin = new Date().toISOString();
            localStorage.setItem(USER_KEY, JSON.stringify(mockUser));
            return { success: true, user: mockUser };
        }
        
        return { success: false, message: "Invalid credentials or role mismatch." };
    },

    // 3. Session Guard: Check if user is logged in
    getCurrentUser: () => {
        const data = localStorage.getItem(USER_KEY);
        return data ? JSON.parse(data) : null;
    },

    // 4. Logout Logic
    logout: () => {
        localStorage.removeItem(USER_KEY);
        window.location.href = '/index.html';
    },

    // 5. RBAC: Redirect unauthorized users
    checkAccess: (requiredRole) => {
        const user = AuthService.getCurrentUser();
        if (!user || user.role !== requiredRole) {
            alert("Unauthorized Access. Redirecting to Login.");
            window.location.href = '/pages/auth/login.html';
        }
    }
};