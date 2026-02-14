import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubUrl?: string;
    liveUrl?: string;
    index: number;
}

const ProjectCard = ({ title, description, tags, image, githubUrl, liveUrl, index }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
            }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            {/* Background Glow */}
            <div className="absolute inset-x-8 inset-y-0 bg-violet-600/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-full bg-[#080808]/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden hover:border-violet-500/30 transition-all duration-500 shadow-2xl flex flex-col">
                {/* Engineering Metadata Header */}
                <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                        <span className="text-[9px] font-mono text-slate-500 tracking-[0.2em]">DEP_UID_0{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Status:</span>
                        <span className="text-[9px] font-mono text-violet-400 font-bold uppercase tracking-widest">Estável</span>
                    </div>
                </div>

                {/* Image Container with Blueprint Accents */}
                <div className="relative h-64 overflow-hidden m-4 rounded-[2rem]">
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors duration-500 z-10" />

                    {/* Corner Blueprint Elements */}
                    <div className="absolute top-4 left-4 z-20 w-4 h-4 border-t border-l border-white/20" />
                    <div className="absolute bottom-4 right-4 z-20 w-4 h-4 border-b border-r border-white/20" />

                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-1000"
                    />
                </div>

                <div className="p-6 md:p-8 pt-2 flex flex-col flex-grow">
                    <div className="mb-4">
                        <span className="text-[9px] md:text-[10px] font-mono text-violet-500/60 uppercase tracking-[0.2em] mb-1 block">Implantação_de_Projeto</span>
                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase group-hover:text-gradient transition-all duration-300">
                            {title}
                        </h3>
                    </div>

                    <p className="text-slate-400 mb-8 line-clamp-2 text-sm font-medium leading-relaxed opacity-80">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-violet-500/5 border border-violet-500/10 text-slate-400 text-[9px] font-mono font-bold tracking-wider uppercase rounded-md group-hover:border-violet-500/20 group-hover:text-slate-300 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        {liveUrl && (
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-grow flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-violet-600 hover:bg-violet-500 px-6 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-violet-600/10"
                            >
                                <ExternalLink size={14} />
                                Ver Projeto
                            </motion.a>
                        )}
                        {githubUrl && (
                            <motion.a
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.98 }}
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white border border-white/5 px-6 py-4 rounded-2xl transition-all duration-300"
                            >
                                <Github size={16} />
                                Código
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
