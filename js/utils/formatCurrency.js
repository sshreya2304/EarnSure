/**
 * EarnSure Data Transformation Utility
 * Cleans and formats raw data for high-quality UI display.
 */

export const formatData = {
    // 1. Date Formatter: "2026-03-18" -> "Mar 18, 2026"
    date: (isoString) => {
        if (!isoString) return "N/A";
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(isoString).toLocaleDateString('en-US', options);
    },

    // 2. Relative Time: "2 hours ago" (Perfect for Claim Status)
    relativeTime: (isoString) => {
        const date = new Date(isoString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return formatData.date(isoString);
    },

    // 3. Text Capitalization: "zomato" -> "Zomato"
    capitalize: (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    // 4. ID Masking: "CLM-9928374" -> "...8374" (For privacy)
    maskId: (id) => {
        if (!id) return "****";
        return `...${id.slice(-4)}`;
    },

    // 5. Status Mapping: Returns the correct CSS class for badges
    statusClass: (status) => {
        const map = {
            'pending': 'badge-pending',
            'approved': 'badge-success',
            'completed': 'badge-success',
            'rejected': 'badge-danger',
            'processing': 'badge-info'
        };
        return map[status.toLowerCase()] || 'badge-active';
    }
};