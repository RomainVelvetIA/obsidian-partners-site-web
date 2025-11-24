import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://obsidianpartners.fr'; // TODO: Update with your actual domain

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
