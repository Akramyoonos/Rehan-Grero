import { Briefcase, Users, MonitorPlay, MessageSquare, ArrowLeft, Check, TrendingUp, Share2 } from 'lucide-react';
import styles from './careers.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Careers | Join Rehan Grero Strategic Advisory',
    description: 'Build the future of real estate advisory in Sri Lanka. We are looking for sharp analytical minds and strategic partners to join our elite team.',
    openGraph: {
        title: 'Careers | Join Rehan Grero Strategic Advisory',
        description: 'Build the future of real estate advisory in Sri Lanka. We are looking for sharp analytical minds and strategic partners to join our elite team.',
        images: [{ url: '/RJ Grero.jpeg', width: 1200, height: 630, alt: 'Careers at Rehan Grero' }],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/RJ Grero.jpeg'],
    },
};

const roles = [
    {
        icon: TrendingUp,
        title: "Market Analyst",
        tagline: "Data-driven insights for Tier-1 real estate",
        description: "We are looking for sharp analytical minds to track micro-market trends, monitor transaction history, and build predictive models for land value appreciation in Colombo's key districts.",
        details: [
            "Conduct micro-market feasibility studies",
            "Track and record off-market transaction data",
            "Analyze rental yield and capital appreciation",
            "Prepare investment memos for HNW clients",
            "Monitor urban development infrastructure projects"
        ]
    },
    {
        icon: Users,
        title: "Strategic Partner",
        tagline: "High-level alliances for cross-border deals",
        description: "Join our network of elite brokers, legal experts, and financial advisors. We collaborate on high-stakes acquisitions, ensuring seamless execution for international and institutional investors.",
        details: [
            "Buyer representation for large-scale assets",
            "Legal structuring for foreign ownership",
            "Joint venture development opportunities",
            "Cross-border fund repatriation strategy",
            "Exclusive access to pocket listings"
        ]
    },
    {
        icon: MonitorPlay,
        title: "Content Specialist",
        tagline: "Visual storytelling for premium assets",
        description: "Real estate is visual. We need creative professionals who can capture the essence of a property through high-end photography, videography, and compelling digital narratives.",
        details: [
            "Architectural photography & videography",
            "Drone mapping and aerial surveys",
            "Digital content creation for social platforms",
            "Property walkthrough production",
            "Brand identity and visual design"
        ]
    },
    {
        icon: MessageSquare,
        title: "Client Relations Lead",
        tagline: "Concierge-level service for investors",
        description: "Manage relationships with our most valuable asset: our clients. You will be the point of contact for high-net-worth individuals, ensuring their acquisition journey is smooth, transparent, and discreet.",
        details: [
            "Portfolio management communication",
            "Concierge scheduling for property viewings",
            "Client onboarding and KYC compliance",
            "Post-acquisition support coordination",
            "Investor network event management"
        ]
    }
];

export default function CareersPage() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <Link href="/#careers" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <span className={styles.label}>Join the Team</span>
                    <h1 className={styles.title}>Build the Future of <span className={styles.italic}>Real Estate</span> Advisory</h1>
                    <p className={styles.subtitle}>
                        We are not just selling land; we are structuring wealth.
                        Join a team that values precision, integrity, and strategic foresight.
                    </p>
                </div>
            </section>

            <section className={styles.rolesList}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {roles.map((role, index) => {
                            const Icon = role.icon;
                            return (
                                <div key={index} className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={28} strokeWidth={1.2} />
                                    </div>
                                    <span className={styles.roleTagline}>{role.tagline}</span>
                                    <h2 className={styles.roleTitle}>{role.title}</h2>
                                    <p className={styles.roleDescription}>{role.description}</p>
                                    <ul className={styles.detailsList}>
                                        {role.details.map((detail, i) => (
                                            <li key={i} className={styles.detailItem}>
                                                <Check size={14} className={styles.checkIcon} />
                                                <span>{detail}</span>
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
