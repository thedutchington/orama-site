"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const RevealScan = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`relative overflow-visible ${className}`}>
            <motion.div
                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9, y: 10 }}
                animate={isInView ? {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    y: 0
                } : {}}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1], // Kinetic ease
                    delay: 0.1
                }}
            >
                {children}
            </motion.div>

            {/* Cinematic Flash Effect */}
            <motion.div
                initial={{ width: "0%", opacity: 0, left: "-10%" }}
                animate={isInView ? {
                    width: ["0%", "120%", "120%"],
                    opacity: [0, 1, 0],
                    left: ["-10%", "-10%", "110%"]
                } : {}}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    times: [0, 0.2, 1]
                }}
                className="absolute top-1/2 -translate-y-1/2 h-full bg-gradient-to-r from-transparent via-accent-indigo to-transparent z-10 pointer-events-none mix-blend-plus-lighter blur-xl"
            />
        </div>
    );
};
