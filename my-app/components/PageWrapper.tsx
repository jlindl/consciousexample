"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 0,
                duration: 1.2,
                ease: "power3.inOut"
            }, 0);

            tl.fromTo(
                wrapperRef.current,
                { scale: 1.05 },
                { scale: 1, duration: 1.8, ease: "power4.out" },
                0
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[100] bg-black pointer-events-none"
            />
            <main ref={wrapperRef} className="relative w-full h-full transform-origin-center">
                {children}
            </main>
        </>
    );
}
