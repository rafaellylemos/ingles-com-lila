"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Plus, MessageSquare, Eye, Trash2, Loader2, Calendar, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Post {
    id: string;
    title: string;
    slug: string;
    created_at: string;
}

export default function AdminBlogDashboard() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();

    const fetchData = async () => {
        try {
            setLoading(true);

            const { data: { user } } = await supabase.auth.getUser();
            if (user) setUserEmail(user.email ?? null);

            const { data, error } = await supabase
                .from('posts')
                .select('id, title, slug, created_at')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (err) {
            console.error('Erro ao carregar dashboard:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Confirmar exclusão definitiva deste post?")) return;

        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) {
            alert("Erro ao excluir: " + error.message);
        } else {
            setPosts(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-[#FCFBFA] p-8 md:p-20 text-navy font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Header Dinâmico */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] italic">Dashboard</span>
                            <span className="text-slate-200 text-[10px]">|</span>
                            <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                <User size={10} className="text-gold" />
                                {userEmail ? userEmail.split('@')[0] : 'Admin'}
                            </div>
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter">
                            Gestão do <span className="italic font-serif font-normal text-gold">Blog.</span>
                        </h1>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="p-4 rounded-full border border-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm"
                            title="Sair"
                        >
                            <LogOut size={18} />
                        </button>
                        <Link href="/admin/blog/new" className="bg-navy text-white px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-gold hover:text-navy transition-all shadow-xl flex items-center gap-2">
                            <Plus size={16} /> Novo Post
                        </Link>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Status Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <div className="p-3 bg-gold/10 rounded-2xl text-gold w-fit mb-4"><Eye size={20} /></div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total de Posts</p>
                            <p className="text-4xl font-black mt-1">{posts.length}</p>
                        </div>

                        <div className="bg-navy p-8 rounded-[2.5rem] shadow-xl text-white">
                            <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2">Acesso Rápido</p>
                            <Link href="/blog" target="_blank" className="text-sm font-light italic hover:text-gold transition-colors flex items-center gap-2">
                                Ver blog público <ArrowRight size={14} className={''} />
                            </Link>
                        </div>
                    </div>

                    {/* Lista de Posts */}
                    <div className="md:col-span-2 space-y-4">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center p-20 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
                                <Loader2 className="animate-spin text-gold mb-4" size={32} />
                                <p className="text-slate-400 italic text-sm font-light">Sincronizando dados de elite...</p>
                            </div>
                        ) : posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2 text-slate-300">
                                            <Calendar size={12} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                                {new Date(post.created_at).toLocaleDateString('pt-BR')}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black text-navy leading-tight">{post.title}</h3>
                                        <p className="text-slate-400 text-sm italic font-light mt-1">/{post.slug}</p>
                                    </div>

                                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="p-3 text-slate-300 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="p-3 bg-slate-50 rounded-full text-navy hover:bg-gold transition-all"
                                        >
                                            <Eye size={20} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-20 rounded-[3rem] border border-slate-100 shadow-sm text-center">
                                <p className="text-slate-400 italic mb-6 text-lg font-light">Seu blog ainda está em silêncio.</p>
                                <Link href="/admin/blog/new" className="text-gold font-bold uppercase text-[10px] tracking-widest border-b-2 border-gold/20 pb-1 hover:border-gold transition-all">
                                    Criar meu primeiro post
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ArrowRight({ size, className }: { size: number, className: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
    );
}