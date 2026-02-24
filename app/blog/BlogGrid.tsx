// components/blog/BlogGrid.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, PlayCircle } from 'lucide-react';

interface Post {
    id: string;
    slug: string;
    created_at: string;
    video_url?: string;
    title: string;
    content: string;
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col bg-white rounded-[40px] p-10 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 h-full"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-gold/60 uppercase tracking-widest">
                                <Calendar size={12} className="opacity-50" />
                                {new Date(post.created_at).toLocaleDateString('pt-BR')}
                            </div>
                            {post.video_url && (
                                <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center">
                                    <PlayCircle size={16} className="text-gold" />
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4 group-hover:text-gold transition-colors duration-300">
                            {post.title}
                        </h2>

                        <p className="text-slate-400 font-light text-sm leading-relaxed line-clamp-3 mb-10">
                            {post.content}
                        </p>

                        <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy/40 group-hover:text-navy transition-colors">
                                Ler Artigo
                            </span>
                            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-all duration-300">
                                <ArrowRight size={16} className="text-gold group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}