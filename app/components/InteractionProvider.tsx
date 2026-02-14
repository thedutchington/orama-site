"use client";

import React, { useEffect } from 'react';

export const InteractionProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            document.documentElement.style.setProperty('--mouse-x', `${x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${y}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative z-10">
            {children}
            {mounted && (
                <>
                    {/* Atmospheric Layers */}
                    <div className="mesh-gradient" aria-hidden="true" />
                    <div className="noise-overlay" aria-hidden="true" />
                    <div className="vignette-overlay" aria-hidden="true" />

                    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
                        {/* Global Drifting Orbs - High Intensity */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-indigo/20 rounded-full blur-[120px] animate-drift" />
                        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-indigo/15 rounded-full blur-[100px] animate-drift-slow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-indigo/10 rounded-full blur-[150px] animate-pulse" />

                        {/* High-Fidelity Particles */}
                        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-white/80 rounded-full blur-[1px] animate-pulse" />
                        <div className="absolute top-[45%] left-[60%] w-3 h-3 bg-accent-indigo/60 rounded-full blur-[2px] animate-drift" />
                        <div className="absolute top-[75%] left-[15%] w-1.5 h-1.5 bg-white/60 rounded-full blur-[1px] animate-drift-slow" />
                        <div className="absolute top-[25%] left-[85%] w-3 h-3 bg-accent-indigo/40 rounded-full blur-[2px] animate-pulse" />
                        <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-accent-indigo/30 rounded-full blur-[1px] animate-drift" />
                    </div>
                </>
            )}
        </div>
    );
};
