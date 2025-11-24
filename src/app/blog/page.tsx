"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

// Static data for immediate display
const staticPosts = [
    {
        id: 1,
        title: "The Art of Minimalist Web Design",
        excerpt: "Why less is often more when it comes to creating a premium digital experience.",
        date: "June 15, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        category: "Design"
    },
    {
        id: 2,
        title: "Building a Brand That Resonates",
        excerpt: "Tips and strategies for creating a brand identity that connects emotionally with your audience.",
        date: "June 10, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800",
        category: "Branding"
    },
    {
        id: 3,
        title: "2024 Web Design Trends to Watch",
        excerpt: "From glassmorphism to kinetic typography, here's what's trending in the design world.",
        date: "May 28, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?auto=format&fit=crop&q=80&w=800",
        category: "Trends"
    },
    {
        id: 4,
        title: "The Importance of Mobile Responsiveness",
        excerpt: "Why your website needs to look perfect on every device, and how to achieve it.",
        date: "May 15, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        category: "Development"
    },
    {
        id: 5,
        title: "Color Psychology in Marketing",
        excerpt: "How to use color palettes to influence user behavior and perception.",
        date: "May 02, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800",
        category: "Psychology"
    },
    {
        id: 6,
        title: "SEO Basics for Creative Entrepreneurs",
        excerpt: "Simple steps to improve your search engine ranking without getting technical.",
        date: "April 20, 2024",
        author: "Jesmina",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        category: "Marketing"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">The Journal</span>
                    <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-6">Insights & Inspiration</h1>
                    <p className="text-xl text-gray-500">Thoughts on design, business, and creativity.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {staticPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/3]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-pastel-text uppercase tracking-wide shadow-sm">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-pastel-gold" /> {post.date}</span>
                                <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-pastel-gold" /> {post.author}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-pastel-text mb-3 group-hover:text-pastel-gold transition-colors leading-tight">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-pastel-gold font-bold text-sm group-hover:translate-x-2 transition-transform">
                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
