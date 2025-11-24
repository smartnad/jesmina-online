"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Twitter, Facebook, Linkedin, Github } from "lucide-react";
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col justify-center items-center"
                    >
                        <div className="absolute top-6 left-6">
                            <span className="text-2xl font-bold text-gray-800 tracking-wide">
                                JESMINA
                            </span>
                        </div>
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-pastel-gold transition-colors focus:outline-none"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-sans font-medium text-gray-800 hover:text-pastel-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Admin Link */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                            >
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-sans font-medium text-pastel-gold hover:text-yellow-500 transition-colors"
                                >
                                    Admin
                                </Link>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                                className="flex items-center space-x-6 mt-8"
                            >
                                {[
                                    { icon: Instagram, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Facebook, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Github, href: "#" },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="text-gray-500 hover:text-pastel-gold transition-colors transform hover:scale-110"
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
