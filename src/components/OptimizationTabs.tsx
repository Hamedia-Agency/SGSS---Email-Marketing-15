"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ClipboardCheck, Route, Eye, Sliders, ShieldCheck } from "lucide-react";
import Image from "next/image";
import styles from "./OptimizationTabs.module.css";

const tabsData = [
  {
    step: "Step 1",
    title: "Step 1: Audit Current Setup",
    shortTitle: "Audit Current Setup",
    icon: ClipboardCheck,
    description: "Examine your active guard schedules, post orders, patrol logs, access management processes, and security technology. This creates an exact baseline of what resources you are currently paying for, where officers are stationed, and how your existing budget is allocated across daily operations.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-1.webp"
  },
  {
    step: "Step 2",
    title: "Step 2: Map Daily Workflows",
    shortTitle: "Map Daily Workflows",
    icon: Route,
    description: "Track how employees, visitors, contractors, and delivery vehicles move through your property over a 24-hour cycle. By analyzing shift changes, loading dock activity, opening and closing procedures, and overnight lulls, we determine when your site is bustling and when vulnerabilities naturally spike.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-2.webp"
  },
  {
    step: "Step 3",
    title: "Step 3: Analyze Gaps & Overlaps",
    shortTitle: "Analyze Gaps & Overlaps",
    icon: Eye,
    description: "Cross-reference your current guard schedule directly against your site's physical traffic patterns. This exposes operational mismatches—such as paying for static guards during low-risk periods or leaving high-traffic delivery windows and dark perimeters without adequate oversight.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em8-2.webp"
  },
  {
    step: "Step 4",
    title: "Step 4: Realign the Budget",
    shortTitle: "Realign the Budget",
    icon: Sliders,
    description: "Evaluate every dollar spent against your property's actual risk priorities. Instead of simply cutting hours or adding new expenses, we identify underutilized services and reallocate existing funds directly toward high-vulnerability times and locations that require immediate protection.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/dispatch.png"
  },
  {
    step: "Step 5",
    title: "Step 5: Execute Custom Strategy",
    shortTitle: "Execute Custom Strategy",
    icon: ShieldCheck,
    description: "Deliver a clear, actionable plan to optimize your security footprint. This includes refined officer shift schedules, updated post orders, targeted mobile patrol routes, or hybrid camera integration—ensuring your security program is streamlined, responsive, and aligned with how your site actually operates.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/compark-1.png"
  }
];

export default function OptimizationTabs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.container}>
      {/* LEFT SIDE: Carousel Card */}
      <div className={styles.leftCol}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {tabsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className={styles.emblaSlide} key={index}>
                  <div className={styles.cardWrapper}>
                    {/* Image Header with Arrows */}
                    <div className={styles.imageHeader}>
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                      />
                      
                      {/* Nav Arrows inside image */}
                      <button className={styles.arrowLeft} onClick={scrollPrev} aria-label="Previous">
                        <ChevronLeft size={20} />
                      </button>
                      <button className={styles.arrowRight} onClick={scrollNext} aria-label="Next">
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitleRow}>
                        <div className={styles.iconCircle}>
                          <Icon size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                      </div>
                      <p className={styles.cardDesc}>{item.description}</p>
                      
                      {/* Dots */}
                      <div className={styles.dots}>
                        {tabsData.map((_, i) => (
                          <span 
                            key={i} 
                            className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`} 
                            onClick={() => scrollTo(i)} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Tab List */}
      <div className={styles.rightCol}>
        {tabsData.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === selectedIndex;
          return (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
            >
              <div className={styles.tabIcon}>
                <Icon size={18} />
              </div>
              <span className={styles.tabLabel}>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
