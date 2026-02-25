'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAdminLoggedIn');
        setIsLoggedIn(loggedIn === 'true');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navClass = isHome
        ? (isScrolled ? styles.scrolled : styles.transparent)
        : styles.scrolled;

    return (
        <nav className={`${styles.nav} ${navClass}`}>
            <div className={styles.brandContainer}>
                <Link href="/" className={styles.brand}>
                    <img src="/uploads/logo.svg" alt="R.J. GRERO" className={styles.logo} />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className={styles.menu}>
                <Link href="/" className={styles.link}>HOME</Link>
                <Link href="/services" className={styles.link}>SERVICES</Link>
                <Link href="/about-me" className={styles.link}>ABOUT ME</Link>
                <Link href="/case-studies" className={styles.link}>Case Studies</Link>
                <Link href="/news-articles" className={styles.link}>NEWS & ARTICLES</Link>
                <Link href="/risk-control" className={styles.link}>RISK CONTROL</Link>
                <Link href="/career" className={styles.link}>CAREER</Link>

                {isLoggedIn && (
                    <Link href="/admin/articles" className={styles.link} style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <LayoutDashboard size={16} /> DASHBOARD
                    </Link>
                )}

                <Link href="/contact-us" className={styles.cta}>
                    CONTACT US
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenuOverlay}>
                    <button className={styles.mobileCloseBtn} onClick={toggleMobileMenu}>&times;</button>

                    <Link href="/" className={styles.mobileLink} onClick={toggleMobileMenu}>HOME</Link>
                    <Link href="/services" className={styles.mobileLink} onClick={toggleMobileMenu}>SERVICES</Link>
                    <Link href="/about-me" className={styles.mobileLink} onClick={toggleMobileMenu}>ABOUT ME</Link>
                    <Link href="/case-studies" className={styles.mobileLink} onClick={toggleMobileMenu}>CASE STUDIES</Link>
                    <Link href="/news-articles" className={styles.mobileLink} onClick={toggleMobileMenu}>NEWS & ARTICLES</Link>
                    <Link href="/risk-control" className={styles.mobileLink} onClick={toggleMobileMenu}>RISK CONTROL</Link>
                    <Link href="/career" className={styles.mobileLink} onClick={toggleMobileMenu}>CAREER</Link>
                    <Link href="/contact-us" className={styles.mobileLink} onClick={toggleMobileMenu}>CONTACT US</Link>

                    {isLoggedIn && (
                        <Link href="/admin/articles" className={styles.mobileLink} onClick={toggleMobileMenu} style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <LayoutDashboard size={20} /> DASHBOARD
                        </Link>
                    )}

                    <Link href="/#registry" className={styles.cta} onClick={toggleMobileMenu}>
                        PRIVATE LIST
                    </Link>
                </div>
            )}
        </nav>
    );
}
