import MagneticButton from "./MagneticButton";

export default function Footer() {
    return (
        <footer className="relative w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden bg-black z-20">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#2563EB] opacity-10 blur-[150px] mix-blend-screen rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-8">
                    Ready for <span className="text-[#2563EB]">Scale</span>?
                </h2>

                <p className="text-white/60 text-lg md:text-xl max-w-xl mb-16">
                    Get a free website health check and discover exactly what’s throttling your organic growth and conversion potential.
                </p>

                <MagneticButton className="bg-[#2563EB] text-white px-10 py-5 rounded-full text-lg font-semibold tracking-wide hover:bg-blue-500 transition-colors shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                    Get a Free Website Health Check
                </MagneticButton>
            </div>

            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center mt-32 border-t border-white/10 pt-8 text-sm text-white/30 font-mono uppercase tracking-widest">
                <span>© {new Date().getFullYear()} Conscious.Solutions</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">System Status</a>
                </div>
            </div>
        </footer>
    );
}
