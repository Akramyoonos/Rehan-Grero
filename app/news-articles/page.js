import ArchiveClient from './ArchiveClient';

export const metadata = {
    title: 'Market Intelligence Archive | R.J. Grero',
    description: 'Explore our complete archive of strategic property analysis, market trends, and investment intelligence for the Sri Lankan real estate market.',
};

export default async function NewsArchivePage() {
    return <ArchiveClient articles={[]} />;
}

