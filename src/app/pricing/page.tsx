"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const staticPlans = [
    {
        name: "The Essential",
        price: "₹1,25,000",
        description: "Perfect for small businesses and startups looking to establish a professional online presence.",
        features: [
            "Custom 5-Page Website",
            "Mobile Responsive Design",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "Social Media Links",
            "2 Weeks of Support"
        ],
        popular: false
    },
    {
        name: "The Signature",
        price: "₹2,50,000",
        description: "Our most popular package for growing brands that need a robust and stunning platform.",
        features: [
            "Custom 10-Page Website",
            "CMS Integration (Blog)",
            "Advanced SEO Strategy",
            "Newsletter Integration",
            "Google Analytics Setup",
            "Speed Optimization",
            "1 Month of Support"
        ],
        popular: true
    },
    {
        name: "The Empire",
        price: "₹4,50,000+",
        description: "The ultimate solution for established businesses requiring e-commerce or complex functionality.",
        features: [
            "Unlimited Pages",
            "Full E-Commerce Setup",
            "Custom Functionality",
            "Payment Gateway Setup",
            "User Accounts & Login",
            "Priority 24/7 Support",
            "Brand Style Guide"
        ],
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-pastel-cream/30 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">Investment</span>
                    <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-6">Transparent Pricing</h1>
                    <p className="text-xl text-gray-500">Invest in a website that pays for itself.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {staticPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative p-8 rounded-[2.5rem] bg-white transition-all duration-500 hover:-translate-y-2",
                                plan.popular
                                    ? "border-2 border-pastel-gold shadow-2xl shadow-pastel-gold/10 z-10 scale-105"
                                    : "border border-gray-100 shadow-lg"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pastel-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                                    <Star size={14} fill="currentColor" /> Most Popular
                                </div>
                            )}
                            <div className="text-center mb-8 pt-4">
                                <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase tracking-wide">{plan.name}</h3>
                                <div className="text-5xl font-bold text-pastel-text mb-4">{plan.price}</div>
                                <p className="text-gray-500 text-sm leading-relaxed px-4">{plan.description}</p>
                            </div>
                            <div className="w-full h-px bg-gray-100 mb-8"></div>
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-600 text-sm">
                                        <div className="mt-0.5 mr-3 min-w-[1.25rem]">
                                            <Check className="w-5 h-5 text-pastel-gold" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact">
                                <Button
                                    variant={plan.popular ? "default" : "outline"}
                                    className={cn(
                                        "w-full py-6 rounded-xl text-lg",
                                        plan.popular ? "shadow-lg shadow-pastel-gold/20" : ""
                                    )}
                                >
                                    Choose {plan.name}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
