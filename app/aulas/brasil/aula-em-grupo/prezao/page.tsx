"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Loader2,
    Send,
    MessageCircle,
    Sparkles,
    Target,
    Compass,
    ArrowLeft,
    Zap
} from 'lucide-react';

import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

function PrezaoWaitingListContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const payload = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
            localizacao: formData.get('localizacao'),
            plano: "PREZÃO (A2)",
        };

        try {
            const response = await fetch('/api/planos-grupos/prezao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error(result.error?.message || result.error || "Erro ao processar.");
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocorreu um erro inesperado ao salvar seus dados.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-24 md:pt-40 pb-24 bg-[#FCFBFA] min-h-screen text-navy font-sans selection:bg-gold/30 overflow-hidden relative">

            <div className="absolute top-20 right-[-5%] opacity-10 pointer-events-none text-gold">
                <Zap size={400} />
            </div>

            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start mb-12 max-w-6xl mx-auto"
                >
                    <Link
                        href="/aulas?tab=grupos#grupos-section"
                        className="group flex items-center gap-2 text-navy/40 hover:text-navy text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                    >
                        <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all border border-slate-100">
                            <ArrowLeft size={14} />
                        </div>
                        Explorar outros grupos
                    </Link>
                </motion.div>

                {/* CABEÇALHO EDITORIAL */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center items-center gap-3 mb-6"
                    >
                        <span className="h-px w-8 bg-gold"></span>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gold italic">Season 2026</span>
                        <span className="h-px w-8 bg-gold"></span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-navy">
                        Turbinando o <br />
                        <span className="italic font-serif font-normal text-gold">seu Prezão.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Para quem já passou pelo básico, mas quer parar de falar "inglês de livro" e começar a ter um <span className="text-navy font-medium italic">inglês da vida real</span>, com confiança e autonomia.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-20 max-w-6xl mx-auto mb-24">

                    {/* Imagem Editorial */}
                    <motion.div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-t-[10rem] rounded-b-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 aspect-[4/5] shadow-2xl border border-navy/5">
                            <img
                                src="/prezao-thumb.jpg"
                                alt="Prezão com Lila"
                                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600"; }}
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-full text-navy shadow-xl rotate-12">
                            <Zap size={32} />
                        </div>
                    </motion.div>

                    {/* Formulário */}
                    <div className="w-full lg:w-1/2 pt-10">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-black tracking-tighter text-navy mb-2 uppercase">
                                        Lista de Espera
                                    </h2>
                                    <p className="text-slate-500 text-base font-light italic leading-relaxed">
                                        As vagas para o nível A2 são disputadas. Entre na lista para ser avisado assim que abrirmos o próximo embarque.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="group relative">
                                        <input required name="nome" type="text" placeholder="Como te chamam?" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium placeholder:text-slate-300" />
                                        <label className="absolute -top-4 left-0 text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 group-focus-within:opacity-100 transition-all">Nome Completo</label>
                                    </div>

                                    <div className="group relative">
                                        <input required name="email" type="email" placeholder="Seu melhor e-mail" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium placeholder:text-slate-300" />
                                        <label className="absolute -top-4 left-0 text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 group-focus-within:opacity-100 transition-all">E-mail</label>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="group relative">
                                            <input required name="whatsapp" type="tel" placeholder="WhatsApp" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium placeholder:text-slate-300" />
                                            <label className="absolute -top-4 left-0 text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 group-focus-within:opacity-100 transition-all">WhatsApp</label>
                                        </div>
                                        <div className="group relative">
                                            <select name="localizacao" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium text-navy cursor-pointer appearance-none">
                                                <option value="Brasil">No Brasil</option>
                                                <option value="Exterior">No Exterior</option>
                                            </select>
                                            <label className="absolute -top-4 left-0 text-[10px] font-bold uppercase tracking-widest text-gold">Localização</label>
                                        </div>
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm font-medium italic">*{error}</p>}

                                <button
                                    disabled={isSubmitting}
                                    className="group flex items-center gap-4 bg-navy text-white px-10 py-6 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-500 cursor-pointer shadow-xl shadow-navy/5 disabled:opacity-50"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : (
                                        <>
                                            Entrar na lista de espera
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full flex flex-col justify-center items-start pt-10"
                            >
                                <Sparkles className="text-gold mb-6" size={40} />
                                <h2 className="text-3xl font-black mb-3 tracking-tighter text-navy uppercase">Presença Confirmada</h2>
                                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light italic">
                                    Dados recebidos! Você está oficialmente no nosso radar para as turmas de 2026. Te chamaremos no WhatsApp em breve.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[11px] font-black uppercase tracking-widest text-navy/40 hover:text-gold cursor-pointer transition-colors border-b border-transparent hover:border-gold"
                                >
                                    Fazer outro cadastro
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Tópicos Técnicos */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 py-20 border-t border-navy/5">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-gold">
                            <Target size={24} />
                            <h3 className="font-black uppercase tracking-widest text-[10px] text-navy">Para quem é o Prezão?</h3>
                        </div>
                        <ul className="space-y-4 text-slate-500 font-light text-lg leading-relaxed">
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">01.</span>
                                Nível pré-intermediário (A2) que já possui uma base, mas sente que empacou.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">02.</span>
                                Quem quer expandir o vocabulário para além do "the book is on the table".
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">03.</span>
                                Alunos que buscam segurança para falar sem medo de cometer erros bobos.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-gold">
                            <Compass size={24} />
                            <h3 className="font-black uppercase tracking-widest text-[10px] text-navy">O que você domina?</h3>
                        </div>
                        <ul className="space-y-4 text-slate-500 font-light text-lg leading-relaxed">
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">→</span>
                                Speaking e Listening focados em conversas reais e cotidianas.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">→</span>
                                Aprimoramento de habilidades (Reading & Writing) de forma eficiente.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-gold font-bold">→</span>
                                A transição do básico para o intermediário com um "inglês não engessado".
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer da Página */}
                <div className="mt-12 pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12 items-center">
                        <div>
                            <p className="text-[20px] font-bold text-navy tracking-tighter leading-none">A2</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gold mt-1">Elementary Level</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/19787939832?text=Olá Lila! Tenho dúvidas sobre o plano Prezão."
                        className="flex items-center gap-4 text-navy/60 hover:text-gold transition-all group cursor-pointer"
                    >
                        <span className="text-[10px] uppercase tracking-widest font-bold">Dúvidas? Fale no WhatsApp</span>
                        <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
                            <MessageCircle size={18} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function PaginaPrezao() {
    return (
        <Layout>
            <PageTransition>
                <PrezaoWaitingListContent />
            </PageTransition>
        </Layout>
    );
}