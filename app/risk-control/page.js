import { FileText, Map, Banknote, ShieldCheck, Clock, Zap, DollarSign, ArrowLeft, CheckCircle2, AlertTriangle, FileSearch } from 'lucide-react';
import styles from './protocol-page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Property Due Diligence & Risk Control | Sri Lanka',
    description: 'Our proprietary 4-pillar verification framework to eliminate title risk. Comprehensive due diligence for secure property acquisitions in Sri Lanka.',
    openGraph: {
        title: 'Property Due Diligence & Risk Control | Sri Lanka',
        description: 'Our proprietary 4-pillar verification framework to eliminate title risk. Comprehensive due diligence for secure property acquisitions in Sri Lanka.',
        images: [{ url: '/RJ Grero.jpeg', width: 1200, height: 630, alt: 'Risk Control Protocol' }],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/RJ Grero.jpeg'],
    },
};

const protocolSteps = [
    {
        icon: FileText,
        title: "Document & Title Verification",
        description: "A multi-generational review of ownership records to ensure a clean, marketable title.",
        items: [
            "Deed chain analysis for the last 30 years",
            "Ownership verification via Land Registry",
            "Survey plan authentication and boundary checks",
            "Identity validation of all registered owners",
            "Power of Attorney (POA) validity audit"
        ]
    },
    {
        icon: Map,
        title: "Zoning & Statutory Compliance",
        description: "Verification of local authority regulations to determine buildability and future restrictions.",
        items: [
            "Street line and building limit checks (UDA/CMC)",
            "Zoning classification and land usage permits",
            "Drainage and accessibility clearance",
            "Environmental authority (CEA) requirements",
            "Local council building approval status"
        ]
    },
    {
        icon: FileSearch,
        title: "Encumbrance & Risk Audit",
        description: "Deep scanning for hidden liabilities that could prevent a smooth transaction.",
        items: [
            "Search for active bank charges or mortgages",
            "Lis Pendens check for ongoing litigation",
            "Easements and neighboring rights review",
            "Caveat and prohibition order search",
            "Tax clearance and municipal rate status"
        ]
    },
    {
        icon: Banknote,
        title: "Valuation & Financing Readiness",
        description: "Fact-based valuation to ensure the price reflects the property's true market merit.",
        items: [
            "Comparable Market Analysis (CMA) report",
            "Forced sale vs. market value assessment",
            "Bank panel valuation readiness check",
            "Structural integrity and repair cost estimation",
            "Yield projection for investment assets"
        ]
    }
];

export default function ProtocolPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <Link href="/#due-diligence" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <span className={styles.label}>Risk Control Protocol</span>
                    <h1 className={styles.title}>Property <span className={styles.italic}>Due Diligence</span> Standard</h1>
                    <p className={styles.subtitle}>
                        Our proprietary 4-pillar verification framework designed to eliminate title risk
                        and ensure absolute security for every acquisition.
                    </p>
                </div>
            </section>

            {/* Protocol Steps */}
            <section className={styles.protocolList}>
                <div className={styles.container}>
                    <div className={styles.stepsGrid}>
                        {protocolSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className={styles.stepCard}>
                                    <div className={styles.stepHeaderGroup}>
                                        <div className={styles.stepIcon}>
                                            <Icon size={28} strokeWidth={1.2} />
                                        </div>
                                        <h2 className={styles.stepTitle}>{step.title}</h2>
                                    </div>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                    <ul className={styles.itemList}>
                                        {step.items.map((item, i) => (
                                            <li key={i} className={styles.listItem}>
                                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </main>
    );
}
