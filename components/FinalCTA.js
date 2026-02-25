'use client';

import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
    const [formData, setFormData] = useState({ name: '', email: '', interest: 'commercial-land' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Backend removed, simulating a successful join for static frontend
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', interest: 'commercial-land' });
        setTimeout(() => setStatus(''), 5000);
    };


    return (
        <section className={styles.section} id="registry">
            <div className={styles.container}>

                {/* Left Column: Content */}
                <div className={styles.leftContent}>
                    <span className={styles.label}>EXCLUSIVE ACCESS</span>
                    <h2 className={styles.title}>
                        The Off-Market <br />
                        <span className={styles.titleHighlight}>Registry</span>
                    </h2>

                    <p className={styles.description}>
                        Many of Colombo's most significant commercial and residential assets never reach public portals. Gain early access to vetted, off-market opportunities.
                    </p>

                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <ShieldCheck size={18} className={styles.checkIcon} />
                            Pre-launch residential developments
                        </li>
                        <li className={styles.listItem}>
                            <ShieldCheck size={18} className={styles.checkIcon} />
                            Discreet commercial land opportunities
                        </li>
                        <li className={styles.listItem}>
                            <ShieldCheck size={18} className={styles.checkIcon} />
                            Distressed institutional assets
                        </li>
                    </ul>
                </div>

                {/* Right Column: Form */}
                <div className={styles.formContainer}>
                    {status === 'SUCCESS' ? (
                        <div className={styles.successMessage}>
                            <h3 className={styles.successTitle}>Registry Request Received</h3>
                            <p className={styles.successText}>An advisor will contact you shortly via your professional email for initial vetting.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={styles.input}
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Professional Email */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.inputLabel}>Professional Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Primary Interest Dropdown */}
                            <div className={styles.inputGroup}>
                                <label htmlFor="interest" className={styles.inputLabel}>Primary Interest</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    className={styles.select}
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                >
                                    <option value="Commercial Land">Commercial Land</option>
                                    <option value="Residential Development">Residential Development</option>
                                    <option value="Distressed Assets">Distressed Assets</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className={styles.submitBtn}>
                                JOIN PRIVATE REGISTRY
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
}
