import Link from "next/link";
import { RevealScan } from "./components/RevealScan";
import { getSortedPostsData } from "../lib/blog";

export const metadata = {
  title: "Orama | Tutoring, Simplified",
};

export default async function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Cinematic Atmospheric Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dynamic Light Streaks */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-indigo/20 to-transparent blur-sm -translate-y-full hover:translate-y-[100vh] transition-transform duration-[2000ms] ease-in-out"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center perspective-2000">
          <RevealScan>
            <h1 className="text-8xl md:text-[11rem] font-bold mb-8 tracking-tighter transform-gpu transition-all duration-700 hover:scale-[1.05] hover:rotate-[-1deg] select-none italic">
              Tutoring,<br />
              <span className="text-accent-indigo">simplified.</span>
            </h1>
          </RevealScan>
          <RevealScan>
            <p className="text-xl md:text-2xl text-content-gray mb-12 max-w-2xl mx-auto meta-mono leading-relaxed opacity-80">
              Orama is the one-stop-shop for free tutoring for Beaumont high school students.
            </p>
          </RevealScan>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-10 py-5 bg-accent-indigo text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] hover:shadow-[0_0_60px_rgba(79,70,229,0.5)] active:scale-95">
              BOOK A SESSION
            </Link>
            <Link href="/resources" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md">
              EXPLORE RESOURCES
            </Link>
          </div>
        </div>

      </section>

      {/* Hero Branding Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <RevealScan>
            <h2 className="text-8xl md:text-[14rem] font-bold tracking-tighter leading-none italic text-accent-indigo">
              ORAMA.
            </h2>
          </RevealScan>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <RevealScan>
                <h2 className="text-4xl font-bold italic tracking-tighter">Featured.</h2>
              </RevealScan>
            </div>

            <div className="md:w-2/3 space-y-2">
              {(await getSortedPostsData()).filter(p => p.featured).slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 transition-all hover:translate-x-2"
                >
                  <h3 className="text-xl font-bold group-hover:text-accent-indigo transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="text-sm text-white/40 meta-mono uppercase tracking-widest mt-2 sm:mt-0" suppressHydrationWarning>
                    {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric'
                    })}
                  </div>
                </Link>
              ))}

              <div className="pt-8">
                <Link
                  href="/blog"
                  className="text-xs font-bold meta-mono tracking-widest text-accent-indigo hover:underline underline-offset-8 transition-all"
                >
                  VIEW ALL POSTS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
