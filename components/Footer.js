import { MessageCircle, Mail, UserPlus, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact-us';
    const isAboutPage = pathname === '/about-me';
    const showCTA = !isContactPage && !isAboutPage;

    return (
        <footer className={styles.footer} id="contact" style={!showCTA ? { paddingTop: '0.5rem' } : {}}>
            {showCTA && (
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Connect for Consultation</h2>
                </div>
            )}

            {showCTA && (
                <div className={styles.grid}>

                    {/* WhatsApp Card */}
                    <a href="https://wa.me/94777063173" className={styles.card} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={32} className={styles.icon} strokeWidth={1.5} />
                        <span className={styles.cardLabel}>SECURE LINE</span>
                        <span className={styles.cardTitle}>WhatsApp</span>
                    </a>

                    {/* Email Card */}
                    <a href="mailto:rehan@rjgrero.com" className={styles.card}>
                        <Mail size={32} className={styles.icon} strokeWidth={1.5} />
                        <span className={styles.cardLabel}>PROFESSIONAL</span>
                        <span className={styles.cardTitle}>Direct Email</span>
                    </a>

                    {/* Save Contact Card */}
                    <a href="/contact.vcf" download="RJ_Grero_Contact.vcf" className={styles.card}>
                        <UserPlus size={32} className={styles.icon} strokeWidth={1.5} />
                        <span className={styles.cardLabel}>SAVE CONTACT</span>
                        <span className={styles.cardTitle}>Add to Phone</span>
                    </a>

                </div>
            )}

            <div className={styles.bottomBar}>
                <div className={styles.footerBrand}>
                    <img src="/uploads/logo.svg" alt="R.J. GRERO" className={styles.footerLogo} />
                    <span className={styles.copyright}>© {new Date().getFullYear()} | STRATEGIC ADVISORY</span>
                </div>
                <span className={styles.disclaimer}>
                    Conflict-free protocols strictly enforced on all transactions.
                </span>
                <Link href="/login" className={styles.adminLink}>ADMIN ACCESS</Link>

                <div className={styles.socialSection}>
                    <a href="https://www.linkedin.com/in/rehan-grero-2a6b133b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="LinkedIn">
                        <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61588600141102" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Facebook">
                        <Facebook size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://www.instagram.com/rjgrero?igsh=MW1yNHpqbHpkc28ydQ==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="Instagram">
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://x.com/rjgrero?s=21" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="X">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@RJGrero" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} title="YouTube">
                        <Youtube size={18} strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
