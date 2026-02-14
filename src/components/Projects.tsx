import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'Aion — Plataforma Inteligente de Gestão Escolar',
        description: 'Plataforma completa para gestão educacional, com geração automática de horários e acompanhamento analítico de desempenho acadêmico.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'DDD'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/aion_platform_1771095131101.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Aurora Risk Engine — Motor de Fraudes',
        description: 'Plataforma orientada a eventos para detecção de fraudes financeiras em tempo real, com decisões em milissegundos.',
        tags: ['Python', 'Kafka', 'FastAPI', 'PostgreSQL', 'Redis', 'ML'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/aurora_risk_engine_1771095151011.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'SagradoVoz — Plataforma Musical Microserviços',
        description: 'Plataforma musical baseada em microserviços escaláveis, com comunicação assíncrona e alta performance.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'Microservices'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/sagradovoz_music_1771095164378.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    }
];


interface ProjectsProps {
    onSeeMore: () => void;
}

const Projects = ({ onSeeMore }: ProjectsProps) => {
    return (
        <section id="projects" className="py-40 bg-[#020205] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-10 left-[-10%] w-[1000px] h-[1000px] bg-violet-600/[0.03] rounded-full blur-[180px]" />
                <div className="absolute bottom-10 right-[-10%] w-[800px] h-[800px] bg-fuchsia-600/[0.02] rounded-full blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                    >
                        <span className="text-fuchsia-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                            Ecossistema_de_Projetos
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
                        Projetos em <span className="text-gradient not-italic">Destaque</span>
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed opacity-70">
                        Soluções tecnicamente complexas projetadas para <span className="text-white">alto desempenho</span> e escalabilidade em infraestruturas modernas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>

                <div className="mt-28 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onSeeMore}
                        className="group inline-flex items-center gap-4 text-white font-black tracking-[0.3em] uppercase text-[11px] px-10 py-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-violet-500/50 transition-all duration-500 shadow-2xl"
                    >
                        Explore_Arquivo <span className="text-violet-500 group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
