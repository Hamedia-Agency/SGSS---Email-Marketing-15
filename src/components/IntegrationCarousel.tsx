"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './IntegrationCarousel.module.css';

const items = [
  {
    title: "Existing Camera Integration",
    desc: "Upgrading to active video oversight does not require replacing your current surveillance hardware. Secure Guard evaluates your existing setup, analyzing camera technology, visual coverage, network bandwidth, and vulnerable blind spots. Where compatible, your existing camera feeds are integrated directly into our 24/7 monitoring platform, layering live human judgment and swift response protocols over your existing infrastructure without forcing unnecessary capital expenditures.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2025/06/A26BE65C-F233-4E06-A789-66E6D77EF174-scaled.jpeg"
  },
  {
    title: "Targeted Security Coverage",
    desc: "Secure Guard strategically prioritizes high-vulnerability locations such as perimeter gates, equipment yards, loading docks, parking structures, and storage enclosures where unauthorized access poses the greatest risk. By focusing active monitoring resources on these critical zones rather than low-risk areas, we deliver maximum security impact and threat prevention right where your property is most exposed.",
    imgSrc: "https://cms.secureguardservices.com/wp-content/uploads/2026/05/Armed-Security-Guards-in-California-When-Do-You-Need-Them.png"
  }
];

export default function IntegrationCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carouselContainer}>
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

      <div className={styles.dotsContainer}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
