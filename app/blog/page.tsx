import { supabase } from '@/lib/supabase';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import BlogGrid from './BlogGrid';
export default async function BlogArchivePage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Erro ao carregar blog:", error);
  }

  return (
    <Layout>
      <PageTransition>
        <main className="min-h-screen bg-[#F8F9FA] text-navy">

          <header className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center">
            <span className="text-gold/60 text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Journal & Insights
            </span>
            <h1 className="text-6xl md:text-[100px] font-medium tracking-tight leading-[0.8] mb-8">
              The <span className="italic font-serif font-normal text-gold">Journal.</span>
            </h1>
            <p className="max-w-xl mx-auto text-slate-400 font-light text-lg md:text-xl leading-relaxed">
              Reflexões sobre cultura, viagens e o inglês que conecta você ao mundo.
            </p>
          </header>

          <section className="max-w-6xl mx-auto px-6 pb-40">
            {posts && posts.length > 0 ? (
              <BlogGrid posts={posts} />
            ) : (
              <div className="text-center py-40 bg-white rounded-[40px] border border-dashed border-slate-200">
                <p className="text-slate-300 italic font-serif text-2xl">Em breve, novas histórias...</p>
              </div>
            )}
          </section>
        </main>
      </PageTransition>
    </Layout>
  );
}