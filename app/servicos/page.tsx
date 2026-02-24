"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, HeartPulse, Award, Languages, 
  FileText, Mic, ArrowRight, Stethoscope, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

// Definição técnica da Interface para evitar o erro TS2339
interface ServiceProps {
  title: string;
  tag: string; // Propriedade agora obrigatória
  description: string;
  details: string[];
  icon: React.ElementType; // Tipagem correta para componentes de ícone
  color: string;
  to: string;
  cta: string;
  external?: boolean;
}

export default function Servicos() {
  const allServices: ServiceProps[] = [
    {
      title: "Inglês Geral & Conversação",
      tag: "COMMUNICATION",
      description: "Esqueça o 'verb to be' infinito. Aqui o foco é autonomia real para você viver o mundo, trabalhar fora ou apenas ser você mesmo em outra língua.",
      details: ["VIP 1-1 (Você e eu)", "Time da Lila (Grupos)", "Foco total em Speaking"],
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600",
      to: "/aulas",
      cta: "Explorar turmas"
    },
    {
      title: "Treinamento Oficial OET",
      tag: "CERTIFICATION",
      description: "Estratégia pura. Como treinadora oficial OET no Brasil, eu te preparo tecnicamente para o exame que vai validar sua carreira internacional.",
      details: ["Estratégias de pontuação", "Simulados oficiais", "Feedback técnico real"],
      icon: Award,
      color: "bg-gold/10 text-gold",
      to: "https://oetwithlila.com",
      external: true,
      cta: "Acessar plataforma oficial"
    },
    {
      title: "Inglês para Saúde",
      tag: "MEDICAL ENGLISH",
      description: "Segurança no consultório. Vocabulário técnico e prática de atendimento para profissionais que não querem gaguejar no plantão ou no round.",
      details: ["Anamnese e Diagnóstico", "Terminologia Médica", "Cenários Clínicos"],
      icon: HeartPulse,
      color: "bg-red-50 text-red-600",
      to: "https://inglesmedico.com",
      external: true,
      cta: "Conhecer o método"
    },
    {
      title: "TOEFL & IELTS",
      tag: "EXAM PREP",
      description: "O passaporte para sua pós, mestrado ou imigração. Preparação técnica com quem entende exatamente o que os examinadores buscam.",
      details: ["Writing Acadêmico", "Técnicas de Listening", "Reading Crítico"],
      icon: Stethoscope,
      color: "bg-purple-50 text-purple-600",
      to: "/contato",
      cta: "Agendar mentoria"
    },
    {
      title: "Português para Estrangeiros",
      tag: "GLOBAL PORTUGUESE",
      description: "Ensino gringos a falarem o 'nosso' português. Perfeito para parceiros de negócios ou amigos que estão morando ou chegando ao Brasil.",
      details: ["Cultura e Imersão", "Português Corporativo", "Prática do dia a dia"],
      icon: Languages,
      color: "bg-green-50 text-green-600",
      to: "/contato",
      cta: "Start my journey"
    },
    {
      title: "Tradução & Revisão",
      tag: "ACADEMIC SERVICES",
      description: "Seu currículo ou artigo com voz de autoridade. Tradução técnica e revisão crítica com precisão terminológica e fluidez nativa.",
      details: ["Localização de CV", "Artigos Científicos", "Documentos de TI"],
      icon: FileText,
      color: "bg-orange-50 text-orange-600",
      to: "/contato",
      cta: "Orçar projeto"
    },
    {
      title: "Eventos, Voz & Media",
      tag: "HOSTING & VOICE",
      description: "Mestre de Cerimônias, Hostess bilíngue ou Locução profissional. Se a sua marca precisa falar inglês, eu empresto a minha voz.",
      details: ["Tradução Simultânea", "Locução Comercial", "Mediação de Eventos"],
      icon: Mic,
      color: "bg-navy/5 text-navy",
      to: "/contato",
      cta: "Ver disponibilidade"
    }
  ];

  return (
    <Layout>
      <PageTransition>
        <section className="py-24 bg-[#FDFCF8]">
          <div className="container mx-auto px-4">
            
            {/* Header Section */}
            <div className="max-w-4xl mb-24">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-3 mb-8"
              >
                <span className="px-4 py-1.5 bg-gold/10 text-gold text-xs font-black uppercase tracking-[0.2em] rounded-full">
                  Lila 2026
                </span>
                <Sparkles size={18} className="text-gold" />
              </motion.div>
              
              <h1 className="text-6xl md:text-[100px] font-black text-navy mb-10 tracking-tighter leading-[0.85]">
                Soluções para <br/> 
                <span className="text-gold italic font-serif font-normal">ganhar o mundo.</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 leading-snug max-w-3xl font-medium tracking-tight">
                Expertise técnica, certificação internacional e 15 anos de estrada. Eu não ensino só inglês, eu viabilizo sua carreira global.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allServices.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }} 
                  className="group bg-white p-12 rounded-[3rem] border border-navy/5 hover:border-gold/20 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                      <s.icon size={32} />
                    </div>
                    
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-gold/60 mb-4 block">
                      {s.tag}
                    </span>
                    
                    <h3 className="text-3xl font-bold text-navy mb-6 tracking-tight leading-tight">
                      {s.title}
                    </h3>
                    
                    <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                      {s.description}
                    </p>
                    
                    <ul className="space-y-5 mb-12">
                      {s.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-sm font-bold text-navy/80 uppercase tracking-tight">
                          <div className="w-2 h-2 rounded-full bg-gold" /> 
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={s.to} 
                    target={s.external ? "_blank" : "_self"} 
                    className="flex items-center justify-between w-full pt-8 border-t border-navy/5 text-navy font-black text-xs uppercase tracking-widest group-hover:text-gold transition-colors"
                  >
                    {s.cta || "Falar sobre este serviço"}
                    <ArrowRight 
                      size={20} 
                      className={`transition-transform duration-300 ${s.external ? "group-hover:-rotate-45" : "group-hover:translate-x-1"}`} 
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}