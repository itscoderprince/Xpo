"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BarChart3, ShieldCheck, Zap, Lightbulb } from "lucide-react";

const features = [
    {
        Icon: BarChart3,
        name: "Index Fund Performance",
        description: "Consistently beating average managed funds by tracking the market as a whole.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent p-6 flex items-end justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                {/* Abstract Chart Visual */}
                <div className="flex items-end gap-1 h-20 w-full opacity-30">
                    {[20, 50, 30, 70, 40, 90].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        ),
    },
    {
        Icon: Zap,
        name: "Ease & Simplicity",
        description: "Eliminating choice paralysis with curated, high-performing investment scripts.",
        href: "#",
        cta: "Start Simple",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-50" />
        ),
    },
    {
        Icon: ShieldCheck,
        name: "Institutional Trust",
        description: "Managing vast assets with the stability and scale of a global financial partner.",
        href: "#",
        cta: "Our Security",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-50" />
        ),
    },
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-navy-950 relative">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-gradient-blue">XPO</span>?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We combine technology, expertise, and trust to deliver superior investment outcomes.
                    </p>
                </div>

                <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[20rem]">

                    {/* Big Stats Card - Spans 2 Cols on Desktop */}
                    <div className="col-span-3 md:col-span-2 row-span-1 rounded-xl glass-card border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />

                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div>
                                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">Total Funds Traded</h3>
                                <div className="text-5xl md:text-7xl font-black text-white flex items-baseline gap-1">
                                    $ <NumberTicker value={4444275895} className="text-white" />
                                </div>
                                <p className="text-slate-500 mt-2">Trusted by over <span className="text-white font-bold">4.9 Million</span> active clients worldwide.</p>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-xs text-slate-400 uppercase font-bold">Partners Earned</div>
                                    <div className="text-lg font-bold text-emerald-400">$2.4B+</div>
                                </div>
                                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                    <div className="text-xs text-slate-400 uppercase font-bold">Active Users</div>
                                    <div className="text-lg font-bold text-blue-400">4.9M+</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards Loop */}
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}

                </BentoGrid>
            </div>
        </section>
    );
}
