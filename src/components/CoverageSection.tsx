import React from "react";
import styles from "./CoverageSection.module.css";

const locations = [
  { name: "Los Angeles County", icon: "🌴" },
  { name: "Orange County", icon: "🍊" },
  { name: "San Diego County", icon: "🏖️" },
  { name: "Riverside County", icon: "🏜️" },
  { name: "San Bernardino County", icon: "⛰️" },
  { name: "Ventura County", icon: "🏘️" },
  { name: "Santa Barbara County", icon: "🍷" },
  { name: "San Francisco County", icon: "🌉" },
  { name: "Alameda County", icon: "🏙️" },
  { name: "Santa Clara County", icon: "💻" },
  { name: "San Mateo County", icon: "🌲" },
  { name: "Contra Costa County", icon: "🏞️" },
  { name: "Sacramento County", icon: "🏛️" },
  { name: "San Joaquin County", icon: "🌻" },
  { name: "Monterey County", icon: "🌿" },
  { name: "Oakland", icon: "🏢" }
];

export const CoverageSection = () => {
  return (
    <section 
      className={styles.coverageSection} 
      id="coverage"
      style={{
        backgroundImage: 'url("https://cms.secureguardservices.com/wp-content/uploads/2025/03/Top-Benefits-of-Hiring-Security-Guards-Your-Ultimate-Peace-of-Mind-scaled.jpg")'
      }}
    >
      <div className={styles.overlay} />
      
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>Our Coverage</div>
        <h2 className={styles.title}>
          Serving Southern and <span className={styles.accent}>Northern California</span>
        </h2>
        <p className={styles.description}>
          Secure Guard provides security services throughout Southern and Northern California. 
          Through SecureTrack, clients with one property or multiple locations receive consistent 
          supervision, reporting, dispatch support, and security oversight across both regions.
        </p>
      </div>

      <div className={styles.marqueeContainer}>
        {/* We duplicate the content to create a seamless infinite scrolling effect */}
        <div className={styles.marqueeContent}>
          {locations.map((loc, idx) => (
            <div key={`loc-1-${idx}`} className={styles.marqueeItem}>
              <span className={styles.icon}>{loc.icon}</span>
              {loc.name}
            </div>
          ))}
        </div>
        <div className={styles.marqueeContent} aria-hidden="true">
          {locations.map((loc, idx) => (
            <div key={`loc-2-${idx}`} className={styles.marqueeItem}>
              <span className={styles.icon}>{loc.icon}</span>
              {loc.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
