"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { calculateGPA, CourseEntry, Grade, ClassType } from "@/lib/utils/gpa-logic";

export default function GPACalculator({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [courses, setCourses] = useState<CourseEntry[]>([
        { id: '1', name: '', grade: 'A', type: 'Regular' }
    ]);
    const [results, setResults] = useState({ unweighted: 0, weighted: 0 });

    useEffect(() => {
        setResults(calculateGPA(courses));
    }, [courses]);

    const addCourse = () => {
        setCourses([...courses, { id: Math.random().toString(), name: '', grade: 'A', type: 'Regular' }]);
    };

    const removeCourse = (id: string) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    const updateCourse = (id: string, updates: Partial<CourseEntry>) => {
        setCourses(courses.map(c => c.id === id ? { ...c, ...updates } : c));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-glass-bg backdrop-blur-3xl border border-glass-border rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white mb-1 italic">GPA Calculator.</h2>
                                <p className="text-xs meta-mono text-white/40 uppercase tracking-widest">Advisory Tool v2.0</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Courses List */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-4">
                            {courses.map((course) => (
                                <div key={course.id} className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group">
                                    <input
                                        type="text"
                                        placeholder="Course Name..."
                                        value={course.name}
                                        onChange={(e) => updateCourse(course.id, { name: e.target.value })}
                                        className="flex-1 bg-transparent border-none outline-none text-white font-medium placeholder:text-white/20 meta-mono text-sm"
                                    />

                                    <select
                                        value={course.type}
                                        onChange={(e) => updateCourse(course.id, { type: e.target.value as ClassType })}
                                        className="bg-black/40 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/80 outline-none hover:border-accent-indigo transition-colors"
                                    >
                                        <option value="Regular">Regular</option>
                                        <option value="Honors">Honors</option>
                                        <option value="AP">AP</option>
                                        <option value="IB">IB</option>
                                    </select>

                                    <select
                                        value={course.grade}
                                        onChange={(e) => updateCourse(course.id, { grade: e.target.value as Grade })}
                                        className="bg-black/40 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/80 outline-none hover:border-accent-indigo transition-colors min-w-[60px]"
                                    >
                                        {['A', 'B', 'C', 'D', 'F'].map(g => (
                                            <option key={g} value={g}>{g}</option>
                                        ))}
                                    </select>

                                    <button
                                        onClick={() => removeCourse(course.id)}
                                        className="p-2 text-white/20 hover:text-red-400 transition-colors"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={addCourse}
                                className="w-full py-4 border-2 border-dashed border-white/10 rounded-2xl text-white/40 hover:text-accent-indigo hover:border-accent-indigo transition-all flex items-center justify-center gap-2 group italic font-bold"
                            >
                                <PlusIcon className="w-5 h-5" />
                                ADD COURSE
                            </button>
                        </div>

                        {/* Footer Summary */}
                        <div className="p-8 bg-accent-indigo/10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                            <div className="flex gap-12">
                                <div>
                                    <div className="text-[10px] meta-mono text-white/40 uppercase tracking-widest mb-1">Unweighted</div>
                                    <div className="text-4xl font-bold italic tracking-tighter text-white">
                                        {results.unweighted.toFixed(2)}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] meta-mono text-white/40 uppercase tracking-widest mb-1">Weighted</div>
                                    <div className="text-4xl font-bold italic tracking-tighter text-accent-indigo-light">
                                        {results.weighted.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="px-8 py-4 bg-accent-indigo text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl active:scale-95"
                            >
                                DONE
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
