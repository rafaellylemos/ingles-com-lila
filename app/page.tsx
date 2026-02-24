"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles, Globe, HeartPulse, Award, Mic } from 'lucide-react';
import Link from 'next/link';

import ServiceCard from '@/components/ServiceCard';
import Layout from '@/components/Layout';
import GeolocationModal from '@/components/GeolocationModal';
import PageTransition from '@/components/PageTransition';
import BlogSection from '@/components/BlogSection';

const useLanguage = () => ({
  t: (pt: string, en: string) => pt
});

export default function Index() {
  const { t } = useLanguage();
  const [showGeoModal, setShowGeoModal] = useState(false);

  useEffect(() => {
    const sessionSelection = sessionStorage.getItem('lila_user_region');
    if (!sessionSelection) {
      setShowGeoModal(true);
    }
  }, []);

  const handleGeoClose = () => {
    if (!sessionStorage.getItem('lila_user_region')) {
      sessionStorage.setItem('lila_user_region', 'BR');
    }
    setShowGeoModal(false);
  };

  const services = [
    {
      icon: BookOpen,
      title: t('Inglês Geral & Conversação', 'General English'),
      description: t('Pra você que quer viajar, trabalhar ou maratonar série sem legenda. Do VIP 1-1 ao grupo, a gente foca na sua autonomia.', 'Real autonomy...'),
      toBR: '/aulas',
      toINT: '/aulas',
      cta: 'Bora destravar'
    },
    {
      icon: HeartPulse,
      title: t('Carreira Médica & OET', 'Medical English & OET'),
      description: t('Treinamento oficial OET com quem é referência. Pra médicos e enfermeiros que não aceitam menos que o mundo.', 'Your global medical career...'),
      toBR: 'https://inglesmedico.com/checkout-br',
      toINT: 'https://inglesmedico.com/checkout-usd',
      external: true,
      cta: 'Ver treinamento'
    },
    {
      icon: Award,
      title: t('Exames & Gringos', 'Exams & Portuguese'),
      description: t('Destrave o IELTS e TOEFL sem nó na cabeça. E ah, tem Português praquele seu amigo gringo parar de passar perrengue no Brasil.', 'Exams & Portuguese for foreigners...'),
      toBR: '/servicos',
      toINT: '/servicos',
      cta: 'Saiba mais'
    },
    {
      icon: Mic,
      title: t('Business, Eventos & Voz', 'Business & Voice'),
      description: t('Tradução, mestre de cerimônias e locução. Se o seu negócio precisa falar inglês com autoridade, eu resolvo.', 'Professional voice and events...'),
      toBR: '/contato',
      toINT: '/contato',
      cta: 'Solicitar orçamento'
    },
  ];

  return (
    <>
      <GeolocationModal isOpen={showGeoModal} onClose={handleGeoClose} />
      <Layout>
        <PageTransition>

          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-navy/5 via-transparent to-gold/5" />
            <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
              <Globe size={600} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block px-4 py-1 bg-gold text-navy font-black rounded-full text-[10px] uppercase tracking-[0.2em]">
                    Trinity College London Certified
                  </span>
                  <Sparkles className="text-gold" size={18} />
                </div>

                <h1 className="font-heading text-6xl md:text-8xl font-black mb-6 text-navy leading-[0.9] tracking-tighter">
                  O mundo é <br />
                  <span className="text-gold italic font-serif font-normal">muito grande</span> <br />
                  pra você não falar inglês.
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                  Chega de inglês travado. Desde 2009, ajudo brasileiros a dominarem o idioma com a segurança de quem já viveu o mundo real — da Ásia à Europa.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link href="#services" className="px-10 py-5 bg-navy text-white rounded-full font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-gold hover:text-navy transition-all shadow-2xl shadow-navy/20 group">
                    Bora destravar? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-navy/40 text-xs font-bold uppercase tracking-widest">
                    +15 anos de estrada
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-xl">
                  <h2 className="text-5xl md:text-6xl font-black text-navy mb-4 tracking-tighter">Como a gente <br /> faz acontecer?</h2>
                  <p className="text-slate-500 text-lg font-medium italic">
                    "Não é sobre gramática chata, é sobre você ter voz em qualquer lugar do globo."
                  </p>
                </div>

                <Link href="/servicos" className="flex items-center gap-2 text-navy font-black uppercase text-xs tracking-[0.2em] hover:text-gold transition-colors group border-b-2 border-navy/10 pb-2">
                  Ver todos os serviços <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                  <ServiceCard
                    key={i}
                    {...service}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 2. Blog Section (Posts Recentes do Supabase) */}
          <BlogSection />

        </PageTransition>
      </Layout>
    </>
  );
}