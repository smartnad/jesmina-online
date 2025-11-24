"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Clock, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
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

                            <div className="mt-10 pt-10 border-t border-gray-100">
                                <h4 className="font-bold text-gray-700 mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/___official_jesmina__03?igsh=aGFrczB4ZG94dzZw" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:bg-pastel-gold hover:text-white transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:bg-pastel-gold hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-gray-50 rounded-full text-gray-400 hover:bg-pastel-gold hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl"
                    >
                        {status === 'success' ? (
                            <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-4 font-cursive">Message Sent!</h3>
                                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                                <Button onClick={() => setStatus('idle')} variant="outline">Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-pastel-gold focus:ring-4 focus:ring-pastel-gold/10 outline-none transition-all"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-pastel-gold focus:ring-4 focus:ring-pastel-gold/10 outline-none transition-all"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-pastel-gold focus:ring-4 focus:ring-pastel-gold/10 outline-none transition-all"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-pastel-gold focus:ring-4 focus:ring-pastel-gold/10 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" size="lg" className="w-full py-6 text-lg rounded-2xl" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
