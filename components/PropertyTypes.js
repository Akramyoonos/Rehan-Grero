'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import { X } from 'lucide-react';
import styles from './PropertyTypes.module.css';

const propertyTypes = [
    { id: 1, title: "AGRICULTURAL LAND", size: "large", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, title: "ANNEXE", size: "small", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "APARTMENT", size: "small", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "COMMERCIAL BUILDING", size: "small", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "COMMERCIAL LAND", size: "small", image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "FACTORY", size: "large", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200" },
    { id: 7, title: "HOTEL", size: "large", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" },
    { id: 8, title: "HOUSE", size: "small", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { id: 9, title: "LAND", size: "small", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" },
    { id: 10, title: "OFFICE SPACE", size: "small", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { id: 11, title: "RESIDENTIAL LAND", size: "small", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { id: 12, title: "SHOWROOM/SHOP", size: "large", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
];

export default function PropertyTypes() {
    const [selectedProperty, setSelectedProperty] = useState(null);

    const openLightbox = (property) => {
        setSelectedProperty(property);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedProperty(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>What Type Of Property Are You Looking For?</h2>
            <div className={styles.grid}>
                {propertyTypes.map((type) => (
                    <div
                        key={type.id}
                        className={`${styles.card} ${styles[type.size]}`}
                        onClick={() => openLightbox(type)}
                    >
                        <img src={type.image} alt={type.title} className={styles.image} />
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>{type.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProperty && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeLightbox}>
                            <X size={20} />
                        </button>
                        <div className={styles.lightboxFormOnly}>
                            <ContactForm
                                title={`Inquire: ${selectedProperty.title}`}
                                initialPropertyDetails={`I am interested in: ${selectedProperty.title}. Please provide more information.`}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
