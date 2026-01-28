import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/50 backdrop-blur-xl pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
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
                    </div>

                    {/* Services Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Services</h4>
                        <Link
                            href="https://orama-ai-manager.vercel.app/"
                            className="text-sm text-content-gray hover:text-accent-red transition-colors w-fit font-medium"
                        >
                            MNGR
                        </Link>
                    </div>

                    {/* Legal Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Legal</h4>
                        <Link
                            href="/tos"
                            className="text-sm text-content-gray hover:text-accent-red transition-colors w-fit font-medium"
                        >
                            Terms of Service
                        </Link>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-content-gray meta-mono">Direct Contact</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-300 font-bold">
                            <p>951-842-9745 (CE)</p>
                            <p>909-353-8775 (JM)</p>
                        </div>
                        <div className="flex flex-col gap-1 text-[9px] text-content-gray meta-mono lowercase mt-2">
                            <p>cerwin42451@beaumontusd.k12.ca.us</p>
                            <p>jmccarthy35750@beaumontusd.k12.ca.us</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <div className="text-[15px] text-white/20 meta-mono uppercase tracking-[0.5em]">
                        v1.0.2 // 2026
                    </div>
                </div>
            </div>
        </footer>
    );
}
