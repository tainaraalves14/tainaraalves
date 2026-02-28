import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
    onStoryClick: () => void;
    onProjectsClick: () => void;
}

const Hero = ({ onStoryClick, onProjectsClick }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-fuchsia-600/10 rounded-full blur-[60px] md:blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] md:opacity-[0.03] pointer-events-none select-none">
                    <div className="text-[30vw] md:text-[25vw] font-bold text-white leading-none text-center transform md:rotate-0">
                        Software
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Hero Text */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">
                                Disponível para novos projetos
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] md:leading-[0.9] lg:leading-[1] tracking-tight mb-8"
                        >
                            Desenvolvedor <br className="hidden sm:block" />
                            <span className="text-gradient">Full Stack </span>
                        </motion.h1>

                        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-slate-400 text-base md:text-xl max-w-xl leading-relaxed"
                            >
                                Com foco em sistemas inteligentes, arquitetura limpa e integração entre camadas.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-4"
                            >
                                {[
                                    { Icon: Github, url: 'https://github.com/tainaraalves14' },
                                    { Icon: Linkedin, url: 'https://www.linkedin.com/in/tainaraalvess' },
                                    { Icon: Mail, url: 'mailto:tainaralves148@gmail.com' }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visitar meu perfil no ${social.Icon.name || (social.url.includes('github') ? 'Github' : social.url.includes('linkedin') ? 'Linkedin' : 'Email')}`}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-600 transition-all duration-300 group"
                                    >
                                        <social.Icon size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                                    </a>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
                        >
                            <button
                                onClick={onProjectsClick}
                                className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group w-full sm:w-fit"
                            >
                                Ver Projetos <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button
                                onClick={onStoryClick}
                                className="px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all w-full sm:w-fit"
                            >
                                Minha História
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Floating Glass Stats */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 right-10 hidden xl:flex gap-6"
            >
                <div className="glass-card p-6 rounded-[2rem] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white">
                        <Globe size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">12+</p>
                        <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Projetos Ativos</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

