"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    // 3D Transform for Navbar
    const navY = useTransform(scrollY, [0, 100], [0, -10]);
    const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <motion.nav
                style={{ y: navY, scale: navScale }}
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "top-4" : "top-0"
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled
                    ? "bg-white/70 backdrop-blur-xl border border-white/40 shadow-glass rounded-full py-3"
                    : "bg-transparent py-6"
                    }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className={`text-2xl md:text-3xl font-bold text-gray-800 tracking-wide transition-all duration-300 ${scrolled ? "scale-90" : ""}`}>
                                JESMINA
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-pastel-gold font-medium transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pastel-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                            <Link href="/login">
                                <Button variant="outline" size="sm" className="rounded-full border-pastel-gold text-pastel-gold hover:bg-pastel-gold hover:text-white">
                                    Admin
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-pastel-gold transition-colors focus:outline-none"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

            </motion.nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4">
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-600 hover:text-pastel-gold font-medium transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href="/login" onClick={() => setIsOpen(false)}>
                                    <span className="text-pastel-gold hover:text-yellow-500 font-medium transition-colors text-sm">
                                        Admin
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
