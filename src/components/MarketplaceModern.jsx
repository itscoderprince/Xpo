"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TrendingUp, ArrowUpRight, Shield, Zap, Globe, Lock } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map";

// --- Data inspired by Russian States/Regions ---
const strategies = [
    {
        name: "Moscow Prime",
        ticker: "@MSCW",
        growth: "4.72%",
        desc: "Capital-grade crypto strategy.",
        icon: "https://api.dicebear.com/7.x/initials/svg?seed=MP&backgroundColor=ef4444",
        color: "text-red-500",
        border: "border-red-500/20",
        glow: "from-red-500/20"
    },
    {
        name: "St. Petersburg FX",
        ticker: "@SPBG",
        growth: "3.65%",
        desc: "Baltic region forex flow.",
        icon: "https://api.dicebear.com/7.x/initials/svg?seed=SP&backgroundColor=3b82f6",
        color: "text-blue-500",
        border: "border-blue-500/20",
        glow: "from-blue-500/20"
    },
    {
        name: "Siberia Mining",
        ticker: "@SIBR",
        growth: "5.12%",
        desc: "Deep yield extraction.",
        icon: "https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=ec4899",
        color: "text-pink-500",
        border: "border-pink-500/20",
        glow: "from-pink-500/20"
    },
    {
        name: "Kazan Commodities",
        ticker: "@KZNC",
        growth: "3.8%",
        desc: "Resource-backed growth.",
        icon: "https://api.dicebear.com/7.x/initials/svg?seed=KC&backgroundColor=10b981",
        color: "text-emerald-500",
        border: "border-emerald-500/20",
        glow: "from-emerald-500/20"
    }
];

const MagicCard = ({ item, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative h-full"
        >
            <div className={`
                relative h-full flex flex-col items-center text-center p-8 
                bg-navy-900/50 backdrop-blur-md border border-white/5 rounded-3xl 
                hover:border-white/10 transition-colors duration-300
                shadow-2xl shadow-black/20
            `}>
                {/* Hover Glow */}
                <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.glow} to-transparent blur-xl -z-10`}
                />

                {/* Icon/Avatar */}
                <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-navy-800 border-4 border-navy-950 shadow-xl overflow-hidden relative z-10 mx-auto">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Decorative Ring */}
                    <div className={`absolute -inset-2 rounded-full border border-dashed ${item.border} animate-spin-slow opacity-50`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-6">{item.ticker}</span>

                {/* Growth Badge */}
                <div className="mt-auto w-full">
                    <button className="group/btn relative w-full overflow-hidden rounded-xl bg-navy-950 border border-white/5 p-4 transition-all hover:border-white/10 hover:bg-navy-800">
                        <div className="flex flex-col items-center gap-1">
                            <div className={`text-2xl font-black ${item.color} flex items-center gap-2`}>
                                {item.growth}
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover/btn:text-white transition-colors">
                                Weekly Growth
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function MarketplaceModern() {
    return (
        <section id="xpoindex" className="py-24 relative bg-navy-950 overflow-hidden">

            {/* Background Gradients & Map */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-10">
                    <DottedMap
                        className="text-blue-500/20"
                        dotRadius={0.3}
                    />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Regional Strategists Header */}
                <div className="text-left mb-12 border-l-4 border-blue-500 pl-6 space-y-2">
                    <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">Power of XPO Regional Strategists</h3>
                    </div>
                    <p className="text-slate-400">Discover the best performing strategies from our top analysts.</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {strategies.map((item, index) => (
                        <MagicCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Optional Footer/CTA */}
                <div className="flex justify-center mt-16">
                    <a href="/login" className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-widest border-b border-white/10 hover:border-white pb-1">
                        View all 120+ Strategies <TrendingUp className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
