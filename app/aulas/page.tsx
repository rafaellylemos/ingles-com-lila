"use client";

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

import GroupClassesContent from './brasil/aula-em-grupo/page';
import AulaIndividualContent from './brasil/aula-individual/page';
import AulaIndividualExtContent from './exterior/aula-individual-ext/page';
import GroupClassesExtContent from './exterior/aula-em-grupo-ext/page';

function AulasTabsContent() {
  const [activeTab, setActiveTab] = useState<'individual' | 'grupos'>('individual');
  const [region, setRegion] = useState<'BR' | 'INT'>('BR');
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'grupos') {
      setActiveTab('grupos');
    } else if (tabParam === 'individual') {
      setActiveTab('individual');
    }

    if (window.location.hash === '#grupos-section') {
      setTimeout(() => {
        const element = document.getElementById('grupos-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }

    const savedRegion = sessionStorage.getItem('lila_user_region') as 'BR' | 'INT';
    if (savedRegion) {
      setRegion(savedRegion);
    }
  }, [searchParams]);

  const renderDynamicContent = () => {
    if (activeTab === 'individual') {
      return region === 'BR' ? <AulaIndividualContent /> : <AulaIndividualExtContent />;
    } else {
      return region === 'BR' ? <GroupClassesContent /> : <GroupClassesExtContent />;
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-12 bg-[#FDFCF8] min-h-screen">
      <div className="container mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-start mb-8 max-w-7xl mx-auto"
        >
          <Link
            href="/servicos"
            className="group flex items-center gap-2 text-navy/40 hover:text-navy text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-slate-100">
              <ArrowLeft size={14} />
            </div>
            Voltar para planos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-navy mb-8 tracking-tighter leading-none">
            Inglês Geral & <br />
            <span className="text-gold italic font-serif font-normal">Conversação</span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-navy shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              {region === 'BR' ? 'EXIBINDO PREÇOS EM R$' : 'SHOWING PRICES IN USD'}
            </span>
          </div>
        </motion.div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-[2rem] shadow-inner border border-slate-200">
            {[
              { id: 'individual', label: 'Aulas Individuais', icon: <User size={16} /> },
              { id: 'grupos', label: 'Aulas em Turma', icon: <Users size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative flex items-center gap-2 px-8 py-4 rounded-[1.8rem] text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-navy'
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className={`absolute inset-0 rounded-[1.8rem] shadow-md ${tab.id === 'individual' ? 'bg-gold' : 'bg-navy'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="grupos-section" className="relative scroll-mt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${region}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {renderDynamicContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function PaginaInglesGeral() {
  return (
    <Layout>
      <PageTransition>
        <Suspense fallback={<div className="min-h-screen bg-[#FDFCF8]" />}>
          <AulasTabsContent />
        </Suspense>
      </PageTransition>
    </Layout>
  );
}