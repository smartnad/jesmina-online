import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes"
});

export const metadata: Metadata = {
    title: "Jesmina Online",
    description: "Premium feminine website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${greatVibes.variable} font-sans bg-pastel-cream text-pastel-text`}>
                <Navbar />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
