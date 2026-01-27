"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    TrendingUp,
    TrendingDown,
    Activity,
    Zap,
    Shield,
    Lock,
    Globe,
    ArrowRight,
    Users,
    ChevronRight,
    Hash
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// --- Mock Data ---
const indexData = [
    {
        id: "alpha",
        name: "Alpha Union",
        code: "ALUN",
        apy: "24.8%",
        change: "+5.72%",
        isUp: true,
        risk: "Moderate",
        volume: "$1.2M",
        tvl: "$45.8M",
        color: "#3b82f6", // Blue
        icon: Activity,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=100",
        featured: true
    },
    {
        id: "notebook",
        name: "Crypto Notebook",
        code: "CRYNO",
        apy: "12.5%",
        change: "+2.15%",
        isUp: true,
        risk: "Low",
        volume: "$840K",
        tvl: "$12.4M",
        color: "#10b981", // Emerald
        icon: Shield,
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=100",
        featured: false
    },
    {
        id: "magnet",
        name: "Profit Magnet",
        code: "PRMG",
        apy: "32.0%",
        change: "+8.41%",
        isUp: true,
        risk: "High",
        volume: "$2.4M",
        tvl: "$8.2M",
        color: "#a855f7", // Purple
        icon: TrendingUp,
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=100",
        featured: false
    },
    {
        id: "metropolis",
        name: "Metropolis FX",
        code: "METFX",
        apy: "8.4%",
        change: "-1.24%",
        isUp: false,
        risk: "Very Low",
        volume: "$4.1M",
        tvl: "$120M",
        color: "#f59e0b", // Amber
        icon: Globe,
        image: "https://images.unsplash.com/photo-1611974714658-058df2c525f0?auto=format&fit=crop&q=80&w=100",
        featured: true
    },
    {
        id: "future",
        name: "Future Chain",
        code: "FUCHI",
        apy: "18.1%",
        change: "+3.2%",
        isUp: true,
        risk: "Moderate",
        volume: "$620K",
        tvl: "$5.1M",
        color: "#06b6d4", // Cyan
        icon: Zap,
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=100",
        featured: false
    },
    {
        id: "backyard",
        name: "Backyard Trade",
        code: "BACKT",
        apy: "41.5%",
        change: "+12.8%",
        isUp: true,
        risk: "Extreme",
        volume: "$3.8M",
        tvl: "$2.3M",
        color: "#f43f5e", // Rose
        icon: TrendingUp,
        image: "https://images.unsplash.com/photo-1640341719942-d698007a6590?auto=format&fit=crop&q=80&w=100",
        featured: false
    },
];

// --- Sub-components ---

const Sparkline = ({ color, isUp }) => {
    return (
        <div className="relative w-full h-12 overflow-hidden">
            <motion.svg
                viewBox="0 0 100 40"
                className="w-full h-full"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.path
                    d={isUp
                        ? "M0,35 Q10,30 20,32 T40,20 T60,25 T80,5 T100,10"
                        : "M0,5 Q10,15 20,10 T40,25 T60,20 T80,35 T100,30"
                    }
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                    d={isUp
                        ? "M0,35 Q10,30 20,32 T40,20 T60,25 T80,5 T100,10 L100,40 L0,40 Z"
                        : "M0,5 Q10,15 20,10 T40,25 T60,20 T80,35 T100,30 L100,40 L0,40 Z"
                    }
                    fill={`url(#gradient-${color})`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                    <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </div>
    );
};

const IndexCard = ({ item, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothSpringConfig = { stiffness: 200, damping: 25, mass: 0.5 };
    const mouseXSpring = useSpring(x, smoothSpringConfig);
    const mouseYSpring = useSpring(y, smoothSpringConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const riskColors = {
        'Extreme': 'text-rose-500',
        'High': 'text-orange-400',
        'Moderate': 'text-blue-400',
        'Low': 'text-emerald-400',
        'Very Low': 'text-cyan-400'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ rotateX, rotateY, willChange: "transform" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`
                group relative rounded-2xl bg-[#0d1526] border border-white/[0.06]
                hover:border-white/10 transition-all duration-300 cursor-pointer
                ${item.featured ? 'md:col-span-2' : 'col-span-1'}
            `}
        >
            {/* Subtle glow on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ background: `radial-gradient(circle at 50% 100%, ${item.color}15, transparent 70%)` }}
            />

            <div className="p-5 sm:p-6 flex flex-col h-full">
                {/* Header Row: Icon + Name + Risk Level */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        {/* Icon with colored ring */}
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                        >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        {/* Name + Code + Change */}
                        <div>
                            <h3 className="text-base font-semibold text-white leading-tight mb-0.5">{item.name}</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-medium text-slate-500 tracking-wide uppercase">{item.code}</span>
                                <span className={`text-[10px] font-semibold ${item.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Risk Level - Right side */}
                    <div className="text-right">
                        <div className="text-[9px] font-medium text-slate-500 uppercase tracking-wider mb-0.5">Risk Level</div>
                        <div className={`text-xs font-bold uppercase ${riskColors[item.risk] || 'text-blue-400'}`}>
                            {item.risk}
                        </div>
                    </div>
                </div>

                {/* Big APY Number */}
                <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
                        {item.apy}
                    </span>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">APY</span>
                </div>

                {/* Sparkline Chart */}
                <div className="mb-5 h-12">
                    <Sparkline color={item.color} isUp={item.isUp} />
                </div>

                {/* Stats Row: Volume & TVL */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-3">
                        <div className="text-[9px] font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-slate-600" /> 24H Volume
                        </div>
                        <div className="text-sm font-semibold text-white">{item.volume}</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-3">
                        <div className="text-[9px] font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <Globe className="w-3 h-3 text-slate-600" /> TVL (Protocol)
                        </div>
                        <div className="text-sm font-semibold text-white">{item.tvl}</div>
                    </div>
                </div>

                {/* Live Execution Badge */}
                <div className="flex items-center gap-2 mt-auto">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Live Execution Available</span>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Component ---

export default function DiscoverIndexes() {
    return (
        <section id="xpoindex" className="py-16 md:py-24 relative bg-[#070b14] overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent_50%)]" />
                <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-blue-600/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-600/5 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Clean Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
                        >
                            The Next Era of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Yield Engine.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed"
                        >
                            Proprietary algorithms managing institutional liquidity across 8+ specialized global indexes.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/[0.06]"
                    >
                        <div className="flex -space-x-2.5">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-7 h-7 rounded-full border-2 border-[#070b14] bg-slate-800 overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs font-semibold text-white">4.9M+ Active Traders</div>
                    </motion.div>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {indexData.map((item, index) => (
                        <IndexCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}