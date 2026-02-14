"use client";

import { RevealScan } from "../components/RevealScan";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 px-6 relative flex items-center justify-center">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <RevealScan>
                    <h1 className="text-8xl md:text-[12rem] font-bold mb-16 tracking-tighter italic text-accent-indigo">
                        BOOKING.
                    </h1>
                </RevealScan>

                <div className="glass-vibrant rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-radial-gradient from-accent-indigo/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <a
                            href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-4xl md:text-6xl font-bold py-10 px-16 md:py-12 md:px-24 border-2 border-accent-indigo/50 rounded-2xl bg-black/40 backdrop-blur-md hover:bg-accent-indigo hover:text-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_30_rgba(79,70,229,0.15)]"
                        >
                            CALENDAR
                        </a>

                        <div className="mt-12 flex justify-center items-center gap-4 w-full">
                            <div className="h-px bg-white/10 flex-grow max-w-[80px]"></div>
                            <div className="text-white/40 meta-mono tracking-[0.4em] text-[10px] uppercase">Official Gateway</div>
                            <div className="h-px bg-white/10 flex-grow max-w-[80px]"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-lg opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
                        <svg width="100%" height="60" viewBox="0 0 500 60" className="stroke-accent-indigo fill-none stroke-[1]">
                            <path d="M 200 30 C 150 30, 50 30, 10 30 M 10 30 L 30 10 M 10 30 L 30 50" />
                            <path d="M 300 30 C 350 30, 450 30, 490 30 M 490 30 L 470 10 M 490 30 L 470 50" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
