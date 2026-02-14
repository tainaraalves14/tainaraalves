import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, X } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface AllProjectsProps {
    onBack: () => void;
}

const projects = [
    {
        title: 'Aion — Plataforma Inteligente de Gestão Escolar',
        description: 'Plataforma completa para gestão educacional, projetada para resolver problemas como geração automática de horários e acompanhamento analítico.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'DDD'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/aion_platform_1771095131101.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Aurora Risk Engine — Motor de Fraudes',
        description: 'Plataforma orientada a eventos para detecção de fraudes financeiras em tempo real, com decisões em milissegundos e alta confiabilidade.',
        tags: ['Python', 'Kafka', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'ML'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/aurora_risk_engine_1771095151011.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'SagradoVoz — Plataforma Musical',
        description: 'Plataforma musical baseada em microserviços escaláveis, preparada para alto volume de usuários e comunicação assíncrona.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kafka', 'Microservices'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/sagradovoz_music_1771095164378.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'LLM de Avaliação Comparativa — IC',
        description: 'Sistema baseado em Large Language Models para avaliação comparativa automatizada de textos e conteúdos técnicos.',
        tags: ['Python', 'AI', 'OpenAI', 'FastAPI', 'PostgreSQL', 'NLP', 'Embeddings'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/llm_evaluation_1771095179515.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Plataforma de Observabilidade Inteligente',
        description: 'Sistema que correlaciona logs, métricas e traces para identificar anomalias automaticamente em infraestruturas distribuídas.',
        tags: ['Python', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Kafka', 'Elasticsearch'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/observability_platform_1771095197819.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Motor Preditivo de Auto-Scaling',
        description: 'Algoritmo que ajusta recursos dinamicamente baseado em comportamento histórico e métricas de performance.',
        tags: ['Python', 'Kubernetes', 'Metrics API', 'Prometheus', 'ML'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/auto_scaling_cloud_1771095212137.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Sistema Preditivo de Incidentes',
        description: 'Previsão de falhas antes que impactem usuários, utilizando processamento de eventos em tempo real e ML.',
        tags: ['Python', 'Kafka', 'ML', 'FastAPI', 'PostgreSQL'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/incident_prediction_1771095226098.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Plataforma de Governança de APIs',
        description: 'Validação automática de contratos, versionamento e monitoramento de conformidade para ecossistemas de APIs.',
        tags: ['Python', 'OpenAPI', 'CI/CD', 'Actions', 'Docker'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/api_governance_1771095240394.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Auditor Inteligente de Código com LLM',
        description: 'Análise semântica avançada para detectar vulnerabilidades lógicas e falhas de segurança no código-fonte.',
        tags: ['Python', 'LLMs', 'AST', 'FastAPI', 'PostgreSQL'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/llm_code_auditor_1771095261322.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Detecção Distribuída de Fake News',
        description: 'Análise de propagação de desinformação usando grafos e processamento de linguagem natural.',
        tags: ['Python', 'Neo4j', 'NLP', 'Kafka', 'FastAPI'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/fake_news_detection_graph_2_1771095311709.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Plataforma de Gestão de Risco para PMEs',
        description: 'Solução inteligente de análise de risco e saúde financeira projetada especificamente para pequenas empresas.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'ML', 'Docker'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/pme_risk_management_1771095276220.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Orquestrador Inteligente de Eventos Kafka',
        description: 'Balanceamento dinâmico e inteligente de consumidores para clusters Kafka de alto volume.',
        tags: ['Python', 'Kafka', 'Redis', 'Kubernetes'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/kafka_orchestrator_1771095290503.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Motor de Matching com Embeddings',
        description: 'Matching semântico de alta precisão entre candidatos e vagas utilizando representações vetoriais.',
        tags: ['Python', 'Embeddings', 'PostgreSQL', 'FastAPI'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/professional_matching_embeddings_1771095326518.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Sistema Automatizado LGPD',
        description: 'Monitoramento contínuo e automação de compliance para proteção de dados sensíveis e privacidade.',
        tags: ['Python', 'Data Scanner', 'PostgreSQL', 'FastAPI'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/lgpd_compliance_scanner_1771095340406.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Chaos Engineering Automatizado',
        description: 'Simulação controlada de falhas em ambientes Kubernetes para validar a resiliência do sistema.',
        tags: ['Python', 'Kubernetes', 'Docker', 'Observability'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/chaos_engineering_tool_1771095356541.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    },
    {
        title: 'Plataforma de Métricas DORA',
        description: 'Análise automatizada de performance de times técnicos baseada nos pilares de DevOps.',
        tags: ['Python', 'GitHub API', 'PostgreSQL', 'Dashboards'],
        image: 'file:///home/tainara/.gemini/antigravity/brain/97583325-350a-4ea3-b312-eb841a07ceda/dora_metrics_dashboard_1771095373620.png',
        liveUrl: '#',
        githubUrl: 'https://github.com/tainaraalves14',
    }
];


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
                                className={`flex items-center justify-center gap-3 bg-white/[0.03] border rounded-2xl px-8 py-5 transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest font-black w-full md:w-auto ${selectedTag || isFilterMenuOpen ? 'border-violet-500/50 text-white bg-violet-500/10' : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
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
