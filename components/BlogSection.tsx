"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Loader2 } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  content: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchRecentPosts();
  }, []);

  if (loading) return (
    <div className="flex justify-center py-20">
      <Loader2 className="animate-spin text-gold" size={32} />
    </div>
  );

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-[#FCFBFA]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mb-2 block italic">The Journal</span>
            <h2 className="text-5xl md:text-6xl font-black text-navy tracking-tighter">Últimas do <span className="italic font-serif font-normal text-gold">Blog.</span></h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-navy font-black uppercase text-[10px] tracking-[0.2em] group">
            Ver tudo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className="group block bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-center gap-2 text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar size={12} />
                  {new Date(post.created_at).toLocaleDateString('pt-BR')}
                </div>
                <h3 className="text-2xl font-black text-navy leading-tight mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm font-light italic line-clamp-2 mb-6">
                  {post.content}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-navy pt-4 border-t border-slate-50">
                  Read More <ArrowRight size={14} className="text-gold" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}