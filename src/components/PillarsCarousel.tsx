"use client";

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './SupervisionCarousel.module.css';

const items = [
  {
    "title": "On-Site Security Officers",
    "desc": "Provide continuous visible deterrence, manage access gates, handle visitor screening, and deliver immediate on-scene response for high-risk zones and busy operational hours.",
    "imgSrc": "https://cms.secureguardservices.com/wp-content/uploads/2026/08/rmlth.webp"
  },
  {
    "title": "Mobile Patrols",
    "desc": "Conduct scheduled or randomized physical inspections, perimeter checks, and door locks for expansive properties or lower-risk periods that do not require a full-time standing guard post.",
    "imgSrc": "https://cms.secureguardservices.com/wp-content/uploads/2026/08/8237FADA-FD1E-4642-B1AB-83A7F0D65F1F-scaled.webp"
  },
  {
    "title": "Remote Video Monitoring",
    "desc": "Delivers continuous, active visual oversight across key property vulnerabilities, allowing trained specialists to detect, verify, and intercept suspicious activity in real time.",
    "imgSrc": "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em10-2.webp"
  },
  {
    "title": "Solar Surveillance Towers",
    "desc": "Supply standalone, elevated camera coverage, night visibility, and active deterrence lighting for expansive outdoor yards, remote parking lots, and unwired construction sites.",
    "imgSrc": "https://cms.secureguardservices.com/wp-content/uploads/2026/08/compark-1.png"
  },
  {
    "title": "SecureTrack Platform",
    "desc": "Unifies on-site officers, field supervisors, 24/7 central dispatchers, and live camera feeds into a single coordinated management system to verify patrol rounds, log incidents, and give you complete portfolio transparency.",
    "imgSrc": "https://cms.secureguardservices.com/wp-content/uploads/2026/08/cliepor.png"
  }
];

export default function PillarsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.carouselContainer}>
      <button 
        onClick={scrollPrev} 
        className={`${styles.navButton} ${styles.navLeft}`}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.embla__slide}>
              <div className={styles.featureCard}>
                <div className={styles.featureCardImageWrapper}>
                  <Image src={item.imgSrc} alt={item.title} fill className={styles.featureCardImage} />
                </div>
                <div className={styles.featureCardContent}>
                  <h3 className={styles.featureCardTitle}>{item.title}</h3>
                  <p className={styles.featureCardDesc}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollNext} 
        className={`${styles.navButton} ${styles.navRight}`}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
