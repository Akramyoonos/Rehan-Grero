import ArticleClient from './ArticleClient';

export async function generateMetadata({ params }) {
    return {
        title: 'Intelligence Post | R.J. Grero',
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    return (
        <ArticleClient
            article={null}
            articles={[]}
            slug={slug}
        />
    );
}

