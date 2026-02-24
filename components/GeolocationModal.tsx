"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface GeolocationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GeolocationModal = ({ isOpen, onClose }: GeolocationModalProps) => {

    const handleLocationSelect = (region: 'BR' | 'INT') => {
        sessionStorage.setItem('lila_user_region', region);
        window.dispatchEvent(new Event('storage'));

        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row"
                >
                    {/* Lado da Imagem (Visual Brand) */}
                    <div className="md:w-5/12 bg-gold relative min-h-62.5 md:min-h-full">
                        <img
                            src="/lila.jpeg"
                            alt="Teacher Lila"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent flex items-end p-8">
                            <p className="text-white font-serif text-xl italic leading-relaxed">
                                "Ready to start your journey?"
                            </p>
                        </div>
                    </div>

                    {/* Lado do Conteúdo (UX & Conversion) */}
                    <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-white">
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-slate-300 hover:text-navy transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex items-center gap-2 text-gold font-black mb-4">
                            <span className="uppercase tracking-[0.2em] text-[10px]">Lila 2026</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-6 tracking-tighter leading-none">
                            Hello! <br /><span className="text-gold italic font-serif font-normal">Welcome.</span>
                        </h2>

                        <div className="text-slate-600 mb-10 space-y-2 leading-relaxed">
                            <p className="font-bold text-navy text-lg">De onde você me procura?</p>
                            <p className="text-sm md:text-base italic">
                                Adaptamos nossos planos e valores conforme sua localização atual.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* OPÇÃO BRASIL */}
                            <button
                                onClick={() => handleLocationSelect('BR')}
                                className="group flex items-center gap-4 p-5 border-2 border-slate-50 rounded-2xl hover:border-gold hover:bg-gold/5 transition-all duration-300 text-left"
                            >
                                <span className="text-3xl">🇧🇷</span>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-gold transition-colors">Preços em R$</p>
                                    <p className="font-bold text-lg text-navy">Brasil</p>
                                </div>
                            </button>

                            {/* OPÇÃO EXTERIOR */}
                            <button
                                onClick={() => handleLocationSelect('INT')}
                                className="group flex items-center gap-4 p-5 border-2 border-slate-50 rounded-2xl hover:border-gold hover:bg-gold/5 transition-all duration-300 text-left"
                            >
                                <span className="text-3xl">🌎</span>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-gold transition-colors">Prices in U$</p>
                                    <p className="font-bold text-lg text-navy">Exterior</p>
                                </div>
                            </button>
                        </div>

                        <button
                            onClick={() => handleLocationSelect('BR')}
                            className="mt-10 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-gold transition-colors group"
                        >
                            Pular por enquanto
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default GeolocationModal;