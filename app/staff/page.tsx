import Image from "next/image";
import { RevealScan } from "../components/RevealScan";

export default function StaffPage() {
    const team = [
        {
            name: "caden erwin",
            role: "Co-Founder, Policies Lead",
            subjects: "IM1, IM2, IM3, Chem, Pre AP Bio Tutor",
            initials: "CE",
            image: "/CADEN_ERWIN.png?v=3",
            date: "Joined in 2025"
        },
        {
            name: "jayden mccarthy",
            role: "Co-Founder",
            subjects: "IM1, IM2, IM3, Chem, Pre AP Bio, Pre AP English 1 & 2 Tutor",
            initials: "JM",
            image: "/JAYDEN_MCCARTHY.JPG",
            date: "Joined in 2025"
        }
    ];

    return (
        <div className="min-h-screen py-24 px-6 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <RevealScan>
                    <h1 className="text-8xl font-bold mb-16 tracking-tighter italic">
                        <span className="text-moving-red">STAFF.</span>
                    </h1>
                </RevealScan>

                <div className="grid gap-24">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 perspective-1000`}
                        >
                            {/* Profile Image */}
                            <div
                                className={`w-full md:w-1/2 aspect-[4/3] glass-active rounded-3xl relative overflow-hidden group transform-gpu transition-all duration-700 hover:scale-[1.02] hover:rotate-1 border-white/5 ${member.name === 'caden erwin' ? '' : 'glass-strong'}`}
                                style={member.name === 'caden erwin' ? { backgroundColor: '#fcfbf9' } : {}}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={`${member.name === 'caden erwin' ? 'object-contain p-8 group-hover:scale-110' : 'object-cover group-hover:scale-105'} opacity-80 group-hover:opacity-100 transition-all duration-700`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 meta-mono text-xs text-accent-red font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {member.date}
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h2 className="text-6xl font-bold mb-4 underline underline-offset-8 decoration-accent-red/50 decoration-4">
                                    {member.name}
                                </h2>
                                <div className="text-2xl font-semibold text-gray-400 mb-6 meta-mono uppercase tracking-tighter">
                                    {member.role}
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                    {member.subjects}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
