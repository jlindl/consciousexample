"use client";

import { useRef } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function SpotlightCard({ children, className = "", ...props }: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card tactile-border bg-[#0B0F14]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 transition-all duration-300 hover:bg-[#121820]/80 group ${className}`}
            {...props}
        >
            <div className="relative z-20 h-full">{children}</div>
        </div>
    );
}
