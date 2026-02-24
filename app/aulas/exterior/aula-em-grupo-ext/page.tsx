"use client";

import { motion } from 'framer-motion';
import { Video, ArrowRight, Zap, MessageSquare, Clock, Globe2 } from 'lucide-react';
import Link from 'next/link';

const GroupClassesExtContent = () => {
  const groups = [
    {
      level: "Iniciante (A1)",
      title: "Saindo do Zerão",
      description: "Pra quem tem zero contato ou aquele trauma de escola. Vamos começar do jeito certo.",
      buttonText: "Quero o Zerão",
      image: "/group-zero.jpg",
      color: "border-blue-400"
    },
    {
      level: "Pré-intermediário (A2)",
      title: "Prezão com Lila",
      description: "A ponte que faltava pra você parar de 'entender tudo mas não falar nada'.",
      buttonText: "Quero o Prezão",
      image: "/group-pre.jpg",
      color: "border-gold"
    },
    {
      level: "Intermediário (B1)",
      title: "Bzão",
      description: "Hora de refinar a fala e ganhar vocabulário pra conversas que vão além do básico.",
      buttonText: "Quero o Bzão",
      image: "/group-inter.jpg",
      color: "border-navy"
    },
    {
      level: "Avançado (C1)",
      title: "Czão",
      description: "O gás final pra quem já fala, mas quer soar natural e dominar as nuances do idioma.",
      buttonText: "Quero o Czão",
      image: "/group-adv.jpg",
      color: "border-slate-800"
    }
  ];

  return (
    <div className="w-full">
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">

          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-navy rounded-full text-xs font-black tracking-widest shadow-sm mb-6"
            >
              <Globe2 size={16} className="text-gold" />
              LEARN TOGETHER
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-4">
              Aulas em <span className="text-gold">Turma</span>
            </h1>
            <p className="text-slate-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Interação real com quem está no mesmo nível que você. Porque inglês se aprende falando, errando e trocando experiências.
            </p>

            {/* Feature Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 px-6 bg-white rounded-3xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-2">
                  <Video size={24} />
                </div>
                <span className="font-bold text-navy text-[10px] uppercase tracking-widest">Interação em <br />Tempo Real</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center border-y sm:border-y-0 sm:border-x border-slate-100 py-4 sm:py-0">
                <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mb-2">
                  <Zap size={24} />
                </div>
                <span className="font-bold text-navy text-[10px] uppercase tracking-widest">Turmas <br />Niveladas</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy mb-2">
                  <Clock size={24} />
                </div>
                <span className="font-bold text-navy text-[10px] uppercase tracking-widest">Aulas <br />Dinâmicas</span>
              </div>
            </div>
          </div>

          {/* Grid de Turmas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {groups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-[2.5rem] overflow-hidden shadow-lg border-b-8 ${group.color} flex flex-col group hover:shadow-2xl transition-all duration-500`}
              >
                {/* Imagem */}
                <div className="h-70 overflow-hidden relative">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-navy/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {group.level}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8 md:p-12 flex flex-col flex-1 text-center items-center">
                  <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                    {group.title}
                  </h2>
                  <p className="text-slate-500 mb-10 leading-relaxed flex-1 text-lg italic">
                    {group.description}
                  </p>

                  <button className="flex items-center justify-center gap-2 w-full py-5 bg-navy text-white rounded-2xl font-bold hover:bg-gold hover:text-navy transition-all group/btn shadow-lg shadow-navy/10 uppercase tracking-widest text-xs">
                    {group.buttonText}
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link para o Time */}
          <div className="text-center mt-12">
            <Link href="/teachers" className="text-navy/60 hover:text-navy font-bold underline underline-offset-4 transition-colors text-sm">
              Quer conhecer os teachers do time da Lila? Clica aqui
            </Link>
          </div>

          {/* CTA Final */}
          <div className="mt-24 text-center">
            <p className="text-slate-400 font-medium mb-6">Dúvidas sobre o seu nível atual?</p>
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-navy rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-tight">
              <MessageSquare size={22} /> Chamar no WhatsApp
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default GroupClassesExtContent;