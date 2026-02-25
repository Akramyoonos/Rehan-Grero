import { Search, TrendingUp, Palmtree, Building2, Handshake, ShieldCheck, Landmark, ArrowRight, ArrowLeft } from 'lucide-react';
import styles from './services-page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Professional Acquisition Services | Strategic Advisory',
    description: 'Comprehensive property acquisition services in Sri Lanka. data-driven assessment, risk control, and disciplined negotiation for discerning buyers.',
    openGraph: {
        title: 'Professional Acquisition Services | Strategic Advisory',
        description: 'Comprehensive property acquisition services in Sri Lanka. data-driven assessment, risk control, and disciplined negotiation for discerning buyers.',
        images: [{ url: '/RJ Grero.jpeg', width: 1200, height: 630, alt: 'R.J. Grero Services' }],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/RJ Grero.jpeg'],
    },
};

const detailedServices = [
    {
        icon: Search,
        title: "Property Acquisition Advisory",
        description: "Independent buyer representation for residential, commercial, and strategic acquisitions — from sourcing to negotiation and completion.",
    },
    {
        icon: TrendingUp,
        title: "Investment Property Advisory",
        description: "Data-driven acquisition of income-generating and capital growth assets aligned with defined ROI and portfolio strategy.",
    },
    {
        icon: Palmtree,
        title: "Holiday Home & Second Residence Advisory",
        description: "Strategic sourcing and acquisition of lifestyle and coastal properties for personal use, income, or dual-purpose ownership.",
    },
    {
        icon: Building2,
        title: "Apartment Acquisition Advisory",
        description: "Access to prime and off-market apartments with independent value assessment and disciplined negotiation.",
    },
    {
        icon: Handshake,
        title: "Negotiation & Transaction Oversight",
        description: "Professional negotiation and structured oversight for client-identified properties to secure optimal terms.",
    },
    {
        icon: ShieldCheck,
        title: "Risk Control & Due Diligence Advisory",
        description: "Independent verification of ownership, compliance, and market value to protect every acquisition.",
    },
    {
        icon: Landmark,
        title: "Bank Financing Support Advisory",
        description: "Strategic coordination and guidance to secure optimal property financing aligned with your acquisition objectives.",
    },
];

export default function ServicesPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <Link href="/#services" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <span className={styles.label}>Our Expertise</span>
                    <h1 className={styles.title}>Professional <span className={styles.italic}>Acquisition</span> Services</h1>
                    <p className={styles.subtitle}>
                        A comprehensive, transparent approach to real estate acquisition,
                        designed exclusively for the discerning buyer.
                    </p>
                </div>
            </section>

            <section className={styles.processSection}>
                <div className={styles.container}>
                    <h2 className={styles.processTitle}>The Strategic Acquisition Process</h2>
                    <div className={styles.processTimeline}>
                        <div className={styles.processStep}>
                            <div className={styles.stepCircle}>01</div>
                            <div className={styles.stepLabel}>Consultation & <br />Capital Alignment</div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepCircle}>02</div>
                            <div className={styles.stepLabel}>Market Intelligence <br />& Shortlisting</div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepCircle}>03</div>
                            <div className={styles.stepLabel}>Risk Assessment <br />& Due Diligence</div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepCircle}>04</div>
                            <div className={styles.stepLabel}>Strategic <br />Negotiation</div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepCircle}>05</div>
                            <div className={styles.stepLabel}>Secure Acquisition <br />& Closing</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.servicesList}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {detailedServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.iconWrapper}>
                                            <Icon size={28} strokeWidth={1.2} />
                                        </div>
                                        <h2 className={styles.serviceTitle}>{service.title}</h2>
                                    </div>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <Link href="/contact-us" className={styles.learnMore}>
                                        Learn More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </main>
    );
}
