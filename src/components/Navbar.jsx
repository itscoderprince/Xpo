"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "what is xpo", href: "#whatxpo" },
    { name: "why xpo", href: "#whyxpo" },
    { name: "xpo indexes", href: "#xpoindex" },
    { name: "trending indexes", href: "#trendingindex" },
    { name: "from index managers", href: "#fromindex" },
    { name: "blog", href: "/blog" },
    { name: "team", href: "#team" },
    { name: "contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-navy-950/80 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container-fluid mx-auto px-6 flex items-center justify-between">
                <Link href="https://xpo-eight.vercel.app" className="flex items-center gap-2 group">
                    <img
                        src="https://xpo.ru/assets/images/logo-white.png"
                        alt="XPO Logo"
                        className="h-10 w-auto group-hover:scale-105 transition-transform"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="text-[13px] font-bold uppercase tracking-widest text-white hover:text-electric-blue transition-colors px-4 py-2"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-electric-blue hover:bg-blue-600 text-white text-[13px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-navy-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 sm:p-6 gap-4 sm:gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[13px] font-bold uppercase tracking-widest text-slate-300 active:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-white/5" />
                            <div className="flex flex-col gap-3 pb-2 sm:pb-4">
                                <Link
                                    href="/login"
                                    className="w-full text-center py-2.5 text-white font-bold uppercase tracking-widest text-xs sm:text-sm"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="w-full bg-electric-blue text-white font-bold uppercase tracking-widest py-3 rounded-xl text-center text-xs sm:text-sm shadow-lg shadow-blue-500/20"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
