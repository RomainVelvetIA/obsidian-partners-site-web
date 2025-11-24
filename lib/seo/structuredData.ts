/**
 * Utilities for generating JSON-LD structured data for SEO
 * Schema.org types for better search engine understanding
 */

export interface Organization {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: string;
    url: string;
    logo?: string;
    description?: string;
    contactPoint?: {
        '@type': 'ContactPoint';
        contactType: string;
        url?: string;
    };
    sameAs?: string[];
}

export interface Article {
    '@context': 'https://schema.org';
    '@type': 'Article';
    headline: string;
    description?: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author: {
        '@type': 'Organization' | 'Person';
        name: string;
    };
    publisher: {
        '@type': 'Organization';
        name: string;
        logo?: {
            '@type': 'ImageObject';
            url: string;
        };
    };
}

export interface FAQPage {
    '@context': 'https://schema.org';
    '@type': 'FAQPage';
    mainEntity: Array<{
        '@type': 'Question';
        name: string;
        acceptedAnswer: {
            '@type': 'Answer';
            text: string;
        };
    }>;
}

export interface BreadcrumbList {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: Array<{
        '@type': 'ListItem';
        position: number;
        name: string;
        item?: string;
    }>;
}

/**
 * Generate Organization structured data for Obsidian Partners
 */
export function getOrganizationSchema(): Organization {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Obsidian Partners',
        url: 'https://obsidianpartners.fr',
        logo: 'https://obsidianpartners.fr/favicon.png',
        description:
            "Obsidian Partners conçoit des parcours d'adoption de l'intelligence artificielle sur mesure pour les entreprises B2B.",
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: 'https://cal.com/romain-auroux-cwofup/obsidian-partners',
        },
    };
}

/**
 * Generate FAQPage structured data from FAQ items
 */
export function getFAQPageSchema(
    faqs: Array<{ question: string; answer: string }>
): FAQPage {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

/**
 * Generate Article structured data for blog posts
 */
export function getArticleSchema(article: {
    title: string;
    description?: string;
    image?: string;
    publishedAt: string;
    updatedAt?: string;
    authorName?: string;
}): Article {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        author: {
            '@type': 'Organization',
            name: article.authorName || 'Obsidian Partners',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Obsidian Partners',
            logo: {
                '@type': 'ImageObject',
                url: 'https://obsidianpartners.fr/favicon.png',
            },
        },
    };
}

/**
 * Generate BreadcrumbList structured data
 */
export function getBreadcrumbSchema(
    items: Array<{ name: string; url?: string }>
): BreadcrumbList {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Render structured data as JSON-LD script tag
 */
export function renderStructuredData(data: Organization | Article | FAQPage | BreadcrumbList) {
    return {
        __html: JSON.stringify(data),
    };
}
