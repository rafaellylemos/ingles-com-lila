import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, MessageSquare, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    notFound();
  }

  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    const videoId = url.includes("v=")
      ? url.split("v=")[1]?.split("&")[0]
      : url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <main className="min-h-screen bg-[#FCFBFA] text-navy font-sans pb-20">

      <nav className="p-8 max-w-4xl mx-auto flex justify-between items-center">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-gold transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Ver todos os posts
        </Link>

        <Link
          href="/admin/blog"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold/60 hover:text-gold transition-colors border-b border-gold/20 pb-1"
        >
          <LayoutDashboard size={12} />
          Painel da Lila
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-8">

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar size={14} className="text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {new Date(post.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
            {post.title}
          </h1>

          {post.video_url && (
            <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 bg-slate-100 border border-slate-200">
              <iframe
                width="100%"
                height="100%"
                src={getEmbedUrl(post.video_url) || ""}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </header>

        <section className="max-w-none mb-20">
          <p className="whitespace-pre-wrap text-xl md:text-2xl font-light leading-relaxed text-navy/80 italic">
            {post.content}
          </p>
        </section>

        <hr className="border-slate-100 mb-12" />

        {post.allow_comments ? (
          <section className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-3xl font-black tracking-tighter uppercase italic">Comments</h3>
            </div>

            <div className="p-8 border-2 border-dashed border-slate-100 rounded-[2rem] text-center">
              <p className="text-slate-400 font-medium italic">
                Espaço reservado para a interação dos alunos.
              </p>
            </div>
          </section>
        ) : (
          <p className="text-center text-slate-300 text-[10px] font-bold uppercase tracking-widest italic">
            Comentários desativados para esta aula.
          </p>
        )}
      </article>
    </main>
  );
}