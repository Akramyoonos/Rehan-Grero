'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className={styles.label}>DIRECTOR | STRATEGIC ADVISORY</span>
                <h1 className={styles.name}>Rehan J. Grero</h1>

                <p className={styles.tagline}>
                    Strategic Property Advisor. Buyer's Representative. Investment Consultant.
                </p>

                <p className={styles.description}>
                    Guiding high-value real estate acquisitions across Sri Lanka<br />
                    with precision, discretion and strategic foresight.
                </p>

                <div className={styles.actions}>
                    <Link href="/contact-us" className={styles.btnPrimary}>
                        Schedule Confidential Consultation
                    </Link>
                    <Link href="/#services" className={styles.btnSecondary}>
                        View Strategic Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
