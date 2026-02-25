'use client';

import styles from './CaseStudyCard.module.css';

export default function CaseStudyCard({
    tags,
    title,
    clientObjective,
    challenges,
    rjGreroRole,
    outcomes
}) {
    return (
        <div className={styles.card}>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={`${styles.tag} ${index === 0 ? styles.activeTag : ''}`}>{tag}</span>
                ))}
            </div>

            <h3 className={styles.title}>{title}</h3>

            <div className={styles.grid}>
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Client Objective</h4>
                    <div className={styles.sectionContent}>{clientObjective}</div>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Challenges</h4>
                    <ul className={styles.list}>
                        {challenges.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>RJ Grero's Role</h4>
                    <ul className={styles.list}>
                        {rjGreroRole.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.section} ${styles.outcomeSection}`}>
                    <h4 className={styles.sectionTitle}>Outcome</h4>
                    <ul className={styles.list}>
                        {outcomes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
