"use client";

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Importando o Footer
import Link from 'next/link';

export default function PoliticasPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            <main className="pt-40 pb-20 grow">
                <div className="container mx-auto px-4 max-w-3xl">

                    <header className="mb-16">
                        <h1 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic tracking-tighter leading-none mb-6">
                            Políticas de Pagamento, <br />
                            <span className="text-gold">Remarcação e Cancelamento</span>
                        </h1>
                        <div className="w-20 h-2 bg-navy mb-8"></div>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                            @inglescomlila • Documento Informativo
                        </p>
                    </header>

                    <div className="space-y-12">

                        {/* Seção 01 */}
                        <section className="space-y-4">
                            <h2 className="text-navy font-black italic uppercase tracking-tight text-xl">
                                01. Pagamentos
                            </h2>
                            <p className="text-slate-700 font-medium leading-relaxed">
                                O pagamento de toda e qualquer aula ou plano deve ser feito por
                                <span className="text-red-600 font-bold"> transferência bancária ou PIX </span>
                                em valor integral <span className="underline decoration-gold decoration-2">antes</span> do início das aulas, independentemente do tipo de programa ou plano de aula escolhido.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                Pagamentos via cartão de crédito ou boleto ficam sujeitos a taxas bancárias e são de responsabilidade do aluno.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-navy font-black italic uppercase tracking-tight text-xl">
                                02. Remarcações
                            </h2>
                            <p className="text-slate-700 font-medium leading-relaxed">
                                Remarcações devem ser feitas com no mínimo <span className="text-red-600 font-bold">24h de antecedência</span>, indo de acordo com a disponibilidade do aluno e da professora.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-black italic uppercase tracking-tight text-xl text-red-600">
                                03. Cancelamento e No-Show
                            </h2>
                            <div className="space-y-6 text-slate-700 font-medium leading-relaxed">
                                <p>
                                    Em caso de <span className="font-bold border-b-2 border-red-200">cancelamento antecipado</span> da sessão por questões alheias, e não havendo remarcação da mesma até 24h antes da aula, o valor pago pela sessão não poderá ser ressarcido em hipótese alguma.
                                </p>
                                <p>
                                    Em caso de <span className="text-red-600 font-bold">no-show</span> (não comparecimento do aluno) no dia e no horário da aula marcada, o valor da sessão não poderá ser ressarcido em hipótese alguma.
                                </p>
                                <p className="text-sm bg-slate-50 p-5 rounded-xl border-l-4 border-navy italic">
                                    Em caso de cancelamento emergencial, a parte contratada não pode garantir disponibilidade de horário futuro para remarcação e o valor pago não será reembolsado.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4 pb-12">
                            <h2 className="text-navy font-black italic uppercase tracking-tight text-xl">
                                04. Indisponibilidade da Teacher
                            </h2>
                            <p className="text-slate-700 font-medium leading-relaxed">
                                Em caso de indisponibilidade em circunstância previamente agendada ou por emergência da parte contratada (professora), a professora se disponibiliza a avisar e remarcar um dia/horário que melhor se adeque à agenda do aluno para repor o conteúdo.
                            </p>
                        </section>

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