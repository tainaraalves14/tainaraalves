import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
    index: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0, index }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay
            }}
            viewport={{ once: true }}
            className="relative group h-full"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-violet-600/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-full bg-[#080808]/80 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-start overflow-hidden hover:border-violet-500/30 transition-all duration-500 shadow-2xl">
                {/* Engineering Metadata Header */}
                <div className="w-full flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em]">REQ_MOD_0{index + 1}</span>
                    </div>
                    <span className="text-4xl font-black text-white/5 font-mono group-hover:text-violet-500/10 transition-colors">0{index + 1}</span>
                </div>

                {/* Icon Container - Technical Look */}
                <div className="w-16 h-16 rounded-2xl bg-violet-600/5 border border-white/5 flex items-center justify-center mb-8 relative group-hover:bg-violet-600/10 group-hover:border-violet-500/20 transition-all duration-700">
                    <div className="absolute inset-2 border border-dashed border-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-8 h-8 text-white group-hover:text-violet-400 transition-colors duration-500" />
                </div>

                <div className="flex-grow">
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tighter uppercase group-hover:text-gradient transition-all">{title}</h3>
                    <div className="w-12 h-[2px] bg-violet-500/30 mb-6 group-hover:w-20 transition-all duration-500" />
                    <p className="text-slate-400 leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
                </div>

                {/* Bottom Metadata */}
                <div className="mt-10 pt-6 border-t border-white/5 w-full flex justify-between items-center">
                    <span className="text-[9px] font-mono text-slate-600 tracking-widest">STATUS: DEPLOYED</span>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-violet-500/20 rounded-full" />
                        <div className="w-1 h-1 bg-violet-500/40 rounded-full" />
                        <div className="w-1 h-1 bg-violet-500/60 rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
