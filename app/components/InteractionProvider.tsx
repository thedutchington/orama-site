"use client";

import React, { createContext, useContext, useEffect } from 'react';

const InteractionContext = createContext(null);

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
        <InteractionContext.Provider value={null}>
            <div className="relative z-10" suppressHydrationWarning>
                {children}
            </div>
            {mounted && (
                <div className="mesh-gradient pointer-events-none fixed inset-0 z-0" aria-hidden="true">
                    {/* Global Drifting Orbs to prevent section seams */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red/10 rounded-full blur-[120px] animate-drift"></div>
                    <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-red/5 rounded-full blur-[100px] animate-drift-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-gray/5 rounded-full blur-[150px] animate-pulse"></div>
                </div>
            )}
        </InteractionContext.Provider>
    );
};
