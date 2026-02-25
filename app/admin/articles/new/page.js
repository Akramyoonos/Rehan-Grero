'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../admin.module.css';
import { ArrowLeft, Save, Image as ImageIcon, CheckCircle, Upload } from 'lucide-react';
import Link from 'next/link';

export default function NewArticle() {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Market Analysis',
        short_description: '',
        content: '',
        image_url: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState('');
    const router = useRouter();

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        // Backend removed, simulating a local upload demo
        setTimeout(() => {
            const mockUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image_url: mockUrl });
            setUploading(false);
        }, 1000);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Backend removed, simulating a successful publish for static frontend
        setTimeout(() => {
            setStatus('SUCCESS');
            setTimeout(() => {
                router.push('/admin/articles');
            }, 2000);
            setIsSubmitting(false);
        }, 1000);
    };


    return (
        <div className={styles.dashboardContent}>
            <div className={styles.header} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link href="/admin/articles" className={styles.backLink}>
                    <ArrowLeft size={18} />
                </Link>
                <h2 className={styles.pageTitle} style={{ margin: 0 }}>Create New Intelligence</h2>
            </div>

            <div className={styles.mainGrid}>
                <div className={styles.tableCard}>
                    {status === 'SUCCESS' ? (
                        <div style={{ padding: '4rem', textAlign: 'center' }}>
                            <CheckCircle size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
                            <h3 style={{ color: '#fff' }}>Article Published Successfully</h3>
                            <p style={{ color: '#64748b' }}>Redirecting to management feed...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.cmsForm} style={{ padding: '1rem' }}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'block' }}>Article Title</label>
                                    <input
                                        type="text"
                                        className={styles.cmsInput}
                                        placeholder="Enter headline..."
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'block' }}>Sector / Category</label>
                                    <select
                                        className={styles.cmsInput}
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option>Market Analysis</option>
                                        <option>Policy Update</option>
                                        <option>Financing Report</option>
                                        <option>Property News</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.inputGroup} style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <ImageIcon size={14} /> Featured Image (Local PC Upload)
                                    </label>
                                    <label className={styles.actionBtn} style={{ cursor: 'pointer', background: 'rgba(201,165,99,0.1)', color: 'var(--primary)', border: '1px dashed var(--primary)' }}>
                                        <Upload size={14} /> {uploading ? 'Processing...' : 'Select File from PC'}
                                        <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
                                    </label>
                                </div>

                                {formData.image_url ? (
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            backgroundImage: `url(${formData.image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: '4px',
                                            border: '1px solid var(--primary)',
                                            position: 'relative',
                                            marginBottom: '1rem'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--primary)', color: '#000', padding: '4px 8px', borderRadius: '2px', fontSize: '0.65rem', fontWeight: '800' }}>
                                            UPLOADED READY
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ padding: '3rem', border: '1px dashed rgba(255,255,255,0.05)', borderRadius: '4px', textAlign: 'center', background: 'rgba(255,255,255,0.01)', marginBottom: '1rem' }}>
                                        <p style={{ color: '#64748b', fontSize: '0.8rem' }}>No image selected. Please upload from your PC.</p>
                                    </div>
                                )}

                                {uploading && <p style={{ color: 'var(--primary)', fontSize: '0.7rem' }}>Uploading your file...</p>}
                            </div>

                            <div className={styles.inputGroup} style={{ marginBottom: '1.5rem' }}>
                                <label style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'block' }}>Short Intelligence Summary (Display on Main Page)</label>
                                <textarea
                                    className={styles.cmsTextarea}
                                    placeholder="Brief summary for the market watch feed..."
                                    style={{ minHeight: '80px' }}
                                    required
                                    value={formData.short_description}
                                    onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                                ></textarea>
                            </div>

                            <div className={styles.inputGroup} style={{ marginBottom: '2rem' }}>
                                <label style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem', display: 'block' }}>Full Intelligence Content</label>
                                <textarea
                                    className={styles.cmsTextarea}
                                    placeholder="Write your analysis here..."
                                    style={{ minHeight: '300px' }}
                                    required
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                ></textarea>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                <Link href="/admin/articles" className={styles.actionBtn} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    Cancel
                                </Link>
                                <button type="submit" className={styles.publishBtn} disabled={isSubmitting}>
                                    <Save size={18} /> {isSubmitting ? 'Publishing...' : 'Publish to Market Watch'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
