'use client';

import styles from '../admin.module.css';
import { ExternalLink, BarChart3, ShieldCheck } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className={styles.dashboardContent}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Visitor <span className={styles.titleHighlight}>Intelligence</span></h1>
                    <p className={styles.subtitle}>Professional insights via Google Analytics platform</p>
                </div>
            </div>

            <div className={styles.mainGrid} style={{ gridTemplateColumns: '1fr' }}>
                <div className={styles.tableCard} style={{
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#111a2d',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                }}>
                    <div style={{
                        width: '90px',
                        height: '90px',
                        borderRadius: '24px',
                        background: 'rgba(201, 165, 99, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c9a563',
                        marginBottom: '2rem',
                        border: '1px solid rgba(201, 165, 99, 0.2)'
                    }}>
                        <BarChart3 size={45} />
                    </div>

                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                        Advanced Traffic Insights
                    </h2>

                    <p style={{ color: '#94a3b8', maxWidth: '550px', lineHeight: '1.7', marginBottom: '3rem', fontSize: '1.05rem' }}>
                        We have integrated <strong>Google Analytics 4</strong> for comprehensive visitor tracking.
                        Monitor real-time traffic, detailed user behavior, and property interest metrics through the official Google platform.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a
                            href="https://analytics.google.com/analytics/web/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.submitButton}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.85rem',
                                padding: '1.2rem 2.8rem',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                borderRadius: '4px',
                                background: '#c9a563',
                                color: '#000000',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 15px 30px -5px rgba(201, 165, 99, 0.25)'
                            }}
                        >
                            Open Google Analytics <ExternalLink size={20} />
                        </a>
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        paddingTop: '2.5rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                            <ShieldCheck size={18} style={{ color: '#c9a563' }} /> Enterprise Security
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                            <BarChart3 size={18} style={{ color: '#c9a563' }} /> Live Metrics
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
