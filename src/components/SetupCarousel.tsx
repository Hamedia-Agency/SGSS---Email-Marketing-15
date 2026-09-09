"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import styles from "./SetupCarousel.module.css";

const steps = [
  {
    step: "01",
    title: "Mapping Your Property",
    desc: "Secure Guard's field management team walks your site to map high-risk areas, inspect perimeter access points, and set up electronic scan checkpoints.",
  },
  {
    step: "02",
    title: "Setting Digital Site Rules",
    desc: "We convert your facility guidelines, emergency plans, and daily tasks into clear, digital post orders loaded directly onto our officers' mobile devices.",
  },
  {
    step: "03",
    title: "Assigning Your Security Team",
    desc: "We handpick officers and mobile field supervisors trained specifically for your property type and site requirements.",
  },
  {
    step: "04",
    title: "Supervising Day One",
    desc: "A field supervisor stays on-site during shift one to guide post handoffs, verify checkpoint scans, and guarantee a smooth, flawless launch.",
  },
];

export default function SetupCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center", watchDrag: false });
  const [selectedIndex, setSelectedIndex] = useState(0);


  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.emblaSlide}>
              <div className={`${styles.setupCard} ${idx === selectedIndex ? styles.setupCardActive : ""}`}>
                <div className={styles.setupCardHeader}>
                  <span className={styles.setupCardStep}>{item.step}</span>
                  <h3 className={styles.setupCardTitle}>{item.title}</h3>
                </div>
                <p className={styles.setupCardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigationRow}>
        <button className={styles.navButton} onClick={scrollPrev} aria-label="Previous step">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.navArrow}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className={styles.emblaDots}>
          {steps.map((_, index) => (
            <button
              key={index}
              className={`${styles.emblaDot} ${
                index === selectedIndex ? styles.emblaDotSelected : ""
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className={styles.navButton} onClick={scrollNext} aria-label="Next step">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.navArrow}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
