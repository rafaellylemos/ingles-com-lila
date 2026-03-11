"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle, ArrowRight } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFDFD] relative overflow-hidden selection:bg-gold/30">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-navy/5" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Branding */}
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-navy/30">
            inglês com lila
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="font-serif text-6xl md:text-[5.5rem] font-bold text-navy tracking-tighter leading-[0.85] mb-8">
          Brb, <br /> 
          <span className="italic font-normal text-gold text-5xl md:text-7xl">making it better.</span>
        </h1>
        
        {/* Copy - "por aqui" removido para evitar repetição */}
        <p className="text-navy/80 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-sm mx-auto">
          Resolvi dar um <i>refresh</i> no meu espaço. O site novo está ficando pronto, 
          do jeito que a gente gosta: prático e sem frescura.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 w-full max-w-[280px]">
            <p className="text-[11px] font-bold uppercase tracking-widest text-navy/40 mb-2">
              Até lá, a gente se encontra aqui:
            </p>
            
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/inglescomlila"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center gap-5 px-4 py-3 bg-navy text-white rounded-full transition-all hover:bg-gold hover:text-navy shadow-xl shadow-navy/10"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-navy/10">
                <Instagram size={18} />
              </div>
              <span className="font-sans font-black uppercase text-[10px] tracking-[0.2em] flex-1 text-left">
                Instagram
              </span>
              <ArrowRight size={14} className="opacity-30 group-hover:opacity-100" />
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://www.youtube.com/inglescomlila"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center gap-5 px-4 py-3 border border-navy/10 text-navy rounded-full transition-all hover:border-gold hover:text-gold shadow-sm"
              whileHover={{ x: 5 }}
            >
              <div className="w-8 h-8 bg-navy/5 rounded-full flex items-center justify-center group-hover:bg-gold/10">
                <Youtube size={18} />
              </div>
              <span className="font-sans font-black uppercase text-[10px] tracking-[0.2em] flex-1 text-left">
                YouTube
              </span>
              <ArrowRight size={14} className="opacity-30 group-hover:opacity-100" />
            </motion.a>
          </div>
        </div>

        {/* Rodapé - Volta do "Need something?" */}
        <div className="mt-24 pt-8 border-t border-slate-100/50">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/20 mb-5">
            Need something?
          </p>
          <a 
            href="https://wa.me/19787939832" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-slate-200 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-navy/60 hover:text-green-600 hover:border-green-100 hover:bg-green-50/30 transition-all shadow-sm"
          >
            <MessageCircle size={16} className="text-green-500" />
            Chama no WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Marca d'água */}
      <div className="absolute -bottom-10 -left-10 opacity-[0.03] select-none pointer-events-none text-navy">
        <h3 className="font-serif text-[15rem] font-black tracking-tighter">Lila</h3>
      </div>
    </div>
  );
};

export default MaintenancePage;