'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Backend is removed, using a simple local check or mock for static frontend
        setTimeout(() => {
            if (email === 'admin@rjgrero.com' && password === 'admin123') {
                localStorage.setItem('isAdminLoggedIn', 'true');
                router.push('/admin/leads');
            } else {
                setError('Invalid credentials. (Note: Backend is removed, use admin@rjgrero.com / admin123 for demo)');
            }
            setIsLoading(false);
        }, 800);
    };


    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.header}>
                    <Link href="/" className={styles.brand}>
                        <img src="/uploads/logo.svg" alt="R.J. GRERO" className={styles.logo} />
                    </Link>
                    <span className={styles.label}>ADMIN PORTAL</span>
                </div>

                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Email</label>
                        <input
                            type="email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" className={styles.loginBtn} disabled={isLoading}>
                        {isLoading ? 'VERIFYING...' : 'ENTER GATEWAY'}
                    </button>

                    <p className={styles.footerNote}>
                        Restricted Access. Unauthorized entry attempts are logged.
                    </p>

                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={14} />
                        BACK TO HOME
                    </Link>
                </form>
            </div>
        </div>
    );
}
