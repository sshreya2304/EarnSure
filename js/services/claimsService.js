// js/services/claimsService.js

// 1. Security: Basic Sanitization
const sanitize = (str) => {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

export const ClaimsService = {
    // 2. Initialize Data
    init: () => {
        if (!localStorage.getItem('earnsure_claims')) {
            const initialData = [
                { id: "CLM-101", amount: 150.00, status: "approved", date: "2026-03-01", platform: "Uber" },
                { id: "CLM-102", amount: 200.00, status: "pending", date: "2026-03-15", platform: "Zomato" }
            ];
            localStorage.setItem('earnsure_claims', JSON.stringify(initialData));
        }
    },

    // 3. Get All Claims
    getAll: () => {
        return JSON.parse(localStorage.getItem('earnsure_claims') || '[]');
    },

    // 4. Logic: Submit Claim with Validation
    submit: (amount, desc, platform) => {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid claim amount.");
        }
        
        const claims = ClaimsService.getAll();
        
        const newClaim = {
            id: "CLM-" + Math.floor(1000 + Math.random() * 9000),
            amount: parseFloat(amount).toFixed(2),
            description: sanitize(desc),
            platform: platform,
            status: "pending",
            date: new Date().toISOString().split('T')[0]
        };

        claims.unshift(newClaim); // Adds new claims to the top of the list
        localStorage.setItem('earnsure_claims', JSON.stringify(claims));
        return newClaim;
    }
};