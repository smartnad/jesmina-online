"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Crown, Gem, Feather, ArrowRight, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Enhanced Hero Section */}
            <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-cream via-pastel-lilac/10 to-white pt-32">
                {/* Enhanced Decorative Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Animated gradient blobs - larger and more vibrant */}
                    <div className="absolute top-10 left-[-10%] w-96 h-96 bg-gradient-to-r from-pastel-pink/30 to-pastel-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-20 right-[-10%] w-[30rem] h-[30rem] bg-gradient-to-r from-pastel-lilac/30 to-pastel-pink/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-10%] left-[30%] w-[35rem] h-[35rem] bg-gradient-to-r from-pastel-gold/20 to-pastel-accent2/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

                    {/* Geometric shapes with varied animations */}
                    <div className="absolute top-[20%] right-[15%] w-32 h-32 border-2 border-pastel-gold/40 rounded-3xl rotate-12 animate-float"></div>
                    <div className="absolute top-[60%] left-[10%] w-24 h-24 border-2 border-pastel-pink/40 rounded-full animate-float animation-delay-2000"></div>
                    <div className="absolute top-[40%] right-[25%] w-28 h-28 bg-pastel-lilac/15 rounded-2xl rotate-45 animate-float animation-delay-4000"></div>

                    {/* Stars and sparkles */}
                    <div className="absolute top-[25%] left-[20%] text-pastel-gold/30 animate-pulse-slow">
                        <Star size={24} fill="currentColor" />
                    </div>
                    <div className="absolute bottom-[30%] right-[20%] text-pastel-pink/30 animate-pulse-slow animation-delay-2000">
                        <Sparkles size={28} />
                    </div>
                    <div className="absolute top-[50%] left-[15%] text-pastel-lilac/30 animate-pulse-slow animation-delay-4000">
                        <Star size={20} fill="currentColor" />
                    </div>

                    {/* Glowing orbs */}
                    <div className="absolute top-[35%] right-[10%] w-16 h-16 bg-gradient-radial from-pastel-gold/30 to-transparent rounded-full animate-glow"></div>
                    <div className="absolute bottom-[40%] left-[25%] w-20 h-20 bg-gradient-radial from-pastel-pink/25 to-transparent rounded-full animate-glow animation-delay-2000"></div>
                </div>

                <motion.div
                    style={{ y, opacity }}
                    className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20"
                >
                    {/* Enhanced Badge with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="inline-block mb-10"
                    >
                        <span className="py-3 px-8 rounded-full bg-white/70 backdrop-blur-md border border-pastel-gold/30 text-gray-700 text-sm font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 animate-glow">
                            <Sparkles size={16} className="text-pastel-gold" />
                            Premium Web Design & Development
                        </span>
                    </motion.div>

                    {/* Enhanced Heading with better sizing and glow */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", delay: 0.4 }}
                        className="text-6xl md:text-8xl font-bold text-gray-800 mb-8 leading-tight"
                    >
                        Transform Your Vision Into
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-gold via-yellow-400 to-pastel-gold mt-3 text-glow">
                            Digital Excellence
                        </span>
                    </motion.h1>

                    {/* Enhanced Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
                    >
                        We create stunning, high-performance websites that elevate your brand and drive real business results. From concept to launch, we handle every detail with precision and care.
                    </motion.p>

                    {/* Enhanced CTA Buttons - Larger and more prominent */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.08, translateY: -6 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-gradient-to-r from-pastel-text to-gray-700 text-white text-lg font-bold rounded-full shadow-2xl shadow-gray-500/50 hover:shadow-gray-500/70 transition-all duration-300 flex items-center gap-3 group"
                            >
                                Start Your Project
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link href="/portfolio">
                            <motion.button
                                whileHover={{ scale: 1.08, translateY: -6 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-white/80 backdrop-blur-sm border-2 border-pastel-gold/30 text-gray-700 text-lg font-bold rounded-full shadow-xl hover:bg-white hover:border-pastel-gold hover:shadow-2xl transition-all duration-300"
                            >
                                View Our Work
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3D Cards Section */}
            <section className="py-32 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="font-cursive text-6xl text-pastel-text mb-4"
                        >
                            Why Choose Jesmina?
                        </motion.h2>
                        <p className="text-gray-500 text-lg">Experience the difference of premium craftsmanship.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
                        {[
                            {
                                icon: <Crown className="w-12 h-12 text-pastel-gold" />,
                                title: "Custom Solutions",
                                description: "Every project is unique. We craft bespoke websites tailored to your specific business goals and brand identity.",
                                delay: 0
                            },
                            {
                                icon: <Gem className="w-12 h-12 text-pastel-pink" />,
                                title: "Premium Quality",
                                description: "We adhere to the highest standards of development and design, ensuring your website is fast, secure, and beautiful.",
                                delay: 0.2
                            },
                            {
                                icon: <Feather className="w-12 h-12 text-pastel-lilac" />,
                                title: "Seamless Process",
                                description: "From initial consultation to final launch, we guide you through every step with clear communication and expert support.",
                                delay: 0.4
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, rotateX: 10, y: 50 }}
                                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    rotateX: 5,
                                    boxShadow: "20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff"
                                }}
                                transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl transition-all duration-500 group transform-style-3d"
                            >
                                <div className="mb-8 inline-flex p-6 bg-pastel-cream rounded-3xl shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:shadow-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-pastel-gold transition-colors">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-lg">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parallax CTA Section */}
            <section className="py-40 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-lilac/20 to-pastel-pink/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-5xl mx-auto px-4 text-center glass-panel p-16 rounded-[3rem]"
                >
                    <div className="absolute -top-10 -left-10 text-pastel-gold animate-spin-slow">
                        <Star size={80} fill="currentColor" className="opacity-50" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 text-pastel-pink animate-float">
                        <Gem size={80} fill="currentColor" className="opacity-50" />
                    </div>

                    <h2 className="font-cursive text-7xl text-pastel-text mb-8">Ready to Elevate Your Brand?</h2>
                    <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        Let's create something extraordinary together. Your vision, our expertise.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="px-16 py-8 text-xl rounded-full bg-pastel-text text-white hover:bg-gray-800 shadow-2xl hover:shadow-pastel-gold/50 transition-all transform hover:-translate-y-2">
                            Start Your Project
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
