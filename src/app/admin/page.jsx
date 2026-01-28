"use client";

import { motion } from "framer-motion";
import { Shield, Users, BarChart3, Settings, LogOut, Bell, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/authSlice";

export default function AdminPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            dispatch(logout());
            router.push("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <main className="min-h-screen bg-navy-950">
            {/* Admin Navbar */}
            <nav className="border-b border-white/5 bg-navy-900/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">
                                X
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">XPO</span>
                        </Link>
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold uppercase rounded-full">Admin</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                        <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500/30 overflow-hidden flex items-center justify-center">
                            <Shield className="w-5 h-5 text-red-400" />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Admin Dashboard{user?.name ? ` - ${user.name}` : ""} 🛡️
                    </h1>
                    <p className="text-slate-400">Manage users, monitor platform activity, and configure settings.</p>
                </motion.div>

                {/* Admin Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Total Users", value: "4,892", change: "+124", icon: Users, color: "blue" },
                        { label: "Active Sessions", value: "1,234", change: "+56", icon: Shield, color: "emerald" },
                        { label: "Platform Revenue", value: "$125,350", change: "+8.2%", icon: BarChart3, color: "purple" },
                        { label: "Support Tickets", value: "23", change: "-5", icon: Settings, color: "amber" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-navy-900/50 border border-white/5 rounded-2xl p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                                </div>
                                <span className={`${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'} text-sm font-medium`}>
                                    {stat.change}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-slate-500 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link href="/" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-colors inline-flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Go to Main Site
                    </Link>
                    <button className="px-6 py-3 bg-electric-blue hover:bg-blue-600 text-white font-bold rounded-xl transition-colors">
                        Manage Users
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-xl border border-red-500/20 transition-colors inline-flex items-center gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>

                {/* Placeholder Content */}
                <div className="bg-navy-900/50 border border-white/5 rounded-2xl p-12 text-center">
                    <Shield className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">Admin Panel Under Construction</h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        The admin control panel is being developed. User management, analytics, and platform settings will be available here.
                    </p>
                </div>
            </div>

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full" />
            </div>
        </main>
    );
}
