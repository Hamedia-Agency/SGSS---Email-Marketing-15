"use client";

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './SupervisionCarousel.module.css';

const items = [
  {
    title: "Construction Sites",
    desc: "Unattended building sites present high-value targets for material theft, tool loss, and equipment vandalism. Active video monitoring provides continuous oversight across perimeter fencing, staging areas, and equipment yards, allowing remote operators to verify live intrusions immediately and initiate response protocols before assets are stolen or damaged.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2021/09/security-construct.jpg"
  },
  {
    title: "Commercial & Retail Centers",
    desc: "Loading docks, service corridors, rear entrances, and secondary parking areas become prime targets once business hours end. Remote operators monitor these vulnerable access points during off-hours, detecting loitering, unauthorized entry, or property damage early and coordinating with mobile patrols or emergency services to resolve threats quickly.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/07/mall.webp"
  },
  {
    title: "Parking Structures & Garages",
    desc: "Multi-level parking facilities contain extensive blind spots across stairwells, driving lanes, and vehicle access gates that physical patrols cannot monitor continuously. Active video surveillance fills these coverage gaps by maintaining visual oversight across key transit areas, allowing monitoring personnel to evaluate live activity in real time and dispatch on-ground enforcement when necessary.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/07/vehicle.webp"
  },
  {
    title: "Industrial Facilities & Storage Yards",
    desc: "Large facility layouts and outdoor yards holding machinery, raw materials, and fleet vehicles present perimeter defense challenges that physical guards alone cannot cover efficiently. Combining remote live monitoring with targeted mobile patrol response creates a cost-effective, multi-layered security barrier across large outdoor assets.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/07/manufac1.webp"
  }
];

export default function ApplicationsCarousel() {
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
