import { redirect } from 'next/navigation';

export default async function LegacyArticleRedirect() {
    // Backend is removed, so we redirect all old article IDs to the main news archive
    redirect('/news-articles');
}

