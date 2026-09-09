"use client";

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      let currentProgress = 0;
      if (windowHeight > 0) {
        currentProgress = (totalScroll / windowHeight) * 100;
      }

      if (currentProgress > 100) currentProgress = 100;
      if (currentProgress < 0) currentProgress = 0;

      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check in case user is already scrolled down on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.backToTopContainer} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        background: `conic-gradient(var(--color-dark-blue) ${scrollProgress}%, var(--color-gray-light) ${scrollProgress}%)`,
      }}
    >
      <div className={styles.innerCircle}>
        <div className={styles.iconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
