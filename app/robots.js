export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/login/'],
            },
        ],
        sitemap: 'https://rjgrero.com/sitemap.xml',
    };
}
