"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealScan } from "../components/RevealScan";

export default function ResourcesPage() {
    const [selectedTool, setSelectedTool] = useState<any>(null);

    const tools = [
        {
            name: "Excalidraw",
            description: "ExcaliDraw Whiteboard (EDW)",
            image: "/excali.jpg",
            link: "https://excalidraw.com",
            tag: "Whiteboard",
            why: "Excalidraw provides a superior collaborative drawing experience with faster performance and a more intuitive toolset. It has officially replaced Cassini following its deprecation, as Cassini no longer lived up to our high technical expectations.",
            initials: "ED"
        },
        {
            name: "Orama AI MNGR",
            description: "Orama MNGR",
            image: "/MNGR.png",
            link: "https://orama-ai-manager.vercel.app/",
            tag: "AI Management",
            why: "We use the Orama AI Manager app to centralize and orchestrate the AI components that power our personalized tutoring experience. It manages model selection, modes, and session state, allowing us to reliably provide AI-assisted services!",
            initials: "OM"
        }
    ];

    return (
        <div className="min-h-screen py-24 px-6 relative text-white">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <RevealScan>
                    <h1 className="text-8xl font-bold mb-4 italic">
                        <span className="text-moving-vibrant text-vibrant-glow">RESOURCES.</span>
                    </h1>
                </RevealScan>

                {/* Subjects Section */}
                <div className="mt-24">
                    <RevealScan>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-content-gray mb-8 meta-mono">Subjects</h2>
                    </RevealScan>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group cursor-default">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Integrated Math 1-3</h3>
                            <p className="text-content-gray text-xs meta-mono uppercase">Based on Anderson's/Santanna's class progress</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group cursor-default">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Pre AP Biology</h3>
                            <p className="text-content-gray text-xs meta-mono uppercase">Advanced Placement Prep</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group cursor-default">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Pre AP English 1-2</h3>
                            <p className="text-content-gray text-xs meta-mono uppercase">Based on Safai's class progress</p>
                        </div>

                        <div className="glass-vibrant rounded-2xl p-8 hover:translate-y-[-4px] transition-transform duration-300 group cursor-default">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Chemistry</h3>
                            <p className="text-content-gray text-xs meta-mono uppercase">Based on Ponce's class progress</p>
                        </div>
                    </div>
                </div>

                {/* Hours & Contact Section */}
                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    <div className="glass-vibrant rounded-2xl p-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-content-gray mb-6 meta-mono">Hours</h2>
                            <p className="text-3xl font-bold mb-8">Tutoring is available after school and during A lunch!</p>
                        </div>
                        <Link
                            href="https://calendar.app.google/vyoLiYipnYVCcVua7"
                            target="_blank"
                            className="text-xl text-accent-red font-bold hover:underline underline-offset-8 flex items-center gap-2"
                        >
                            See Calendar.
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>

                    <div className="glass-vibrant rounded-2xl p-10">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-content-gray mb-6 meta-mono">Contact</h2>
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-xl font-bold">951-842-9745 (CE)</p>
                                <p className="text-sm text-content-gray meta-mono">cerwin42451@beaumontusd.k12.ca.us</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">909-353-8775 (JM)</p>
                                <p className="text-sm text-content-gray meta-mono">jmccarthy35750@beaumontusd.k12.ca.us</p>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <Link
                                    href="https://instagram.com/oramaatbhs"
                                    target="_blank"
                                    className="flex items-center gap-3 group/insta"
                                >
                                    <div className="p-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-lg opacity-80 group-hover/insta:opacity-100 transition-opacity">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold group-hover:text-accent-red transition-colors">@oramaatbhs</p>
                                        <p className="text-[10px] text-content-gray meta-mono uppercase tracking-widest">Official Instagram</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Things We Use Section */}
                <div className="mt-24">
                    <RevealScan>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-content-gray mb-8 meta-mono">Things We Use</h2>
                    </RevealScan>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                layoutId={`tool-card-${tool.name}`}
                                onClick={() => setSelectedTool(tool)}
                                className="group block perspective-1000 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="glass-vibrant aspect-[16/9] rounded-3xl relative overflow-hidden transform-gpu transition-all duration-700 group-hover:scale-[1.02] border border-white/10 active:scale-95 shadow-2xl">
                                    {/* Image with overlay */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={tool.image}
                                            alt={tool.name}
                                            fill
                                            className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            loading="eager"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                    </div>

                                    {/* Content inside card */}
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex flex-col gap-2">
                                            <div className="text-[10px] font-bold text-accent-red meta-mono uppercase tracking-[0.3em] mb-1">
                                                {tool.tag}
                                            </div>
                                            <h3 className="text-4xl font-bold tracking-tighter italic">
                                                {tool.name}.
                                            </h3>
                                            <p className="text-content-gray meta-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                                Click to learn more
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cinematic Tool Modal */}
            <AnimatePresence>
                {selectedTool && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTool(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-[1000] cursor-pointer"
                        />
                        <div className="fixed inset-0 flex items-center justify-center p-6 z-[1001] pointer-events-none">
                            <motion.div
                                layoutId={`tool-card-${selectedTool.name}`}
                                className="w-full max-w-4xl glass-strong rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto relative border-trace"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <div className="border-trace-cover" />
                                <div className="flex flex-col md:flex-row relative z-10">
                                    {/* Modal Image Side */}
                                    <div className="w-full md:w-1/2 aspect-square relative bg-black/20">
                                        <Image
                                            src={selectedTool.image}
                                            alt={selectedTool.name}
                                            fill
                                            className="object-cover opacity-90"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <button
                                            onClick={() => setSelectedTool(null)}
                                            className="absolute top-6 left-6 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-accent-red transition-colors group z-20"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M19 12H5M12 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Modal Info Side */}
                                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                                        <div className="mb-12">
                                            <div className="text-accent-red meta-mono text-sm uppercase tracking-[0.3em] mb-4">
                                                {selectedTool.tag}
                                            </div>
                                            <h2 className="text-6xl font-bold tracking-tighter capitalize mb-2 italic">
                                                {selectedTool.name}.
                                            </h2>
                                            <div className="h-1 w-24 bg-accent-red/20 rounded-full" />
                                        </div>

                                        <div className="space-y-8">
                                            <div className="group/item">
                                                <div className="meta-mono text-[10px] text-content-gray uppercase tracking-widest mb-1">Official Name</div>
                                                <div className="text-xl font-medium text-gray-200">
                                                    {selectedTool.description}
                                                </div>
                                            </div>

                                            <div className="group/item">
                                                <div className="meta-mono text-[10px] text-content-gray uppercase tracking-widest mb-1">Why We Use It</div>
                                                <div className="text-lg text-content-gray font-medium leading-relaxed">
                                                    {selectedTool.why}
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <Link
                                                    href={selectedTool.link}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-accent-red/50 hover:scale-[1.02] transition-all group/launch shadow-xl"
                                                >
                                                    <span className="text-sm font-bold meta-mono uppercase tracking-[0.2em] group-hover/launch:text-accent-red transition-colors">
                                                        Launch
                                                    </span>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/40 group-hover/launch:text-accent-red transition-colors">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
