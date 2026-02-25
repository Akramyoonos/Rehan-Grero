'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './news.module.css';

export default function ArchiveClient({ articles }) {
    return (
        <div className={styles.pageWrapper}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <header className={styles.header}>
                        <Link href="/#insights" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Market Watch
                        </Link>
                        <span className={styles.label}>COMPLETE ARCHIVE</span>
                        <h1 className={styles.title}>
                            All Intelligence <span className={styles.titleHighlight}>& Analysis</span>
                        </h1>
                    </header>
                </div>
            </section>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {articles.length > 0 ? articles.map((item, i) => (
                        <article key={i} className={styles.card}>
                            <Link href={`/news-articles/${item.slug}`} className={styles.imageLink}>
                                <div
                                    className={styles.imageContainer}
                                    style={{
                                        backgroundImage: item.image_url ? `url(${item.image_url})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundColor: !item.image_url ? 'rgba(255,255,255,0.03)' : 'transparent'
                                    }}
                                >
                                    {!item.image_url && <span style={{ color: '#475569', fontSize: '0.7rem' }}>NO IMAGE</span>}
                                </div>
                            </Link>
                            <div className={styles.content}>
                                <span className={styles.meta}>
                                    {item.category} • {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </span>
                                <Link href={`/news-articles/${item.slug}`} className={styles.titleLink}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                </Link>
                                <p className={styles.excerpt}>{item.short_description}</p>
                                <Link href={`/news-articles/${item.slug}`} className={styles.readMore}>
                                    Read Full Article &rarr;
                                </Link>
                            </div>
                        </article>
                    )) : (
                        <p className={styles.loadingText}>
                            No articles published yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
