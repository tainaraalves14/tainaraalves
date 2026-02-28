import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';


interface AllProjectsProps {
    onBack: () => void;
}

const AllProjects = ({ onBack }: AllProjectsProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    // Get unique tags from all projects
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(project => project.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, []);

    // Filter projects based on search query and selected tag
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesTag = !selectedTag || project.tags.includes(selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    return (
        <section className="min-h-screen bg-[#020205] pt-32 pb-40 px-4 relative overflow-hidden">
            {/* Ambient Lighting Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
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

                {/* Header */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                    >
                        <span className="text-violet-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                            Repositório Completo
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black text-white tracking-tighter italic mb-8 leading-[1.1]"
                    >
                        Todos os <span className="text-gradient not-italic">Projetos.</span>
                    </motion.h1>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl opacity-80">
                        Um arquivo de soluções digitais, desde arquiteturas de dados complexas até interfaces de usuário imersivas.
                    </p>
                </header>

                {/* Search and Filter */}
                <div className="relative mb-16 px-1">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative flex-grow group">
                            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-500 group-focus-within:text-violet-500 transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar projetos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white font-medium placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute inset-y-0 right-6 flex items-center text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                                className={`flex items-center justify-center gap-3 bg-white/[0.03] border rounded-2xl px-6 py-4 md:px-8 md:py-5 transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest font-black w-full md:w-auto ${selectedTag || isFilterMenuOpen ? 'border-violet-500/50 text-white bg-violet-500/10' : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Filter size={18} />
                                {selectedTag || 'Filtrar'}
                            </button>

                            <AnimatePresence>
                                {isFilterMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-2xl z-50 overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedTag(null);
                                                    setIsFilterMenuOpen(false);
                                                }}
                                                className={`text-left px-4 py-3 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${!selectedTag ? 'bg-violet-500/20 text-violet-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                Todos os Projetos
                                            </button>
                                            <div className="h-[1px] bg-white/5 my-1" />
                                            {allTags.map((tag) => (
                                                <button
                                                    key={tag}
                                                    onClick={() => {
                                                        setSelectedTag(tag);
                                                        setIsFilterMenuOpen(false);
                                                    }}
                                                    className={`text-left px-4 py-3 rounded-xl transition-all text-[11px] font-black uppercase tracking-widest ${selectedTag === tag ? 'bg-violet-500/20 text-violet-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                                        }`}
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard {...project} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 text-slate-500">
                            <Search size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 italic">Nenhum projeto encontrado</h3>
                        <p className="text-slate-400 max-w-md mx-auto">
                            Não encontramos nenhum projeto que corresponda aos seus critérios de busca. Tente ajustar os filtros ou pesquisar por outro termo.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedTag(null);
                            }}
                            className="mt-8 text-violet-400 font-black uppercase tracking-widest text-xs hover:text-violet-300 transition-colors"
                        >
                            Limpar todos os filtros
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AllProjects;
