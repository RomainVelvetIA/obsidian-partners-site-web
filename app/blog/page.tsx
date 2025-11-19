'use client';

import { useState, useEffect } from 'react';
import { client } from '@/lib/sanity/client';
import { postsQuery, categoriesQuery } from '@/lib/sanity/queries';
import { BlogPostPreview } from '@/types/blog';
import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';
import BlogHeader from '@/components/Blog/BlogHeader';
import BlogCard from '@/components/Blog/BlogCard';
import CategoryFilter from '@/components/Blog/CategoryFilter';

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPostPreview[]>([]);
    const [allPosts, setAllPosts] = useState<BlogPostPreview[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [fetchedPosts, fetchedCategories] = await Promise.all([
                    client.fetch<BlogPostPreview[]>(postsQuery),
                    client.fetch<string[]>(categoriesQuery),
                ]);

                setAllPosts(fetchedPosts);
                setPosts(fetchedPosts);
                setCategories(fetchedCategories);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory === null) {
            setPosts(allPosts);
        } else {
            setPosts(
                allPosts.filter((post) => post.categories?.includes(selectedCategory))
            );
        }
    }, [selectedCategory, allPosts]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8]">
            <Header />
            <main>
                <BlogHeader />

                <section className="px-4 pb-20">
                    <div className="mx-auto max-w-7xl">
                        {categories.length > 0 && (
                            <CategoryFilter
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                        )}

                        {loading ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-[#475569] font-light">
                                    Chargement des articles...
                                </p>
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-xl text-[#475569] font-light">
                                    Aucun article disponible pour le moment.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <BlogCard key={post._id} post={post} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
