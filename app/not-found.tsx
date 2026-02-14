"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
            <div className="text-accent-indigo meta-mono text-xs font-bold tracking-[0.4em] uppercase mb-8">
                Error // 404
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter italic mb-12">
                Lost.
            </h1>

            <p className="text-xl text-white/60 mb-16 max-w-md mx-auto leading-relaxed">
                The page you're searching for has been moved or doesn't exist in the current Advisory environment.
            </p>

            <Link
                href="/"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:border-accent-indigo/50 transition-all flex items-center gap-3 group"
            >
                <span className="meta-mono text-sm tracking-widest">RETURN HOME</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    );
}
