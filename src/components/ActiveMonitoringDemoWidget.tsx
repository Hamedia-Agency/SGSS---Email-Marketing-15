"use client";

import React, { useState } from "react";
import styles from "./ActiveMonitoringDemoWidget.module.css";
import { ShieldCheck, Video, Eye, AlertTriangle, Clock, CheckCircle2, FileText, ChevronRight } from "lucide-react";

export function ActiveMonitoringDemoWidget() {
  const [activeTab, setActiveTab] = useState<"detection" | "verification" | "response">("detection");

  const detectionLogs = [
    { time: "02:14 AM", point: "CAM 01 - Main Entrance Courtyard", status: "AI Flagged", details: "Loitering detected after business hours (Human Object 99.2%)", badge: "Instant Detection" },
    { time: "02:30 AM", point: "CAM 03 - Rear Loading Alleyway", status: "AI Flagged", details: "Unauthorized boundary crossing detected at perimeter fence", badge: "Instant Detection" },
    { time: "02:55 AM", point: "CAM 04 - Retail Parking Lot", status: "AI Flagged", details: "Vehicle loitering in restricted zone (> 5 min duration)", badge: "Instant Detection" },
  ];

  const verificationLogs = [
    { title: "Operator Verification #402 - CAM 01", timestamp: "02:14 AM", category: "Human Filter", officer: "Operator M. Ramirez", desc: "Environmental motion (tree branches) filtered out. Genuine loitering confirmed." },
    { title: "Operator Verification #402 - CAM 03", timestamp: "02:31 AM", category: "Human Filter", officer: "Operator M. Ramirez", desc: "Intruder attempting forced entry confirmed. Initiated immediate protocol." },
  ];

  const responseLogs = [
    { title: "Live Audio Deterrence Broadcast", time: "02:15 AM", priority: "Action Taken", detail: "Two-way audio warning issued: 'This site is under live SGSS monitoring. Vacate immediately.'", status: "Intruder Evacuated" },
    { title: "Mobile Patrol & Emergency Dispatch", time: "02:31 AM", priority: "Action Taken", detail: "Local emergency services & SGSS Mobile Patrol Unit #08 dispatched to site in < 25s.", status: "Verified & Handled" },
  ];

  return (
    <div className={styles.widgetContainer}>
      {/* Widget Header Bar */}
      <div className={styles.widgetHeader}>
        <div className={styles.widgetTitleGroup}>
          <div className={styles.statusDot} />
          <div>
            <h3 className={styles.widgetTitle}>Active Video Monitoring Console</h3>
            <p className={styles.widgetSubtitle}>Real-Time AI Detection & Certified Operator Command Feed</p>
          </div>
        </div>
        <div className={styles.liveBadge}>
          <ShieldCheck size={16} />
          Live Platform Preview
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className={styles.tabNav}>
        <button
          className={`${styles.tabBtn} ${activeTab === "detection" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("detection")}
        >
          <Video size={16} />
          1. Instant Detection
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "verification" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("verification")}
        >
          <Eye size={16} />
          2. Human Verification
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "response" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("response")}
        >
          <AlertTriangle size={16} />
          3. Coordinated Response
        </button>
      </div>

      {/* Tab Content Display */}
      <div className={styles.widgetBody}>
        {activeTab === "detection" && (
          <div className="space-y-3">
            <p className={styles.tabDescription}>
              Our technology flags suspicious activity the moment it occurs—loitering, unauthorized access, or after-hours movement—ensuring no event goes unnoticed.
            </p>
            <div className={styles.logList}>
              {detectionLogs.map((log, idx) => (
                <div key={idx} className={styles.logCard}>
                  <div className={styles.logIcon}>
                    <CheckCircle2 size={20} className="text-[#fecf31]" />
                  </div>
                  <div className={styles.logDetails}>
                    <div className={styles.logHeader}>
                      <span className={styles.logPoint}>{log.point}</span>
                      <span className={styles.logTime}><Clock size={12} className="inline mr-1" />{log.time}</span>
                    </div>
                    <div className={styles.logMeta}>
                      <span>{log.details}</span>
                    </div>
                  </div>
                  <div className={styles.logBadge}>{log.badge}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "verification" && (
          <div className="space-y-4">
            <p className={styles.tabDescription}>
              Our trained personnel review the live feed immediately upon detection. We filter out false alarms (like animals or environmental movement) to focus exclusively on genuine threats.
            </p>
            <div className={styles.photoGrid}>
              {verificationLogs.map((item, idx) => (
                <div key={idx} className={styles.photoCard}>
                  <div className={styles.photoHeader}>
                    <div className={styles.photoCategory}>{item.category}</div>
                    <span className={styles.logTime}>{item.timestamp}</span>
                  </div>
                  <h4 className={styles.photoTitle}>{item.title}</h4>
                  <p className={styles.photoDesc}>{item.desc}</p>
                  <div className={styles.photoFooter}>
                    <Eye size={14} className="inline mr-1 text-[#fecf31]" />
                    <span>Reviewed by {item.officer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "response" && (
          <div className="space-y-4">
            <p className={styles.tabDescription}>
              Once a threat is verified, we take immediate action—including live audio warnings, notifying your contacts, dispatching mobile patrol, or coordinating emergency services.
            </p>
            <div className={styles.logList}>
              {responseLogs.map((inc, idx) => (
                <div key={idx} className={styles.incidentCard}>
                  <div className={styles.incidentHeader}>
                    <div className={styles.incidentTitleGroup}>
                      <FileText size={18} className="text-[#fecf31]" />
                      <h4 className={styles.incidentTitle}>{inc.title}</h4>
                    </div>
                    <span className={styles.incidentPriority}>{inc.priority}</span>
                  </div>
                  <p className={styles.incidentDetail}>{inc.detail}</p>
                  <div className={styles.incidentFooter}>
                    <span>Executed at {inc.time}</span>
                    <span className={styles.statusVerified}>{inc.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Widget Footer CTA */}
      <div className={styles.widgetFooter}>
        <span>Want to see how Active Video Monitoring works at your property?</span>
        <a href="#lead-form" className={styles.widgetCtaLink}>
          Schedule Demo <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default ActiveMonitoringDemoWidget;
