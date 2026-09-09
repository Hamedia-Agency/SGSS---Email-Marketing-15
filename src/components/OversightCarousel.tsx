/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './OversightCarousel.module.css';

const items = [
  {
    title: "Field Supervision",
    desc: "Our field supervisors conduct regular site inspections to review officer behavior, Post Order compliance, patrol consistency, and overall awareness of the property.\n\nSince site conditions fluctuate daily, supervisors make sure Post Orders are actively enforced and that any new property requirements are implemented seamlessly. This hands-on management provides clients with true accountability that goes beyond simply staffing a shift.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/supervisions.jpg"
  },
  {
    title: "24/7 Dispatch Control",
    desc: "Even a seasoned officer needs backup and operational support. Our 24/7 dispatch hub monitors real-time geofence alerts, timekeeping, and attendance checkpoints.\n\nWhen a check-in is missed or an incident occurs on site, our dispatchers coordinate communication directly with field supervisors and client contacts. This ensures there is always a command structure backing up the officers on your property.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/dispatch.png"
  }
];

export default function OversightCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.embla__slide}>
              <div className={styles.oversightCard}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={item.imgSrc} 
                    alt={item.title} 
                    fill 
                    className={styles.cardImage} 
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  {item.desc.split('\n\n').map((p, i) => (
                    <p key={i} className={styles.cardDesc} style={{ marginBottom: i === 0 ? '16px' : '0' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${
              index === selectedIndex ? styles['embla__dot--selected'] : ''
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
