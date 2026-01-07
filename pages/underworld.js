export function renderUnderworld() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[200]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-red-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-red-500 animate-pulse uppercase">● WARNING: ENCRYPTED_CONNECTION_UNSTABLE</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all font-bold">Purge_Session</button>
                </div>

                <header class="mb-16">
                    <span class="text-[10px] text-red-600 font-bold tracking-[0.5em] uppercase italic">Criminal / Network</span>
                    <h1 class="heading-font text-6xl md:text-9xl font-black uppercase tracking-tighter mt-2 italic text-red-600">
                        Under<span class="text-white">world</span>
                    </h1>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    <div class="lg:col-span-4 space-y-6">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="h-[1px] flex-1 bg-red-900"></div>
                            <h2 class="text-red-500 font-mono text-xs tracking-[0.4em] uppercase">Street_Laws</h2>
                        </div>

                        <div class="cyber-panel-crim p-8 border-l-4 border-l-red-600">
                            <h3 class="text-xl font-black uppercase italic mb-6">The Code</h3>
                            <div class="space-y-6 text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                                <div>
                                    <span class="text-red-500 font-bold block mb-1">High-Stakes Conflict</span>
                                    <p>Beef is temporary, stories are forever. We encourage rivalries that build tension, not just gunfights.</p>
                                </div>
                                <div>
                                    <span class="text-red-500 font-bold block mb-1">Value the Life</span>
                                    <p>Being a criminal doesn't make you immortal. Fear the law and fear the blade.</p>
                                </div>
                                <div>
                                    <span class="text-red-500 font-bold block mb-1">Street Cred</span>
                                    <p>Respect is earned through consistency. In Ember, who you know is more lethal than what you carry.</p>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 bg-red-600/5 border border-red-600/20">
                            <h4 class="text-red-600 text-[10px] font-black uppercase mb-2 font-mono italic">// ALERT: PD_SURVEILLANCE</h4>
                            <p class="text-[9px] text-zinc-500 uppercase leading-relaxed">
                                Law enforcement in Ember uses advanced forensics. DNA, ballistics, and CCTV are active. Plan your exits.
                            </p>
                        </div>
                    </div>

                    <div class="lg:col-span-5 space-y-6">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="h-[1px] flex-1 bg-zinc-800"></div>
                            <h2 class="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase">The_Economy</h2>
                        </div>

                        <div class="grid grid-cols-1 gap-4">
                            <div class="cyber-panel p-6 bg-zinc-900/40">
                                <h3 class="text-lg font-black uppercase italic mb-2 text-white">Dynamic Narcotics</h3>
                                <p class="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                                    Proprietary drug systems where purity matters. Process, distribute, and control the market.
                                </p>
                            </div>
                            <div class="cyber-panel p-6 bg-zinc-900/40">
                                <h3 class="text-lg font-black uppercase italic mb-2 text-white">Illegal Crafting</h3>
                                <p class="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                                    Find hidden blueprints. Craft high-tier items that aren't available at any legal storefront.
                                </p>
                            </div>
                            <div class="cyber-panel p-6 bg-zinc-900/40 border-t-2 border-t-red-600">
                                <h3 class="text-lg font-black uppercase italic mb-2 text-red-500">The Heist Tier</h3>
                                <p class="text-[10px] text-zinc-500 uppercase tracking-widest leading-loose">
                                    From corner stores to the Pacific Standard. Each tier requires specialized tools and thermal charges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3 space-y-6">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="h-[1px] flex-1 bg-red-900"></div>
                            <h2 class="text-red-500 font-mono text-xs tracking-[0.4em] uppercase">Operations</h2>
                        </div>

                        <div class="cyber-panel-crim p-6 h-full border-t-2 border-t-red-600">
                            <h3 class="text-xl font-black uppercase italic mb-4">Gangs & Turf</h3>
                            <p class="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed mb-6">
                                Territory in Ember isn't just a map color. It’s earned through <span class="text-white">Active Presence</span>.
                            </p>
                            
                            <ul class="space-y-4 text-[9px] font-mono text-zinc-500 uppercase">
                                <li class="flex items-start gap-2">
                                    <span class="text-red-500">></span>
                                    <span>No App Requirement for entry-level crews.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-red-500">></span>
                                    <span>Whitelisted gangs receive custom MLOs and gear based on RP quality.</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-red-500">></span>
                                    <span>Max 4 per active criminal scene.</span>
                                </li>
                            </ul>
                            <div class="mt-8 pt-8 border-t border-red-900/30">
                                <a href="https://discord.gg/emberroleplay" 
                                target="_blank" 
                                class="block w-full py-4 bg-red-600 text-black font-black uppercase italic hover:bg-white hover:tracking-widest transition-all text-xs text-center shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                                    Apply_for_Whitelist
                                </a>
                                <p class="text-[7px] text-center text-red-900 font-mono mt-2 uppercase tracking-[0.2em]">
                                    Secure_Uplink_Required
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-800 font-black uppercase tracking-[0.5em]">
                    <div>EMBER_CITY_INTERNAL_DOCS</div>
                    <div>ENCRYPTION_LAYER: 07</div>
                </div>
            </div>
        </div>
    `;
}