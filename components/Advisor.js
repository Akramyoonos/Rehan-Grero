import Link from 'next/link';
import styles from './Advisor.module.css';

export default function Advisor() {
    return (
        <section className={styles.section} id="about-me">
            <div className={styles.container}>

                {/* Left: Image */}
                <div className={styles.imageWrapper}>
                    <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1.2' }}>
                        <img
                            src="/uploads/profile.png"
                            alt="R.J. Grero"
                            className={styles.image}
                            style={{ transform: 'scale(1.15)', objectPosition: 'top center', width: '100%', height: 'auto' }}
                        />
                        {/* Increased scale and added aspect ratio to crop more from the bottom */}
                    </div>
                    {/* Decorative Corner Accent */}
                    <div className={styles.cornerAccent}></div>
                </div>

                {/* Right: Content */}
                <div className={styles.content}>

                    <h2 className={styles.name}>Rehan Grero</h2>

                    <div className={styles.underscore}></div>

                    <p className={styles.text}>
                        In a market as nuanced and fast-moving as Colombo, the most valuable assets are often the ones not yet visible. I operate as an independent strategic bridge for investors seeking high-stakes opportunities in Sri Lanka. With a deep-rooted network across government and private sectors, I specialize in the identification and discreet acquisition of commercial land and Tier-1 residential developments. My focus is on clarity, confidentiality, and capital growth.
                    </p>

                    <Link href="/about-me" className={styles.bioLink}>
                        Read Full Bio &rarr;
                    </Link>

                    <div className={styles.signatureBlock}>
                        <span className={styles.sigName}>Rehan Grero</span>
                        <span className={styles.sigRole}>INDEPENDENT ADVISOR</span>
                    </div>

                    <div className={styles.videoContainer}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/zIccujEpTzA?si=Te9GjIFHO0Z4KWIg"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className={styles.videoFrame}
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}
