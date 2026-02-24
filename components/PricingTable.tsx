"use client";

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

interface PricingTableProps {
  plans: PricingPlan[];
}

const useLanguage = () => ({
  t: (pt: string, en: string) => pt
});

const PricingTable = ({ plans }: PricingTableProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-3 gap-6 py-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative rounded-2xl p-6 md:p-8 flex flex-col ${plan.featured
              ? 'bg-navy text-white shadow-xl md:scale-105 z-10 border-2 border-gold'
              : 'bg-white border border-border text-foreground'
            }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              {t('MAIS POPULAR', 'MOST POPULAR')}
            </div>
          )}

          <h3 className={`font-heading text-xl font-semibold mb-2 ${plan.featured ? 'text-gold' : 'text-navy'}`}>
            {plan.name}
          </h3>

          <div className="mb-4">
            <span className="text-3xl font-bold">
              {plan.price}
            </span>
            <span className={`text-sm ${plan.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
              /{plan.period}
            </span>
          </div>

          <p className={`text-sm mb-6 grow ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>
            {plan.description}
          </p>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className={plan.featured ? 'text-white/90' : 'text-foreground/80'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${plan.featured
                ? 'bg-gold text-navy hover:bg-gold-light shadow-md'
                : 'bg-navy text-white hover:bg-navy-light'
              }`}
          >
            {t('Começar Agora', 'Get Started')}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingTable;