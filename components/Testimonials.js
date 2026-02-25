'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
    {
        quote: "We needed an independent buyer-side advisor for a commercial acquisition. The diligence and negotiation process was methodical and transparent from start to close.",
        client: "CLIENT (CONFIDENTIAL)",
        context: "COMMERCIAL ACQUISITION, COLOMBO"
    },
    {
        quote: "From overseas, I needed eyes on the ground. Viewings, due diligence, and pricing advice were handled cleanly with proper reporting and documentation.",
        client: "CLIENT (CONFIDENTIAL)",
        context: "DIASPORA PURCHASE, COLOMBO 03"
    },
    {
        quote: "Independent identification of a prime industrial site in Gampaha. The conflict-free approach saved us from overpaying on a complex multi-party deal.",
        client: "INSTITUTIONAL INVESTOR",
        context: "INDUSTRIAL SITE ACQUISITION, GAMPAHA"
    },
    {
        quote: "Discreet representation for our luxury villa portfolio expansion in Galle. Access to off-market inventory was the key differentiator.",
        client: "PRIVATE FAMILY OFFICE",
        context: "HOSPITALITY PORTFOLIO, GALLE"
    },
    {
        quote: "Managed the acquisition of a Tier-1 development site in Colombo 07. Their zoning expertise and title navigation were essential for our project feasibility.",
        client: "REAL ESTATE DEVELOPER",
        context: "MIXED-USE DEVELOPMENT, COLOMBO 07"
    },
    {
        quote: "Successful acquisition of a heritage hotel asset in Kandy. The negotiation was handled with utmost professionalism and cultural sensitivity.",
        client: "INTERNATIONAL BOUTIQUE HOTELIER",
        context: "HOTEL ACQUISITION, KANDY"
    },
    {
        quote: "Strategic advice on retail space expansion in Colombo 03. The market intelligence provided allowed us to secure a prime location before it hit the portal.",
        client: "RETAIL CONGLOMERATE",
        context: "COMMERCIAL LEASE & ACQUISITION, COLOMBO 03"
    },
    {
        quote: "Guided us through the conversion and acquisition of agricultural land for sustainable tourism. Ethical and compliant process throughout.",
        client: "ECO-TOURISM STARTUP",
        context: "AGRICULTURAL LAND PROJECT, KALUTARA"
    },
    {
        quote: "Secured a pre-launch opportunity for a landmark penthouse in Colombo 01. The early access and pricing leverage were significant.",
        client: "HNI INVESTOR",
        context: "LUXURY RESIDENTIAL, COLOMBO 01"
    },
    {
        quote: "Curated a multi-district portfolio for our long-term yield mandate. Professional, research-driven, and truly independent advisory.",
        client: "WEALTH MANAGEMENT FIRM",
        context: "PORTFOLIO ADVISORY, MULTI-DISTRICT"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={styles.section} id="testimonials">
            <div className={styles.header}>
                <span className={styles.label}>CLIENT ENDORSEMENTS</span>
            </div>

            <div className={styles.sliderContainer}>
                <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous testimonial">
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.cardContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className={styles.card}
                        >
                            <Quote size={48} className={styles.quoteIcon} strokeWidth={1} />
                            <p className={styles.quoteText}>"{testimonials[currentIndex].quote}"</p>
                            <div className={styles.authorBlock}>
                                <span className={styles.clientName}>{testimonials[currentIndex].client}</span>
                                <span className={styles.clientContext}>{testimonials[currentIndex].context}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className={styles.navBtn} onClick={nextSlide} aria-label="Next testimonial">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.dots}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className={styles.footer}>
                <Link href="/about-me" className={styles.aboutBtn}>
                    About Us &rarr;
                </Link>
            </div>
        </section>
    );
}
