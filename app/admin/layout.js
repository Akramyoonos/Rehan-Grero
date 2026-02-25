'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './admin.module.css';
import { LayoutDashboard, Users, FileText, Settings, LogOut, TrendingUp, Globe, Image as ImageIcon, ShieldCheck, Home } from 'lucide-react';

export default function AdminLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isAdminLoggedIn');
        if (loggedIn !== 'true') {
            router.push('/login');
        } else {
            setIsLoading(false);
        }
    }, [router]);

    // Close sidebar on route change (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        router.push('/login');
    };

    if (isLoading) return null;

    return (
        <div className={styles.wrapper}>
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className={styles.sidebarOverlay}
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeaderRow}>
                    <Link href="/" className={styles.sidebarHeader}>
                        <img src="/uploads/logo.svg" alt="R.J. GRERO" className={styles.logo} />

                    </Link>
                    <button
                        className={styles.closeSidebarBtn}
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.nav}>
                    <Link
                        href="/admin/leads"
                        className={`${styles.navItem} ${pathname === '/admin/leads' ? styles.active : ''}`}
                    >
                        <Users size={18} />
                        <span>Lead Management</span>
                    </Link>
                    <Link
                        href="/admin/analytics"
                        className={`${styles.navItem} ${pathname === '/admin/analytics' ? styles.active : ''}`}
                    >
                        <TrendingUp size={18} />
                        <span>Visitor Analytics</span>
                    </Link>
                    <Link
                        href="/admin/articles"
                        className={`${styles.navItem} ${pathname.includes('/admin/articles') ? styles.active : ''}`}
                    >
                        <FileText size={18} />
                        <span>Publish Article</span>
                    </Link>
                    <Link
                        href="/admin/reviews"
                        className={`${styles.navItem} ${pathname === '/admin/reviews' ? styles.active : ''}`}
                    >
                        <ShieldCheck size={18} />
                        <span>Review Requests</span>
                    </Link>
                </nav>

                <button onClick={handleLogout} className={styles.logoutBtn}>
                    <LogOut size={18} />
                    <span>Secure Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className={styles.content}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <LayoutDashboard size={24} />
                        </button>
                        <h1 className={styles.pageTitle}>Operational Dashboard</h1>
                    </div>
                    <div className={styles.userProfile}>
                        <Link href="/" className={styles.actionBtn} title="Back to Home">
                            <Home size={18} />
                            <span>Site Home</span>
                        </Link>
                        <span className={styles.userName}>Administrator</span>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
