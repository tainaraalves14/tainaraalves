import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-40 bg-[#020205] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                        >
                            <span className="text-fuchsia-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                                Iniciar_Protocolo
                            </span>
                        </motion.div>
                        <h2 className="text-3xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter italic leading-[1.1]">
                            Vamos <span className="text-gradient not-italic">Conversar?</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl text-base md:text-xl font-medium leading-relaxed opacity-70 mb-10 md:mb-12">
                            Estou sempre aberta a novos desafios e colaborações em projetos de <span className="text-white">alto impacto.</span>
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">E-mail Direto</p>
                                    <p className="text-white font-bold text-base md:text-lg break-all">tainaralves148@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 md:p-12 rounded-[2.5rem] relative group"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <User size={12} /> Nome_Completo
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                        <Mail size={12} /> Endereço_Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email@exemplo.com"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <MessageSquare size={12} /> Mensagem_Protocolo
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Como posso ajudar?"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 transition-all resize-none"
                                />
                            </div>
                            <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-4 group">
                                Enviar_Mensagem <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
