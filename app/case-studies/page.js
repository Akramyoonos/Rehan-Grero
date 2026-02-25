import CaseStudyCard from '@/components/CaseStudyCard';
import styles from './page.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Real Estate Case Studies | Independent Buyer Representation',
    description: 'Explore our selected client engagements in Sri Lanka. Showcasing disciplined advisory in property acquisition, strategic negotiation, and risk control.',
    openGraph: {
        title: 'Real Estate Case Studies | Independent Buyer Representation',
        description: 'Explore our selected client engagements in Sri Lanka. Showcasing disciplined advisory in property acquisition, strategic negotiation, and risk control.',
        type: 'website',
        images: [
            {
                url: '/RJ Grero.jpeg',
                width: 1200,
                height: 630,
                alt: 'R.J. Grero Case Studies',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Estate Case Studies | Independent Buyer Representation',
        description: 'Explore our selected client engagements in Sri Lanka. Showcasing disciplined advisory in property acquisition, strategic negotiation, and risk control.',
        images: ['/RJ Grero.jpeg'],
    },
};

const CASE_STUDIES = [
    {
        tags: ['Property Acquisition Advisory', 'Unawatuna', '20+ Acres'],
        title: 'Large-Scale Land Zoning & Subdivision (Coastal Land)',
        clientObjective: 'An overseas investor identified a coastal land parcel exceeding 20 acres in Unawatuna with long-term development potential. The land required a clear zoning pathway and a structured subdivision strategy.',
        challenges: [
            'Zoning classification misalignment',
            'Fragmented title structure',
            'Environmental and coastal regulation considerations',
            'Subdivision feasibility and access planning'
        ],
        rjGreroRole: [
            'Independent title and zoning due diligencev',
            'Coordination with surveyors, planners, and relevant authorities',
            'Phased subdivision strategy and density optimization advice',
            'Negotiation of acquisition terms tied to regulatory milestones'
        ],
        outcomes: [
            'Rezoning pathway established with clear milestones',
            'Subdivision plan progressed for phased development',
            'Land valuation uplift post-approval steps',
            'Client secured asset at pre-development pricing'
        ]
    },
    {
        tags: ['Investment Property Advisory', 'Colombo', 'Owner-Occupied'],
        title: 'Strategic Residential Expansion (Securing the Neighboring Plot)',
        clientObjective: 'A Colombo-based family sought to expand their primary residence but lacked adequate land for redevelopment. The best solution was acquiring the adjacent plot discreetly.',
        challenges: [
            'Adjacent property not publicly listed (off-market)',
            'Informal interest from other potential buyers',
            'Sensitive neighbor-to-neighbor negotiation dynamics'
        ],
        rjGreroRole: [
            'Discreet outreach and off-market approach',
            'Comparable land-rate assessment and value anchoring',
            'Confidential negotiation structure and timeline management',
            'Transaction oversight with conveyancing coordination'
        ],
        outcomes: [
            'Neighboring plot secured without public competition',
            'Expanded landholding, improving redevelopment feasibility',
            'Long-term capital value strengthened through consolidation'
        ]
    },
    {
        tags: ['Apartment Acquisition Advisory', 'Colombo', 'Diaspora Buyer'],
        title: 'Yield-Focused Apartment Acquisition (Pricing Gap Identification)',
        clientObjective: 'A diaspora investor wanted a sea-view 2-bedroom apartment within a disciplined budget, prioritizing long-term liquidity and defensible pricing per square foot.',
        challenges: [
            'Overpriced units in an oversupplied segment',
            'Developer discount opacity and inconsistent incentives',
            'Asking prices not aligned to comparable benchmarks'
        ],
        rjGreroRole: [
            'Per-square-foot benchmarking and comparable tower analysis',
            'Identification of internal pricing inconsistencies',
            'Negotiation to close at below-market psf',
            'Rental yield and exit-liquidity suitability review'
        ],
        outcomes: [
            'Unit secured below market-average psf',
            'Improved yield outlook and reduced downside exposure',
            'Capital preserved for broader portfolio allocation'
        ]
    },
    {
        tags: ['Holiday Home & Second Residence Advisory', 'South Coast', 'Dual-Use'],
        title: 'Coastal Holiday Home (Lifestyle + Income Strategy)',
        clientObjective: 'Acquire a holiday home that supports personal use while generating short-term rental income during peak periods, without overpaying at the top of the cycle.',
        challenges: [
            'Tourism-driven price volatility and seasonality',
            'Short-term rental compliance and operational readiness',
            'Maintenance cost planning and management setup'
        ],
        rjGreroRole: [
            'Micro-location selection based on demand drivers',
            'Income assumptions review (occupancy and rate realism)',
            'Inspection coordination and compliance checks',
            'Acquisition timing strategy to avoid peak pricing'
        ],
        outcomes: [
            'Lifestyle objectives met without sacrificing ROI',
            'Strong seasonal occupancy achieved post-acquisition',
            'Long-term appreciation positioned through location quality'
        ]
    },
    {
        tags: ['Negotiation & Transaction Oversight', 'Colombo', 'Client-Sourced'],
        title: 'Negotiation & Conveyancing Supervision (Price Correction Strategy)',
        clientObjective: 'The client sourced a property directly but required professional negotiation, deposit structuring, and oversight through to completion to reduce execution risk.',
        challenges: [
            'Asking price above comparative evidence',
            'Seller anchoring and limited willingness to concede',
            'Tight timeline with documentation and payment sequencing'
        ],
        rjGreroRole: [
            'Independent price verification and counter-offer strategy',
            'Negotiation management with controlled concessions',
            'Deposit and milestone structuring to protect the buyer',
            'Conveyancing and documentation oversight coordination'
        ],
        outcomes: [
            'Meaningful price reduction achieved',
            'Staged payment terms reduced buyer exposure',
            'Improved transaction certainty and timeline control'
        ]
    },
    {
        tags: ['Risk Control', 'Colombo', 'Feasibility'],
        title: 'Development Risk Exposure (Feasibility Reassessment)',
        clientObjective: 'A developer planned a mid-scale residential project and needed an independent risk control review before committing to major capex and approvals.',
        challenges: [
            'Unclear density and planning allowances (FAR-related assumptions)',
            'Infrastructure constraints affecting feasibility',
            'Financial model relying on optimistic absorption assumptions'
        ],
        rjGreroRole: [
            'Regulatory and planning risk audit',
            'Feasibility review with downside-scenario checks',
            'Identification of density and cost assumption gaps',
            'Advisory on resizing strategy and phased approach'
        ],
        outcomes: [
            'Overcapitalization risk avoided',
            'Project scale adjusted to preserve margins',
            'Better alignment between approvals, cost, and absorption'
        ]
    },
    {
        tags: ['Investment Property Advisory', 'Colombo', 'Portfolio'],
        title: 'Portfolio Restructuring (Capital Reallocation for Growth)',
        clientObjective: 'Reallocate capital from underperforming holdings into stronger-growth Colombo corridors, improving blended yield while maintaining liquidity and resale defensibility.',
        challenges: [
            'Low yields and slow growth in legacy assets',
            'Capital locked in illiquid micro-locations',
            'Timing sensitivity around market liquidity cycles'
        ],
        rjGreroRole: [
            'Portfolio performance review and risk/return mapping',
            'Identification of recycle opportunities and target corridors',
            'Timing strategy aligned to transaction liquidity',
            'Acquisition guidance for replacement asset selection'
        ],
        outcomes: [
            'Improved blended yield and long-term appreciation outlook',
            'Reduced management complexity via better asset selection',
            'More defensible exit options through liquidity discipline'
        ]
    },
];

const COVERAGE_TAGS = [
    'Colombo 5-7', 'South Coast', 'Diaspora Buyers', 'Off-Market Access', 'Negotiation', 'Due Diligence', 'Risk Control'
];

export default function CaseStudiesPage() {
    return (
        <>
            <main className={styles.mainContainer}>
                <div className="container">
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    {/* Header Section */}
                    <section className={styles.heroContent}>
                        <div className={styles.titleArea}>
                            <h1 className={styles.mainTitle}>Case Studies</h1>
                            <p className={styles.subtitle}>
                                Selected client engagements showcasing independent buyer representation,
                                negotiation strength, risk control, and disciplined investment advisory across Sri Lanka.
                            </p>
                            <div className={styles.btnGroup}>
                                <Link href="/contact-us" className={styles.ctaBtn}>Book a Consultation</Link>
                                <a href="mailto:rehan@rjgrero.com" className={styles.outlineBtn}>rehan@rjgrero.com</a>
                                <a href="https://rjgrero.com" target="_blank" rel="noopener noreferrer" className={styles.outlineBtn}>www.rjgrero.com</a>
                            </div>
                            <p className={styles.confidentialityNote}>
                                Note: Client names are omitted for confidentiality. Locations and facts reflect real-world engagement patterns and are presented in a privacy-safe format.
                            </p>
                        </div>

                        <div className={styles.sidebar}>
                            <div>
                                <h4 className={styles.sidebarTitle}>Coverage</h4>
                                <div className={styles.tagCloud}>
                                    {COVERAGE_TAGS.map((tag, index) => (
                                        <span key={index} className={styles.sidebarTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className={styles.sidebarTitle}>What you will see here</h4>
                                <div className={styles.outcomeBox}>
                                    <div className={styles.outcomeTitle}>Practical Outcomes</div>
                                    <p className={styles.outcomeText}>
                                        How disciplined advisory changes price, terms, feasibility, and long-term value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* engagements Section */}
                    <div className={styles.sectionLabel}>Selected Engagements</div>

                    <div className={styles.engagementsList}>
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <section className={styles.footerCta}>
                        <h2 className={styles.footerTitle}>Acquire with clarity. Negotiate with leverage. Invest with discipline.</h2>
                        <p className={styles.footerText}>
                            Each engagement reflects an independent advisory approach focused on price discipline, risk control, and long-term value creation. If you are evaluating an acquisition, expansion, or investment in Sri Lanka, book a consultation to structure the process correctly from day one.
                        </p>
                        <div className={styles.btnGroup}>
                            <Link href="/contact-us" className={styles.ctaBtn}>Book a Consultation</Link>
                            <a href="mailto:rehan@rjgrero.com" className={styles.outlineBtn}>rehan@rjgrero.com</a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
