"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const cards = [
    {
        id: "01",
        title: "Brand Architecture",
        description: "Establishing an authoritative and commanding visual identity that resonates with high-net-worth clients and corporate partners.",
        status: "Verified",
        color: "#2563EB"
    },
    {
        id: "02",
        title: "Digital Infrastructure",
        description: "Developing robust, conversion-optimized Next.js and React architectures to handle high volume traffic with zero latency.",
        status: "Active",
        color: "#EEF2FF"
    },
    {
        id: "03",
        title: "Market Capture",
        description: "Deploying multi-channel acquisition strategies leveraging semantic SEO, targeted PPC, and high-authority content syndication.",
        status: "Pending",
        color: "#0B0F14"
    }
];

export default function Protocol() {
    const containerRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width: 768px)", () => {
            const allCards = cardRefs.current;

            allCards.forEach((card, i) => {
                if (i === 0) return; // Skip the first card for the scale/blur effect 

                const previousCard = allCards[i - 1];

                // Pin each card as it enters
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    end: "bottom+=100% top",
                    pin: true,
                    pinSpacing: false,
                });

                // Scale and blur the previous card when the current card scrolls up over it
                gsap.to(previousCard, {
                    scale: 0.9,
                    filter: "blur(20px)",
                    opacity: 0.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });

            // Pin the very first card manually so it stays behind the second card
            ScrollTrigger.create({
                trigger: allCards[0],
                start: "top top",
                end: `+=${window.innerHeight * (allCards.length - 1)}`,
                pin: true,
                pinSpacing: false,
            });

        });

        return () => matchMedia.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-[#0B0F14]">
            {/* Header section for the stack */}
            <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
                    The <span className="text-[#2563EB]">Protocol</span>.
                </h2>
                <p className="text-white/50 max-w-xl text-lg">
                    A systematic, three-phased methodology designed to dominate organic search and maximize lead quality.
                </p>
            </div>

            <div className="relative w-full">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        className="w-full h-screen flex items-center justify-center p-6 md:p-12 sticky top-0"
                        style={{ zIndex: index + 10 }}
                    >
                        <div className="w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl tactile-border bg-[#0B0F14]/90 backdrop-blur-xl flex flex-col md:flex-row shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 transform-gpu">

                            {/* Left Column */}
                            <div className="w-full md:w-1/2 h-full p-12 md:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                                <div className="font-mono text-[10rem] md:text-[15rem] leading-none text-white/5 font-bold tracking-tighter">
                                    {card.id}
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">{card.title}</h3>
                                    <p className="text-xl text-white/60 leading-relaxed font-light">{card.description}</p>
                                </div>
                            </div>

                            {/* Right Column / Visuals */}
                            <div className="w-full md:w-1/2 h-full bg-[#05070a]/50 relative overflow-hidden flex flex-col">
                                <div className="absolute top-8 right-8 flex items-center gap-3 bg-black/40 rounded-full py-2 px-4 backdrop-blur-md border border-white/5">
                                    <div className={`w-2 h-2 rounded-full ${card.id === '01' ? 'bg-[#2563EB] animate-pulse' : card.id === '02' ? 'bg-[#EEF2FF]' : 'bg-white/20'}`}></div>
                                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-white/70">{card.status}</span>
                                </div>

                                <div className="flex-1 flex items-center justify-center p-12">
                                    {/* Abstract geometrical visualization depending on index */}
                                    <div
                                        className="w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20 filter blur-3xl mix-blend-screen"
                                        style={{ background: `radial-gradient(circle, ${card.color} 0%, transparent 70%)` }}
                                    ></div>

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-48 h-48 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: `${20 + index * 5}s` }}></div>
                                        <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-spin-reverse" style={{ animationDuration: `${30 + index * 5}s` }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Pad bottom explicitly so last card can scroll up normally at end, instead of stopping abruptly */}
            <div className="h-screen w-full"></div>
        </section>
    );
}
