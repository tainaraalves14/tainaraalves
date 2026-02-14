import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    onHomeClick: () => void;
}

const Navbar = ({ onHomeClick }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'Sobre', href: '#about', id: '01' },
        { name: 'Projetos', href: '#projects', id: '02' },
        { name: 'Habilidades', href: '#skills', id: '03' },
        { name: 'Contato', href: '#contact', id: '04' },
    ];

    const handleHomeClick = (e: React.MouseEvent) => {
        onHomeClick();
        if (!e.metaKey && !e.ctrlKey) {
            // Smoothly scroll or handle home
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020205]/60 backdrop-blur-2xl border-b border-white/5">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-2 left-4 font-mono text-[8px] text-white">SYS_NAV_PROTOCOL_V2.0</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div
                        onClick={handleHomeClick}
                        className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="text-xl font-black text-white tracking-widest uppercase">
                            PORTFOLIO<span className="text-violet-500">.</span>
                        </span>
                        <div className="px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                            <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-tighter">PRTCL_V2</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={onHomeClick}
                                    className="text-slate-400 hover:text-white px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group font-mono"
                                >
                                    <span className="text-violet-500/40 mr-1 group-hover:text-violet-400 transition-colors">{item.id}</span>
                                    {item.name}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-[-2px]" />
                                </a>
                            ))}

                            <div className="w-[1px] h-6 bg-white/5 mx-6" />

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:tainaralves148@gmail.com"
                                className="relative px-8 py-3 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden group shadow-2xl transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 text-white font-black text-[11px] tracking-[0.3em] uppercase flex items-center gap-2">
                                    Fale Comigo <span className="text-violet-500">→</span>
                                </span>
                            </motion.a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-400 hover:text-violet-500 p-2 border border-white/5 rounded-xl bg-white/5 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="md:hidden absolute top-24 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-50"
                    >
                        <div className="px-4 py-8 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-6 py-4 rounded-2xl text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                                    onClick={() => {
                                        setIsOpen(false);
                                        onHomeClick();
                                    }}
                                >
                                    <span className="text-violet-500 mr-2 font-mono">{item.id}</span>
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-6 border-t border-white/5 mt-6">
                                <a
                                    href="mailto:tainaralves148@gmail.com"
                                    className="w-full relative px-6 py-4 bg-violet-600 rounded-2xl shadow-xl shadow-violet-600/20 block text-center"
                                >
                                    <span className="relative z-10 text-white font-black text-xs tracking-[0.3em] uppercase">Fale Comigo →</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
