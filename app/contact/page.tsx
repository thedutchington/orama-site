import Link from "next/link";
import { RevealScan } from "../components/RevealScan";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 px-6 flex items-center justify-center relative">
            <div className="max-w-4xl w-full text-center overflow-visible relative z-10">
                <RevealScan>
                    <h1 className="text-7xl md:text-8xl font-bold mb-16 tracking-tighter italic">
                        <span className="text-moving-vibrant text-vibrant-glow">Booking & Calendar.</span>
                    </h1>
                </RevealScan>

                <div className="glass-vibrant rounded-[3rem] p-16 relative overflow-hidden group shadow-2xl">
                    {/* Cinematic background glow - intensifies on group hover */}
                    <div className="absolute inset-0 bg-radial-gradient from-accent-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <Link
                            href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                            target="_blank"
                            className="inline-block text-4xl md:text-6xl font-bold py-12 px-24 border-2 border-white/10 rounded-3xl bg-black/40 backdrop-blur-md hover:bg-accent-red hover:text-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(255,45,85,0.2)] hover:shadow-[0_0_50px_rgba(255,45,85,0.4)] border-trace overflow-hidden"
                        >
                            <div className="border-trace-cover" />
                            <span className="relative z-10">BOOKING</span>
                        </Link>

                        <div className="mt-12 flex justify-center items-center gap-4 w-full">
                            <div className="h-px bg-white/10 flex-grow max-w-[100px]"></div>
                            <div className="text-white/40 meta-mono tracking-[0.3em] text-[10px] uppercase">Secure Booking Tunnel</div>
                            <div className="h-px bg-white/10 flex-grow max-w-[100px]"></div>
                        </div>
                    </div>

                    {/* Industrial Arrow Accents */}
                    <div className="absolute hidden md:block left-12 top-1/2 -translate-y-1/2 text-accent-red/20 pointer-events-none group-hover:text-accent-red/40 transition-colors duration-700">
                        <svg width="120" height="40" viewBox="0 0 100 40" className="fill-none stroke-current stroke-[1]">
                            <path d="M 0 20 L 90 20 M 70 0 L 90 20 L 70 40" />
                        </svg>
                    </div>
                    <div className="absolute hidden md:block right-12 top-1/2 -translate-y-1/2 text-accent-red/20 rotate-180 pointer-events-none group-hover:text-accent-red/40 transition-colors duration-700">
                        <svg width="120" height="40" viewBox="0 0 100 40" className="fill-none stroke-current stroke-[1]">
                            <path d="M 0 20 L 90 20 M 70 0 L 90 20 L 70 40" />
                        </svg>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
                    <div className="glass-vibrant rounded-2xl p-6">
                        <h3 className="text-gray-400 font-bold mb-2 uppercase text-[10px] tracking-[0.2em] meta-mono">Office Hours</h3>
                        <p className="text-xl font-medium">Live Availability via Google Calendar</p>
                    </div>
                    <div className="glass-vibrant rounded-2xl p-6">
                        <h3 className="text-gray-400 font-bold mb-2 uppercase text-[10px] tracking-[0.2em] meta-mono">Direct Support</h3>
                        <p className="text-lg opacity-80 meta-mono lowercase">cerwin42451@beaumontusd.k12.ca.us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
