"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { label: "Active Clients", value: 4929344, suffix: "+", prefix: "" },
    { label: "Total Funds Traded", value: 4444275895, suffix: "", prefix: "$" },
    { label: "Partners Earned", value: 2472377372, suffix: "", prefix: "$" },
];

function CountUp({ value, prefix, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const startTime = performance.now();

            const update = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function: easeOutExpo
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                const currentCount = Math.floor(easeProgress * end);
                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };

            requestAnimationFrame(update);
        }
    }, [isInView, value]);

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    return (
        <span ref={ref} className="tabular-numbers">
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center relative group hover:border-white/20 transition-all duration-500"
                        >
                            {/* Decorative light effect */}
                            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 group-hover:text-electric-blue transition-colors">
                                {stat.label}
                            </h3>
                            <p className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </p>

                            <div className="mt-6 flex flex-col items-center gap-1">
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                                <p className="text-xs text-slate-500 font-medium pt-2 italic">Institutional Grade Trust</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
