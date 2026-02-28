import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Story from './components/Story';
import AllProjects from './components/AllProjects';
import CustomCursor from './components/CustomCursor';
import ContactForm from './components/ContactForm';
import { Palette, Terminal, Zap, Shield } from 'lucide-react';

function App() {
  const [view, setView] = useState<'home' | 'story' | 'projects'>('home');

  const features = [
    {
      icon: Terminal,
      title: 'Stack Moderna',
      description: 'Construído com as tecnologias mais recentes, incluindo React 19, Vite e TailwindCSS para um desempenho ideal.',
      delay: 0.1,
    },
    {
      icon: Palette,
      title: 'Design Elegante',
      description: 'Implementação pixel-perfect das tendências modernas de design com glassmorphism e animações suaves.',
      delay: 0.2,
    },
    {
      icon: Zap,
      title: 'Super Rápido',
      description: 'Otimizado para velocidade e SEO, garantindo que seus usuários tenham a melhor experiência possível.',
      delay: 0.3,
    },
    {
      icon: Shield,
      title: 'Seguro e Escalável',
      description: 'Práticas recomendadas de segurança de nível empresarial e arquitetura escalável para aplicações em crescimento.',
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020205] font-sans text-slate-300 selection:bg-violet-500/30 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar onHomeClick={() => setView('home')} />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onStoryClick={() => setView('story')} onProjectsClick={() => setView('projects')} />
            <About />
            <Skills />

            {/* Features Section */}
            <section id="services" className="py-40 relative bg-[#020205]">
              {/* Ambient Decorative Lighting */}
              <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-violet-600/[0.02] rounded-full blur-[180px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-fuchsia-600/[0.015] rounded-full blur-[160px] pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-28">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/10 mb-8"
                  >
                    <span className="text-fuchsia-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                      Ecossistema de Engenharia
                    </span>
                  </motion.div>
                  <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic">
                    Projetando <span className="text-gradient not-italic">Excelência</span>
                  </h2>
                  <p className="text-slate-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed opacity-70">
                    Além de construções padrão. Projetamos <span className="text-white">ecossistemas digitais</span> altamente otimizados através de rigor técnico e precisão criativa.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      index={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={feature.delay}
                    />
                  ))}
                </div>
              </div>
            </section>

            <Projects onSeeMore={() => setView('projects')} />
            <ContactForm />
          </motion.div>
        ) : view === 'story' ? (
          <Story key="story" onBack={() => setView('home')} />
        ) : (
          <AllProjects key="projects" onBack={() => setView('home')} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
