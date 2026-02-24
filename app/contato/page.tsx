"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  AlertCircle,
  Sparkles,
  CircleEllipsis,
  CheckCircle2,
  Globe
} from 'lucide-react';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

const Contato = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    setSent(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: "Contato via Site - Teacher Lila",
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Falha no envio');
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail oficial',
      value: 'contato@inglescomlila.com',
      href: 'mailto:contato@inglescomlila.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp Direct',
      value: '+1(978) 793-9832',
      href: 'https://wa.me/19787939832',
    },
    {
      icon: MapPin,
      title: 'Base atual',
      value: 'Bavária, Alemanha 🇩🇪',
      href: '#',
    },
  ];

  return (
    <Layout>
      <PageTransition>
        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <Sparkles size={12} /> Say Hello
                </div>

                <h1 className="font-heading text-5xl md:text-7xl font-black text-navy leading-[0.85] mb-8 italic uppercase tracking-tighter">
                  Hey! Bora <br /><span className="text-gold group inline-flex items-center gap-2">conversar?</span>
                </h1>

                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12 max-w-md italic">
                  Tô aqui para tirar suas dúvidas e te ajudar a destravar de vez. Manda um oi de onde você estiver no mundo! 🌎
                </p>

                <div className="space-y-8 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-300 group-hover:-rotate-6 shadow-sm">
                        <item.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">{item.title}</p>
                        <p className="text-lg font-bold text-navy group-hover:text-gold transition-colors italic leading-none">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://www.instagram.com/inglescomlila" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl hover:bg-gold hover:text-navy transition-all font-black uppercase text-[10px] tracking-widest shadow-xl shadow-navy/10">
                    <Instagram size={16} /> Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/lila-brasileiro-4154a913/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-navy rounded-xl hover:border-gold transition-all font-black uppercase text-[10px] tracking-widest">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-2xl relative z-10">
                  <h2 className="font-heading text-2xl font-black text-navy mb-8 uppercase italic tracking-tight">
                    Mande um recado
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-slate-400 ml-2 tracking-widest">Como te chamo?</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all font-medium italic"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-slate-400 ml-2 tracking-widest">Seu e-mail oficial</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all font-medium"
                        placeholder="exemplo@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase text-slate-400 ml-2 tracking-widest">O que você me conta?</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-gold/30 outline-none transition-all resize-none font-medium italic"
                        placeholder="Dúvidas, parcerias ou só um 'hello'..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-6 bg-navy text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <CircleEllipsis className="animate-spin text-white" />
                      ) : (
                        <><Send className="w-4 h-4" /> Enviar Mensagem</>
                      )}
                    </button>

                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-green-600 text-[12px] font-black uppercase tracking-widest p-4 bg-green-50 rounded-2xl border border-green-100"
                      >
                        <CheckCircle2 size={16} /> Mensagem enviada com sucesso!
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-red-600 text-[12px] font-black uppercase tracking-widest p-4 bg-red-50 rounded-2xl border border-red-100"
                      >
                        <AlertCircle size={16} /> Ops! Tenta de novo?
                      </motion.div>
                    )}
                  </form>
                </div>

                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-0" />
              </motion.div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contato;