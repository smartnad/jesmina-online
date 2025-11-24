"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, DollarSign, Image as ImageIcon, PenTool, LogOut, Mail, Menu, X, User } from "lucide-react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

// Helper component to handle session check
function AdminAuth({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (status === "unauthenticated") {
            redirect("/login");
        }
    }, [status]);

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    if (status === "loading") {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!session) {
        return null;
    }

    const links = [
        { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
        { name: "Services", href: "/admin/services", icon: <Briefcase size={20} /> },
        { name: "Pricing", href: "/admin/pricing", icon: <DollarSign size={20} /> },
        { name: "Portfolio", href: "/admin/portfolio", icon: <ImageIcon size={20} /> },
        { name: "Blog", href: "/admin/blog", icon: <PenTool size={20} /> },
        { name: "Messages", href: "/admin/messages", icon: <Mail size={20} /> },
        { name: "Contact Info", href: "/admin/contact-info", icon: <User size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm">
                <h1 className="font-cursive text-2xl text-pastel-text">Jesmina Admin</h1>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed md:sticky top-0 left-0 h-full md:h-screen w-64 bg-white border-r border-gray-200 z-30 transition-transform duration-300 ease-in-out overflow-y-auto
        ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}
      `}>
                <div className="p-8 hidden md:block">
                    <h1 className="font-cursive text-4xl text-pastel-text">Jesmina</h1>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 ml-1">Admin Panel</p>
                </div>

                {/* Mobile User Info */}
                <div className="p-6 md:hidden bg-gray-50 border-b border-gray-100 mb-4">
                    <p className="font-bold text-gray-800">Welcome, Admin</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                </div>

                <nav className="px-4 space-y-2 pb-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${pathname === link.href
                                ? "bg-pastel-gold text-white shadow-lg shadow-pastel-gold/30 translate-x-1"
                                : "text-gray-600 hover:bg-pastel-cream hover:text-pastel-text"
                                }`}
                        >
                            {link.icon}
                            <span className="font-medium">{link.name}</span>
                        </Link>
                    ))}
                    <div className="pt-8 mt-8 border-t border-gray-100">
                        <button
                            onClick={() => signOut({ callbackUrl: "/login" })}
                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-10 w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AdminAuth>{children}</AdminAuth>
        </SessionProvider>
    );
}
