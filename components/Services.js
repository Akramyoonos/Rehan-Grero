import {
    Search,
    TrendingUp,
    Palmtree,
    Building2,
    Handshake,
    ShieldCheck,
    Check
} from 'lucide-react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
    {
        id: 1,
        icon: Search,
        title: "Property Acquisition Advisory",
        description: "Independent buyer representation for residential, commercial, and strategic acquisitions — from sourcing to negotiation and completion.",
        features: ["On-market and off-market property sourcing", "Independent valuation and negotiation oversight"]
    },
    {
        id: 2,
        icon: TrendingUp,
        title: "Investment Property Advisory",
        description: "Data-driven acquisition of income-generating and capital growth assets aligned with defined ROI and portfolio strategy.",
        features: ["Yield and capital appreciation analysis", "Portfolio alignment and risk assessment"]
    },
    {
        id: 3,
        icon: Palmtree,
        title: "Holiday Home & Second Residence Advisory",
        description: "Strategic sourcing and acquisition of lifestyle and coastal properties for personal use, income, or dual-purpose ownership.",
        features: ["Prime location advisory and suitability review", "End-to-end acquisition management"]
    },
    {
        id: 4,
        icon: Building2,
        title: "Apartment Acquisition Advisory",
        description: "Access to prime and off-market apartments with independent value assessment and disciplined negotiation.",
        features: ["Pre-market and exclusive unit access", "Comparable pricing and development analysis"]
    },
    {
        id: 5,
        icon: Handshake,
        title: "Negotiation & Transaction Oversight",
        description: "Professional negotiation and structured oversight for client-identified properties to secure optimal terms.",
        features: ["Independent price verification", "Legal and conveyancing coordination"]
    },
    {
        id: 6,
        icon: ShieldCheck,
        title: "Risk Control & Due Diligence Advisory",
        description: "Independent verification of ownership, compliance, and market value to protect every acquisition.",
        features: ["Title, zoning, and regulatory review", "Valuation risk and pricing assessment"]
    },
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Buyer-First Mandate</span>
                <h2 className={styles.title}>
                    Acquisition Services Built for <span className={styles.titleHighlight}>Buyers</span>
                </h2>
                <p className={styles.subtitle}>
                    Due diligence, valuation, negotiation, and financing guidance delivered through a conflict-free representation model.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                            <p className={styles.cardDescription}>{service.description}</p>

                            <ul className={styles.featureList}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <Check className={styles.checkIcon} strokeWidth={3} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    );
                })}
            </div>

            <div className={styles.footer}>
                <Link href="/services" className={styles.viewAllBtn}>
                    Explore All Services &rarr;
                </Link>
            </div>
        </section>
    );
}
