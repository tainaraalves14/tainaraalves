import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, BrainCircuit, Github, GraduationCap, Database, Code2 } from 'lucide-react';

interface StoryProps {
    onBack: () => void;
}

const Story = ({ onBack }: StoryProps) => {
    const milestones = [
        {
            year: 'FOUNDATION',
            title: 'Desenvolvimento de Sistemas',
            description: 'Graduada técnica, consolidando a base fundamental em lógica de programação e arquitetura inicial de software.',
            icon: GraduationCap,
            color: 'from-blue-500 to-cyan-600'
        },
        {
            year: 'EVOLUTION',
            title: 'Ciência da Computação',
            description: 'Cursando no Centro Universitário Sagrado Coração (Unisagrado), aprofundando o conhecimento científico e engenharia complexa.',
            icon: BrainCircuit,
            color: 'from-violet-500 to-purple-600'
        },
        {
            year: 'SPECIALIZATION',
            title: 'Engenharia & Inteligência',
            description: 'Foco total em Engenharia de Software, Dados e soluções inteligentes, unindo processamento robusto com IA.',
            icon: Database,
            color: 'from-fuchsia-500 to-pink-600'
        }
    ];

    return (
        <section className="min-h-screen bg-[#020205] pt-32 pb-40 px-4 relative overflow-hidden">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors mb-16 group"
                >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                        <ArrowLeft size={18} />
                    </div>
                    <span className="font-mono text-sm tracking-[0.2em] font-black uppercase">Voltar ao Início</span>
                </motion.button>

                <div className="space-y-24">
                    {/* Header */}
                    <header>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                        >
                            <span className="text-violet-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                Perfil Profissional
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white tracking-tighter italic mb-8"
                        >
                            Tainara <span className="text-gradient not-italic">Alves.</span>
                        </motion.h1>
                        <div className="space-y-6 max-w-2xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 text-xl font-medium leading-relaxed opacity-80"
                            >
                                Desenvolvedora com experiência sólida em aplicações web e APIs, utilizando <span className="text-white">Python</span> e <span className="text-white">SQL</span> para processamento analítico, além de <span className="text-white">React</span> e <span className="text-white">TypeScript</span> para interfaces modernas.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-500 text-lg leading-relaxed"
                            >
                                Atuo no desenvolvimento de soluções orientadas a dados e aplicações de IA, aplicando design patterns e arquitetura escalável para entregar software robusto.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10"
                        >
                            <a
                                href="https://github.com/tainaraalves14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
                            >
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="font-mono text-sm font-bold tracking-widest uppercase">github.com/tainaraalves14</span>
                            </a>
                        </motion.div>
                    </header>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="absolute left-[1.9rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-violet-500/50 via-fuchsia-500/20 to-transparent" />

                        <div className="space-y-20">
                            {milestones.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-12 group"
                                >
                                    <div className="relative shrink-0">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 relative z-10 shadow-2xl transition-transform group-hover:scale-110 duration-500`}>
                                            <div className="w-full h-full bg-[#020205] rounded-[0.9rem] flex items-center justify-center">
                                                <item.icon className="text-white" size={24} />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </div>

                                    <div className="pt-2">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="font-mono text-xs font-black text-violet-500 tracking-[0.2em] uppercase">{item.year}</span>
                                            <div className="h-[1px] w-8 bg-white/10" />
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-gradient transition-all">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl group-hover:text-slate-400 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <Code2 className="text-violet-500 mb-6" size={40} />
                                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">Filosofia Técnica</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Engenharia não é apenas resolver problemas — é criar sistemas elegantes e sustentáveis que resistem ao tempo através de abstração rigorosa, testes automatizados e otimização de performance.
                                </p>
                            </div>
                            <div className="relative aspect-square md:aspect-auto h-full min-h-[200px] flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-48 h-48 border-2 border-dashed border-violet-500/20 rounded-full flex items-center justify-center"
                                >
                                    <div className="w-32 h-32 border border-fuchsia-500/30 rounded-full animate-pulse-slow flex items-center justify-center">
                                        <Sparkles className="text-white opacity-20" size={32} />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 grid-pattern opacity-10" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;
