"use client";

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './SupervisionCarousel.module.css';

const items = [
  {
    title: "1. Verifying Patrol Routes",
    desc: "Field supervisors walk primary and high-risk property zones, including parking garages, stairwells, loading docks, and perimeters, to confirm officers are actively patrolling. Supervisors audit route timing to enforce randomized patterns, preventing predictable guard movements.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/qp.webp"
  },
  {
    title: "2. Securing Guard Posts",
    desc: "Station audits at building entrances, security desks, and gatehouses enforce strict compliance against post abandonment, sleeping, and personal device use. This ensures primary access points remain actively staffed and secure 24/7.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/plbs.webp"
  },
  {
    title: "3. Auditing Shift Reports",
    desc: "Supervisors conduct spot audits during site visits, cross-referencing visitor logs, vendor registries, parking tags, and digital entries directly against on-scene conditions. This eliminates retroactive reporting and guarantees accurate, defensible shift records.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/rmlth.webp"
  },
  {
    title: "4. Checking Guard Appearance & Conduct",
    desc: "Every visit includes visual and behavioral inspections assessing officer attire, posture, licensing, and communication. Supervisors verify that officers wear complete, clean uniforms and maintain professional, customer-focused interactions with tenants and visitors.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/pioc.webp"
  },
  {
    title: "5. Managing the Team For You",
    desc: "Field supervisors serve as your single point of contact, handling shift scheduling, post order updates, officer training, and performance coaching internally. This eliminates the administrative burden of managing guard personnel directly.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/esm.webp"
  }
];

export default function SupervisionCarousel() {
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
