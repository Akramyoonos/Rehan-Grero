'use client';

import Link from 'next/link';
import { Globe, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './BuyerRepresentation.module.css';

const features = [
    {
        icon: Globe,
        title: "Diaspora & Expat Services",
        description: "Eyes-on-the-ground support for Sri Lankans living abroad. Viewing, due diligence, and negotiation with structured reporting."
    },
    {
        icon: Building2,
        title: "Institutional Acquisition",
        description: "Identification of commercial land banks and hospitality assets for institutional capital entering the Colombo market."
    },
    {
        icon: ShieldCheck,
        title: "Conflict-Free Buyer Advocacy",
        description: "Dedicated buyer representation designed to eliminate seller-side conflicts and improve price and terms for the buyer."
    }
];

export default function BuyerRepresentation() {
    return (
        <section id="buyer-rep" className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Cards */}
                <div className={styles.cardStack}>
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Text Content */}
                <div className={styles.textContent}>
                    <span className={styles.label}>Service Model</span>
                    <h2 className={styles.title}>
                        Exclusive <br />
                        <span className={styles.titleHighlight}>Buyer</span> Representation.
                    </h2>
                    <div className={styles.divider}></div>
                    <p className={styles.description}>
                        For institutional investors and the global diaspora, the Colombo market often lacks transparency.
                    </p>
                    <p className={styles.description}>
                        I act as your single point of contact, filtering the market, managing local agent flows, and verifying titles so you acquire assets with confidence.
                    </p>
                    <Link href="#contact" className={styles.ctaLink}>
                        Request Representation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
