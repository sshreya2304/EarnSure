/**
 * EarnSure Policy Service
 * Manages insurance products, subscription logic, and coverage calculations.
 */

const STORAGE_KEY = 'earnsure_policies';
const USER_KEY = 'earnsure_user';

export const PolicyService = {
    // 1. Get all available plans from storage
    getAllPlans: () => {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    // 2. Get the plan currently owned by the logged-in user
    getUserPolicy: () => {
        const user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
        const plans = PolicyService.getAllPlans();
        // Returns the plan object that matches the user's planId
        return plans.find(p => p.id === user.planId) || null;
    },

    // 3. Subscription Logic: "Buy" a policy
    subscribe: (planId) => {
        const user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
        if (!user.name) throw new Error("User must be logged in to subscribe.");

        const plans = PolicyService.getAllPlans();
        const selectedPlan = plans.find(p => p.id === planId);

        if (selectedPlan) {
            user.planId = planId;
            user.policyActive = true;
            user.policyStartDate = new Date().toISOString().split('T')[0];
            
            localStorage.setItem(USER_KEY, JSON.stringify(user));
            return selectedPlan;
        }
        throw new Error("Invalid Policy Selection.");
    },

    // 4. Coverage Calculator: Returns how much a worker can claim
    calculateMaxClaim: (avgDailyIncome) => {
        const policy = PolicyService.getUserPolicy();
        if (!policy) return 0;

        // Formula: Daily Income * Coverage % * Max Days (Mocked to 7 days)
        const dailyCoverage = avgDailyIncome * (policy.coveragePercentage / 100);
        return (dailyCoverage * 7).toFixed(2);
    }
};