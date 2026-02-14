"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
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
          localStorage.setItem('orama_loc', `${data.city} ${data.region_code}`);
        }
      } catch (error) {
        const cached = localStorage.getItem('orama_loc');
        if (cached) setLocation(cached);
        else setLocation("EARTH");
      }
    };

    updateTime();
    fetchLocation();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] pointer-events-none p-4 flex justify-between items-start">
      {/* Top Left Logo */}
      <nav className="pointer-events-auto">
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 group bg-glass-bg backdrop-blur-3xl border border-glass-border px-5 py-2.5 rounded-2xl shadow-xl"
        >
          <span className="text-xl font-bold tracking-tighter text-accent-indigo italic">
            orama.
          </span>
        </Link>
      </nav>

      {/* Top Right Meta */}
      <nav className="pointer-events-auto">
        <div className="bg-glass-bg backdrop-blur-3xl border border-glass-border px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-4 min-w-[150px] justify-center">
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
            <div className="w-24 h-4 bg-white/5 animate-pulse rounded" />
          )}
        </div>
      </nav>
    </div>
  );
}