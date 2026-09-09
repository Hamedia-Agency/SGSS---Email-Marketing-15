"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ScanSearch, Eye, Volume2 } from "lucide-react";
import Image from "next/image";
import styles from "./OptimizationTabs.module.css";

const tabsData = [
  {
    title: "Aligning Security with Site Activity",
    icon: ScanSearch,
    description: "Secure Guard analyzes daily workflows, shift changes, delivery schedules, and foot/vehicle traffic to eliminate duplicated, underutilized, or poorly timed coverage hours. Rather than automatically cutting guard hours, we redirect your existing budget away from static, low-activity shifts and focus it directly on peak-vulnerability windows where a physical presence delivers the highest operational value.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-1.webp"
  },
  {
    title: "Allocating Resources by Risk Level",
    icon: Eye,
    description: "Secure Guard evaluates your physical layout—from high-value equipment yards and restricted storage zones to routine perimeters and parking structures—to determine where continuous guard presence is necessary, where periodic mobile patrols suffice, and where surveillance technology offers the best coverage. Assigning security resources based on localized risk rather than rigid standard templates ensures your budget delivers maximum protection where it is needed most.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-2.webp"
  },
  {
    title: "Technology & Personnel Integration",
    icon: Volume2,
    description: "Existing cameras, access control systems, and monitoring tools deliver maximum value when seamlessly integrated with your physical security force. Secure Guard evaluates your property to determine where technology can maintain continuous observation and where human presence is essential for access control, visitor management, and direct response. By coordinating remote video monitoring, mobile patrols, and on-site officers into a unified network, we ensure your technology and personnel complement each other, eliminating redundant expenses while making your current security hardware work significantly harder.",
    image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em8-2.webp"
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
                      <button className={styles.arrowLeft} onClick={scrollPrev}>
                        <ChevronLeft size={20} />
                      </button>
                      <button className={styles.arrowRight} onClick={scrollNext}>
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
                <Icon size={20} />
              </div>
              <span className={styles.tabLabel}>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
