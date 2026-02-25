'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import styles from './Insights.module.css';

export default function Insights() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            // Backend removed, using empty mock for static frontend
            setArticles([]);
            setIsLoading(false);
        };
        fetchArticles();
    }, []);


    // Defensive check to ensure articles is an array
    const articlesArray = Array.isArray(articles) ? articles : [];

    // Show the Latest 5 Articles
    const mainArticles = articlesArray.slice(0, 2);
    const sidebarArticles = articlesArray.slice(2, 5);

    return (
        <section id="news-articles" className={styles.section}>
            {/* Centered Header */}
            <div className={styles.centeredHeader}>
                <h2 className={styles.mainTitle}>PRIME NEWSBOARD</h2>
            </div>

            {/* Tiered Grid Layout */}
            <div className={styles.tieredGrid}>
                {/* 1. Main Articles Column (The first 2 with images) */}
                <div className={styles.mainColumn}>
                    {mainArticles.length > 0 ? mainArticles.map((item, i) => (
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
                                <Link href={`/news-articles/${item.slug}`} className={styles.titleLink}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                </Link>
                                <p className={styles.excerpt}>{item.short_description}</p>
                                <Link href={`/news-articles/${item.slug}`} className={styles.readMore}>
                                    READ MORE <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    )) : (
                        <p className={styles.loadingText}>
                            {isLoading ? 'Loading intelligence feed...' : 'No articles published yet.'}
                        </p>
                    )}
                </div>

                {/* 2. Sidebar Articles Column (Stacked text-only) */}
                <div className={styles.sidebarColumn}>
                    {sidebarArticles.map((item, i) => (
                        <article key={i} className={styles.sidebarCard}>
                            <Link href={`/news-articles/${item.slug}`} className={styles.sidebarTitleLink}>
                                <h4 className={styles.sidebarTitle}>{item.title}</h4>
                            </Link>
                            <Link href={`/news-articles/${item.slug}`} className={styles.sidebarReadMore}>
                                READ MORE <ArrowRight size={14} />
                            </Link>
                        </article>
                    ))}
                    {/* View All Button inside Sidebar */}
                    <div className={styles.sidebarAction}>
                        <Link href="/news-articles" className={styles.viewAllBtnSidebar}>
                            VIEW ALL ARTICLES
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
