/**
 * EarnSure Modal Engine
 * Provides high-quality, branded pop-up notifications.
 */

export const Modal = {
    /**
     * Shows a professional alert modal
     * @param {string} title - The heading of the modal
     * @param {string} message - The body text
     * @param {string} type - 'success', 'error', or 'info'
     */
    show: (title, message, type = 'success') => {
        // 1. Create Overlay
        const overlay = document.createElement('div');
        overlay.id = 'custom-modal-overlay';
        overlay.style = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(4px);
            display: flex; align-items: center; justify-content: center; z-index: 9999;
            animation: fadeIn 0.3s ease;
        `;

        // 2. Define Type Colors
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#2563eb'
        };

        // Dynamically calculate path based on current page location
        const depth = window.location.pathname.includes('/pages/') ? '../../' : './';
        const logoSrc = `${depth}assets/logo.jpg`;

        // 3. Modal Content
        overlay.innerHTML = `
            <div class="card" style="width: 90%; max-width: 400px; text-align: center; border-top: 6px solid ${colors[type]};">
                <img src="${logoSrc}" onerror="this.onerror=null; this.src='${depth}assets/logo.png';" style="width: 60px; border-radius: 10px; margin-bottom: 15px;">
                <h3 style="margin-bottom: 10px; color: #0f172a;">${title}</h3>
                <p style="color: #64748b; margin-bottom: 20px;">${message}</p>
                <button id="modal-close-btn" class="btn-primary" style="width: 100%;">Understood</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // 4. Close Logic
        document.getElementById('modal-close-btn').addEventListener('click', () => {
            overlay.remove();
        });
    }
};

// Add fade-in animation to document if not present
if (!document.getElementById('modal-animations')) {
    const style = document.createElement('style');
    style.id = 'modal-animations';
    style.innerHTML = `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`;
    document.head.appendChild(style);
}