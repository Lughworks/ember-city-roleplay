export function renderLegal() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● DATA_STREAM: LEGAL_REGISTRY</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6">End_Session</button>
                </div>

                <header class="mb-16">
                    <span class="text-[10px] text-electric font-bold tracking-[0.3em] uppercase italic">Personnel / Registry</span>
                    <h1 class="heading-font text-6xl md:text-8xl font-black uppercase tracking-tighter mt-2 italic">Legal <span class="text-electric">Careers</span></h1>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="cyber-panel p-8 group">
                        <div class="text-electric mb-4 font-mono text-[10px] opacity-50">01 // JUSTICE</div>
                        <h3 class="text-2xl font-black uppercase mb-4 italic">Judiciary & Defense</h3>
                        <p class="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
                            Represent clients in high-stakes litigation or preside over the city's most controversial cases as a Superior Court Judge.
                        </p>
                    </div>
                    
                    <div class="cyber-panel p-8 group">
                        <div class="text-electric mb-4 font-mono text-[10px] opacity-50">02 // COMMERCE</div>
                        <h3 class="text-2xl font-black uppercase mb-4 italic">Enterprise</h3>
                        <p class="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
                            Utilize our custom business app to manage stock, hire employees, and set profit margins for player-owned storefronts.
                        </p>
                    </div>

                    <div class="cyber-panel p-8 group">
                        <div class="text-electric mb-4 font-mono text-[10px] opacity-50">03 // LOGISTICS</div>
                        <h3 class="text-2xl font-black uppercase mb-4 italic">Public Works</h3>
                        <p class="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
                            Drive the city's economy as a high-tier mechanic, real estate mogul, or advanced delivery logistics operator.
                        </p>
                    </div>
                </div>

                <div class="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
                    <div id="server-name-legal">EMBER CITY ROLEPLAY © 2025</div>
                    <div>SECURE_REGISTRY_ACCESS</div>
                </div>
            </div>
        </div>
    `;
}