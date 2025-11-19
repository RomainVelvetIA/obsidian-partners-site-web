import { PortableTextBlock } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface BlogPost {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    author: string;
    mainImage?: SanityImageSource;
    categories?: string[];
    publishedAt: string;
    excerpt?: string;
    body?: PortableTextBlock[];
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
    estimatedReadingTime?: number;
}

export interface BlogPostPreview {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    author: string;
    mainImage?: SanityImageSource;
    categories?: string[];
    publishedAt: string;
    excerpt?: string;
    estimatedReadingTime?: number;
}
