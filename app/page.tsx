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

      {/* What Students Say Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <RevealScan>
              <h2 className="text-6xl md:text-8xl font-bold leading-tight italic text-accent-indigo">
                What Students Say.
              </h2>
            </RevealScan>

            <div className="grid md:grid-cols-2 gap-8 flex-grow max-w-4xl">
              <div className="glass-vibrant rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">
                <p className="text-lg mb-4 leading-relaxed font-medium">
                  Orama provides wonderful and professional tutoring that actually helps. Their approach makes complex concepts clear and supports real learning and understanding.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full bg-accent-indigo flex items-center justify-center overflow-hidden uppercase font-bold text-black border-2 border-white/20">
                    JA
                  </div>
                  <div>
                    <div className="font-semibold">Jeremiah Anaya</div>
                    <div className="text-sm text-content-gray meta-mono uppercase tracking-tighter">Sophomore</div>
                  </div>
                </div>
              </div>

              <div className="glass-vibrant rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">
                <p className="text-lg mb-4 leading-relaxed font-medium">
                  Orama leads very well and asks clarifying questions to ensure full understanding. The visuals/diagrams are extremely helpful.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full bg-accent-gray flex items-center justify-center overflow-hidden font-bold text-black text-xl border-2 border-white/20">
                    ?
                  </div>
                  <div>
                    <div className="font-semibold">Anonymous</div>
                    <div className="text-sm text-content-gray meta-mono uppercase tracking-tighter">Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealScan>
            <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">
              What Makes Us<br />
              <span className="text-accent-indigo font-serif italic">Special?</span>
            </h2>
          </RevealScan>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border-t-2 border-accent-indigo/30 backdrop-blur-xl glass-active lg:hover:-translate-y-4 transition-transform duration-500">
              <div className="text-accent-indigo mb-4 font-mono text-xs tracking-widest uppercase">Integration</div>
              <h3 className="text-2xl font-bold mb-4">Your Control.</h3>
              <p className="text-content-gray leading-relaxed">
                We put the power in your hands. Our systems are built to integrate seamlessly with your existing workflow, giving you total control over how you learn.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 border-white/10 glass-active lg:hover:-translate-y-4 transition-transform duration-500">
              <div className="text-white/40 mb-4 font-mono text-xs tracking-widest uppercase">Accessibility</div>
              <h3 className="text-2xl font-bold mb-4">Free Tutoring.</h3>
              <p className="text-content-gray leading-relaxed">
                Available to all Freshman through Junior students at Beaumont High School. Quality education shouldn't have a price tag.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-2 border-accent-gray/30 glass-active lg:hover:-translate-y-4 transition-transform duration-500">
              <div className="text-accent-gray mb-4 font-mono text-xs tracking-widest uppercase">Excellence.</div>
              <h3 className="text-2xl font-bold mb-4">4.0 GPA Scholars.</h3>
              <p className="text-content-gray leading-relaxed">
                Guided by top-performing students who maintain a 4.0 GPA and lead within ASB. Learn the exact habits and strategies used by those mastering the current curriculum.
              </p>
            </div>
          </div>

          <div className="mt-8 glass-strong glass-active p-10 rounded-[2.5rem] border-white/5 flex flex-col md:flex-row items-center gap-8 lg:hover:scale-[1.01] transition-transform duration-500">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-indigo">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Relevant Curriculum.</h3>
              <p className="text-content-gray leading-relaxed">
                We use actual content from sources like <strong>CPM</strong> and <strong>NGSS</strong> that we have in our own classes. Since the material is the same 95% of the time, we know exactly how to help you master it.
              </p>
            </div>
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
