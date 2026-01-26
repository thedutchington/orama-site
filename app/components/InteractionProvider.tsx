"use client";

import React, { createContext, useContext, useEffect, useRef } from 'react';

const InteractionContext = createContext(null);

export const InteractionProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = React.useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            document.documentElement.style.setProperty('--mouse-x', `${x}%`);
            document.documentElement.style.setProperty('--mouse-y', `${y}%`);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            document.body.classList.remove('settled');

            timeoutRef.current = setTimeout(() => {
                document.body.classList.add('settled');
            }, 2500);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <InteractionContext.Provider value={null}>
            <div className="relative z-10" suppressHydrationWarning>
                {children}
            </div>
            {mounted && (
                <>
                    {/* Atmospheric Layers */}
                    <div className="mesh-gradient" aria-hidden="true" />
                    <div className="noise-overlay" aria-hidden="true" />
                    <div className="vignette-overlay" aria-hidden="true" />

                    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
                        {/* Global Drifting Orbs - High Intensity */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/30 rounded-full blur-[120px] animate-drift" />
                        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-purple/25 rounded-full blur-[100px] animate-drift-slow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-violet/20 rounded-full blur-[150px] animate-pulse" />

                        {/* High-Fidelity Particles */}
                        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-white/80 rounded-full blur-[1px] animate-pulse" />
                        <div className="absolute top-[45%] left-[60%] w-3 h-3 bg-accent-red/60 rounded-full blur-[2px] animate-drift" />
                        <div className="absolute top-[75%] left-[15%] w-1.5 h-1.5 bg-white/60 rounded-full blur-[1px] animate-drift-slow" />
                        <div className="absolute top-[25%] left-[85%] w-3 h-3 bg-accent-purple/50 rounded-full blur-[2px] animate-pulse" />
                        <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-accent-violet/80 rounded-full blur-[1px] animate-drift" />
                    </div>
                </>
            )}
        </InteractionContext.Provider>
    );
};
