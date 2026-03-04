"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (navRef.current) {
            ScrollTrigger.create({
                start: "top -50",
                end: 99999,
                toggleClass: {
                    className: "py-3",
                    targets: navRef.current
                },
            });
            ScrollTrigger.create({
                start: "top -50",
                end: 99999,
                toggleClass: {
                    className: "py-6",
                    targets: navRef.current
                },
                onToggle: self => {
                    if (self.isActive) {
                        navRef.current?.classList.remove('py-6');
                        navRef.current?.classList.add('py-3');
                    } else {
                        navRef.current?.classList.add('py-6');
                        navRef.current?.classList.remove('py-3');
                    }
                }
            });
        }
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 ease-[power4.out] backdrop-blur-xl bg-black/20 tactile-border"
        >
            <div className="font-mono text-lg font-bold tracking-tighter uppercase text-white">
                Conscious<span className="text-[#2563EB]">.Solutions</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#work" className="hover:text-white transition-colors">Work</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
            </div>
            <button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-500 transition-colors">
                Health Check
            </button>
        </nav>
    );
}
