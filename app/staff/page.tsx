"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealScan } from "../components/RevealScan";

export default function StaffPage() {
    const [selectedMember, setSelectedMember] = useState<any>(null);

    const team = [
        {
            name: "Caden Erwin",
            role: "Co-Founder, Policies Lead",
            email: "cerwin42451@beaumontusd.k12.ca.us",
            phone: "+1 951-842-9745",
            instagram: "@thedutcher_bhs",
            subjects: "Tutor: IM1-IM3, Chem, Pre AP Bio",
            initials: "CE",
            image: "/CADEN_ERWIN.png?v=4",
            date: "Joined in 2025"
        },
        {
            name: "Jayden McCarthy",
            role: "Co-Founder",
            email: "jmccarthy35750@beaumontusd.k12.ca.us",
            phone: "+1 909-353-8775",
            instagram: "@jayking00014",
            subjects: "Tutor: IM1-IM3, Chem, Pre AP Bio, Pre AP English 1 & 2",
            initials: "JM",
            image: "/JAYDEN_MCCARTHY.JPG?v=3",
            date: "Joined in 2025"
        }
    ];

    return (
        <div className="min-h-screen py-24 px-6 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <RevealScan>
                    <h1 className="text-8xl font-bold mb-16 tracking-tighter italic text-accent-indigo">
                        STAFF.
                    </h1>
                </RevealScan>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            layoutId={`card-${member.name}`}
                            onClick={() => setSelectedMember(member)}
                            className="group cursor-pointer perspective-1000"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                className={`aspect-[4/5] rounded-3xl relative overflow-hidden transform-gpu transition-all duration-700 group-hover:scale-[1.01] border border-white/5 active:scale-95 ${member.name === "Caden Erwin" ? "" : "glass-vibrant"}`}
                                style={member.name === "Caden Erwin" ? { backgroundColor: "#fcfbf9" } : {}}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={`${member.name === 'caden erwin' ? 'object-contain p-12' : 'object-cover'} opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <h2 className="text-4xl font-bold mb-2 tracking-tighter capitalize">
                                        {member.name}
                                    </h2>
                                    <div className="text-sm font-bold text-accent-indigo meta-mono uppercase tracking-[0.2em]">
                                        {member.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Cinematic Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-[1000] cursor-pointer"
                        />
                        <div className="fixed inset-0 flex items-center justify-center p-6 z-[1001] pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedMember.name}`}
                                className="w-full max-w-4xl glass-strong rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto relative border-trace"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <div className="border-trace-cover" />
                                <div className="flex flex-col md:flex-row relative z-10">
                                    {/* Modal Image Side */}
                                    <div
                                        className={`w-full md:w-1/2 aspect-square relative ${selectedMember.name === 'caden erwin' ? 'bg-[#fcfbf9]' : 'bg-black/20'}`}
                                    >
                                        <Image
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            fill
                                            className={`${selectedMember.name === 'caden erwin' ? 'object-contain p-12' : 'object-cover'} opacity-90`}
                                        />
                                        <button
                                            onClick={() => setSelectedMember(null)}
                                            className="absolute top-6 left-6 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-accent-indigo transition-colors group z-20"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M19 12H5M12 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Modal Info Side */}
                                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                                        <div className="mb-12">
                                            <div className="text-accent-indigo meta-mono text-sm uppercase tracking-[0.3em] mb-4">
                                                {selectedMember.role}
                                            </div>
                                            <h2 className="text-6xl font-bold tracking-tighter capitalize mb-2 italic">
                                                {selectedMember.name}.
                                            </h2>
                                            <div className="h-1 w-24 bg-accent-indigo/20 rounded-full" />
                                        </div>

                                        <div className="space-y-8">
                                            <div className="group/item">
                                                <div className="meta-mono text-[10px] text-content-gray uppercase tracking-widest mb-1">Email Address</div>
                                                <div className="text-xl font-medium text-gray-200 group-hover/item:text-accent-indigo transition-colors break-all">
                                                    {selectedMember.email}
                                                </div>
                                            </div>

                                            <div className="group/item">
                                                <div className="meta-mono text-[10px] text-content-gray uppercase tracking-widest mb-1">Contact Phone</div>
                                                <div className="text-xl font-medium text-gray-200 group-hover/item:text-accent-indigo transition-colors">
                                                    {selectedMember.phone}
                                                </div>
                                            </div>

                                            <div className="group/item">
                                                <div className="meta-mono text-[10px] text-content-gray uppercase tracking-widest mb-1">Specializations</div>
                                                <div className="text-lg text-content-gray font-medium leading-relaxed">
                                                    {selectedMember.subjects}
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <a
                                                    href={`https://instagram.com/${selectedMember.instagram.replace('@', '')}`}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group/insta"
                                                >
                                                    <div className="text-white/40 group-hover/insta:text-accent-indigo transition-colors">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                                    </div>
                                                    <span className="text-sm font-bold meta-mono uppercase tracking-widest text-gray-300 group-hover/insta:text-white transition-colors">
                                                        {selectedMember.instagram}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-12 flex items-center gap-4 text-xs text-content-gray meta-mono uppercase tracking-widest">
                                            <span className="w-2 h-2 bg-accent-indigo rounded-full animate-pulse" />
                                            {selectedMember.date}
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
