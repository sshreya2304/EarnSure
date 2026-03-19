// pages/auth/register.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Register Logic Initialized");

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');

    // Navigation: Step 1 to Step 2
    const btnToStep2 = document.getElementById('toStep2');
    if (btnToStep2) {
        btnToStep2.addEventListener('click', () => {
            step1.style.display = 'none';
            step2.style.display = 'block';
            console.log("Moved to Step 2");
        });
    }

    // Navigation: Step 2 to Step 3
    const btnToStep3 = document.getElementById('toStep3');
    if (btnToStep3) {
        btnToStep3.addEventListener('click', () => {
            step2.style.display = 'none';
            step3.style.display = 'block';
            console.log("Moved to Step 3");
        });
    }

    // Final Finish Logic
    const finishBtn = document.getElementById('finishBtn');
    if (finishBtn) {
        finishBtn.addEventListener('click', () => {
            const userData = {
                name: document.getElementById('regName').value,
                platform: document.getElementById('regPlatform').value
            };
            // Save to local storage so other pages can see the name
            localStorage.setItem('earnsure_user', JSON.stringify(userData));
            
            alert("Registration Successful!");
            window.location.href = '/pages/auth/login.html';
        });
    }
});