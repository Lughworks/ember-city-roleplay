export function renderManifesto() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[200]">
            <div class="max-w-6xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● SYSTEM_CORE: MISSION_MANIFESTO_v1.0</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6 border-zinc-700 text-zinc-500 hover:text-white hover:border-white">Return_to_Grid</button>
                </div>

                <header class="mb-20">
                    <span class="text-[10px] text-electric font-bold tracking-[0.5em] uppercase italic">The Ember Initiative</span>
                    <h1 class="heading-font text-7xl md:text-9xl font-black uppercase tracking-tighter mt-4 italic leading-none">
                        IGNITE <span class="text-electric">THE STORY.</span>
                    </h1>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    <div class="lg:col-span-7 space-y-12">
                        <section>
                            <h2 class="text-2xl font-black uppercase italic mb-6 flex items-center gap-4">
                                <span class="h-8 w-1 bg-electric"></span> Welcome to Ember
                            </h2>
                            <p class="text-lg text-zinc-300 leading-relaxed font-light tracking-wide">
                                You’ve just stepped into a community where <span class="text-white font-bold">storytelling, creativity, and immersive roleplay</span> take center stage. Ember Roleplay is built on a back-to-basics approach—where fun, engaging character interactions matter more than grind and mechanics.
                            </p>
                        </section>

                        <div class="cyber-panel p-10 border-l-4 border-l-electric">
                            <h3 class="text-electric font-mono text-xs tracking-[0.3em] uppercase mb-4">Our_Mission</h3>
                            <p class="text-2xl font-bold uppercase italic leading-tight text-white mb-6">
                                Authentic roleplay, not ego-driven gameplay.
                            </p>
                            <p class="text-zinc-400 text-sm uppercase tracking-widest leading-loose">
                                This is a place where stories unfold naturally, where players create experiences together, and where everyone is welcome—regardless of background, skill level, or experience.
                            </p>
                        </div>
                    </div>

                    <div class="lg:col-span-5 space-y-8">
                        
                        <div class="p-8 border border-zinc-800 bg-zinc-900/20">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                                <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Player_Funded_Model</span>
                            </div>
                            <h4 class="text-xl font-black uppercase italic mb-4 italic">Crowdfunded Evolution</h4>
                            <p class="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                                Every contribution directly impacts the quality, performance, and expansion of the server. We grow as you support.
                            </p>
                        </div>

                        <div class="p-8 border border-red-500/20 bg-red-500/5">
                            <h4 class="text-red-500 text-xl font-black uppercase italic mb-4">A Safe Space</h4>
                            <p class="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed mb-4">
                                Everyone has a seat at the table. Racism, hate, and discrimination have no home here. Our staff fights to uphold this core value.
                            </p>
                            <div class="h-[1px] w-full bg-red-500/20 mb-4"></div>
                            <span class="text-[8px] font-mono text-red-500/50 uppercase italic tracking-tighter italic font-bold">ZERO_TOLERANCE_ACTIVE</span>
                        </div>

                        <div class="p-1 bg-electric group cursor-pointer" onclick="window.closeBentoPage()">
                            <div class="bg-black p-8 flex justify-between items-center transition-all group-hover:bg-transparent">
                                <div class="group-hover:text-black transition-colors">
                                    <h4 class="text-2xl font-black uppercase italic leading-none">Your Turn</h4>
                                    <p class="text-[9px] uppercase font-mono tracking-widest mt-1">Initialize_Adventure</p>
                                </div>
                                <span class="text-4xl group-hover:text-black group-hover:translate-x-2 transition-all">→</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="mt-24 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
                    <div>EMBER_CITY_CORE_VALUES</div>
                    <div>ESTABLISHED_2025</div>
                </div>
            </div>
        </div>
    `;
}