"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Loader2,
    Send,
    MessageCircle,
    Sparkles,
    ArrowLeft,
    Crown,
    CheckCircle2,
    Globe2,
    Zap
} from 'lucide-react';

import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

function CzaoWaitingListContent() {
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
            plano: "CZÃO (C1/C2)",
        };

        try {
            const response = await fetch('/api/planos-grupos/czao', {
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
                setError("Erro inesperado ao processar sua solicitação.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-24 md:pt-40 pb-24 bg-[#FCFBFA] min-h-screen text-navy font-sans selection:bg-gold/30 overflow-hidden relative">

            <div className="absolute top-20 right-[-5%] opacity-10 pointer-events-none text-gold">
                <Crown size={400} />
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
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gold italic">The High-Performance Tier</span>
                        <span className="h-px w-8 bg-gold"></span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-navy">
                        Para quem já fala, <br />
                        <span className="italic font-serif font-normal text-gold text-6xl md:text-9xl">mas quer ser ouvido.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                        O Czão é a última milha da sua fluência. Um espaço para dominar as <span className="text-navy font-medium italic">nuances, a autoridade e a presença cultural</span> que o nível avançado exige.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-20 max-w-6xl mx-auto mb-24">

                    {/* Imagem Editorial */}
                    <motion.div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-t-[10rem] rounded-b-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 aspect-[4/5] shadow-2xl border border-navy/5">
                            <img
                                src="/czao-thumb.jpg"
                                alt="Grupo Czão Lila"
                                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"; }}
                            />
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
                                        Vagas para o nível C1/C2 são abertas sob curadoria. Entre na lista para garantir que eu te chame assim que uma oportunidade surgir.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <input required name="nome" type="text" placeholder="Como te chamam?" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium" />
                                    <input required name="email" type="email" placeholder="Seu e-mail profissional" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium" />
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <input required name="whatsapp" type="tel" placeholder="WhatsApp" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium" />
                                        <select name="localizacao" className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors text-xl font-medium text-navy appearance-none cursor-pointer">
                                            <option value="Brasil">No Brasil</option>
                                            <option value="Exterior">No Exterior</option>
                                        </select>
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm italic">*{error}</p>}

                                <button
                                    disabled={isSubmitting}
                                    className="group flex items-center gap-4 bg-navy text-white px-10 py-6 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-500 cursor-pointer disabled:opacity-50"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : (
                                        <>
                                            Entrar na lista oficial
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
                                <h2 className="text-3xl font-black mb-3 tracking-tighter text-navy uppercase">
                                    Seu nome está no radar.
                                </h2>
                                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light italic">
                                    Recebi seu interesse pelo Czão. Como este é o nível de maior performance,
                                    eu mesma te chamo no WhatsApp assim que eu abrir uma nova mesa de
                                    conversação para o seu perfil. Até lá!
                                </p>

                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-navy/40 hover:text-gold cursor-pointer transition-colors border-b border-transparent hover:border-gold"
                                >
                                    <div className="w-8 h-[1px] bg-navy/10 group-hover:bg-gold transition-all"></div>
                                    Enviar novo formulário
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* ENTREGÁVEIS TÉCNICOS */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 py-20 border-t border-navy/5">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-gold">
                            <Zap size={20} />
                            <h3 className="font-black uppercase tracking-widest text-[10px] text-navy">High-Level Delivery</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Encontros imersivos de 75 minutos",
                                "+15 horas de conteúdo estratégico ao vivo",
                                "Foco em Real-Life English (Negócios, Cultura e Humor)",
                                "Feedback direto e personalizado da Lila",
                                "Networking com alunos de alta performance"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-500 font-light text-lg italic">
                                    <CheckCircle2 size={18} className="text-gold mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-gold">
                            <Globe2 size={20} />
                            <h3 className="font-black uppercase tracking-widest text-[10px] text-navy">O Objetivo</h3>
                        </div>
                        <p className="text-slate-500 font-light text-lg leading-relaxed italic">
                            O Czão não é sobre gramática. É sobre <span className="text-navy font-bold">transitar com autoridade</span> em qualquer mesa do mundo. Vamos polir sua pronúncia, expandir sua agilidade mental e garantir que sua voz tenha o impacto que sua carreira exige.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12 items-center">
                        <div>
                            <p className="text-[20px] font-bold text-navy tracking-tighter leading-none">C1/C2</p>
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gold mt-1">Advanced Level</p>
                        </div>
                    </div>

                    <a href="https://wa.me/19787939832?text=Olá Lila! Tenho dúvidas sobre o plano Czão."
                        className="flex items-center gap-4 text-navy/60 hover:text-gold transition-all group">
                        <span className="text-[10px] font-black uppercase tracking-widest">Dúvidas? Fale no WhatsApp</span>
                        <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
                            <MessageCircle size={18} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function PaginaCzao() {
    return (
        <Layout>
            <PageTransition>
                <CzaoWaitingListContent />
            </PageTransition>
        </Layout>
    );
}