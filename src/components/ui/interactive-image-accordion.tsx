"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Import images directly from the source folder
import item1 from '@/app/portfolio/portfolioimages/item-1.png';
import item2 from '@/app/portfolio/portfolioimages/item-2.png';
import item3 from '@/app/portfolio/portfolioimages/item-3.png';
import item4 from '@/app/portfolio/portfolioimages/item-4.png';
import item5 from '@/app/portfolio/portfolioimages/item-5.png';
import item6 from '@/app/portfolio/portfolioimages/item-6.png';
import item7 from '@/app/portfolio/portfolioimages/item-7.png';
import item8 from '@/app/portfolio/portfolioimages/item-8.png';
import item9 from '@/app/portfolio/portfolioimages/item-9.png';
import item10 from '@/app/portfolio/portfolioimages/item-10.png';
import item11 from '@/app/portfolio/portfolioimages/item-11.png';
import item12 from '@/app/portfolio/portfolioimages/item-12.png';
import item13 from '@/app/portfolio/portfolioimages/item-13.png';
import item14 from '@/app/portfolio/portfolioimages/item-14.png';

// --- Data for the image accordion ---
const accordionItems = [
    { id: 1, title: 'Project One', imageSrc: item1 },
    { id: 2, title: 'Project Two', imageSrc: item2 },
    { id: 3, title: 'Project Three', imageSrc: item3 },
    { id: 4, title: 'Project Four', imageSrc: item4 },
    { id: 5, title: 'Project Five', imageSrc: item5 },
    { id: 6, title: 'Project Six', imageSrc: item6 },
    { id: 7, title: 'Project Seven', imageSrc: item7 },
    { id: 8, title: 'Project Eight', imageSrc: item8 },
    { id: 9, title: 'Project Nine', imageSrc: item9 },
    { id: 10, title: 'Project Ten', imageSrc: item10 },
    { id: 11, title: 'Project Eleven', imageSrc: item11 },
    { id: 12, title: 'Project Twelve', imageSrc: item12 },
    { id: 13, title: 'Project Thirteen', imageSrc: item13 },
    { id: 14, title: 'Project Fourteen', imageSrc: item14 },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onClick, onMouseEnter }: { item: typeof accordionItems[0], isActive: boolean, onClick: () => void, onMouseEnter: () => void }) => {
    return (
        <div
            className={`
        relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        flex-shrink-0
        ${isActive ? 'w-[75vw] sm:w-[350px] md:w-[400px]' : 'w-[15vw] sm:w-[50px] md:w-[60px]'}
      `}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                />
            </div>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Caption Text */}
            <span
                className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 text-center px-2 w-full'
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-0 md:opacity-100' // Hide text on mobile when inactive
                    }
        `}
            >
                {item.title}
            </span>
        </div>
    );
};


// --- Main App Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-white font-sans w-full">
            <section className="container mx-auto px-4 py-8 md:py-24">
                <div className="flex flex-col gap-8 md:gap-12">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
                            Transforming Ideas into Digital Reality
                        </h1>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
                            We build high-performance web and mobile applications that drive growth and engagement. Explore our diverse portfolio of successful projects.
                        </p>
                    </div>

                    {/* Accordion Section - Full Width */}
                    <div className="w-full">
                        <div className="flex flex-row items-center justify-start xl:justify-center gap-2 md:gap-4 overflow-x-auto p-4 scrollbar-hide snap-x">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                    onClick={() => handleItemClick(index)}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-4 text-sm text-gray-400 md:hidden flex items-center justify-center gap-2">
                            <span>Swipe & Tap to explore</span>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="#contact"
                            className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Start a Project
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
