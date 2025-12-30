export function renderEmergency() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-blue-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-blue-400 animate-pulse uppercase">● CHANNEL: EMERGENCY_DISPATCH_ACTIVE</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6 border-blue-500 text-blue-500 hover:bg-blue-500">Logout_Dispatch</button>
                </div>

                <header class="mb-16">
                    <span class="text-[10px] text-blue-500 font-bold tracking-[0.3em] uppercase italic">Public Safety / Dispatch</span>
                    <h1 class="heading-font text-6xl md:text-8xl font-black uppercase tracking-tighter mt-2 italic">Emergency <span class="text-blue-500">Services</span></h1>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-7 cyber-panel p-10 border-t-2 border-t-blue-600">
                        <h3 class="text-blue-500 font-black text-xs uppercase tracking-widest mb-6">LSPD / SASP Recruitment</h3>
                        <p class="text-sm text-zinc-300 mb-10 leading-relaxed uppercase">
                            Join a professional force equipped with custom CAD/MDT systems, radar units, and high-speed interceptors. We prioritize high-quality communication and tactical realism.
                        </p>
                        <button class="btn-industrial border-blue-500 text-blue-500 hover:bg-blue-500">Initialize_Application</button>
                    </div>

                    <div class="lg:col-span-5 cyber-panel p-10 border-t-2 border-t-red-600">
                        <h3 class="text-red-500 font-black text-xs uppercase tracking-widest mb-6">San Andreas Medical</h3>
                        <p class="text-sm text-zinc-300 mb-10 leading-relaxed uppercase">
                            Advanced medical RP featuring a custom injury system, stretcher sync, and dedicated air-ambulance units. Join the frontline of lifesaving.
                        </p>
                        <button class="btn-industrial border-red-500 text-red-500 hover:bg-red-500">Contact_Medical_Board</button>
                    </div>
                </div>

                <div class="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
                    <div id="server-name-emergency">EMBER CITY ROLEPLAY © 2025</div>
                    <div class="text-blue-900">911_TERMINAL_014</div>
                </div>
            </div>
        </div>
    `;
}