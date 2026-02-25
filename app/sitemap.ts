import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://slayai.in';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${siteUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // For a single page app, this is all we need currently.
        // Future routes (e.g., /about, /features) would be added here.
    ];
}
