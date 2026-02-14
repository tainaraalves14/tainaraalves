import { motion } from 'framer-motion';
import { Cpu, Code2, Globe2, Zap, Rocket, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-40 bg-[#020205] relative overflow-hidden flex items-center">
            {/* Engineering Grid Metadata Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-10 left-10 font-mono text-[10px] text-white space-y-1">
                    <p>SYSTEM_ID: CORE_ARCH_01</p>
                    <p>LOC: 52.3676° N, 4.9041° E</p>
                    <p>STATUS: OPTIMIZED</p>
                </div>
                <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white text-right space-y-1">
                    <p>MODULE: SE_FOUNDATION</p>
                    <p>VERSION: 2.4.0-STABLE</p>
                    <p>© 2024 ARCH_PROTO</p>
                </div>
                {/* Visual grid lines */}
                <div className="absolute inset-0 border-[1px] border-white/5 m-20" />
                <div className="absolute inset-0 border-r-[1px] border-white/5 translate-x-1/2" />
                <div className="absolute inset-0 border-b-[1px] border-white/5 translate-y-1/2" />
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-violet-600/[0.03] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-fuchsia-600/[0.02] rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Visual Core - The "Blueprint" Image / Iconography */}
                    <div className="w-full lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-square max-w-[500px] mx-auto"
                        >
                            {/* Rotating Engineering Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-white/5 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-10 border border-violet-500/10 rounded-full border-dashed"
                            />

                            {/* The Centerpiece: Glassmorphic CPU/Core */}
                            <div className="absolute inset-20 bg-[#050505] border border-white/10 rounded-[3rem] backdrop-blur-3xl shadow-2xl flex items-center justify-center p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-white/5" />
                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-6 border border-violet-500/20 group-hover:scale-110 group-hover:bg-violet-600/20 transition-all duration-700">
                                        <Terminal className="text-violet-400" size={32} />
                                    </div>
                                    <div className="text-center font-mono">
                                        <p className="text-white font-bold tracking-[0.2em] mb-1">LOGIC_FLOW</p>
                                        <div className="h-[2px] w-12 bg-violet-500 mx-auto opacity-50 mb-3" />
                                        <p className="text-slate-500 text-[10px]">EXECUTING_SUCCESS...</p>
                                    </div>
                                </div>

                                {/* Inner Microchips Decoration */}
                                <div className="absolute top-6 left-6 w-3 h-3 bg-white/5 rounded-sm" />
                                <div className="absolute top-6 right-6 w-3 h-3 bg-white/5 rounded-sm" />
                                <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/5 rounded-sm" />
                                <div className="absolute bottom-6 right-6 w-3 h-3 bg-white/5 rounded-sm" />
                            </div>

                            {/* Floating Stats Around the Core */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                            >
                                <Cpu size={24} className="text-fuchsia-400 mb-2" />
                                <p className="text-[10px] font-mono text-slate-500">OPTIMIZED_IO</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-0 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                            >
                                <Globe2 size={24} className="text-violet-400 mb-2" />
                                <p className="text-[10px] font-mono text-slate-500">DEP_READY</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 rounded bg-violet-500/10 border border-violet-500/20 mb-6">
                                <span className="text-violet-400 font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                                    Init :: Engineering_Protocol
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 italic">
                                Construindo <span className="text-gradient not-italic">Soluções.</span>
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12 opacity-80">
                                Mais do que simplesmente "escrever código", eu projeto fundamentos digitais. Minha filosofia está enraizada em <span className="text-white">abstração limpa</span> e <span className="text-white">engenharia de alto desempenho.</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-violet-600/10 flex items-center justify-center border border-violet-600/20">
                                            <Zap size={16} className="text-violet-400" />
                                        </div>
                                        <h4 className="text-white font-bold tracking-tight">Performance First</h4>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Mentalidade de latência zero. Cada linha otimizada para máxima taxa de transferência.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-fuchsia-600/10 flex items-center justify-center border border-fuchsia-600/20">
                                            <Code2 size={16} className="text-fuchsia-400" />
                                        </div>
                                        <h4 className="text-white font-bold tracking-tight">Scalable Design</h4>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Arquiteturas modulares que evoluem com o crescimento do seu negócio.
                                    </p>
                                </div>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/tainaraalves14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden block w-fit"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 text-white font-black text-xs tracking-[0.4em] uppercase flex items-center gap-3">
                                    Explorar Protocolo <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </motion.a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
