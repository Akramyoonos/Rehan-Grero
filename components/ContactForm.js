'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm({ title, initialPropertyDetails = '' }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyDetails: initialPropertyDetails
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Backend is removed, simulating a successful submission for frontend demo/static use
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', propertyDetails: '' });
        }, 1000);
    };


    if (status === 'success') {
        return (
            <div className={styles.successCard}>
                <CheckCircle2 color="#c9a563" size={64} />
                <h2>Request Submitted</h2>
                <p>Our team will review your details and contact you within 24-48 hours.</p>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            {title && <h2 className={styles.formTitle}>{title}</h2>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label>Your Name</label>
                    <input
                        type="text"
                        required
                        placeholder=""
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        required
                        placeholder=""
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        required
                        placeholder=""
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Property Details</label>
                    <textarea
                        required
                        rows="2"
                        placeholder="Tell us about the property (Location, Type, Estimated Price...)"
                        value={formData.propertyDetails}
                        onChange={(e) => setFormData({ ...formData, propertyDetails: e.target.value })}
                    ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Submit for Review'}
                    <Send size={18} />
                </button>
                {status === 'error' && <p className={styles.errorMessage}>Something went wrong. Please try again.</p>}
            </form>
        </div>
    );
}
