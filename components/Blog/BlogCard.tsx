'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPostPreview } from '@/types/blog';
import { urlFor } from '@/lib/sanity/image';

interface BlogCardProps {
    post: BlogPostPreview;
    index: number;
}

const categoryLabels: Record<string, string> = {
    'ia': 'Intelligence Artificielle',
    'transformation': 'Transformation Digitale',
    'strategie': 'Stratégie',
    'cas-clients': 'Cas Clients',
    'actualites': 'Actualités',
};

export default function BlogCard({ post, index }: BlogCardProps) {
    const imageUrl = post.mainImage
        ? urlFor(post.mainImage).width(800).height(500).url()
        : null;

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/blog/${post.slug.current}`}>
                <div
                    className="group h-full rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{
                        background: '#e0e5ec',
                        boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
                    }}
                >
                    {imageUrl && (
                        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    )}

                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.map((category) => (
                                <span
                                    key={category}
                                    className="px-3 py-1 text-xs font-medium text-[#1e3a8a] rounded-lg"
                                    style={{
                                        background: '#e0e5ec',
                                        boxShadow: 'inset 2px 2px 4px #bec3c9, inset -2px -2px 4px #ffffff',
                                    }}
                                >
                                    {categoryLabels[category] || category}
                                </span>
                            ))}
                        </div>
                    )}

                    <h2 className="text-2xl font-normal text-[#0f172a] mb-3 group-hover:text-[#1e3a8a] transition-colors">
                        {post.title}
                    </h2>

                    {post.excerpt && (
                        <p className="text-[#475569] font-light mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b] font-light">
                        <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>{formattedDate}</span>
                        </div>
                        {post.estimatedReadingTime && (
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>{post.estimatedReadingTime} min de lecture</span>
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
