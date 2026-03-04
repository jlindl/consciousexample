export default function CanvasGradient() {
    return (
        <>
            <div className="canvas-bg"></div>
            <svg className="noise-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </>
    );
}
