"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Why XPO", href: "#whyxpo" },
    { name: "Marketplace", href: "#xpoindex" },
    { name: "Expert View", href: "#blog" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "py-3"
                    : "py-5"
            )}
        >
            <div className="absolute inset-0 transition-all duration-500 pointer-events-none">
                <div className={cn(
                    "absolute inset-0 bg-navy-950/40 backdrop-blur-xl border-b border-white/5 transition-opacity duration-500",
                    scrolled ? "opacity-100" : "opacity-0"
                )} />
            </div>

            <div className="container mx-auto px-6 relative z-50 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group relative">
                    <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                        src="https://xpo.ru/assets/images/logo-white.png"
                        alt="XPO Logo"
                        className="h-9 md:h-10 w-auto relative group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className="relative px-4 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            {hoveredLink === link.name && (
                                <motion.div
                                    layoutId="nav-glow"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/5 rounded-full -z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <motion.div
                                className="absolute bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                            />
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-[12px] font-bold uppercase tracking-[0.15em] text-white hover:text-blue-400 transition-all px-4 py-2"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="relative group overflow-hidden bg-white text-navy-950 text-[11px] font-black uppercase tracking-[0.2em] px-7 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-navy-950/95 backdrop-blur-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Content */}
                        <div className="relative h-full flex flex-col items-center justify-center p-8">
                            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                                        className="w-full text-center"
                                    >
                                        <Link
                                            href={link.href}
                                            className="block text-2xl font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-white hover:scale-110 transition-all duration-300"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.hr
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="w-full border-white/10 my-4"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-row gap-3 w-full"
                                >
                                    <Link
                                        href="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex-1 text-center py-4 border border-white/10 rounded-2xl text-white font-black uppercase tracking-[0.1em] text-[10px]"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex-1 bg-white text-navy-950 font-black uppercase tracking-[0.1em] py-4 rounded-2xl text-center text-[10px] shadow-2xl shadow-white/5"
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
