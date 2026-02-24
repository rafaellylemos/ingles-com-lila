"use client";

import { motion } from 'framer-motion';
import { MapPin, Globe, Plane, Camera, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

const countries = [
  { id: 1, name: "Alemanha", emoji: "🇩🇪", status: "Base Atual", top: "28%", left: "51.5%" },
  { id: 2, name: "Vietnã", emoji: "🇻🇳", status: "Experiência Ásia", top: "54%", left: "80%" },
  { id: 3, name: "EUA", emoji: "🇺🇸", status: "Estudos", top: "43%", left: "25%" },
  { id: 4, name: "Inglaterra", emoji: "🇬🇧", status: "Certificação", top: "25%", left: "48.5%" },
];

const gallery = [
  { id: 1, loc: "Hanoi, Vietnam", caption: "Onde o inglês me conectou com o Oriente." },
  { id: 2, loc: "London, UK", caption: "O dia em que a Trinity College se tornou real." },
  { id: 3, loc: "Bavaria, Germany", caption: "Minha rotina atual entre castelos e aulas." },
  { id: 4, loc: "New York, USA", caption: "Praticando o inglês que não está nos livros." },
];

export default function MundoDaLila() {
  return (
    <Layout>
      <PageTransition>
        <section className="pt-32 pb-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">

            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
              <Link href="/sobre" className="inline-flex items-center gap-2 text-slate-400 hover:text-gold font-black uppercase text-[10px] tracking-widest mb-8 transition-colors group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Voltar para a bio
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-8xl font-heading font-black text-navy uppercase italic leading-[0.8] tracking-tighter">
                  Onde o inglês <br />
                  <span className="text-gold">me levou.</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto italic">
                  Passaportes carimbados e histórias contadas no idioma do mundo.
                </p>
              </motion.div>
            </div>

            <div className="relative max-w-5xl mx-auto mb-32 border-y border-slate-50 py-12">
              <div className="relative w-full aspect-2/1">

                <img
                  src="/mapamundi.svg"
                  alt="Mapa Mundi"
                  className="w-full h-full object-contain opacity-40 select-none pointer-events-none"
                />

                <div className="absolute inset-0">
                  {countries.map((country) => (
                    <motion.div
                      key={country.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * country.id }}
                      style={{ top: country.top, left: country.left }}
                      className="absolute group z-20"
                    >
                      <div className="w-6 h-6 bg-gold/20 rounded-full animate-ping absolute -left-1.5 -top-1.5" />

                      <div className="w-3 h-3 bg-gold rounded-full relative shadow-[0_0_15px_rgba(212,175,55,0.8)] cursor-pointer" />

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 pointer-events-none">
                        <div className="bg-navy px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap">
                          <p className="text-[8px] font-black text-gold uppercase tracking-[0.2em] mb-1">{country.status}</p>
                          <p className="text-white font-black italic text-sm">{country.emoji} {country.name}</p>
                        </div>
                        <div className="w-2 h-2 bg-navy rotate-45 mx-auto -mt-1" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-slate-100 grow" />
                <h2 className="text-2xl font-heading font-black text-navy uppercase italic tracking-tight flex items-center gap-3">
                  <Camera size={24} className="text-gold" /> Galeria de Bordo
                </h2>
                <div className="h-px bg-slate-100 grow" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {gallery.map((photo, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="relative aspect-3/4 mb-4 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-black uppercase italic text-[10px] tracking-widest text-center px-4">
                        Foto: {photo.loc}
                      </div>
                    </div>
                    <p className="text-[10px] font-black text-gold uppercase tracking-widest mb-1">{photo.loc}</p>
                    <p className="text-navy font-bold italic leading-tight">{photo.caption}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-32 text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gold/5 blur-2xl rounded-full" />
                <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic leading-none mb-8 relative">
                  Próxima parada: <span className="text-gold underline decoration-navy decoration-4 underline-offset-8">sua fluência.</span>
                </h2>
              </div>
              <div className="mt-8">
                <Link href="/contato" className="px-12 py-5 bg-navy text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-navy transition-all shadow-xl shadow-navy/10 group flex items-center gap-4 mx-auto w-fit">
                  Começar minha jornada <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}