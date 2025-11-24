import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';
import { postsQuery } from '@/lib/sanity/queries';
import { BlogPostPreview } from '@/types/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://obsidianpartners.fr'; // TODO: Update with your actual domain

    // Fetch all blog posts from Sanity
    let blogPosts: BlogPostPreview[] = [];
    try {
        blogPosts = await client.fetch<BlogPostPreview[]>(postsQuery);
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error);
    }

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/lead-magnet`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cgv`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/politique-confidentialite`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    // Dynamic blog post pages
    const blogPostPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPostPages];
}
