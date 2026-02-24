"use client";

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    MessageCircle,
    CircleEllipsis,
    UserCheck,
    Sparkles,
    CheckCircle2,
    SmilePlus,
    Globe2,
    ArrowRight,
    Check,
    MapPin
} from 'lucide-react';
import { Suspense, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContratoContent = () => {
    const searchParams = useSearchParams();

    const planoEscolhido = searchParams.get('plano') || "Plano Individual";
    const teacherNome = searchParams.get('teacher');

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        localizacao: 'Brasil'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const saudacao = `Olá Lila! Meu nome é ${formData.nome}.`;
        const local = `Falo do *${formData.localizacao}*.`;
        const detalhes = `Tenho interesse no *${planoEscolhido}*${teacherNome ? ` com a teacher ${teacherNome}` : ''}.`;
        const callToAction = `Acabei de preencher minha identificação no site. Podemos seguir com os dados para o contrato?`;

        const linkWhatsapp = `https://wa.me/19787939832?text=${encodeURIComponent(`${saudacao} ${local} ${detalhes} ${callToAction}`)}`;

        try {
            await fetch('/api/contrato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    plano: planoEscolhido,
                    teacher: teacherNome || 'Time Lila',
                    aceitouPoliticas: true
                })
            }).catch(() => console.log("Lead captado."));

            setStatus('success');
            setTimeout(() => { window.location.href = linkWhatsapp; }, 1500);

        } catch (error) {
            setStatus('success');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <header className="pt-32 pb-12 md:pt-40 md:pb-10 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4"
                    >
                        <Sparkles size={12} /> The world is yours
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase tracking-tighter mb-8 italic leading-[0.9]">
                        Que escolha incrível!
                    </h1>

                    <div className="flex flex-col items-center gap-3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gold blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative px-8 py-4 bg-white border-2 border-gold text-navy rounded-2xl shadow-xl">
                                <p className="text-xl md:text-2xl font-black tracking-tight italic uppercase">{planoEscolhido}</p>
                                {teacherNome && (
                                    <div className="flex items-center justify-center gap-2 mt-2 text-gold">
                                        <UserCheck size={16} />
                                        <span className="text-xs font-bold uppercase tracking-widest">Com a teacher {teacherNome}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative order-2 lg:order-1"
                    >
                        {status === 'success' ? (
                            <div className="py-20 text-center flex flex-col items-center">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-black text-navy uppercase italic mb-2">Tudo pronto!</h3>
                                <p className="text-slate-500 font-medium mb-8">Partiu WhatsApp? Te vejo lá!</p>
                                <CircleEllipsis className="animate-spin text-gold" />
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                                        <SmilePlus size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-navy uppercase tracking-tight italic leading-tight">Vamos começar?</h2>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Só uns segundinhos para eu te identificar</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-black uppercase text-slate-400 ml-4">Como você se chama?</label>
                                        <input required name="nome" type="text" onChange={handleInputChange} placeholder="Seu nome" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-gold/20 outline-none font-medium transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[12px] font-black uppercase text-slate-400 ml-4">Seu e-mail oficial</label>
                                        <input required name="email" type="email" onChange={handleInputChange} placeholder="O que você mais usa" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-gold/20 outline-none font-medium transition-all" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[12px] font-black uppercase text-slate-400 ml-4 flex items-center gap-1">
                                            <MapPin size={12} className="text-gold" /> Onde você está no mundo?
                                        </label>
                                        <div className="relative">
                                            <select name="localizacao" value={formData.localizacao} onChange={handleInputChange} className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-gold/20 outline-none font-medium appearance-none cursor-pointer">
                                                <option value="Brasil">Tô no Brasil 🇧🇷</option>
                                                <option value="Exterior">Moro no Exterior 🌎</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-black italic">▼</div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className={`w-full py-7 rounded-[2.5rem] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl ${status === 'sending' ? 'bg-slate-200 text-slate-400' : 'bg-navy text-white hover:bg-gold hover:text-navy hover:-translate-y-1'}`}
                                    >
                                        {status === 'sending' ? (
                                            <CircleEllipsis className="animate-spin" />
                                        ) : (
                                            <><MessageCircle size={20} fill="currentColor" /> Chamar a Lila no WhatsApp</>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest px-6 leading-relaxed">
                                        Ao clicar, você será enviado para o meu WhatsApp e concorda com nossas{" "}
                                        <a href="/politicas" className="text-gold underline hover:text-navy transition-colors">
                                            Políticas de Agendamento
                                        </a>.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.section>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:pt-10 space-y-8 order-1 lg:order-2"
                    >
                        <div className="space-y-6">
                            <h2 className="text-xl font-black text-navy uppercase italic tracking-widest flex items-center gap-2">
                                <ArrowRight className="text-gold" size={24} /> O que vem por aí?
                            </h2>

                            <div className="space-y-4">
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Não sou fã de processos burocráticos e automáticos. Quero que sua experiência seja impecável desde o primeiro "Oi".
                                </p>

                                <div className="bg-white border-l-4 border-gold p-8 rounded-r-3xl shadow-sm italic relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                                        <MessageCircle size={80} />
                                    </div>
                                    <p className="text-navy font-bold text-md leading-relaxed relative z-10">
                                        "Assim que você clicar no botão, a gente começa a conversar. Vou te pedir os dados finais, tiro todas as suas dúvidas e te envio o link oficial para assinatura do contrato. Tudo rápido, seguro e sem chatice!"
                                    </p>
                                    <span className="block mt-4 text-[10px] font-black uppercase text-gold tracking-[0.2em]">— Teacher Lila</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-4">
                            {[
                                "Acompanhamento 100% Humano",
                                "Zero Burocracia no Formulário",
                                "Contrato Digital em Minutos"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-navy font-bold uppercase italic text-[10px] tracking-[0.15em] opacity-80">
                                    <Check size={14} className="text-gold" strokeWidth={4} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

const ContratoPage = () => (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><CircleEllipsis className="animate-spin text-gold" size={40} /></div>}>
        <ContratoContent />
    </Suspense>
);

export default ContratoPage;