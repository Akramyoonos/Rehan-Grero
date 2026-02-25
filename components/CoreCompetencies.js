'use client';

import Link from 'next/link';
import styles from './CoreCompetencies.module.css';
import { Map, Building2, BarChart3 } from 'lucide-react';

const competencies = [
    {
        id: 1,
        title: "Commercial Land",
        description: "Development-ready land for institutional, hotel, and mixed-use projects. Zoning, title, and compliance navigation in prime Colombo.",
        icon: Map,
        image: "/uploads/CoreCompetencies 01.jpeg",
        alt: "Commercial Land Development"
    },
    {
        id: 2,
        title: "Luxury Residential",
        description: "Discreet representation for penthouses and villas. Access to pre-launch opportunities and off-market inventory.",
        icon: Building2,
        image: "/uploads/CoreCompetencies 02.jpeg",
        alt: "Luxury Residential Property"
    },
    {
        id: 3,
        title: "Portfolio Advisory",
        description: "Curated portfolios for high-net-worth clients and family offices, with a focus on capital growth and yield quality.",
        icon: BarChart3,
        image: "/uploads/CoreCompetencies 03.jpeg",
        alt: "Portfolio Advisory"
    }
];

export default function CoreCompetencies() {
    return (
        <section id="competencies" className={styles.section}>
            <div className={styles.header}>
                <div className={styles.titleGroup}>
                    <span className={styles.subtitle}>CORE COMPETENCIES</span>
                    <h2 className={styles.title}>
                        Market Intelligence. <br />
                        Strategic Execution.
                    </h2>
                </div>
                <p className={styles.focusText}>
                    Focus on Tier-1 assets in Colombo 01, 03, 07, <br /> and the Port City.
                </p>
            </div>

            <div className={styles.grid}>
                {competencies.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.footer}>
                <Link href="/services" className={styles.viewAllBtn}>
                    View all Services &rarr;
                </Link>
            </div>
        </section>
    );
}
