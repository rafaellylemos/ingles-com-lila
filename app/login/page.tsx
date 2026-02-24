"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2 } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert("Erro no acesso: " + error.message);
            setLoading(false);
        } else {
            router.push('/admin/blog');
        }
    };

    return (
        <div className="min-h-screen bg-[#FCFBFA] flex items-center justify-center p-8">
            <div className="max-w-md w-full bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
                <header className="text-center mb-10">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-2 block italic">Members Only</span>
                    <h1 className="text-4xl font-black text-navy tracking-tighter">Lila's <span className="italic font-serif font-normal text-gold">Access.</span></h1>
                </header>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <Mail className="absolute left-4 top-4 text-slate-300" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-4 text-slate-300" size={18} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-gold/20 transition-all font-medium"
                            required
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-navy text-white py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold hover:text-navy transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" size={16} /> : "Enter Dashboard"}
                    </button>
                </form>
            </div>
        </div>
    );
}