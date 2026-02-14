import Link from "next/link";
import { getSortedPostsData } from "../../lib/blog";
import { RevealScan } from "../components/RevealScan";

export const metadata = {
    title: "Blog | Orama",
};

export default async function BlogIndexPage() {
    const allPosts = await getSortedPostsData();

    return (
        <div className="min-h-screen py-24 px-6 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <RevealScan>
                    <h1 className="text-8xl font-bold mb-16 tracking-tighter italic text-accent-indigo">
                        BLOG.
                    </h1>
                </RevealScan>

                <div className="space-y-4">
                    {allPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block border-t border-white/10 py-8 transition-all hover:bg-white/5 px-4 rounded-xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-accent-indigo transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <div className="text-sm text-white/40 meta-mono uppercase tracking-widest">
                                        by {post.author}
                                    </div>
                                </div>
                                <div className="text-sm md:text-base text-white/40 meta-mono font-medium whitespace-nowrap" suppressHydrationWarning>
                                    {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric'
                                    })}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
