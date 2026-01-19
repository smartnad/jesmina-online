"use client";

import Image from "next/image";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas, ShineBorder, TypeWriter } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/Button";

export const Hero = () => {
    const talkAbout = [
        "Graphic Design",
        "Branding",
        "Web Design",
        "Web Develop",
        "Marketing",
        "UI UX",
        "Social Media",
    ];

    useEffect(() => {
        // Ensuring renderCanvas runs only on client side
        if (typeof window !== 'undefined') {
            renderCanvas();
        }
    }, []);

    return (
        <main className="overflow-hidden">
            <section id="home" className="relative h-screen min-h-[800px] flex flex-col items-center justify-center">
                <div className="absolute inset-0 max-md:hidden top-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
                <div className="flex flex-col items-center justify-center px-6 text-center z-10 w-full">
                    <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-0">
                        <div className="relative flex items-center rounded-full border bg-white/50 backdrop-blur-md px-3 py-1 text-xs text-primary/60 shadow-sm">
                            Experience Premium Digital Services.
                            <Link
                                href="/services"
                                rel="noreferrer"
                                className="ml-1 flex items-center font-semibold text-pastel-gold hover:text-pastel-text transition-colors"
                            >
                                Explore <span aria-hidden="true" className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto max-w-5xl w-full">
                        <div className="relative mx-auto bg-white/30 backdrop-blur-sm border border-white/50 rounded-[3rem] py-16 p-6 shadow-2xl [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">

                            {/* Decorative Plus Icons */}
                            <Plus strokeWidth={4} className="text-pastel-gold absolute -left-5 -top-5 h-10 w-10 animate-pulse-slow" />
                            <Plus strokeWidth={4} className="text-pastel-pink absolute -bottom-5 -left-5 h-10 w-10 animate-pulse-slow animation-delay-2000" />
                            <Plus strokeWidth={4} className="text-pastel-lilac absolute -right-5 -top-5 h-10 w-10 animate-pulse-slow animation-delay-4000" />
                            <Plus strokeWidth={4} className="text-pastel-accent absolute -bottom-5 -right-5 h-10 w-10 animate-pulse-slow" />

                            <h1 className="flex flex-col text-center text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-pastel-text">
                                <span>
                                    Transform Your Vision Into{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-gold to-pastel-accent animate-gradient">Digital Excellence.</span>
                                </span>
                            </h1>

                            <div className="flex items-center mt-6 justify-center gap-2">
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <p className="text-sm font-medium text-green-600">Accepting New Projects</p>
                            </div>
                        </div>

                        <h1 className="mt-12 text-2xl md:text-3xl font-light text-gray-600">
                            Welcome to <span className="font-bold text-pastel-text">Jesmina Online</span>. We specialize in{" "}
                            <span className="text-pastel-gold font-semibold inline-block min-w-[150px] text-left">
                                <TypeWriter strings={talkAbout} />
                            </span>
                        </h1>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <ShineBorder
                                    borderWidth={2}
                                    className="cursor-pointer h-auto w-full sm:w-auto bg-white"
                                    color={["#D4AF37", "#FFB7B2", "#C7CEEA"]}
                                    duration={10}
                                >
                                    <div className="px-8 py-3 text-lg font-medium text-pastel-text">
                                        Start Your Project
                                    </div>
                                </ShineBorder>
                            </Link>
                            <Link href="/portfolio" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl border-2 border-pastel-lilac text-pastel-text hover:bg-pastel-lilac/10 text-lg py-7">
                                    View Portfolio
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <canvas
                    className="pointer-events-none absolute inset-0 mx-auto opacity-60"
                    id="canvas"
                ></canvas>
            </section>
        </main>
    );
};
