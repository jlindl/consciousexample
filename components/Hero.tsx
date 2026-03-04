"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split text logic
            const splitTextRefs = gsap.utils.toArray<HTMLElement>('.split-line div');

            gsap.fromTo(
                splitTextRefs,
                { y: "100%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "power4.out",
                    delay: 0.5 // Wait for page scale to start
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex items-end px-6 md:px-12 pb-16 md:pb-24">
            {/* Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0F14_100%)] opacity-80" />

            <div className="relative z-10 w-full max-w-[80vw]">
                <div className="mb-6 flex space-x-4 uppercase tracking-widest text-[#2563EB] text-xs font-mono font-bold">
                    <span>Legal Sector Specialists</span>
                    <span className="text-white/30">•</span>
                    <span>Since 2003</span>
                </div>

                <h1 className="leading-[0.9] font-medium tracking-tight" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
                    <div className="split-line overflow-hidden"><div className="inline-block">High-Performance</div></div>
                    <div className="split-line overflow-hidden"><div className="inline-block">Law Firm Websites</div></div>
                    <div className="split-line overflow-hidden text-neutral-500"><div className="inline-block">That Drive Growth.</div></div>
                </h1>

                <div className="mt-12 flex items-center gap-6">
                    <button className="bg-[#2563EB] hover:bg-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-colors">
                        Get a Free Website Health Check
                    </button>
                    <p className="text-white/50 max-w-sm text-sm">
                        Full-service digital marketing including SEO, PPC, branding and content.
                    </p>
                </div>
            </div>
        </section>
    );
}
