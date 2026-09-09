"use client";

import React, { useState } from "react";
import styles from "./SecureTrackDemoWidget.module.css";
import { ShieldCheck, MapPin, Camera, AlertTriangle, Clock, CheckCircle2, FileText, ChevronRight } from "lucide-react";

export function SecureTrackDemoWidget() {
  const [activeTab, setActiveTab] = useState<"patrols" | "photos" | "incidents">("patrols");

  const patrolLogs = [
    { time: "02:14 AM", point: "North Perimeter Motion Sensor", status: "Verified Threat", officer: "Command Specialist #408", coords: "34.0522 N, 118.2437 W", badge: "Verified GPS" },
    { time: "02:30 AM", point: "Rear Loading Bay Audio Talk-Down", status: "Voice Challenge Active", officer: "Command Specialist #408", coords: "34.0528 N, 118.2441 W", badge: "Live Intervention" },
    { time: "02:55 AM", point: "Main Entrance Perimeter Inspection", status: "Access Verified", officer: "Mobile Patrol Unit #12", coords: "34.0531 N, 118.2435 W", badge: "Verified GPS" },
    { time: "03:15 AM", point: "Property Perimeter Clear & Secured", status: "Resolution Logged", officer: "Mobile Patrol Unit #12", coords: "34.0524 N, 118.2429 W", badge: "Site Secured" },
  ];

  const photoLogs = [
    { title: "Live Video Verification - Perimeter Intrusion", timestamp: "02:14 AM", category: "Active Verification", officer: "Command Specialist #408", desc: "Command center specialist reviewed camera feed live to filter false alert & confirm intruder presence." },
    { title: "Voice Intervention & Talk-Down Challenge", timestamp: "02:16 AM", category: "Active Deterrence", officer: "Command Specialist #408", desc: "Real-time voice challenge issued via on-site speaker: Trespasser turned away immediately." },
  ];

  const incidentLogs = [
    { title: "Perimeter Motion Triggered", time: "02:14 AM", priority: "Verified Threat", detail: "AI camera detected movement. Command staff reviewed feed within 3.5s and issued voice warning.", status: "Deterred & Resolved" },
    { title: "Mobile Patrol Dispatch & Contact Notification", time: "02:18 AM", priority: "Logistics Handled", detail: "Designated keyholder notified, mobile patrol unit dispatched for on-site perimeter check.", status: "Verified by Supervisor" },
  ];

  return (
    <div className={styles.widgetContainer}>
      {/* Widget Header Bar */}
      <div className={styles.widgetHeader}>
        <div className={styles.widgetTitleGroup}>
          <div className={styles.statusDot} />
          <div>
            <h3 className={styles.widgetTitle}>Secure Guard Hybrid Command Center</h3>
            <p className={styles.widgetSubtitle}>Live Video Verification & Audio Talk-Down Console</p>
          </div>
        </div>
        <div className={styles.liveBadge}>
          <ShieldCheck size={16} />
          24/7 Active Oversight
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className={styles.tabNav}>
        <button
          className={`${styles.tabBtn} ${activeTab === "patrols" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("patrols")}
        >
          <MapPin size={16} />
          Verified Incidents
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "photos" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("photos")}
        >
          <Camera size={16} />
          Video Evidence
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "incidents" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("incidents")}
        >
          <AlertTriangle size={16} />
          Coordinated Dispatch
        </button>
      </div>

      {/* Tab Content Display */}
      <div className={styles.widgetBody}>
        {activeTab === "patrols" && (
          <div className="space-y-3">
            <p className={styles.tabDescription}>
              Every threat alert is reviewed in seconds. Our command center operators verify video live and challenge intruders using real-time voice intervention.
            </p>
            <div className={styles.logList}>
              {patrolLogs.map((log, idx) => (
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
                      <span>{log.officer}</span>
                      <span className={styles.dotSeparator}>•</span>
                      <span>{log.coords}</span>
                    </div>
                  </div>
                  <div className={styles.logBadge}>{log.badge}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="space-y-4">
            <p className={styles.tabDescription}>
              Operators review live video streams immediately to eliminate false alerts and document high-resolution evidence for your records.
            </p>
            <div className={styles.photoGrid}>
              {photoLogs.map((item, idx) => (
                <div key={idx} className={styles.photoCard}>
                  <div className={styles.photoHeader}>
                    <div className={styles.photoCategory}>{item.category}</div>
                    <span className={styles.logTime}>{item.timestamp}</span>
                  </div>
                  <h4 className={styles.photoTitle}>{item.title}</h4>
                  <p className={styles.photoDesc}>{item.desc}</p>
                  <div className={styles.photoFooter}>
                    <Camera size={14} className="inline mr-1 text-[#fecf31]" />
                    <span>Logged by {item.officer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "incidents" && (
          <div className="space-y-4">
            <p className={styles.tabDescription}>
              When real threats occur, we handle all logistics—calling keyholders, dispatching security, and contacting emergency responders.
            </p>
            <div className={styles.logList}>
              {incidentLogs.map((inc, idx) => (
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
                    <span>Logged at {inc.time}</span>
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
        <span>Want to see how Hybrid Security protects your property?</span>
        <a href="#lead-form" className={styles.widgetCtaLink}>
          Request Audit <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default SecureTrackDemoWidget;
