"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-pastel-cream/30 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-pastel-gold font-bold tracking-wider uppercase text-sm">Get In Touch</span>
                    <h1 className="font-cursive text-6xl text-pastel-text mt-4 mb-6">Let&apos;s Start a Conversation</h1>
                    <p className="text-xl text-gray-500">We&apos;d love to hear about your project and how we can help.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full">
                            <h3 className="text-2xl font-bold text-pastel-text mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="bg-pastel-cream p-4 rounded-2xl mr-6 group-hover:bg-pastel-gold group-hover:text-white transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700 mb-1">Email Us</p>
                                        <p className="text-gray-500">jesmina.online@support.com</p>
                                        <p className="text-gray-400 text-sm mt-1">We reply within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="bg-pastel-cream p-4 rounded-2xl mr-6 group-hover:bg-pastel-pink group-hover:text-white transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700 mb-1">Call Us</p>
                                        <p className="text-gray-500">+91 8723912947</p>
                                        <p className="text-gray-400 text-sm mt-1">WhatsApp available</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <div className="bg-pastel-cream p-4 rounded-2xl mr-6 group-hover:bg-pastel-lilac group-hover:text-white transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700 mb-1">Visit Us</p>
                                        <p className="text-gray-500">Tezpur, Assam</p>
                                        <p className="text-gray-500">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8 justify-center"
                    >
                        <a
                            href="https://wa.me/918723912947"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex items-center gap-6 cursor-pointer"
                        >
                            <div className="bg-green-100 p-6 rounded-3xl text-green-600 group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Chat on WhatsApp</h3>
                                <p className="text-gray-500">Direct line to our support team.</p>
                            </div>
                        </a>

                        <a
                            href="mailto:jesmina.online@support.com"
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex items-center gap-6 cursor-pointer"
                        >
                            <div className="bg-blue-100 p-6 rounded-3xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Send an Email</h3>
                                <p className="text-gray-500">Detailed inquiries and proposals.</p>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
