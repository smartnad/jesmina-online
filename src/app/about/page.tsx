"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Heart, Users, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-pastel-cream/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-pastel-lilac rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4 opacity-50"></div>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/jesmina-hero.jpg"
                                    alt="Jesmina Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">About Us</span>
                            <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-8">Hello, I&apos;m Jesmina</h1>
                            <h2 className="text-2xl font-bold text-gray-700 mb-6">Creative Director & Lead Developer</h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    I founded Jesmina Online with a simple mission: to bring beauty and strategy together in the digital space. I believe that a website shouldn&apos;t just function—it should feel like an experience.
                                </p>
                                <p>
                                    With a background in fine arts and computer science, I bridge the gap between aesthetic elegance and technical precision. My team and I are dedicated to helping women-led businesses find their voice and claim their space online.
                                </p>
                                <p>
                                    When I&apos;m not coding or designing, you can find me exploring art galleries, sipping matcha lattes, or sketching in my notebook.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full px-10 py-6">Let&apos;s Create Magic</Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-cursive text-5xl text-pastel-text mb-4">Our Core Values</h2>
                        <p className="text-gray-500 text-lg">The principles that guide our work.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Heart className="w-8 h-8 text-pastel-pink" />,
                                title: "Passion First",
                                description: "We pour our hearts into every project, treating your business as if it were our own."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-pastel-lilac" />,
                                title: "Collaboration",
                                description: "We believe in the power of partnership. Your insights combined with our expertise create magic."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-pastel-gold" />,
                                title: "Innovation",
                                description: "We stay ahead of the curve, using the latest technologies to give you a competitive edge."
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="inline-flex p-4 bg-pastel-cream rounded-full mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-pastel-text mb-4">{item.title}</h3>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
