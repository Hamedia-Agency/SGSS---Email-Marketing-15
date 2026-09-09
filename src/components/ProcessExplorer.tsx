"use client";

import React, { useState } from "react";
import { 
  ScanSearch, 
  Eye, 
  Volume2, 
  ShieldAlert,
  FileText 
} from "lucide-react";
import styles from "./ProcessExplorer.module.css";

const processItems = [
  {
    title: "Real-Time Detection",
    shortTitle: "Detection",
    description: "High-definition fixed cameras, thermal sensors, and mobile surveillance towers continuously monitor perimeters, access points, and high-vulnerability assets to trigger instant system alerts upon unauthorized movement. This automated detection layer provides uninterrupted property oversight across expansive or complex commercial sites.",
    icon: ScanSearch,
    label: "Step 1"
  },
  {
    title: "Human Verification",
    shortTitle: "Verification",
    description: "Secure Guard’s 24/7 central monitoring specialists instantly evaluate live video feeds upon alert activation to distinguish genuine operational threats from harmless environmental movement. This human verification step eliminates false-alarm dispatch fees, assesses site risk against established post orders, and determines the exact response protocol.",
    icon: Eye,
    label: "Step 2"
  },
  {
    title: "Remote Intervention",
    shortTitle: "Intervention",
    description: "When suspicious activity is verified, monitoring personnel utilize high-decibel two-way speakers to broadcast live, localized voice-down warnings directly to unauthorized individuals on site. Delivering real-time verbal confirmation that the facility is actively monitored establishes immediate deterrence, forcing trespassers to vacate before property damage occurs.",
    icon: Volume2,
    label: "Step 3"
  },
  {
    title: "Coordinated Field Dispatch",
    shortTitle: "Dispatch",
    description: "When physical on-site intervention is required, central dispatch immediately deploys resources according to your customized property security plan. Dispatch coordinates mobile patrol units, alerts standing security guards, notifies designated property management contacts, or engages local emergency services with verified situational intelligence.",
    icon: ShieldAlert,
    label: "Step 4"
  },
  {
    title: "Digital Reporting and Documentation",
    shortTitle: "Reporting",
    description: "Every system alert, video verification, live intervention, and field dispatch action is automatically logged with verified timestamp and location metadata inside the SecureTrack platform. This generates complete, audit-ready activity reports and incident documentation, providing property managers with total operational transparency.",
    icon: FileText,
    label: "Step 5"
  }
];

export function ProcessExplorer() {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = processItems[activeTab];
  const IconComponent = activeItem.icon;

  return (
    <div className={styles.explorerContainer}>
      <div className={styles.tabList}>
        {processItems.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabButton} ${activeTab === index ? styles.activeTabButton : ""}`}
              aria-label={`Show details for ${item.title}`}
            >
              <span className={styles.tabIcon}>
                <ItemIcon size={20} />
              </span>
              <span className={styles.tabTitle}>{item.shortTitle}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.displayCard} key={activeTab}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTag}>{activeItem.label}</span>
          <h3 className={styles.cardTitle}>{activeItem.title}</h3>
          <p className={styles.cardDescription}>{activeItem.description}</p>
        </div>

        <div className={styles.visualWrapper}>
          <div className={styles.glowOrb} />
          <div className={styles.illustrationCard}>
            <IconComponent size={64} className={styles.visualIcon} />
            <span className={styles.visualLabel}>{activeItem.shortTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
