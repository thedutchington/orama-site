"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.footer
            ref={ref}
            className="border-t border-white/5 bg-black/50 backdrop-blur-xl pt-24 pb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Brand Column */}
                    <motion.div
                        className="flex flex-col gap-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <Image
                                src="/ORamA.png"
                                alt="Orama Logo"
                                width={32}
                                height={32}
                                className="dark:invert"
                            />
                            <span className="text-xl font-bold italic tracking-tighter">orama.</span>
                        </div>
                        <p className="text-[10px] text-content-gray max-w-[200px] leading-relaxed meta-mono uppercase tracking-widest">
                            Built by caden erwin & jayden mccarthy
                            <br />
                            Est. 2026 // Rights Reserved
                        </p>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Services</h4>
                        <Link
                            href="https://orama-cassini.vercel.app/"
                            target="_blank"
                            className="text-sm text-content-gray hover:text-accent-red transition-colors w-fit font-medium"
                        >
                            Cassini Whiteboard
                        </Link>
                    </motion.div>

                    {/* Legal Column */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Legal</h4>
                        <Link
                            href="/tos"
                            className="text-sm text-content-gray hover:text-accent-red transition-colors w-fit font-medium"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="https://github.com/Orama-Tech-Tutoring/Cassini/blob/main/LICENSE.md"
                            target="_blank"
                            className="text-sm text-content-gray hover:text-accent-red transition-colors w-fit font-medium"
                        >
                            CSLA License
                        </Link>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        className="flex flex-col gap-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Direct Contact</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-300 font-bold">
                            <p>951-842-9745 (CE)</p>
                            <p>909-353-8775 (JM)</p>
                        </div>
                        <div className="flex flex-col gap-1 text-[9px] text-content-gray meta-mono lowercase mt-2">
                            <p>cerwin42451@beaumontusd.k12.ca.us</p>
                            <p>jmccarthy35750@beaumontusd.k12.ca.us</p>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <div className="text-[15px] text-white/20 meta-mono uppercase tracking-[0.5em]">
                        v1.0.2 // 2026-January-22-b Release
                    </div>
                </div>
            </div>
        </footer>
    );
}
