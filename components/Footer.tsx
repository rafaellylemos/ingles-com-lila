"use client";

import Link from 'next/link';
import { Instagram, Linkedin, Mail, LayoutDashboard, BookOpen } from 'lucide-react';

const useLanguage = () => ({
  t: (pt: string, en: string) => pt
});

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand & Bio */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-semibold mb-4 tracking-tighter">
              Inglês com <span className="text-gold">Lila</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed italic font-light">
              {t(
                'Transformando vidas através do ensino personalizado e consultoria internacional de alto nível.',
                'Transforming lives through high-level personalized teaching and international consultancy.'
              )}
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gold">
              {t('Conteúdo', 'Content')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
                {t('Home', 'Home')}
              </Link>
              <Link href="/blog" className="text-sm text-white/50 hover:text-gold transition-colors flex items-center gap-2">
                <BookOpen size={14} /> {t('Blog & Journal', 'Blog & Journal')}
              </Link>
              <Link href="/faq" className="text-sm text-white/50 hover:text-white transition-colors">
                {t('Dúvidas Frequentes', 'FAQ')}
              </Link>
              <Link href="/contato" className="text-sm text-white/50 hover:text-white transition-colors">
                {t('Contato', 'Contact')}
              </Link>
            </nav>
          </div>

          {/* Legal / Policy */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gold">
              {t('Jurídico', 'Legal')}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/politicas" className="text-sm text-white/50 hover:text-white transition-colors">
                {t('Privacidade e Termos', 'Privacy & Terms')}
              </Link>
              <Link href="/politicas#cancelamento" className="text-sm text-white/50 hover:text-white transition-colors">
                {t('Políticas de Cancelamento', 'Cancellation')}
              </Link>
              <Link href="/admin/blog" className="text-[10px] text-white/20 hover:text-gold transition-all mt-4 flex items-center gap-2 uppercase font-black">
                <LayoutDashboard size={12} /> {t('Área Administrativa', 'Admin Area')}
              </Link>
            </nav>
          </div>

          {/* Social Presence */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gold">
              {t('Conecte-se', 'Social')}
            </h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/inglescomlila" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-gold hover:text-navy transition-all duration-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-gold hover:text-navy transition-all duration-500">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@inglescomlila.com" className="p-3 bg-white/5 rounded-2xl hover:bg-gold hover:text-navy transition-all duration-500">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Inglês com Lila. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/10">
            Design & Code by You
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;