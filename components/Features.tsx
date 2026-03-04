"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SpotlightCard from "./SpotlightCard";

export default function Features() {
    const containerRef = useRef<HTMLElement>(null);

    // Typewriter effect state
    const [typedText, setTypedText] = useState("");
    const fullText = "Analyzing competitors... \nScanning organic footprint... \nIdentifying growth gaps... \nGenerating strategic roadmap.";

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Background typography parallax
            gsap.to(".bg-type text", {
                xPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            // Reveal on scroll
            gsap.fromTo(
                ".bento-card",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Typewriter logic simulation on hover
    const handleTypewriterHover = () => {
        if (typedText.length === fullText.length) return;
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
    };

    return (
        <section ref={containerRef} id="services" className="relative w-full py-[clamp(6rem,15vh,12rem)] px-6 md:px-12 overflow-hidden">

            {/* Editorial Overlapping Typography Background */}
            <div className="absolute top-1/2 left-0 w-[200%] -translate-y-1/2 pointer-events-none z-0 opacity-5 select-none">
                <svg viewBox="0 0 1000 200" className="w-full h-auto bg-type">
                    <text x="0" y="150" fontFamily="monospace" fontSize="180" fontWeight="bold" fill="white">
                        DIAGNOSTICS & TELEMETRY
                    </text>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                        Engineered for <span className="text-[#2563EB]">Lead Generation</span>.
                    </h2>
                    <p className="text-white/60 max-w-xl text-lg">
                        We don't build brochures. We architect high-performance digital marketing systems designed specifically for ambitious law firms.
                    </p>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                    {/* Diagnostic Shuffler - col-span-8 */}
                    <SpotlightCard className="bento-card md:col-span-8 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                                <span className="font-mono text-sm tracking-widest text-[#2563EB] uppercase">Diagnostic Shuffler</span>
                            </div>
                            <h3 className="text-3xl font-medium mb-4">Real-Time Performance Data</h3>
                            <p className="text-white/50 max-w-md">Our systems dynamically monitor and optimize conversion paths based on live user telemetry and search trends.</p>
                        </div>

                        {/* Live Data Mockup */}
                        <div className="mt-8 flex gap-4 md:gap-8 overflow-hidden font-mono text-xs md:text-sm text-white/40">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#2563EB]">Active Sessions</span>
                                <span className="text-2xl text-white">1,248</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#2563EB]">Conversion Rate</span>
                                <span className="text-2xl text-white">4.2%</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#2563EB]">Search Authority</span>
                                <span className="text-2xl text-white">94/100</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Telemetry Typewriter - col-span-4 */}
                    <SpotlightCard
                        className="bento-card md:col-span-4 flex flex-col min-h-[400px] cursor-crosshair group"
                        onMouseEnter={handleTypewriterHover}
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#2563EB] transition-colors" />
                            <span className="font-mono text-sm tracking-widest text-white/50 uppercase">Telemetry Terminal</span>
                        </div>
                        <h3 className="text-2xl font-medium mb-4">Strategic Auditing</h3>
                        <p className="text-white/50 text-sm mb-auto">Hover to initialize deep scan sequence.</p>

                        <div className="mt-8 w-full h-32 bg-black/50 rounded-lg p-4 font-mono text-xs text-[#2563EB] leading-relaxed border border-white/5 overflow-hidden">
                            {typedText}
                            <span className="animate-pulse">_</span>
                        </div>
                    </SpotlightCard>

                    {/* Card 3 - col-span-5 */}
                    <SpotlightCard className="bento-card md:col-span-5 min-h-[300px] flex flex-col justify-end">
                        <h3 className="text-2xl font-medium mb-3">SEO Architecture</h3>
                        <p className="text-white/50 text-sm">Deep-rooted technical SEO and semantic content structures that dominate legal search results.</p>
                    </SpotlightCard>

                    {/* Card 4 - col-span-7 */}
                    <SpotlightCard className="bento-card md:col-span-7 min-h-[300px] flex flex-col justify-end bg-gradient-to-br from-[#0B0F14]/80 to-[#2563EB]/10">
                        <h3 className="text-2xl font-medium mb-3">Conversion Kinetics</h3>
                        <p className="text-white/50 text-sm max-w-md">Frictionless UX and psychological triggers engineered to turn passive readers into retained clients.</p>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    );
}
