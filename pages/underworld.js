export function renderUnderworld() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-red-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-red-500 animate-pulse uppercase">● WARNING: UNAUTHORIZED_ACCESS_DETECTED</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6 border-red-500 text-red-500 hover:bg-red-500">Purge_Session</button>
                </div>

                <header class="mb-16">
                    <span class="text-[10px] text-red-500 font-bold tracking-[0.3em] uppercase italic">Encrypted / Unauthorized</span>
                    <h1 class="heading-font text-6xl md:text-8xl font-black uppercase tracking-tighter mt-2 italic">Criminal <span class="text-electric">Network</span></h1>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="cyber-panel p-10 border-l-4 border-l-red-600/50">
                        <h3 class="text-electric font-black text-xs uppercase tracking-widest mb-4">Progression Heists</h3>
                        <p class="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider mb-8">
                            From corner stores to the Pacific Standard Vault. Our heist system requires laptop hacking, thermite placement, and coordinated exit strategies.
                        </p>
                        <div class="space-y-2 opacity-30">
                            <div class="h-[2px] w-full bg-zinc-800"><div class="h-full bg-electric w-1/3"></div></div>
                            <span class="text-[8px] font-mono">UPLINK_STRENGTH_33%</span>
                        </div>
                    </div>

                    <div class="cyber-panel p-10 border-l-4 border-l-red-600/50">
                        <h3 class="text-electric font-black text-xs uppercase tracking-widest mb-4">Turf Wars</h3>
                        <p class="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider mb-8">
                            Claim territory to unlock passive income and exclusive drug labs. Defend your block against rival syndicates in our custom gang system.
                        </p>
                        <div class="space-y-2 opacity-30">
                            <div class="h-[2px] w-full bg-zinc-800"><div class="h-full bg-electric w-2/3"></div></div>
                            <span class="text-[8px] font-mono">DOMINANCE_INDEX_66%</span>
                        </div>
                    </div>
                </div>

                <div class="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
                    <div id="server-name-underworld">EMBER CITY ROLEPLAY © 2025</div>
                    <div class="text-red-900">ENCRYPTION_LAYER_07_ACTIVE</div>
                </div>
            </div>
        </div>
    `;
}