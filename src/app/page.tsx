"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Crown, Gem, Feather, Star } from "lucide-react";
import { Hero } from "@/components/Hero";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* New Hero Section */}
            <Hero />

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
                        Let&apos;s create something extraordinary together. Your vision, our expertise.
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
