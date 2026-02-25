export default async function sitemap() {
    const baseUrl = 'https://rjgrero.com';

    // Static routes
    const routes = [
        '',
        '/about-me',
        '/contact-us',
        '/news-articles',
        '/case-studies',
        '/risk-control',
        '/services',
        '/career'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}

