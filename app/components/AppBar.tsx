"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import {
    HomeIcon,
    BookOpenIcon,
    UsersIcon,
    NewspaperIcon,
    CalculatorIcon,
    ChatBubbleBottomCenterTextIcon,
    FolderIcon
} from "@heroicons/react/24/outline";
import GPACalculator from "./tools/GPACalculator";
import { AnimatePresence } from "framer-motion";

const DOCK_ITEMS = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Resources", href: "/resources", icon: BookOpenIcon },
    { name: "Staff", href: "/staff", icon: UsersIcon },
    { name: "Blog", href: "/blog", icon: NewspaperIcon },
    { name: "Booking", href: "/contact", icon: ChatBubbleBottomCenterTextIcon },
];

const TOOL_ITEMS = [
    { name: "GPA Calc", icon: CalculatorIcon, id: "gpa" },
];

export default function AppBar() {
    const mouseX = useMotionValue(Infinity);
    const [isGPAOpen, setIsGPAOpen] = useState(false);
    const [isFolderOpen, setIsFolderOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-4 flex items-end gap-3">
                <motion.div
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex items-end gap-3 px-4 py-3 bg-glass-bg backdrop-blur-3xl border border-glass-border rounded-[2rem] shadow-2xl relative"
                >
                    {DOCK_ITEMS.map((item, i) => (
                        <DockIcon
                            key={i}
                            mouseX={mouseX}
                            item={item}
                        />
                    ))}

                    <div className="w-px h-8 bg-white/10 mx-2 self-center" />

                    <div className="relative">
                        <DockIcon
                            mouseX={mouseX}
                            item={{ name: "Tools", icon: FolderIcon }}
                            onClick={() => setIsFolderOpen(!isFolderOpen)}
                        />

                        <AnimatePresence>
                            {isFolderOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: -20 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 bg-glass-bg backdrop-blur-3xl border border-glass-border rounded-3xl shadow-2xl flex flex-col gap-3 min-w-[120px]"
                                >
                                    {TOOL_ITEMS.map((tool) => (
                                        <button
                                            key={tool.id}
                                            onClick={() => {
                                                if (tool.id === 'gpa') setIsGPAOpen(true);
                                                setIsFolderOpen(false);
                                            }}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group text-left whitespace-nowrap"
                                        >
                                            <tool.icon className="w-5 h-5 text-accent-indigo" />
                                            <span className="text-xs font-bold meta-mono tracking-widest">{tool.name}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            <GPACalculator isOpen={isGPAOpen} onClose={() => setIsGPAOpen(false)} />
        </>
    );
}

function DockIcon({ mouseX, item, onClick }: { mouseX: any; item: any, onClick?: () => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const Icon = item.icon;

    const Content = (
        <motion.div
            ref={ref}
            style={{ width }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className={`aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative hover:bg-white/10 transition-colors shadow-lg overflow-visible pointer-events-auto ${onClick ? 'cursor-pointer' : ''}`}
        >
            <Icon className="w-1/2 h-1/2 text-white/80 group-hover:text-accent-indigo transition-colors" />

            {item.label && (
                <span className="absolute -top-1 -right-1 bg-accent-indigo text-[8px] font-bold px-1.5 py-0.5 rounded-full text-white shadow-lg animate-pulse">
                    {item.label}
                </span>
            )}
        </motion.div>
    );

    return (
        <div className="relative group">
            {item.href ? <Link href={item.href}>{Content}</Link> : Content}

            {/* Tooltip */}
            <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-[10px] font-bold meta-mono tracking-widest text-white whitespace-nowrap transition-all duration-200 pointer-events-none ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}>
                {item.name}
            </div>
        </div>
    );
}
