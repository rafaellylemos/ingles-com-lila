"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, Send, Instagram, Zap, MapPin, Globe } from 'lucide-react';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';

const EbookGratis = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: "Download de E-book",
          message: `O aluno ${name} baixou o guia de sobrevivência.`
        }),
      });

      if (response.ok) setIsSubmitted(true);
      else setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <PageTransition>
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#F8F9FA]">

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-gold/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-100 h-100 bg-navy/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

              <div className="grid lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-navy/40 text-[11px] font-bold uppercase tracking-[0.2em]">Material Exclusivo</span>
                      <div className="h-px w-8 bg-gold/50"></div>
                    </div>

                    <h1 className="text-5xl md:text-[80px] font-medium text-navy tracking-tight leading-[0.9] mb-8">
                      O mundo é <br />
                      <span className="text-gold italic font-serif">muito maior</span> <br />
                      sem legenda.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-lg">
                      Deixe para trás os métodos rígidos. Descubra o inglês real para viver experiências autênticas em qualquer lugar do globo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/60 backdrop-blur-md p-8 rounded-4xl border border-white shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center mb-4">
                          <Zap className="text-gold" size={20} />
                        </div>
                        <h4 className="text-navy font-bold text-sm uppercase tracking-wider mb-2">Conexão Real</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">As expressões essenciais para soar natural, não como um robô.</p>
                      </div>

                      <div className="bg-white/60 backdrop-blur-md p-8 rounded-4xl border border-white shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-navy/5 rounded-full flex items-center justify-center mb-4">
                          <MapPin className="text-navy" size={20} />
                        </div>
                        <h4 className="text-navy font-bold text-sm uppercase tracking-wider mb-2">Autonomia</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">O guia para transitar com confiança, da imigração ao check-out.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-10 md:p-14 rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative"
                  >
                    {!isSubmitted ? (
                      <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-navy tracking-tight mb-2 uppercase">Acesso imediato</h2>
                        <p className="text-slate-400 text-sm mb-8">Receba o PDF no seu e-mail agora.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div>
                            <input
                              type="text"
                              placeholder="Seu nome"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-gold/30 focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-slate-300"
                              required
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              placeholder="Seu melhor e-mail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-gold/30 focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-slate-300"
                              required
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 bg-navy text-white rounded-2xl font-bold uppercase text-[12px] tracking-[0.2em] hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
                          >
                            {isLoading ? (
                              <Loader2 className="animate-spin" />
                            ) : (
                              <>Enviar meu guia <Send size={14} /></>
                            )}
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="relative z-10 text-center py-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <Download className="text-gold" size={32} />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-navy mb-2 uppercase">Tudo pronto!</h3>
                        <p className="text-slate-500 mb-10 text-sm">O embarque foi autorizado. <br />Clique no botão abaixo.</p>

                        <a
                          href="/ebook-lila.pdf"
                          download="Guia_Lila_Ingles.pdf"
                          className="inline-block w-full py-5 bg-gold text-navy rounded-2xl font-bold uppercase text-[12px] tracking-[0.2em] hover:shadow-lg transition-all text-center"
                        >
                          Baixar PDF Agora
                        </a>
                      </div>
                    )}
                  </motion.div>

                  <div className="mt-10 flex justify-center gap-8">
                    <a href="#" className="text-navy/20 hover:text-navy transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-navy/20 hover:text-navy transition-colors"><Globe size={20} /></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default EbookGratis;