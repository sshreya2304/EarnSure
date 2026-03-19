/**
 * EarnSure Payout Service
 * Manages financial transactions, balances, and payout history.
 */

const PAYOUT_KEY = 'earnsure_payouts';

export const PayoutService = {
    // 1. Get all payouts from storage
    getAll: () => {
        const data = localStorage.getItem(PAYOUT_KEY);
        return data ? JSON.parse(data) : [];
    },

    // 2. Initialize with mock history (Perfect for Demo)
    init: () => {
        if (PayoutService.getAll().length === 0) {
            const mockHistory = [
                { id: "TXN-4401", amount: 120.50, method: "Bank Transfer", status: "completed", date: "2026-03-05" },
                { id: "TXN-4402", amount: 45.00, method: "UPI / Wallet", status: "completed", date: "2026-03-12" }
            ];
            localStorage.setItem(PAYOUT_KEY, JSON.stringify(mockHistory));
        }
    },

    // 3. Request a New Payout
    request: (amount, method) => {
        const parsedAmount = parseFloat(amount);
        
        // High-Quality Validation
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            throw new Error("Invalid payout amount.");
        }

        const payouts = PayoutService.getAll();
        
        const newPayout = {
            id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
            amount: parsedAmount.toFixed(2),
            method: method,
            status: "processing", // Initial state for fintech apps
            date: new Date().toISOString().split('T')[0]
        };

        payouts.unshift(newPayout); // Add to top of list
        localStorage.setItem(PAYOUT_KEY, JSON.stringify(payouts));
        return newPayout;
    },

    // 4. Admin Logic: Mark as Paid
    completePayout: (txnId) => {
        const payouts = PayoutService.getAll();
        const index = payouts.findIndex(p => p.id === txnId);
        if (index !== -1) {
            payouts[index].status = "completed";
            localStorage.setItem(PAYOUT_KEY, JSON.stringify(payouts));
            return true;
        }
        return false;
    }
};