"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Star, Briefcase, Download, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useLanguage = () => ({
  t: (pt: string, en: string) => pt
});

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/sobre', labelPt: 'Conheça a Lila', labelEn: 'About Lila', icon: Star },
    { path: '/servicos', labelPt: 'Serviços', labelEn: 'Services', icon: Briefcase },
    { path: '/blog', labelPt: 'Blog', labelEn: 'Blog', icon: BookOpen }, // Novo link do Blog
    { path: '/ebook', labelPt: 'E-book Grátis', labelEn: 'Free E-book', icon: Download },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl md:text-2xl font-semibold text-navy">
              Inglês com <span className="text-gold">Lila</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-gold' : 'text-foreground/80 hover:text-navy'}`}
            >
              {t('Home', 'Home')}
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${pathname.startsWith(link.path) ? 'text-gold' : 'text-foreground/80 hover:text-navy'}`}
              >
                {t(link.labelPt, link.labelEn)}
              </Link>
            ))}

            <Link href="/contato" className="px-5 py-2 bg-navy text-white rounded-full text-sm font-medium hover:bg-navy-light transition-all shadow-sm">
              {t('Contato', 'Contact')}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">
                {t('Home', 'Home')}
              </Link>

              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 flex items-center gap-3">
                  <link.icon size={18} className="text-gold" />
                  {t(link.labelPt, link.labelEn)}
                </Link>
              ))}

              <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="mt-2 px-5 py-3 bg-navy text-white rounded-full text-base font-medium text-center">
                {t('Contato', 'Contact')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;