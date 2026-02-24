"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Zap, Globe2, Sparkles, Users2 } from 'lucide-react';
import Link from 'next/link';

const AulaIndividualContent = () => {
    const comparisonData = [
        {
            label: "FOCO PRINCIPAL",
            lila: "ALTA PERFORMANCE, CONVERSAÇÃO, ALUNOS AVANÇADOS, BUSINESS, SAÚDE, ENTREVISTAS, OET",
            time: "INGLÊS GERAL, CONVERSAÇÃO, IELTS, TOEFL, INICIANTES, INTERMEDIÁRIOS, AVANÇADOS, SAÚDE"
        },
        {
            label: "METODOLOGIA",
            lila: "AUTONOMIA SEM BARREIRAS / INGLÊS DA VIDA REAL",
            time: "MESMA METODOLOGIA, COM SUPERVISÃO DIRETA E AJUSTES PERIÓDICOS DA LILA"
        },
        {
            label: "FLEXIBILIDADE",
            lila: "AGENDA RESTRITA, ALTA DEMANDA, DIFERENÇA DE FUSO",
            time: "FUSO DO BRASIL (EXCELENTE TAMBÉM PARA ALUNOS NAS AMERICAS), MAIOR DISPONIBILIDADE"
        },
        {
            label: "PLANO DE AULA",
            lila: "100% PERSONALIZADO E CRIADO PELA LILA",
            time: "ORGANIZADO E CRIADO PELA LILA + TIME, EXECUTADO APENAS PELO TIME"
        },
        {
            label: "CHECK-IN DE NÍVEL",
            lila: "DIRETAMENTE COM A LILA",
            time: "DIAGNÓSTICO INICIAL COM A LILA + ACOMPANHAMENTO LILA E TIME"
        },
        {
            label: "INVESTIMENTO",
            lila: "A PARTIR DE R$ 170,00/HORA",
            time: "MELHOR CUSTO-BENEFÍCIO (A PARTIR DE R$ 103,00/HORA)"
        },
        {
            label: "AULAS BÔNUS",
            lila: "---------",
            time: "AULAS BÔNUS EM TODOS OS PACOTES"
        },
    ];

    const lilaPlans = [
        { qty: "20 horas", frequency: "1x /semana", parcel: "6x R$ 666,66", pix: "R$ 3.799,99" },
        { qty: "40 horas", frequency: "2x /semana", parcel: "6x R$ 1.266,66", pix: "R$ 7.219,99", popular: true },
        { qty: "60 horas", frequency: "3x /semana", parcel: "6x R$ 1.799,99", pix: "R$ 10.259,99" },
    ];

    const timePlans = [
        { qty: "20 + 2 horas", frequency: "1x /semana", parcel: "6x R$ 466,66", pix: "R$ 2.659,99", bonus: "Leve 2 aulas GRÁTIS" },
        { qty: "40 + 4 horas", frequency: "2x /semana", parcel: "6x R$ 866,66", pix: "R$ 4.939,99", bonus: "Leve 4 aulas GRÁTIS" },
        { qty: "60 + 6 horas", frequency: "3x /semana", parcel: "6x R$ 1.199,99", pix: "R$ 6.839,99", bonus: "Leve 6 aulas GRÁTIS" },
    ];

    return (
        <div className="w-full text-left">
            <section className="py-12 md:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">

                    {/* HERO */}
                    <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-black uppercase tracking-widest mb-6">
                                <Globe2 size={14} /> Only you & me
                            </div>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-navy mb-8 leading-tight">
                                Aulas <span className="text-gold italic font-medium">Individuais</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                                O formato ideal para quem não tem tempo a perder. Um currículo moldado 100% nos seus objetivos, no seu ritmo e na sua rotina.
                            </p>
                            <div className="space-y-5 text-slate-700">
                                {["Avança no seu tempo, sem depender de ninguém", "Encontros de 50-60min via Meet ou Zoom", "Suporte direto no meu WhatsApp para dúvidas", "Horários flexíveis que respeitam sua agenda", "Material e atividades pensados só para você"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-medium tracking-tight">
                                        <CheckCircle2 className="text-gold" size={18} /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] -rotate-3" />
                            <img src="/lila.jpg" alt="Lila" className="relative z-10 rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>

                    {/* 1. INVESTIMENTO - EXCLUSIVIDADE TEACHER LILA */}
                    <div className="mb-32 text-center">
                        <div className="mb-16 relative">
                            <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Exclusividade</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mt-2 italic">Teacher Lila</h2>
                            <div className="mt-6 flex flex-col items-center justify-center gap-5">
                                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span>🇧🇷 Exclusivo para Alunos no Brasil</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>Sessões a partir de R$ 170/hora</span>
                                </p>

                                {/* DESCONTOS DUPLA/TRIO */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/5 text-gold border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
                                        <Users2 size={13} /> Estude em Dupla: 20% de desconto
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/5 text-gold border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
                                        <Users2 size={13} /> Estude em Trio: 25% de desconto
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {lilaPlans.map((plan, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'border-gold bg-white shadow-2xl scale-105 relative z-10' : 'border-slate-200 bg-white'} text-center flex flex-col transition-all`}
                                >
                                    {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-[10px] font-black px-4 py-1 rounded-full uppercase">Mais procurado</span>}
                                    <h3 className="text-3xl font-bold text-navy mb-2 uppercase tracking-tight">{plan.qty}</h3>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-6 italic">({plan.frequency})</p>
                                    <div className="text-4xl font-bold text-navy mb-8 tracking-tighter">{plan.parcel}</div>
                                    <div className="mt-auto pt-8 border-t border-slate-50">
                                        <p className="text-gold font-black text-lg mb-8 uppercase tracking-tighter italic">PIX: {plan.pix}</p>
                                        <Link href={`/contrato?plano=${encodeURIComponent(plan.qty + " com Lila")}`}>
                                            <button className="w-full py-5 bg-navy text-white rounded-2xl font-bold hover:bg-gold hover:text-navy transition-all uppercase text-xs tracking-widest cursor-pointer">Garantir vaga com a Lila</button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 2. INVESTIMENTO - TIME DA LILA */}
                    <div className="mb-32 text-center">
                        <div className="mb-16">
                            <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">Aceleração</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mt-4 italic">Time da Lila</h2>
                            <div className="mt-6 flex flex-col items-center justify-center gap-5">
                                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span>🇧🇷 Exclusivo para Alunos no Brasil</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>Sessões a partir de R$ 103/hora</span>
                                </p>

                                {/* DESCONTOS DUPLA/TRIO */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/5 text-gold border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
                                        <Users2 size={13} /> Estude em Dupla: 20% de desconto
                                    </span>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/5 text-gold border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
                                        <Users2 size={13} /> Estude em Trio: 25% de desconto
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {timePlans.map((plan, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] border border-slate-200 bg-white text-center hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                                    <h3 className="text-3xl font-bold text-navy mb-2 uppercase tracking-tight">{plan.qty}</h3>
                                    <p className="text-[10px] text-gold uppercase font-black tracking-widest mb-6 italic font-bold">{plan.bonus}</p>
                                    <div className="text-4xl font-bold text-navy mb-8 tracking-tighter">{plan.parcel}</div>
                                    <div className="mt-auto pt-8 border-t border-slate-50">
                                        <p className="text-gold font-black text-lg mb-8 uppercase tracking-tighter italic text-center">PIX: {plan.pix}</p>
                                        <Link href={`/teachers?plano=${encodeURIComponent(plan.qty + " com o Time")}`}>
                                            <button className="w-full py-5 border-2 border-navy text-navy rounded-2xl font-bold hover:bg-navy hover:text-white transition-all uppercase text-xs tracking-widest cursor-pointer">Escolher Teacher</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. TABELA COMPARATIVA */}
                    <div className="w-full max-w-6xl mx-auto mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter mb-4">
                                E agora, <span className="text-gold italic font-serif font-normal">Lila ou time?</span>
                            </h2>
                            <p className="text-slate-500 text-lg md:text-xl font-medium">Confira o que combina mais com você!</p>
                        </div>
                        <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/60">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-navy text-white text-center">
                                            <th className="p-8 text-left text-[10px] font-black uppercase tracking-[0.2em] w-[20%]">Categoria</th>
                                            <th className="p-8 border-l border-white/10"><span className="text-gold italic font-serif text-3xl block normal-case">Lila</span></th>
                                            <th className="p-8 border-l border-white/10"><span className="text-white text-2xl font-black uppercase tracking-tighter block">Time</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[11px] md:text-xs font-bold uppercase tracking-tight">
                                        {comparisonData.map((row, index) => (
                                            <tr key={index} className="border-t border-slate-50 hover:bg-slate-50/50 transition-colors text-center">
                                                <td className="p-6 md:p-8 bg-slate-50/80 text-navy font-black border-r border-slate-100 text-left">{row.label}</td>
                                                <td className="p-6 md:p-8 text-slate-600 border-r border-slate-50 leading-relaxed md:px-12">{row.lila}</td>
                                                <td className="p-6 md:p-8 text-slate-600 leading-relaxed md:px-12">{row.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* 4. SEÇÃO OTG */}
                    <div className="w-full max-w-6xl mx-auto mb-24">
                        <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Zap size={200} /></div>
                            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                                <div className="lg:w-2/3 text-left">
                                    <div className="flex flex-wrap items-center gap-4 mb-8">
                                        <span className="px-4 py-1.5 bg-gold text-navy font-black rounded-lg text-[10px] uppercase tracking-widest shadow-sm">Foco & Velocidade</span>
                                        <span className="relative flex items-center gap-2 px-6 py-2 bg-navy text-gold font-black rounded-full text-[11px] uppercase tracking-[0.2em] shadow-lg border-2 border-gold/50">
                                            <Sparkles size={14} className="animate-pulse" /> Sessão Especial
                                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                                            </span>
                                        </span>
                                    </div>
                                    <h2 className="text-4xl font-heading font-bold text-navy mb-8">Inglês On The Go ⚡</h2>
                                    <p className="text-slate-600 text-xl mb-10 leading-relaxed italic">Sessões de 30 minutos pra quem já fala (B1+) e precisa manter o inglês afiado sem comprometer a agenda.</p>
                                    <div className="flex flex-wrap gap-12">
                                        <div><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Mensal / 4x</p><p className="text-4xl font-bold text-navy tracking-tighter">R$ 439,99</p></div>
                                        <div className="h-12 w-px bg-slate-100 hidden sm:block" />
                                        <div><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Plano 20</p><p className="text-4xl font-bold text-navy tracking-tighter">R$ 1.999,99</p></div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 w-full">
                                    <Link href={`/contrato?plano=${encodeURIComponent("Inglês On The Go (OTG)")}`}>
                                        <button className="w-full py-6 bg-navy text-white rounded-[2.5rem] font-bold text-xl shadow-xl hover:bg-gold hover:text-navy transition-all uppercase tracking-widest cursor-pointer">Quero o OTG</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RODAPÉ */}
                    <div className="text-center pt-10">
                        <h3 className="text-3xl font-bold text-navy mb-10 italic">Dúvidas sobre o melhor plano?</h3>
                        <a
                            href="https://wa.me/19787939832?text=Olá Lila! Tenho dúvidas sobre os planos individuais e gostaria de ajuda."
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-green-500 text-white rounded-full font-bold text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-200"
                        >
                            <MessageCircle size={24} fill="currentColor" /> Vamos conversar no WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AulaIndividualContent;