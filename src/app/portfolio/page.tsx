"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Static data for immediate display
const staticProjects = [
    {
        id: 1,
        title: "Luxe Botanicals",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1470309630597-4146c9dc991d?auto=format&fit=crop&q=80&w=800",
        description: "A premium skincare brand focusing on organic ingredients."
    },
    {
        id: 2,
        title: "Maison de Mode",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        description: "High-end fashion boutique portfolio."
    },
    {
        id: 3,
        title: "The Golden Hour",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
        description: "Brand identity for a luxury wellness retreat."
    },
    {
        id: 4,
        title: "Velvet Interiors",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
        description: "Minimalist interior design showcase."
    },
    {
        id: 5,
        title: "Coco & Sage",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
        description: "Artisan coffee and pastry shop online store."
    },
    {
        id: 6,
        title: "Aura Studio",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        description: "Creative agency brand refresh."
    }
];

const categories = ["All", "Web Design", "E-commerce", "Branding"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? staticProjects
        : staticProjects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">Selected Works</span>
                    <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-6">Our Portfolio</h1>
                    <p className="text-xl text-gray-500">A curated collection of our finest digital creations.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-pastel-gold text-white shadow-lg shadow-pastel-gold/30 scale-105"
                                    : "bg-pastel-cream/50 text-pastel-text hover:bg-pastel-lilac/20"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                                <span className="text-pastel-gold text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold font-cursive mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
