"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  toBR: string;
  toINT?: string;
  cta?: string;
  external?: boolean;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  toBR,
  toINT,
  cta,
  external = false,
  delay = 0
}: ServiceCardProps) => {
  const [region, setRegion] = useState<'BR' | 'INT'>('BR');

  useEffect(() => {
    const syncRegion = () => {
      const savedRegion = sessionStorage.getItem('lila_user_region') as 'BR' | 'INT';
      if (savedRegion) setRegion(savedRegion);
    };

    syncRegion();

    window.addEventListener('storage', syncRegion);
    window.addEventListener('lila_region_updated', syncRegion);

    return () => {
      window.removeEventListener('storage', syncRegion);
      window.removeEventListener('lila_region_updated', syncRegion);
    };
  }, []);

  const finalTo = (region === 'INT' && toINT) ? toINT : toBR;

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group p-6 md:p-8 h-full flex flex-col cursor-pointer bg-white border border-border rounded-[2rem] shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-500"
    >
      <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
        <Icon className="w-7 h-7 text-gold" />
      </div>

      <h3 className="font-heading text-2xl font-black text-navy mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed grow mb-8 font-medium">
        {description}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-navy font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-gold transition-all">
        <span>{cta || (external ? "Acessar" : "Saiba mais")}</span>
        {external ? (
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
        ) : (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </div>
    </motion.div>
  );

  if (external) {
    return (
      <a href={finalTo} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <Link href={finalTo} className="block h-full">
      {CardContent}
    </Link>
  );
};

export default ServiceCard;