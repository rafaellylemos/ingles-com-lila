"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Info, ArrowRight, Instagram, Plane, Globe2, Map } from 'lucide-react';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

export default function ConhecaALila() {
  const [showTrinityInfo, setShowTrinityInfo] = useState(false);

  return (
    <Layout>
      <PageTransition>
        <section className="py-10 md:py-24 bg-[#FDFCF8]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

              {/* COLUNA DA FOTO */}
              <div className="md:col-span-5 md:order-2 flex justify-center md:block">
                <div className="md:sticky md:top-32 w-full max-w-75 md:max-w-none">
                  <div className="relative w-full aspect-[2/3] md:aspect-[2/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-gold">
                    <Image
                      src="/conheca-lila.png"
                      alt="Lila - English Teacher Around the World"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* COLUNA DO TEXTO */}
              <div className="md:col-span-7 md:order-1 pt-4 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h1 className="inline-block bg-[#F2D65E] text-[#333] text-3xl md:text-5xl font-black px-4 py-2 mb-8 md:mb-12 tracking-tighter italic uppercase">
                    Conheça a Lila
                  </h1>
                </motion.div>

                <div className="space-y-6 md:space-y-8 text-base md:text-xl text-slate-700 leading-relaxed text-justify md:text-left">
                  <p>
                    Com formação em <span className="font-black text-navy">Comunicação Social pela UFPE</span>, a Lila não apenas ensina inglês desde 2009; ela domina a arte de conectar pessoas ao mundo através do idioma. Sua expertise é respaldada pela prestigiada certificação internacional da

                    <span className="relative inline-block ml-1">
                      <button
                        onMouseEnter={() => setShowTrinityInfo(true)}
                        onMouseLeave={() => setShowTrinityInfo(false)}
                        onClick={() => setShowTrinityInfo(!showTrinityInfo)}
                        className="font-black italic text-navy border-b-2 border-gold cursor-help"
                      >
                        Trinity College London
                      </button>

                      <AnimatePresence>
                        {showTrinityInfo && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-80 p-5 bg-navy text-white text-xs md:text-sm rounded-2xl shadow-2xl"
                          >
                            <div className="flex gap-3 items-start">
                              <Info size={18} className="text-gold shrink-0 mt-0.5" />
                              <p className="leading-snug">
                                <strong>Certificação CertTESOL:</strong> Uma das qualificações mais respeitadas do mundo (Level 5 Ofqual), reconhecida globalmente pelo British Council.
                              </p>
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-navy" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>, obtida em 2014.
                  </p>

                  <p>
                    Após consolidar sua carreira em algumas das maiores instituições de ensino do Brasil e atuar em uma das principais plataformas de educação online da Ásia, hoje a Lila foca no <span className="font-bold italic">desenvolvimento da autonomia linguística</span>.
                  </p>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-navy/5 border-l-4 border-gold p-6 md:p-8 my-10 rounded-r-3xl group cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform duration-500">
                      <Globe2 size={120} />
                    </div>

                    <Link href="/o-mundo-da-lila" className="relative z-10 block">
                      <div className="flex items-center gap-2 text-gold font-black uppercase text-[10px] tracking-[0.2em] mb-2">
                        <Plane size={14} /> Global Citizen
                      </div>
                      <h3 className="text-navy font-black text-xl md:text-2xl italic leading-tight mb-3 group-hover:text-gold transition-colors">
                        Quer ver por onde eu já andei (e onde o inglês me levou)?
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 font-medium mb-4">
                        Explore meu mapa mundi interativo e uma galeria de fotos dos países onde vivi e estudei.
                      </p>
                      <div className="flex items-center gap-2 text-navy font-black text-[12px] uppercase tracking-widest">
                        Acessar o mapa da Lila <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>

                  <p>
                    <span className="font-black text-navy">Garantindo que você encontre a sua própria voz de forma natural, segura e sem barreiras.</span> Dedicando-se exclusivamente ao ensino digital, acumula a experiência de transformar a vida de centenas de alunos ao redor de todo o globo.
                  </p>

                  <p>
                    Hoje, a Lila também é referência em <span className="font-bold italic">Inglês para Saúde</span> e treinadora do OET, liderando o
                    <a
                      href="https://instagram.com/oetwithlila"
                      target="_blank"
                      className="text-navy font-black hover:text-gold transition-colors ml-1 underline decoration-gold decoration-2 underline-offset-4"
                    >
                      @oetwithlila
                    </a>, capacitando brasileiros para carreiras médicas globais.
                  </p>
                </div>

                {/* CTAs FINAIS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 md:mt-16 p-6 md:p-10 bg-white border border-navy/5 rounded-4xl md:rounded-[3rem] flex flex-col xl:flex-row items-center gap-4 md:gap-6 shadow-sm"
                >
                  <Link
                    href="/servicos"
                    className="w-full xl:w-auto px-10 py-5 bg-navy text-white rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-gold hover:text-navy transition-all text-center flex items-center justify-center gap-2 group"
                  >
                    Ver formatos e planos <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://instagram.com/inglescomlila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xl:w-auto px-10 py-5 border-2 border-navy text-navy rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-navy hover:text-white transition-all text-center flex items-center justify-center gap-3 group"
                  >
                    <Instagram size={24} className="group-hover:scale-110 transition-transform text-pink-500 md:text-inherit" />
                    Acompanhar a rotina
                  </a>
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}