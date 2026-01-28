"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("LOCATING...");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
    };

    const fetchLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.city && data.region_code) {
          setLocation(`${data.city} ${data.region_code}`);
        } else {
          throw new Error("Location data incomplete");
        }
      } catch (error) {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const city = tz.split('/')[1]?.replace('_', ' ').toUpperCase() || "UNKNOWN";
          setLocation(city);
        } catch (e) {
          setLocation("EARTH");
        }
      }
    };

    updateTime();
    fetchLocation();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Top Left Logo - Safe for SSR */}
      <nav className="fixed top-4 left-4 z-[999] pointer-events-none" suppressHydrationWarning>
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-xl"
        >
          <span className="text-xl font-bold tracking-tighter text-moving-vibrant text-vibrant-glow italic">
            orama.
          </span>
        </Link>
      </nav>

      {/* Top Right Meta - Client Only for dynamic data */}
      <nav className="fixed top-4 right-4 z-[999] pointer-events-none" suppressHydrationWarning={true}>
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-4 pointer-events-auto min-w-[150px] justify-center">
          {mounted ? (
            <>
              <span className="text-[12px] meta-mono tracking-[0.2em] text-white/40">
                {time}
              </span>
              <div className="w-[1px] h-3 bg-white/10" />
              <span className="text-[12px] meta-mono tracking-[0.2em] text-white/80 font-bold uppercase">
                {location}
              </span>
            </>
          ) : (
            <div className="w-24 h-4 bg-white/5 animate-pulse rounded" suppressHydrationWarning />
          )}
        </div>
      </nav>

      {/* Side Trigger - Fixed Middle Right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[1000] pointer-events-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-black/40 backdrop-blur-xl border-y border-l border-white/10 rounded-l-2xl hover:bg-white/5 transition-all group pointer-events-auto shadow-2xl relative"
        >
          <motion.div
            animate={{ rotate: isOpen ? 0 : 180 }}
            className="text-white group-hover:text-accent-red transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Slide-out Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-72 bg-black/90 backdrop-blur-3xl z-[998] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] p-12 flex flex-col justify-center gap-8"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold meta-mono tracking-[0.3em] hover:text-accent-red transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/resources"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold meta-mono tracking-[0.3em] hover:text-accent-red transition-colors"
              >
                RESOURCES
              </Link>
              <Link
                href="/staff"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold meta-mono tracking-[0.3em] hover:text-accent-red transition-colors"
              >
                STAFF
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold meta-mono tracking-[0.3em] hover:text-accent-red transition-colors"
              >
                BLOG
              </Link>
              <Link
                href="/tos"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold meta-mono tracking-[0.3em] hover:text-accent-red transition-colors"
              >
                TOS
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-6 py-3 bg-accent-red rounded-xl text-xs font-bold meta-mono tracking-[0.2em] text-white hover:bg-accent-red/80 hover:scale-105 transition-all text-center shadow-[0_0_20px_rgba(255,45,85,0.3)]"
            >
              BOOKING
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[997] bg-black/10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}