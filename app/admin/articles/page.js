'use client';

import { useState, useEffect } from 'react';
import styles from '../admin.module.css';
import { Search, FileText, Edit, Trash2, ExternalLink, Eye, X } from 'lucide-react';
import Link from 'next/link';

export default function ArticleManagement() {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [viewArticle, setViewArticle] = useState(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        // Backend removed, using empty array for static frontend
        setArticles([]);
        setIsLoading(false);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this article?')) return;
        // Backend removed, updating local state only for UI demo
        setArticles(articles.filter(a => a.id !== id));
    };


    const filteredArticles = (articles || []).filter(a =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.dashboardContent}>
            <div className={styles.tableCard}>
                <div className={styles.cardHeader}>
                    <h4 className={styles.cardTitle}>Intelligence & Market Watch Feed</h4>
                    <div className={styles.tableActions}>
                        <div className={styles.searchWrapper}>
                            <Search size={16} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className={styles.tableSearch}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Link href="/admin/articles/new" className={styles.actionBtn}>
                            + New Post
                        </Link>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Article Title</th>
                            <th>Category</th>
                            <th>Short Summary</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredArticles.length > 0 ? filteredArticles.map((article) => (
                            <tr key={article.id}>
                                <td style={{ fontWeight: '600', color: '#fff' }}>{article.title}</td>
                                <td>
                                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                                        {article.category}
                                    </span>
                                </td>
                                <td style={{ maxWidth: '300px' }}>
                                    <p className={styles.detailsText} title={article.short_description}>
                                        {article.short_description || 'No summary provided.'}
                                    </p>
                                </td>
                                <td><span className={styles.vettedBadge}>Live</span></td>
                                <td>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button onClick={() => setViewArticle(article)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} title="View Details">
                                            <Eye size={16} className={styles.moreIcon} style={{ color: 'var(--primary)' }} />
                                        </button>
                                        <Link href={`/admin/articles/edit/${article.id}`}>
                                            <Edit size={16} className={styles.moreIcon} />
                                        </Link>
                                        <Trash2
                                            size={16}
                                            className={styles.moreIcon}
                                            style={{ color: '#ef4444', cursor: 'pointer' }}
                                            onClick={() => handleDelete(article.id)}
                                        />
                                        <Link href={`/news-articles/${article.slug}`} target="_blank">
                                            <ExternalLink size={16} className={styles.moreIcon} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
                                    No articles published yet. Use the dashboard to publish your first analysis.
                                </td>
                            </tr>
                        )}
                        {/* Static sample for demo */}
                        {filteredArticles.length === 0 && articles.length === 0 && (
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Colombo Port City: 2026 Strategic Outlook</td>
                                <td><span style={{ fontSize: '0.7rem', color: '#94a3b8', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Market Analysis</span></td>
                                <td><span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Strategic outlook summary...</span></td>
                                <td><span className={styles.vettedBadge}>Live</span></td>
                                <td>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Edit size={16} className={styles.moreIcon} />
                                        <Trash2 size={16} className={styles.moreIcon} style={{ color: '#ef4444' }} />
                                        <Link href="/news-articles" target="_blank">
                                            <ExternalLink size={16} className={styles.moreIcon} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {
                viewArticle && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.8)', zIndex: 1000,
                        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'
                    }}>
                        <div style={{
                            background: '#0A1121', width: '100%', maxWidth: '1200px', maxHeight: '90vh',
                            overflowY: 'auto', borderRadius: '8px', padding: '2rem', position: 'relative',
                            border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}>
                            <button
                                onClick={() => setViewArticle(null)}
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
                                <span style={{ fontSize: '0.7rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
                                    {viewArticle.category}
                                </span>
                                <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '1rem', color: '#fff' }}>
                                    {viewArticle.title}
                                </h2>
                                {viewArticle.image_url && (
                                    <div style={{ width: '100%', height: '300px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                                        <img src={viewArticle.image_url} alt="Article Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}
                            </div>

                            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', borderLeft: '3px solid var(--primary)' }}>
                                <h4 style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Short Summary</h4>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    {viewArticle.short_description}
                                </p>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '1rem', textTransform: 'uppercase' }}>Full Content</h4>
                                <div style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                                    {viewArticle.content}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
