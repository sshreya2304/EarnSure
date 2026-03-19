/**
 * EarnSure Agent PIN Controller
 * Secure 6-digit PIN validation for sensitive transactions.
 */

export const PinService = {
    /**
     * Initializes PIN input behavior (Auto-focus & Masking)
     * @param {string} containerId - The ID of the PIN input container
     */
    init: (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const inputs = container.querySelectorAll('input');

        inputs.forEach((input, index) => {
            // 1. Handle Typing
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            // 2. Handle Backspace
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    },

    /**
     * Validates the entered PIN
     * @returns {string} The full 6-digit PIN
     */
    getEnteredPin: (containerId) => {
        const container = document.getElementById(containerId);
        const inputs = container.querySelectorAll('input');
        let pin = "";
        inputs.forEach(input => pin += input.value);
        return pin;
    },

    /**
     * Checks if the PIN is correct (Mocking 123456 for demo)
     */
    verify: (pin) => {
        const storedPin = "123456"; // In production, this would be hashed in LocalStorage
        return pin === storedPin;
    }
};