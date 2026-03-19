// pages/admin/workerList.js
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('workerTableBody');
    
    // 1. Get the real user we registered earlier
    const registeredUser = JSON.parse(localStorage.getItem('earnsure_user')) || null;

    // 2. Mock data for the demo
    const workers = [
        { name: "John Doe", platform: "Uber", policy: "Premium", risk: "Low", status: "Active" },
        { name: "Sarah Smith", platform: "DoorDash", policy: "Basic", risk: "Medium", status: "Active" },
        { name: "Mike Ross", platform: "Instacart", policy: "None", risk: "High", status: "Pending" }
    ];

    // 3. Add the newly registered user to the list if they exist
    if (registeredUser) {
        workers.unshift({
            name: registeredUser.name,
            platform: "New Joiner",
            policy: "Basic Care",
            risk: "Calculating...",
            status: "Active"
        });
    }

    // 4. Render the table
    tableBody.innerHTML = workers.map(worker => `
        <tr>
            <td><strong>${worker.name}</strong></td>
            <td>${worker.platform}</td>
            <td>${worker.policy}</td>
            <td>
                <span style="color: ${worker.risk === 'High' ? '#ef4444' : worker.risk === 'Medium' ? '#f59e0b' : '#10b981'}">
                    ● ${worker.risk}
                </span>
            </td>
            <td><span class="badge" style="background: #e0e7ff; color: #4338ca;">${worker.status}</span></td>
        </tr>
    `).join('');
});