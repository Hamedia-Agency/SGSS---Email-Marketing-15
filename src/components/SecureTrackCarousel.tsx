"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './SecureTrackCarousel.module.css';

const services = [
  {
    title: "1. GPS-Verified Patrol Checkpoints",
    desc: "Electronic scan tags placed around your property track exactly when and where officers complete their rounds. Using live GPS, our system logs each scan in real time, confirming full property coverage and instantly flagging any skipped checkpoints.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2025/09/Integrated-Security-Solutions-in-Los-Angeles-Advanced-Protection-for-a-Complex-World-scaled.jpeg"
  },
  {
    title: "2. Digital Daily Activity Reports",
    desc: "At the end of every shift, SecureTrack™ automatically compiles visitor entries, deliveries, parking logs, and patrol routes into a clean Daily Activity Report. Emailed directly to your inbox, these digital summaries give you clean, audit-ready records without missing pages or messy handwriting.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2024/04/Unarmed-Security-A-Focus-on-Prevention-scaled.webp"
  },
  {
    title: "3. Immediate Photo Incident Reporting",
    desc: "When an incident, maintenance hazard, or parking issue occurs, officers use mobile devices to capture time-stamped photos, videos, and notes. Detailed reports with visual evidence are sent immediately, giving you clear, defensible documentation for insurance or legal needs.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/07/strike2.webp"
  },
  {
    title: "4. Structured Shift Handoff Logs",
    desc: "Site instructions, emergency rules, and daily tasks are stored digitally so guards can view them on-site at any time. Shift handoff logs record ongoing tasks, open maintenance items, and temporary access notes, ensuring the incoming guard picks up right where the last one left off.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/esm.webp"
  },
  {
    title: "5. Around-the-Clock Dispatch Center Support",
    desc: "Secure Guard’s 24/7 central dispatch center tracks guard clock-ins, locations, and patrol scans in real time. If an officer misses a scheduled check-in or checkpoint, the system triggers an instant alert so dispatch can check on the guard or send immediate backup coverage.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2025/11/traffic-control.jpg"
  }
];

export default function SecureTrackCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

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
          {services.map((service, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div 
                key={idx} 
                className={`${styles.embla__slide} ${isActive ? styles.isActive : ''}`}
                onClick={() => scrollTo(idx)}
              >
                <div className={styles.carouselCard}>
                  <div className={styles.cardImageCol}>
                    <Image 
                      src={service.imgSrc} 
                      alt={service.title} 
                      fill 
                      className={styles.cardImage} 
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button 
        onClick={scrollNext} 
        className={`${styles.navButton} ${styles.navRight}`}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      <div className={styles.dotsContainer}>
        {services.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === selectedIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
