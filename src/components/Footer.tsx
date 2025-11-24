import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-cursive text-4xl text-pastel-text mb-4 block">
                            Jesmina
                        </Link>
                        <p className="text-gray-500 max-w-md">
                            Creating beautiful, premium digital experiences for modern brands.
                            Let&apos;s build something amazing together.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-pastel-text mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-gray-500 hover:text-pastel-gold">Services</Link></li>
                            <li><Link href="/portfolio" className="text-gray-500 hover:text-pastel-gold">Portfolio</Link></li>
                            <li><Link href="/about" className="text-gray-500 hover:text-pastel-gold">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-pastel-gold">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-pastel-text mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/___official_jesmina__03?igsh=aGFrczB4ZG94dzZw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pastel-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-pastel-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-pastel-gold transition-colors"><Facebook size={20} /></a>
                            <a href="mailto:jesmina.online@support.com" className="text-gray-400 hover:text-pastel-gold transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Jesmina Online. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
