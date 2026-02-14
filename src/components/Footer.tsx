import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020205] border-t border-white/5 py-24 relative overflow-hidden">
            {/* Engineering Grid Metadata Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-10 left-10 font-mono text-[8px] text-white space-y-1">
                    <p>FOOTER_MODULE: END_PROTO</p>
                    <p>SESSION_ID: 0x4F2A9B</p>
                </div>
                {/* Visual grid line */}
                <div className="absolute bottom-0 left-1/2 w-[1px] h-24 bg-white/10" />
            </div>

            {/* Ambient Lighting */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-600/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-black text-white tracking-widest uppercase">
                                PORTFOLIO<span className="text-violet-500">.</span>
                            </span>
                            <div className="px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                                <span className="text-[9px] font-mono font-bold text-violet-400">PRTCL_V2</span>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-medium">
                            Arquitetando <span className="text-white">experiências digitais superiores</span> através de excelência técnica e abstração criativa.
                        </p>

                        <div className="pt-4 flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sistema Online</span>
                            </div>
                            <div className="w-1 h-3 bg-white/5" />
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Último Build: 14.02.26</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-8">
                        <div className="space-y-2 text-left md:text-right">
                            <span className="text-[10px] font-mono text-violet-400 uppercase tracking-[0.3em] block">Connect_Protocol</span>
                            <div className="h-[2px] w-12 bg-violet-500/30 ml-auto hidden md:block" />
                        </div>

                        <div className="flex gap-4">
                            {[
                                { Icon: Github, url: 'https://github.com/tainaraalves14' },
                                { Icon: Linkedin, url: 'https://www.linkedin.com/in/tainaraalvess' },
                                { Icon: Mail, url: 'mailto:tainaralves148@gmail.com' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-500 group relative overflow-hidden shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />

                                    {/* Corner Accents */}
                                    <div className="absolute top-2 left-2 w-1 h-1 bg-white/5 rounded-full group-hover:bg-violet-500/30 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-[9px] text-slate-600 uppercase tracking-[0.2em] flex items-center gap-4">
                        <span>© 2026 ARCH_CORE</span>
                        <div className="w-1 h-1 bg-slate-800 rounded-full" />
                        <span>Todos_os_Direitos_Reservados</span>
                    </div>

                    <div className="flex gap-8">
                        <span className="text-[9px] font-mono text-slate-700 hover:text-violet-500/50 cursor-pointer transition-colors uppercase tracking-[0.2em]">Política_de_Privacidade</span>
                        <span className="text-[9px] font-mono text-slate-700 hover:text-violet-500/50 cursor-pointer transition-colors uppercase tracking-[0.2em]">Termos_de_Serviço</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
