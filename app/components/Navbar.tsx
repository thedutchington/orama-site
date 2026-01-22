import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-[999] glass-strong rounded-2xl border-white/5 shadow-2xl backdrop-blur-md" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
            <Image
              src="/ORamA.png"
              alt="Orama Logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="text-xl font-bold italic tracking-tighter">orama.</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
            <Link
              href="/"
              className="text-[9px] sm:text-xs font-bold meta-mono tracking-widest hover:text-accent-red transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/resources"
              className="hidden sm:block text-[9px] sm:text-xs font-bold meta-mono tracking-widest hover:text-accent-red transition-colors"
            >
              RESOURCES
            </Link>
            <Link
              href="/staff"
              className="hidden sm:block text-[9px] sm:text-xs font-bold meta-mono tracking-widest hover:text-accent-red transition-colors"
            >
              STAFF
            </Link>
            <Link
              href="/blog"
              className="hidden lg:block text-[9px] sm:text-xs font-bold meta-mono tracking-widest hover:text-accent-red transition-colors"
            >
              BLOG
            </Link>
            <Link
              href="/tos"
              className="hidden lg:block text-[9px] sm:text-xs font-bold meta-mono tracking-widest hover:text-accent-red transition-colors"
            >
              TOS
            </Link>
            <Link
              href="/contact"
              className="px-2 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] md:text-xs font-bold meta-mono tracking-widest hover:bg-accent-red hover:text-white transition-all cursor-pointer relative z-10 border-trace overflow-hidden"
            >
              <div className="border-trace-cover" />
              <span className="relative z-10">BOOKING</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
