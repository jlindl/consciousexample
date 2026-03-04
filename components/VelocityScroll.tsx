"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function VelocityScroll({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width: 768px)", () => {
            let proxy = { skew: 0 };
            const skewSetter = gsap.quickSetter(containerRef.current, "skewY", "deg");
            const clamp = gsap.utils.clamp(-5, 5); // Max skew 5deg

            ScrollTrigger.create({
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    const skew = clamp(velocity / -300);

                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                        proxy.skew = skew;
                        gsap.to(proxy, {
                            skew: 0,
                            duration: 0.8,
                            ease: "power4.out",
                            overwrite: true,
                            onUpdate: () => skewSetter(proxy.skew)
                        });
                    }
                }
            });
        });

        return () => matchMedia.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full transform-gpu transform-origin-center">
            {children}
        </div>
    );
}
