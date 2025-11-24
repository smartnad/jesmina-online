"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Palette, Code, Smartphone, Megaphone, Globe, PenTool, Camera, Layout } from "lucide-react";

// Static data for immediate display
const staticServices = [
    {
        title: "Brand Identity Design",
        description: "We craft memorable brand identities that resonate with your audience. Includes logo design, color palette, typography, and brand guidelines.",
        price: "From ₹95,000",
        icon: <Palette className="w-10 h-10 text-pastel-pink" />
    },
    {
        title: "Custom Web Development",
        description: "Bespoke websites built from scratch using the latest technologies (Next.js, React) to ensure speed, security, and scalability.",
        price: "From ₹2,00,000",
        icon: <Code className="w-10 h-10 text-pastel-lilac" />
    },
    {
        title: "E-Commerce Solutions",
        description: "Turn your passion into profit with a stunning online store. We build secure, user-friendly e-commerce platforms that convert.",
        price: "From ₹2,40,000",
        icon: <Globe className="w-10 h-10 text-pastel-gold" />
    },
    {
        title: "UI/UX Design",
        description: "User-centric interfaces that are intuitive and delightful. We focus on creating seamless journeys for your website visitors.",
        price: "From ₹1,20,000",
        icon: <Layout className="w-10 h-10 text-blue-300" />
    },
    {
        title: "Content Strategy",
        description: "Words matter. We help you define your brand voice and create compelling content that engages and informs your audience.",
        price: "From ₹60,000",
        icon: <PenTool className="w-10 h-10 text-green-300" />
    },
    {
        title: "Social Media Curation",
        description: "Elevate your social presence with curated visuals and strategic planning that aligns with your overall brand aesthetic.",
        price: "From ₹45,000/mo",
        icon: <Camera className="w-10 h-10 text-purple-300" />
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">What We Do</span>
                    <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Comprehensive digital solutions designed to help your business thrive in the modern world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staticServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2rem] bg-pastel-cream/30 border border-transparent hover:border-pastel-gold/20 hover:bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <span className="text-xs font-bold text-pastel-text bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                                    {service.price}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-pastel-text mb-4">{service.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">{service.description}</p>
                            <Link href="/contact">
                                <Button variant="outline" size="sm" className="w-full rounded-xl group-hover:bg-pastel-gold group-hover:text-white group-hover:border-pastel-gold transition-colors">
                                    Book Consultation
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
