import Link from "next/link";
import { RevealScan } from "../components/RevealScan";

export default function TOSPage() {
    return (
        <div className="min-h-screen py-24 px-6 flex items-center justify-center relative">
            <div className="max-w-4xl w-full text-center relative z-10">
                <RevealScan>
                    <h1 className="text-9xl font-bold mb-16 tracking-tight italic text-accent-indigo">
                        TOS.
                    </h1>
                </RevealScan>

                <div className="glass-vibrant rounded-[3rem] p-20 relative overflow-hidden group">
                    {/* Cinematic background glow */}
                    <div className="absolute inset-0 bg-radial-gradient from-accent-indigo/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <Link
                            href="https://docs.google.com/document/d/1u6-Ij8HUsSvo7aIFT95KPiEN_C4cUXIoUdrpgI-obLc/edit?usp=sharing"
                            target="_blank"
                            className="inline-block text-4xl md:text-6xl font-bold py-12 px-24 border-2 border-accent-indigo/50 rounded-2xl bg-black/40 backdrop-blur-md hover:bg-accent-indigo hover:text-white transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_50px_rgba(79,70,229,0.3)]"
                        >
                            CLICK ME
                        </Link>

                        <div className="mt-12 flex justify-center items-center gap-4 w-full">
                            <div className="h-px bg-white/10 flex-grow max-w-[80px]"></div>
                            <div className="text-white/40 meta-mono tracking-[0.4em] text-[10px] uppercase">Legal & Policy Gateway</div>
                            <div className="h-px bg-white/10 flex-grow max-w-[80px]"></div>
                        </div>
                    </div>

                    {/* Symmetrical arrows */}
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
