'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const heroSlides = [
    {
        id: 2,
        image: "/hero-2.jpeg",
        subtitle: "CURATED LISTINGS",
        title: "Invest Where Sri Lanka Grows Next",
        highlight: "Buyer-First Guidance.",
        description: "Discover high-potential commercial corridors and emerging development zones shaping Sri Lanka’s future. Explore strategic investment opportunities backed by urban growth, infrastructure expansion, and long-term economic momentum.",
        trusted: "Facilitating secure investments for global and local clients."
    },
    {
        id: 1,
        image: "/hero-1.jpeg",
        subtitle: "ELITE LAND BROKERAGE",
        title: "Prime Opportunities.",
        highlight: "Exclusive Acquisitions.",
        description: "Unlock access to premium off-market land and high-value properties in Sri Lanka. Navigate with confidence through Sri Lanka's most lucrative real estate opportunities.",
        trusted: "Trusted by investors across Colombo, London, Australia, Dubai and Singapore."
    },
];

export default function Hero() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval);
    }, []);

    const currentSlide = heroSlides[currentSlideIndex];

    return (
        <section id="home" className={styles.hero}>
            {/* Background Image Slider */}
            <div className={styles.backgroundSlider}>
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.backgroundImage} ${index === currentSlideIndex ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
                <div className={styles.overlay}></div>
            </div>

            {/* Content with Animation Key */}
            <div className={styles.content} key={currentSlideIndex}>
                {/* Brand Subtitle */}
                <div className={`${styles.subtitle} ${styles.animateFadeIn}`}>
                    {currentSlide.subtitle}
                </div>

                {/* Main Title */}
                <h1 className={styles.title}>
                    <div className={styles.animateTitleMain}>{currentSlide.title}</div>
                    <div className={`${styles.highlight} ${styles.animateTitleHighlight}`}>{currentSlide.highlight}</div>
                </h1>

                {/* Description */}
                <p className={`${styles.description} ${styles.animateDescription}`}>
                    {currentSlide.description}
                </p>

                {/* Action Buttons */}
                <div className={`${styles.actions} ${styles.animateActions}`}>
                    <Link href="#contact" className={styles.btnPrimary}>
                        Request Consultation
                    </Link>
                    <Link href="#services" className={styles.btnSecondary}>
                        Buyer Services &rarr;
                    </Link>
                </div>

                {/* Trusted By Text */}
                <div className={`${styles.trusted} ${styles.animateTrusted}`}>
                    {currentSlide.trusted}
                </div>
            </div>
            {/* Navigation Dots */}
            <div className={styles.navigationDots}>
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`${styles.dot} ${index === currentSlideIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentSlideIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
