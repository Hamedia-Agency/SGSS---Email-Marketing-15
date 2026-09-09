"use client";

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './SupervisionCarousel.module.css';

const items = [
  {
    title: "Video Monitoring",
    desc: "Live video monitoring provides continuous visibility into designated areas of the property. Instead of relying solely on recorded footage after an incident, suspicious activity can be reviewed while it is happening.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em10-2.webp"
  },
  {
    title: "Mobile Surveillance Towers",
    desc: "For large, open, temporary, or difficult-to-wire properties, mobile surveillance towers can provide elevated camera coverage, night visibility, live audio intervention, and remote monitoring without requiring traditional infrastructure across the entire site.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/compark-1.png"
  },
  {
    title: "Central Dispatch",
    desc: "Dispatch serves as the operational connection between monitoring and field personnel. When a situation requires additional support, dispatch can communicate with officers, mobile patrol units, supervisors, property contacts, and other appropriate resources.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/dispatch.png"
  },
  {
    title: "Security Officers",
    desc: "Standing security officers provide a physical presence at the property and can respond to incidents within their assigned responsibilities. Depending on the assignment, officers may manage access, conduct patrols, monitor activity, assist with emergencies, and document incidents.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/rmlth.webp"
  },
  {
    title: "Mobile Patrol",
    desc: "Mobile patrol extends physical security coverage across larger properties or locations that may not require a full-time officer. Patrol personnel can perform scheduled or randomized checks, investigate concerns, respond to verified activity, and provide an additional physical layer of protection.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/8237FADA-FD1E-4642-B1AB-83A7F0D65F1F-scaled.webp"
  },
  {
    title: "SecureTrack",
    desc: "SecureTrack connects security operations, reporting, patrol activity, supervision, and field information into a coordinated management system. This gives Secure Guard greater visibility into what is happening across the security operation and provides clients with documented information about activity and response.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/cliepor.png"
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
