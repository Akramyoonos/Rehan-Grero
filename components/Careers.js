import styles from './Careers.module.css';
import { Briefcase, Users, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
    return (
        <section id="career" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Growth & Network</span>
                    <h2 className={styles.title}>
                        Partnerships <span className={styles.titleHighlight}>& Careers</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We are selectively expanding our network of analysts, research partners, and strategic collaborators.
                    </p>
                    <Link href="/career" className={styles.viewAllLink}>
                        View All Roles &rarr;
                    </Link>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Briefcase size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.cardTitle}>Market Analyst</h3>
                        <p className={styles.cardDescription}>
                            Focus on micro-market data, transaction tracking, and yield modeling for Colombo's Tier-1 districts.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Users size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.cardTitle}>Strategic Partners</h3>
                        <p className={styles.cardDescription}>
                            Collaborate on high-stakes acquisitions and cross-border investor relations.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Mail size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className={styles.cardTitle}>Inquiries</h3>
                        <p className={styles.cardDescription}>
                            Interested in joining our ecosystem? Send your professional profile for future openings.
                        </p>
                        <Link href="/contact-us" className={styles.cardLink}>
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
