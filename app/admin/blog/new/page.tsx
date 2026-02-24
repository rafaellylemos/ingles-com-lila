"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Video, MessageSquareOff, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [allowComments, setAllowComments] = useState(true);

    const handleSave = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!title || !content) return alert("Título e conteúdo são obrigatórios!");

        setLoading(true);

        const slug = title
            .toLowerCase()
            .trim()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        try {
            const { error } = await supabase
                .from('posts')
                .insert([
                    {
                        title,
                        content,
                        video_url: videoUrl,
                        slug,
                        allow_comments: allowComments,
                        published: true
                    }
                ]);

            if (error) throw error;

            setSubmitted(true);
            setTimeout(() => router.push('/admin/blog'), 2000);

        } catch (error) {
            console.error('Erro ao salvar:', error);
            alert("Erro ao publicar: " + (error instanceof Error ? error.message : "Erro desconhecido"));
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#FCFBFA] flex items-center justify-center">
                <div className="text-center">
                    <CheckCircle className="text-gold mx-auto mb-4" size={60} />
                    <h2 className="text-3xl font-black text-navy uppercase tracking-tighter">Post Publicado!</h2>
                    <p className="text-slate-400 italic">Redirecionando para o painel...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FCFBFA] p-8 text-navy font-sans">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <Link href="/admin/blog" className="flex items-center gap-2 text-navy/50 hover:text-navy transition-colors text-[10px] font-black uppercase tracking-widest">
                        <ArrowLeft size={16} /> Voltar
                    </Link>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setAllowComments(!allowComments)}
                            className={`p-3 rounded-full transition-all ${!allowComments ? 'bg-red-100 text-red-500' : 'bg-slate-100 text-slate-400'}`}
                            title={allowComments ? "Comentários Ativados" : "Comentários Desativados"}
                        >
                            <MessageSquareOff size={20} />
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="bg-navy text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-gold hover:text-navy transition-all flex items-center gap-2 shadow-xl disabled:opacity-50"
                        >
                            {loading ? "Enviando..." : <><Save size={16} /> Publicar agora</>}
                        </button>
                    </div>
                </div>

                {/* Editor */}
                <div className="space-y-8 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título do Post..."
                        className="w-full text-5xl font-black tracking-tighter outline-none placeholder:text-slate-100"
                    />

                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl">
                        <Video size={18} className="text-slate-400" />
                        <input
                            type="text"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            placeholder="Link do vídeo (YouTube/Vimeo)"
                            className="bg-transparent w-full text-sm outline-none font-medium text-navy/70"
                        />
                    </div>

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Lila, escreva aqui seu conteúdo de elite..."
                        className="w-full min-h-100 text-xl font-light leading-relaxed outline-none resize-none placeholder:text-slate-200"
                    />
                </div>
            </div>
        </div>
    );
}