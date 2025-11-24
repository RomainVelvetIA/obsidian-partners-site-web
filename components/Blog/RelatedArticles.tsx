'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity/client';
import { postsQuery } from '@/lib/sanity/queries';
import { BlogPostPreview } from '@/types/blog';
import BlogCard from './BlogCard';

interface RelatedArticlesProps {
    currentPostId: string;
    categories?: string[];
}

export default function RelatedArticles({ currentPostId, categories }: RelatedArticlesProps) {
    const [relatedPosts, setRelatedPosts] = useState<BlogPostPreview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRelatedPosts() {
            try {
                const allPosts = await client.fetch<BlogPostPreview[]>(postsQuery);

                // Filter posts: same category, exclude current post, max 3 posts
                let filtered = allPosts.filter(post => {
                    if (post._id === currentPostId) return false;
                    if (!categories || categories.length === 0) return true;
                    return post.categories?.some(cat => categories.includes(cat));
                });

                // Limit to 3 posts
                filtered = filtered.slice(0, 3);

                setRelatedPosts(filtered);
            } catch (error) {
                console.error('Error fetching related posts:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchRelatedPosts();
    }, [currentPostId, categories]);

    if (loading || relatedPosts.length === 0) {
        return null;
    }

    return (
        <section className="mt-16 pt-16 border-t-2 border-[#cbd5e1]/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="mb-8 text-3xl font-extralight text-[#0f172a]">
                    Articles <span className="text-[#1e3a8a]">Similaires</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map((post, index) => (
                        <BlogCard key={post._id} post={post} index={index} />
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[#1e3a8a] font-light hover:text-[#1e40af] transition-all duration-300"
                        style={{
                            background: '#e0e5ec',
                            boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff'
                        }}
                    >
                        Voir tous les articles
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
