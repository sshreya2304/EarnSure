/**
 * Agent Claims Controller
 * Handles UI interactions for the claims page.
 */
import { ClaimsService } from '../../js/services/claimsService.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize data (Mock data for demo)
    ClaimsService.init();

    // 2. Load and Render the Claims Table
    renderClaimsTable();

    // 3. Handle Form Submission
    const claimForm = document.getElementById('claimForm');
    if (claimForm) {
        claimForm.addEventListener('submit', handleClaimSubmit);
    }
});

/**
 * Renders the table rows based on LocalStorage data
 */
function renderClaimsTable() {
    const tableBody = document.getElementById('claimsTableBody');
    if (!tableBody) return;

    const claims = ClaimsService.getAll();

    if (claims.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#64748b;">No claims filed yet.</td></tr>`;
        return;
    }

    // High Quality: Mapping data to HTML with Solid Color Badges
    tableBody.innerHTML = claims.map(claim => `
        <tr>
            <td style="font-family: monospace; font-weight: bold;">#${claim.id}</td>
            <td>${claim.date}</td>
            <td style="font-weight: 700; color: #1e293b;">$${claim.amount}</td>
            <td>
                <span class="badge badge-${claim.status.toLowerCase()}">
                    ${claim.status.toUpperCase()}
                </span>
            </td>
        </tr>
    `).join('');
}

/**
 * Captures form data, sends to Service, and updates UI
 */
function handleClaimSubmit(event) {
    event.preventDefault();

    const amountInput = document.getElementById('claimAmount');
    const descInput = document.getElementById('claimDesc');
    const platformInput = document.getElementById('claimPlatform');

    try {
        // Call the service (which handles sanitization and storage)
        ClaimsService.submit(
            amountInput.value, 
            descInput.value, 
            platformInput.value
        );

        // Success Feedback
        alert("✅ Claim Secured! Your request has been sent for review.");
        
        // Reset form and refresh table
        event.target.reset();
        renderClaimsTable();

    } catch (error) {
        // High Quality Error Handling
        alert(`❌ Error: ${error.message}`);
    }
}