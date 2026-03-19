// pages/admin/adminClaims.js
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('adminClaimsList');
    const claims = JSON.parse(localStorage.getItem('earnsure_claims') || '[]');

    if (claims.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No pending claims found.</td></tr>";
        return;
    }

    tableBody.innerHTML = claims.map((claim, index) => `
        <tr>
            <td>${claim.id}</td>
            <td>$${claim.amount}</td>
            <td><span class="badge warning">${claim.status}</span></td>
            <td>
                <button class="btn-small" onclick="approveClaim(${index})" style="background:#10b981">Approve</button>
            </td>
        </tr>
    `).join('');
});

window.approveClaim = (index) => {
    const claims = JSON.parse(localStorage.getItem('earnsure_claims'));
    claims[index].status = "Approved";
    localStorage.setItem('earnsure_claims', JSON.stringify(claims));
    alert("Claim Approved and Payout Processed!");
    location.reload(); // Refresh to show updated status
};