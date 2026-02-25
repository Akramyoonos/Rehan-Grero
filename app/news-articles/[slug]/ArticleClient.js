'use client';

import { ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './article.module.css';

export default function ArticleClient({ article, articles, slug }) {
    if (!article) return <div className={styles.error}>Article not found.</div>;

    return (
        <div className={styles.wrapper}>
            <main className={styles.container}>
                <div className={styles.pageLayout}>
                    {/* LEFT COLUMN: Main Article Content */}
                    <motion.div
                        className={styles.mainContent}
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className={styles.header}>
                            <Link href="/#insights" className={styles.backLink}>
                                <ArrowLeft size={16} /> BACK TO MARKET WATCH
                            </Link>

                            <div className={styles.meta}>
                                <span className={styles.category}>{article.category}</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.date}>
                                    <Clock size={14} /> {new Date(article.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                            </div>

                            <h1 className={styles.title}>{article.title}</h1>

                            {/* Author Signature */}
                            <div className={styles.signature}>
                                <p className={styles.signatureName}>R.J. GRERO</p>
                                <p className={styles.signatureTitle}>Strategic Advisory</p>
                            </div>
                        </div>

                        {article.image_url && (
                            <div
                                className={styles.heroImage}
                                style={{ backgroundImage: `url(${article.image_url})` }}
                            />
                        )}

                        <div className={styles.content}>
                            {article.content?.split('\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Sidebar (Latest Articles) */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarHeader}>
                            <h3 className={styles.sidebarTitle}>Latest Intelligence</h3>
                        </div>
                        <div className={styles.sidebarList}>
                            {articles
                                .filter(a => a.slug !== slug)
                                .slice(0, 5)
                                .map((item) => (
                                    <Link key={item.id} href={`/news-articles/${item.slug}`} className={styles.sidebarItem}>
                                        {item.image_url && (
                                            <div
                                                className={styles.sidebarImage}
                                                style={{ backgroundImage: `url(${item.image_url})` }}
                                            />
                                        )}
                                        <div className={styles.sidebarContent}>
                                            <h4 className={styles.sidebarItemTitle}>{item.title}</h4>
                                            <span className={styles.sidebarDate}>
                                                {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
