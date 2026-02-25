'use client';

import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Delay showing to make it feel more organic
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <button
                onClick={handleClose}
                className={styles.closeBtn}
                aria-label="Close"
            >
                <X size={20} />
            </button>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.title}>Privacy Preference Center</h3>
                    <p className={styles.text}>
                        This website uses cookies to offer a better browsing experience and to collect usage information.
                        By clicking on the "ACCEPT COOKIES" button you accept our Cookie Policy.
                    </p>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={handleReject}
                        className={styles.rejectBtn}
                    >
                        Reject Cookies
                    </button>
                    <button
                        onClick={handleAccept}
                        className={styles.acceptBtn}
                    >
                        <Check size={18} strokeWidth={3} />
                        Accept Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}
