"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Format the slug into a readable title (e.g., "web-development" -> "Web Development")
    const title = slug
        ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        : "Service Details";

    return (
        <div className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-pastel-gold mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Services
                </Link>

                <h1 className="font-cursive text-5xl text-pastel-text mb-6">{title}</h1>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                    We offer professional {title.toLowerCase()} services tailored to your specific needs.
                    Our team of experts ensures high-quality delivery and exceptional results.
                </p>

                <div className="bg-pastel-cream/30 rounded-3xl p-8 mb-12 border border-transparent hover:border-pastel-gold/20 transition-all">
                    <h2 className="text-2xl font-bold text-pastel-text mb-6">What&apos;s Included</h2>
                    <ul className="space-y-4">
                        {[
                            "Initial Consultation & Strategy",
                            "Custom Design & Development",
                            "Quality Assurance & Testing",
                            "Ongoing Support & Maintenance",
                            "Professional Project Management"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-pastel-gold mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                        <Button className="w-full h-12 text-lg rounded-xl bg-pastel-text hover:bg-pastel-gold text-white transition-colors">
                            Book This Service
                        </Button>
                    </Link>
                    <Link href="/portfolio" className="flex-1">
                        <Button variant="outline" className="w-full h-12 text-lg rounded-xl border-2 hover:bg-gray-50 transition-colors">
                            View Related Work
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
