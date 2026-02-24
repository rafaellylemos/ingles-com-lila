"use client";

import { motion } from 'framer-motion';
import { ChevronLeft, HelpCircle, Monitor, BookOpen, Video, Headphones } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FAQPage() {
    const faqs = [
        {
            number: "01",
            q: "Como são realizadas as aulas?",
            a: "As aulas são 100% online via Google Meet. Utilizamos uma plataforma interativa de ensino onde compartilhamos materiais, fazemos anotações em tempo real, jogamos e praticamos a conversação de forma dinâmica."
        },
        {
            number: "02",
            q: "O que eu preciso para as aulas?",
            a: "Recomendamos fortemente o uso de um computador ou laptop e fones de ouvido. O uso de celular ou tablet não é aconselhável, pois dificulta a leitura dos materiais interativos e a participação plena nas atividades."
        },
        {
            number: "03",
            q: "Preciso ligar a minha câmera?",
            a: "Embora a câmera do aluno seja opcional, ela é preferível para uma melhor conexão e feedback visual durante a conversação. A teacher estará sempre com a câmera ligada."
        },
        {
            number: "04",
            q: "Como recebo os materiais?",
            a: "Após a confirmação da matrícula, você recebe acesso ao nosso ambiente de estudos, link permanente da sala e calendários. Todo o material didático digital já está incluso nos planos."
        },
        {
            number: "05",
            q: "Tenho suporte fora do horário de aula?",
            a: "Sim! Todos os alunos têm acesso direto à Lila via WhatsApp para tirar dúvidas pontuais e consultoria sobre carreira ou vida no exterior, conforme o nível do plano escolhido."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="pt-40 pb-20 grow">
                <div className="container mx-auto px-4 max-w-3xl">

                    <header className="mb-16">
                        <h1 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic tracking-tighter leading-none mb-6">
                            Dúvidas <br />
                            <span className="text-gold">Frequentes (FAQ)</span>
                        </h1>
                        <div className="w-20 h-2 bg-navy mb-8"></div>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                            @inglescomlila • Central de Ajuda
                        </p>
                    </header>

                    <div className="space-y-16 mb-20">
                        {faqs.map((faq, index) => (
                            <motion.section
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-4"
                            >
                                <h2 className="text-navy font-black italic uppercase tracking-tight text-xl flex items-center gap-4">
                                    <span className="text-gold opacity-50 text-2xl">{faq.number}.</span>
                                    {faq.q}
                                </h2>
                                <p className="text-slate-700 font-medium leading-relaxed pl-12">
                                    {faq.a}
                                </p>
                            </motion.section>
                        ))}
                    </div>

                    <footer className="pt-12 border-t border-slate-100">
                        <Link
                            href="/contrato"
                            className="inline-flex items-center gap-3 text-navy font-black uppercase text-xs tracking-[0.2em] hover:text-gold transition-colors group"
                        >
                            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Voltar para inscrição
                        </Link>
                    </footer>

                </div>
            </main>

            <Footer />
        </div>
    );
}