import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/lib/sanity/client';
import { postBySlugQuery } from '@/lib/sanity/queries';
import { BlogPost } from '@/types/blog';
import { urlFor } from '@/lib/sanity/image';
import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';
import BlogContent from '@/components/Blog/BlogContent';
import Breadcrumbs from '@/components/Blog/Breadcrumbs';
import RelatedArticles from '@/components/Blog/RelatedArticles';
import { getBreadcrumbSchema, renderStructuredData } from '@/lib/seo/structuredData';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const post = await client.fetch<BlogPost>(postBySlugQuery, {
        slug: params.slug,
    });

    if (!post) {
        return {
            title: 'Article non trouvé',
        };
    }

    const metaTitle = post.seo?.metaTitle || post.title;
    const metaDescription = post.seo?.metaDescription || post.excerpt || '';
    const imageUrl = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).url()
        : null;

    return {
        title: `${metaTitle} | Obsidian Partners`,
        description: metaDescription,
        keywords: post.seo?.keywords?.join(', '),
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author],
            images: imageUrl ? [{ url: imageUrl }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: imageUrl ? [imageUrl] : [],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await client.fetch<BlogPost>(postBySlugQuery, {
        slug: params.slug,
    });

    if (!post) {
        notFound();
    }

    const imageUrl = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(675).url()
        : null;

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: imageUrl ? [imageUrl] : [],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
            '@type': 'Organization',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Obsidian Partners',
            logo: {
                '@type': 'ImageObject',
                url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691b66a04c81a902668a15c7/c1dcec10b_Ajouteruntitre1.png',
            },
        },
        description: post.excerpt || '',
    };

    // Breadcrumb structured data
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Accueil', url: 'https://obsidianpartners.fr' },
        { name: 'Blog', url: 'https://obsidianpartners.fr/blog' },
        { name: post.title },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={renderStructuredData(breadcrumbSchema)}
            />
            <div className="min-h-screen bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8]">
                <Header />
                <main>
                    <article className="px-4 pt-32 pb-20 md:pt-40">
                        <div className="mx-auto max-w-4xl">
                            {/* Breadcrumb Navigation */}
                            <Breadcrumbs
                                items={[
                                    { name: 'Blog', href: '/blog' },
                                    { name: post.title },
                                ]}
                            />

                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e40af] transition-colors mb-8 font-light"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Retour aux articles
                            </Link>

                            <header className="mb-12">
                                <h1 className="text-4xl md:text-5xl font-normal text-[#0f172a] mb-6">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-4 text-[#64748b] font-light mb-8">
                                    <div className="flex items-center gap-2">
                                        <User className="h-5 w-5" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5" />
                                        <span>{formattedDate}</span>
                                    </div>
                                    {post.estimatedReadingTime && (
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-5 w-5" />
                                            <span>{post.estimatedReadingTime} min de lecture</span>
                                        </div>
                                    )}
                                </div>

                                {imageUrl && (
                                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
                                        <Image
                                            src={imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {post.excerpt && (
                                    <p className="text-xl text-[#475569] font-light leading-relaxed italic">
                                        {post.excerpt}
                                    </p>
                                )}
                            </header>

                            {post.body && (
                                <div
                                    className="rounded-2xl p-8 md:p-12"
                                    style={{
                                        background: '#e0e5ec',
                                        boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
                                    }}
                                >
                                    <BlogContent content={post.body} />
                                </div>
                            )}

                            {/* Related Articles */}
                            <RelatedArticles
                                currentPostId={post._id}
                                categories={post.categories}
                            />
                        </div>
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}
