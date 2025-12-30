export function renderSystems() {
    return `
        <div class="fixed inset-0 bg-[#030303] text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Uplink_Status: Stable</div>
                    <button onclick="window.closeBentoPage()" class="btn-industrial py-2 px-6">End_Session</button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-4">
                        <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">System_Log_01</span>
                        <h1 class="heading-font text-6xl md:text-8xl font-black uppercase tracking-tighter mt-4 italic">SERVER<br><span class="text-electric">ARCHITECTURE</span></h1>
                        
                        <div class="space-y-6 mt-12">
                            <div class="cyber-panel p-6">
                                <h4 class="text-electric text-[10px] font-bold uppercase mb-2 italic">0.0ms Performance</h4>
                                <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Proprietary framework built for zero-latency interactions using custom entity-pooling.</p>
                            </div>
                            <div class="cyber-panel p-6">
                                <h4 class="text-electric text-[10px] font-bold uppercase mb-2 italic">Dynamic Housing</h4>
                                <p class="text-[10px] text-zinc-400 uppercase leading-relaxed">Real-time persistence allowing any building purchase with 1,000+ custom props.</p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-8">
                        <div class="cyber-panel p-1 border-t-4 border-t-electric h-[600px] flex flex-col">
                            <div class="bg-black/60 p-8 flex-1 flex flex-col overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <span class="text-[10px] font-mono text-electric italic">LIVE_RESOURCE_MANIFEST_V4</span>
                                    <span class="text-[8px] opacity-30">ENCRYPTED_UPLINK</span>
                                </div>
                                <div id="resrource-list" class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 font-mono overflow-y-auto scroll-custom pr-4">
                                    <div class="animate-pulse">INITIALIZING_SCAN...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}