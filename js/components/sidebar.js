// js/components/sidebar.js

export const renderSidebar = (containerId, activeRole) => {
    const container = document.getElementById(containerId);
    
    const menuItems = {
        agent: [
            { name: 'Dashboard', link: 'dashboard.html', icon: 'grid' },
            { name: 'Claims', link: 'claims.html', icon: 'file-text' },
            { name: 'Payouts', link: 'payouts.html', icon: 'dollar-sign' }
        ],
        admin: [
            { name: 'Worker List', link: 'workerList.html', icon: 'users' },
            { name: 'Claims Mgmt', link: 'claimsManagement.html', icon: 'settings' }
        ]
        // Add Captain and Superadmin lists here...
    };

    const navHtml = menuItems[activeRole].map(item => `
        <li class="nav-item">
            <a href="${item.link}" class="nav-link">
                <span class="icon">${item.icon}</span>
                <span class="text">${item.name}</span>
            </a>
        </li>
    `).join('');

    container.innerHTML = `<ul class="sidebar-nav">${navHtml}</ul>`;
};