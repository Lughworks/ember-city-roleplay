export function renderRules() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[200]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● PROTOCOL_LOAD: CONDUCT_DIRECTIVES_V4.1</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6 border-red-500 text-red-500 hover:bg-red-500">Terminate_Session</button>
                </div>

                <header class="mb-16">
                    <span class="text-[10px] text-electric font-bold tracking-[0.3em] uppercase italic">Core / Directives</span>
                    <h1 class="heading-font text-6xl md:text-8xl font-black uppercase tracking-tighter mt-2 italic">Ember <span class="text-electric">Protocols</span></h1>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    
                    <div class="lg:col-span-4 space-y-6">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="h-[1px] flex-1 bg-electric/30"></div>
                            <h2 class="text-electric font-mono text-xs tracking-[0.4em] uppercase">Sector_01: Foundation</h2>
                        </div>

                        <div class="cyber-panel p-6">
                            <h3 class="text-xl font-black uppercase italic mb-4 text-electric">Community Core</h3>
                            <div class="space-y-4 text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                                <p><span class="text-white">Respect First:</span> No seniority on decency. Treat everyone with kindness.</p>
                                <p><span class="text-white">Story Priority:</span> Always ask if your action adds to the narrative.</p>
                                <p><span class="text-white">Stay IC:</span> Save OOC drama for DMs. Let the character's story play out.</p>
                                <p><span class="text-white">Anti-Flex:</span> We are here for story, not clout-chasing or stunting.</p>
                                <p><span class="text-white">Inclusivity:</span> Help new players and support creative collaborations.</p>
                            </div>
                        </div>

                        <div class="cyber-panel p-6 border-t-2 border-t-electric/50">
                            <h3 class="text-xl font-black uppercase italic mb-4">Hardware & ID</h3>
                            <ul class="space-y-3 text-[9px] font-mono text-zinc-400 uppercase tracking-tighter">
                                <li class="flex justify-between"><span>Age Requirement:</span> <span class="text-electric">18+ Only</span></li>
                                <li class="flex justify-between"><span>Microphone:</span> <span class="text-electric">High-Quality Req.</span></li>
                                <li class="flex justify-between"><span>Twitch TOS:</span> <span class="text-electric">Strictly Enforced</span></li>
                                <li class="flex justify-between"><span>Celebrity Names:</span> <span class="text-red-500">Strictly Prohibited</span></li>
                            </ul>
                        </div>

                        <div class="cyber-panel-crim p-6 border-t-4 border-t-red-600">
                            <h3 class="text-red-500 text-xl font-black uppercase italic mb-4">Zero Tolerance</h3>
                            <p class="text-[9px] text-zinc-300 leading-relaxed uppercase tracking-widest">
                                Racism, Sexism, Homophobia, Transphobia, or targeted hate results in <span class="text-white font-bold underline">IMMEDIATE REMOVAL</span>. 
                                Not in-character. Not as a joke. Not ever.
                            </p>
                        </div>
                    </div>

                    <div class="lg:col-span-4 space-y-6">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="h-[1px] flex-1 bg-zinc-700"></div>
                            <h2 class="text-zinc-500 font-mono text-xs tracking-[0.4em] uppercase">Sector_02: Mechanics</h2>
                        </div>

                        <div class="cyber-panel p-6 h-full">
                            <h3 class="text-xl font-black uppercase italic mb-6 text-electric">Engagement & RP</h3>
                            <div class="space-y-6 text-[10px] text-zinc-400 uppercase tracking-widest leading-loose">
                                <div>
                                    <span class="text-white font-bold block border-b border-zinc-800 mb-2">New Life Rule (NLR)</span>
                                    <p>Respawning = 30min memory loss. You cannot take revenge or remember the scene that led to your death.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block border-b border-zinc-800 mb-2">Fear RP</span>
                                    <p>Value your life. When threatened with a weapon, you must comply unless there is a realistic alternative.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block border-b border-zinc-800 mb-2">Power Gaming</span>
                                    <p>No misuse of mechanics or "God powers." Combat logging and suicide RP are strictly prohibited.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block border-b border-zinc-800 mb-2">Metagaming</span>
                                    <p>No use of OOC information (streams/Discord) in-game. Do not share knowledge between your own alt-characters.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block border-b border-zinc-800 mb-2">Fail RP</span>
                                    <p>Actions must be realistic. Roleplay your injuries—don't just "bolt" after a 4-story fall or during medical treatment.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-4 space-y-6">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="h-[1px] flex-1 bg-red-500/30"></div>
                            <h2 class="text-red-500 font-mono text-xs tracking-[0.4em] uppercase">Sector_03: Conflict</h2>
                        </div>

                        <div class="cyber-panel-crim p-6">
                            <h3 class="text-red-500 text-xl font-black uppercase italic mb-6">Combat Protocols</h3>
                            <div class="space-y-6 text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                                <div>
                                    <span class="text-white font-bold block mb-1">RDM / VDM</span>
                                    <p>Killing or using vehicles as weapons without story intent is prohibited. Verbal interaction is required before lethal force.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block mb-1">Criminal Limitations</span>
                                    <p>Max 4 players per crime (including lookouts). No chain robbing stores or banks (30-60 min cooldowns).</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block mb-1">The Storm</span>
                                    <p>No robberies or mechanical crimes 30 minutes before or after server restart (The Storm).</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block mb-1">Government Corruption</span>
                                    <p>No corrupt PD, EMS, or DOJ. Engaging in crime as a Gov employee leads to immediate job loss and possible ban.</p>
                                </div>
                                <div>
                                    <span class="text-white font-bold block mb-1">Heist Conduct</span>
                                    <p>No willful hostages. No pocket wiping. Looting is limited to 1-3 items that align with your RP motive.</p>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 bg-red-600/10 border border-red-600/20 text-[8px] text-red-400 font-mono uppercase italic leading-tight">
                            SYSTEM_NOTICE: Staff reserve the right to action "Low Quality RP" even if technical rules are met.
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <a href="https://ember-roleplay.tebex.io/rules" target="_blank" class="group relative overflow-hidden border border-electric/30 bg-electric/5 p-6 transition-all hover:bg-electric/10">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="text-electric font-black uppercase italic">Full Community Rules</h4>
                                <p class="text-[8px] text-zinc-500 uppercase font-mono tracking-widest">Access External_Documentation_01</p>
                            </div>
                            <span class="text-electric group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                    </a>

                    <a href="https://ember-roleplay.tebex.io/serverrules" target="_blank" class="group relative overflow-hidden border border-red-500/30 bg-red-500/5 p-6 transition-all hover:bg-red-500/10">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="text-red-500 font-black uppercase italic">Full Server Rules</h4>
                                <p class="text-[8px] text-zinc-500 uppercase font-mono tracking-widest">Access External_Documentation_02</p>
                            </div>
                            <span class="text-red-500 group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                    </a>
                </div>

                <div class="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
                    <div>EMBER_CITY_PROTOCOL_v4.1</div>
                    <div>DATA_SOURCE: INTEGRATED_DIRECTIVES_INTERNAL</div>
                </div>
            </div>
        </div>
    `;
}