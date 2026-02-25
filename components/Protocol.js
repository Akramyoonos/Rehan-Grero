import { FileText, Map, Banknote, ShieldCheck, Clock, Zap, DollarSign, ArrowRight } from 'lucide-react';
import styles from './Protocol.module.css';
import Link from 'next/link';

export default function Protocol() {
    const cards = [
        {
            icon: FileText,
            title: "Document Pack",
            items: [
                "Deed chain and ownership verification",
                "Survey plan, extent, boundaries, access",
                "POA checks (if applicable) and identity validation"
            ]
        },
        {
            icon: Map,
            title: "Zoning & Compliance",
            items: [
                "Street line, setbacks, buildability review",
                "Approvals and development constraints",
                "Encumbrances and red flag scan"
            ]
        },
        {
            icon: Banknote,
            title: "Valuation & Financing",
            items: [
                "Comparable analysis and pricing guardrails",
                "Bank valuation readiness pack",
                "Offer structuring aligned to bank timelines"
            ]
        }
    ];

    return (
        <section id="risk-control" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>RISK CONTROL</span>
                <h2 className={styles.title}>Property Due Diligence Protocol</h2>
                <div className={styles.headerFlex}>
                    <p className={styles.subtitle}>
                        Use our professional verification framework to ensure your property acquisition
                        is 100% secure and free of legal encumbrances.
                    </p>
                    <Link href="/risk-control" className={styles.detailLink}>
                        View Full Protocol <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            <div className={styles.grid}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <card.icon size={28} strokeWidth={1.5} className={styles.icon} />
                            <h3 className={styles.cardTitle}>{card.title.toUpperCase()}</h3>
                        </div>
                        <ul className={styles.checkList}>
                            {card.items.map((item, idx) => (
                                <li key={idx} className={styles.checkItem}>
                                    <ShieldCheck size={14} className={styles.checkIcon} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
}
