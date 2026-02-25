'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './admin.module.css';
import { CheckCircle, FileText, Users, MessageSquare, ArrowRight, Clock } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        articles: 0,
        leads: 0,
        recentArticles: [],
        recentLeads: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Backend is removed, so we use static/empty data for the dashboard
        setStats({
            articles: 0,
            leads: 0,
            recentArticles: [],
            recentLeads: []
        });
        setIsLoading(false);
    }, []);


    return (
        <div className={styles.dashboardContent}>
            {/* Stats Overview */}
            <div className={styles.statsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className={styles.tableCard} style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'rgba(201,165,99,0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '8px' }}>
                            <FileText size={24} />
                        </div>
                        <div>
                            <h4 style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Articles</h4>
                            <p style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '700' }}>{stats.articles}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.tableCard} style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'rgba(201,165,99,0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '8px' }}>
                            <Users size={24} />
                        </div>
                        <div>
                            <h4 style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Registry Leads</h4>
                            <p style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '700' }}>{stats.leads}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mainGrid}>
                {/* Recent Articles */}
                <div className={styles.tasksCard}>
                    <div className={styles.cardHeader}>
                        <h4 className={styles.cardTitle}>Recent Market Analysis</h4>
                        <Link href="/admin/articles" className={styles.viewMore}>Manage All →</Link>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {stats.recentArticles.length > 0 ? stats.recentArticles.map((article) => (
                            <div key={article.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ background: 'rgba(255,255,255,0.03)', color: '#94a3b8', padding: '0.5rem', borderRadius: '4px' }}>
                                    <FileText size={16} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h5 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{article.title}</h5>
                                    <p style={{ color: '#64748b', fontSize: '0.7rem' }}>{article.category} • {new Date(article.created_at).toLocaleDateString()}</p>
                                </div>
                                <Link href={`/news-articles/${article.slug}`} target="_blank" style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>
                                    VIEW
                                </Link>
                            </div>
                        )) : (
                            <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>No articles published yet.</p>
                        )}
                        <Link href="/admin/articles/new" className={styles.publishBtn} style={{ marginTop: '1rem', textAlign: 'center' }}>
                            + Create New Intelligence
                        </Link>
                    </div>
                </div>

                {/* Recent Leads */}
                <div className={styles.tableCard}>
                    <div className={styles.cardHeader}>
                        <h4 className={styles.cardTitle}>Latest Official Registry Leads</h4>
                        <Link href="/admin/leads" className={styles.viewMore}>Full Registry →</Link>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Sector</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.recentLeads.length > 0 ? stats.recentLeads.map((lead) => (
                                <tr key={lead.id}>
                                    <td style={{ color: '#fff' }}>{lead.name}</td>
                                    <td style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{lead.interest}</td>
                                    <td>
                                        <span className={styles[lead.status.toLowerCase() + 'Badge'] || styles.pendingBadge}>
                                            {lead.status}
                                        </span>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>No leads received yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
