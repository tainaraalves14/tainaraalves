import { motion } from 'framer-motion';
import { Layers, GitBranch, Code2, Cloud, Workflow, ShieldCheck } from 'lucide-react';

const skills = [
    { name: 'Arquitetura de Sistemas', icon: Layers, color: '#a855f7', radius: 170, duration: 25, delay: 0 },
    { name: 'Pipelines CI/CD', icon: GitBranch, color: '#d946ef', radius: 170, duration: 25, delay: -12.5 },
    { name: 'Código Limpo', icon: Code2, color: '#8b5cf6', radius: 250, duration: 35, delay: -5 },
    { name: 'Infraestrutura em Nuvem', icon: Cloud, color: '#c084fc', radius: 250, duration: 35, delay: -22 },
    { name: 'Metodologias Ágeis', icon: Workflow, color: '#7c3aed', radius: 330, duration: 45, delay: -10 },
    { name: 'Segurança Digital', icon: ShieldCheck, color: '#9333ea', radius: 330, duration: 45, delay: -32 },
];

const Skills = () => {
    return (
        <section id="skills" className="py-40 bg-[#020205] relative overflow-hidden min-h-screen flex items-center justify-center w-full">
            {/* High-End Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-violet-600/[0.02] rounded-full blur-[250px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-fuchsia-600/[0.015] rounded-full blur-[200px] pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center px-4">
                <div className="text-center mb-32 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                    >
                        <span className="text-fuchsia-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                            Engenharia Avançada
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter mb-10 italic">
                        Arsenal <span className="text-gradient not-italic">Técnico</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed opacity-70 max-w-3xl mx-auto">
                        Arquitetando sistemas com <span className="text-white">precisão</span> e <span className="text-white">rigor matemático.</span>
                    </p>
                </div>

                {/* Atomic Animation Container */}
                <div className="relative w-full h-[500px] md:h-[800px] flex items-center justify-center overflow-visible">

                    {/* Central Core - Professional Engineering Aesthetic */}
                    <div className="relative z-20 group/core cursor-pointer">
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.05, 0.15, 0.05]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-[-100px] bg-violet-600 rounded-full blur-[100px]"
                        />

                        {/* Outer Pulsing Ring */}
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                            className="absolute inset-[-20px] border border-violet-500/10 rounded-full border-dashed"
                        />

                        <div className="relative w-40 h-40 md:w-56 md:h-56 p-[1px] rounded-full bg-gradient-to-br from-white/10 to-transparent shadow-2xl overflow-hidden">
                            <div className="w-full h-full bg-white/[0.03] backdrop-blur-2xl rounded-full flex flex-col items-center justify-center relative">
                                {/* Inner Grid Pattern */}
                                <div className="absolute inset-0 grid-pattern opacity-10" />

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="relative z-10 flex flex-col items-center"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-4 border border-violet-500/20 group-hover/core:bg-violet-600/20 transition-all duration-700">
                                        <Layers className="text-violet-400" size={32} />
                                    </div>
                                    <div className="text-center font-mono">
                                        <span className="text-white font-black text-sm md:text-lg tracking-[0.4em] uppercase">
                                            ENG<span className="text-violet-500">.</span>CORE
                                        </span>
                                        <div className="flex justify-center gap-1 mt-2">
                                            <div className="w-1 h-3 bg-violet-500/40 rounded-full" />
                                            <div className="w-1 h-3 bg-violet-500/20 rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Orbit Nodes & Lines - 2D Elliptical movement to avoid distortion */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Static Orbit Paths (SVGs) */}
                        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                            <defs>
                                <radialGradient id="orbitGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
                                </radialGradient>
                            </defs>
                            {skills.map((skill, index) => {
                                const rx = skill.radius * 2.2;
                                const ry = skill.radius * 0.8;
                                return (
                                    <ellipse
                                        key={`path-${index}`}
                                        cx="500"
                                        cy="500"
                                        rx={rx}
                                        ry={ry}
                                        fill="none"
                                        stroke="url(#orbitGradient)"
                                        strokeWidth="0.8"
                                        vectorEffect="non-scaling-stroke"
                                        style={{ opacity: 0.5 + (index * 0.1) }}
                                    />
                                );
                            })}
                        </svg>

                        {skills.map((skill, index) => {
                            // Define elliptical path parameters matching the SVG
                            // Scale coefficients for mobile
                            const mobileScale = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.6 : 1;
                            const radiusX = skill.radius * 2.2 * mobileScale;
                            const radiusY = skill.radius * 0.8 * mobileScale;

                            return (
                                <motion.div
                                    key={`orbit-${skill.name}`}
                                    animate={{
                                        x: [
                                            Math.cos(0) * radiusX,
                                            Math.cos(Math.PI / 2) * radiusX,
                                            Math.cos(Math.PI) * radiusX,
                                            Math.cos(3 * Math.PI / 2) * radiusX,
                                            Math.cos(2 * Math.PI) * radiusX
                                        ],
                                        y: [
                                            Math.sin(0) * radiusY,
                                            Math.sin(Math.PI / 2) * radiusY,
                                            Math.sin(Math.PI) * radiusY,
                                            Math.sin(3 * Math.PI / 2) * radiusY,
                                            Math.sin(2 * Math.PI) * radiusY
                                        ],
                                        zIndex: [10, 30, 10, 5, 10], // Z-order for depth
                                        scale: [0.8 * mobileScale, 1.1 * mobileScale, 0.8 * mobileScale, 0.6 * mobileScale, 0.8 * mobileScale], // Scale for depth effect
                                        opacity: [0.6, 1, 0.6, 0.4, 0.6]
                                    }}
                                    transition={{
                                        duration: skill.duration,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: skill.delay
                                    }}
                                    className="absolute flex items-center justify-center"
                                >
                                    <div className="relative group pointer-events-auto cursor-pointer">
                                        {/* Dynamic Glow */}
                                        <div
                                            className="absolute inset-[-20px] rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700"
                                            style={{ backgroundColor: skill.color }}
                                        />

                                        {/* Node Content - Exactly like the reference photo */}
                                        <div className="relative w-24 h-32 md:w-40 md:h-48 bg-[#080808]/80 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-xl group-hover:bg-[#0a0a0a] group-hover:border-violet-500/40 group-hover:-translate-y-4 transition-all duration-500 shadow-2xl p-2">
                                            {/* Icon in Circle Container */}
                                            <div
                                                className="w-10 h-10 md:w-18 md:h-18 rounded-full mb-3 md:mb-4 flex items-center justify-center border border-white/10 relative overflow-hidden"
                                                style={{ backgroundColor: `${skill.color}08` }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                                <skill.icon size={20} className="text-white group-hover:scale-110 transition-transform relative z-10 md:w-8 md:h-8" />
                                            </div>

                                            {/* Professional Divider Line */}
                                            <div className="w-10 md:w-14 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-3 md:mb-5" />

                                            {/* Typography - Stacked and Professional */}
                                            <div className="px-2 md:px-4 text-center">
                                                <span className="text-[8px] md:text-[12px] font-black text-white/50 group-hover:text-white leading-[1.4] uppercase tracking-[0.1em] md:tracking-[0.2em] block transition-colors whitespace-pre-line">
                                                    {skill.name.split(' ').join('\n')}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Precision Indicator Tag */}
                                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-[#050505] border border-violet-500/20 px-6 py-2.5 rounded-2xl shadow-2xl">
                                                <span className="text-[11px] font-black text-violet-400 uppercase tracking-[0.4em] whitespace-nowrap">
                                                    ESTABILIDADE <span className="text-white/10 mx-1">/</span> 0{(index + 1) * 7}.9
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020205] via-[#020205]/80 to-transparent pointer-events-none" />
        </section>
    );
};

export default Skills;
