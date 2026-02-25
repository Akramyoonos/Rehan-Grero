import { ArrowLeft, ShieldCheck, Clock, FileText } from 'lucide-react';
import styles from './request.module.css';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export const metadata = {
    title: 'Contact Us | Request Property Review | R.J. Grero',
    description: 'Submit your property details for a preliminary legal and compliance audit. Connect with Rehan J. Grero for strategic property advisory.',
    openGraph: {
        title: 'Contact Us | Request Property Review | Rehan Grero',
        description: 'Submit your property details for a preliminary legal and compliance audit. Connect with Rehan J. Grero for strategic property advisory.',
        images: [{ url: '/RJ Grero.jpeg', width: 1200, height: 630, alt: 'Contact Rehan Grero' }],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/RJ Grero.jpeg'],
    },
};

export default function RequestReview() {
    return (
        <div className={styles.pageWrapper}>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={18} /> Back
                    </Link>

                    <div className={styles.layout}>
                        <div className={styles.infoSide}>
                            <span className={styles.label}>Legal Verification</span>
                            <h1 className={styles.title}>Request <span className={styles.italic}>Property Review</span></h1>
                            <p className={styles.description}>
                                Submit your property details for a preliminary legal and compliance audit by our mandate.
                            </p>

                            <div className={styles.featureList}>
                                <div className={styles.feature}>
                                    <div className={styles.iconBox}><ShieldCheck size={20} /></div>
                                    <div>
                                        <h3>Title Audit</h3>
                                        <p>Verification of ownership records and deed chain.</p>
                                    </div>
                                </div>
                                <div className={styles.feature}>
                                    <div className={styles.iconBox}><Clock size={20} /></div>
                                    <div>
                                        <h3>48hr Response</h3>
                                        <p>Preliminary findings delivered within two business days.</p>
                                    </div>
                                </div>
                                <div className={styles.feature}>
                                    <div className={styles.iconBox}><FileText size={20} /></div>
                                    <div>
                                        <h3>Risk Report</h3>
                                        <p>Identify zoning issues, encumbrances, or red flags.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formSide}>
                            <ContactForm title="" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Added Contact Info Section with Image */}
            <ContactInfo />
        </div>
    );
}
