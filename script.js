const SERVER_ID = "oero9r";

async function initDiagnostics() {
    const logContainer = document.getElementById('boot-log');
    const bootOverlay = document.getElementById('boot-loader');
    const logs = [
        "EC_OS v4.0.0 INITIALIZING...",
        "KERNAL_LOAD: SUCCESS",
        "UPLINKING TO LOS_SANTOS_MAINFRAME...",
        "ESTABLISHING SECURE_SESSION...",
        "GRID_OVERLAY: ACTIVE",
        "WELCOME TO EMBER CITY."
    ];

    if (logContainer) {
        for (const line of logs) {
            const p = document.createElement('p');
            p.className = "mb-1 opacity-0 transition-opacity duration-300";
            p.innerHTML = `<span class="opacity-30">[${new Date().toLocaleTimeString('en-GB', {hour12: false})}]</span> ${line}`;
            logContainer.appendChild(p);
            await new Promise(r => setTimeout(r, 200));
            p.classList.remove('opacity-0');
        }
        setTimeout(() => {
            bootOverlay.style.opacity = "0";
            setTimeout(() => bootOverlay.classList.add('hidden'), 1000);
        }, 800);
    }
    fetchFiveMStatus();
    setInterval(fetchFiveMStatus, 60000);
}

window.openBentoPage = async (pageName) => {
    const mainContent = document.querySelector('main');
    const pageOverlay = document.createElement('div');
    pageOverlay.id = "bento-page-overlay";
    pageOverlay.className = "fixed inset-0 z-[100] bg-[#030303] opacity-0 transition-all duration-700 translate-x-full overflow-y-auto";

    try {
        const pageModule = await import(`./pages/${pageName}.js`);
        const renderFunc = pageModule[`render${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`] || pageModule.render;
        
        pageOverlay.innerHTML = renderFunc();
        document.body.appendChild(pageOverlay);
        document.body.style.overflow = "hidden";

        setTimeout(() => {
            pageOverlay.classList.remove('opacity-0', 'translate-x-full');
            mainContent.style.transform = "translateX(-100px)";
            mainContent.style.opacity = "0";
        }, 100);

        if (pageName === 'systems') loadResourceManifest();

    } catch (err) { console.error("Session Error", err); }
};

window.closeBentoPage = () => {
    const overlay = document.getElementById('bento-page-overlay');
    const mainContent = document.querySelector('main');
    overlay.classList.add('opacity-0', 'translate-x-full');
    mainContent.style.transform = "translateX(0)";
    mainContent.style.opacity = "1";
    setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = "auto";
    }, 700);
};

async function fetchFiveMStatus() {
    const nameEl = document.getElementById('server-name');
    const statusEl = document.getElementById('server-status');
    const playerEl = document.getElementById('player-count');
    try {
        const response = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${SERVER_ID}`);
        const data = await response.json();
        if (data && data.Data) {
            const players = data.Data.clients;
            const max = data.Data.sv_maxclients;
            if (statusEl) statusEl.innerHTML = `<span style="color: var(--electric-blue)">ONLINE</span> // ${players}/${max}`;
            if (playerEl) playerEl.innerText = `${players} / ${max}`;
            if (nameEl) nameEl.innerHTML = `<span class="text-electric">${data.Data.hostname} © 2025</span>`;
        }
    } catch (e) {
        if (statusEl) statusEl.innerHTML = `<span class="opacity-50">OFFLINE</span>`;
    }
}

async function loadResourceManifest() {
    const list = document.getElementById('resrource-list');
    if (!list) return;
    try {
        const res = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${SERVER_ID}`);
        const data = await res.json();
        if (data?.Data?.resources) {
            list.innerHTML = data.Data.resources.map(r => `
                <div class="border-b border-zinc-900 pb-1 text-[9px] hover:text-electric transition-colors">
                    <span class="opacity-30 mr-2">></span>${r}
                </div>
            `).join('');
        }
    } catch (e) { list.innerText = "UPLINK_ERROR"; }
}

window.onload = initDiagnostics;