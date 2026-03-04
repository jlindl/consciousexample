"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
    children,
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            const originX = left + width / 2;
            const originY = top + height / 2;

            const distance = Math.sqrt(Math.pow(clientX - originX, 2) + Math.pow(clientY - originY, 2));

            // Magnetic radius 100px
            if (distance < 100) {
                const x = (clientX - originX) * 0.4;
                const y = (clientY - originY) * 0.4;
                xTo(x);
                yTo(y);
                textXTo(x * 0.5);
                textYTo(y * 0.5);
            } else {
                xTo(0);
                yTo(0);
                textXTo(0);
                textYTo(0);
            }
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`relative inline-flex items-center justify-center transform-gpu ${className}`}
            {...props}
        >
            <span ref={textRef} className="block transform-gpu z-10 pointer-events-none">
                {children}
            </span>
        </button>
    );
}
