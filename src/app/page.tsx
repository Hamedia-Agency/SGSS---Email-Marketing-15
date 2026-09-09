import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";

import PillarsCarousel from "@/components/PillarsCarousel";
import FloatingShapes from "@/components/FloatingShapes";
import ParticleMesh from "@/components/ParticleMesh";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CoverageSection } from "@/components/CoverageSection";
import { ScanSearch, Eye, Volume2, ShieldAlert, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-1.webp"
            alt="Hybrid Security"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Connected Threat Response
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Hybrid <span className={styles.heroTitleAccent}>Security</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard unifies video surveillance, 24/7 central dispatch, and field guard teams into one connected response network. Integrating with existing cameras or standalone mobile towers, our model manages the entire incident lifecycle, from threat detection and verification to live voice deterrence, field dispatch, and SecureTrack tracking.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/service" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                See How Hybrid Security Works
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

            {/* ===== SECTION 2: Camera Alert Is Only the Beginning ===== */}
      <section className={styles.section} id="vulnerability">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-2.webp" 
                alt="Connected Security Network" 
                width={500} 
                height={400} 
                className={styles.addonImage} 
                style={{ borderRadius: "12px", objectFit: "cover" }}
              />
            </div>
            <div className={styles.addonContent}>
              <div className={styles.sectionHeader} style={{ margin: "0", textAlign: "left" }}>
                <span className={styles.sectionTag}>Complete Incident Control</span>
                <h2 className={styles.sectionTitle} style={{ marginBottom: "16px" }}>
                  Camera Alert Is Only the Beginning
                </h2>
              </div>
              <p className={styles.bodyText}>
                Secure Guard’s hybrid security model bridges the gap between technology and physical security by managing the complete incident sequence for you.
              </p>
              <p className={styles.bodyText}>
                Instead of leaving property managers to determine next steps after an alert, our connected system automatically flags off-hours activity in high-vulnerability zones, verifies live footage in seconds to eliminate false alarms, and immediately executes your custom response protocols—whether that means issuing live voice warnings, dispatching mobile field patrols, or coordinating directly with local law enforcement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: How Hybrid Security Works (Glass & Navy) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="how-it-works" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Navy Blue Filtered Background Image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Image 
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/08/em8-2.webp" 
            alt="Security Background" 
            fill 
            style={{ objectFit: 'cover' }} 
            quality={80}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 25, 47, 0.88)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.sectionHeader} style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: '100%' }}>
            <span className={styles.sectionTag} style={{ color: "#b89000", background: "rgba(254, 207, 49, 0.13)", borderColor: "rgba(254, 207, 49, 0.35)" }}>Unified Incident Response</span>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-white)' }}>
              How Hybrid Security Works
            </h2>
            <p className={styles.bodyTextCenteredLight} style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}>
              Hybrid security combines technology and physical security so each layer supports the others. This automated detection layer provides uninterrupted property oversight across expansive or complex commercial sites without relying solely on physical guard patrols.
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCardGlass}>
              <div className={styles.featureCardIcon}>
                <ScanSearch size={28} />
              </div>
              <h3 className={styles.featureTitle}>Real-Time Detection</h3>
              <p className={styles.featureDesc}>High-definition fixed cameras, thermal sensors, and mobile surveillance towers continuously monitor perimeters and access points to trigger instant system alerts upon unauthorized movement.</p>
            </div>

            <div className={styles.featureCardGlass}>
              <div className={styles.featureCardIcon}>
                <Eye size={28} />
              </div>
              <h3 className={styles.featureTitle}>Human Verification</h3>
              <p className={styles.featureDesc}>24/7 central monitoring specialists instantly evaluate live video feeds upon alert activation to distinguish genuine operational threats from harmless environmental movement.</p>
            </div>

            <div className={styles.featureCardGlass}>
              <div className={styles.featureCardIcon}>
                <Volume2 size={28} />
              </div>
              <h3 className={styles.featureTitle}>Remote Intervention</h3>
              <p className={styles.featureDesc}>When suspicious activity is verified, monitoring personnel utilize high-decibel two-way speakers to broadcast live, localized voice-down warnings directly to unauthorized individuals.</p>
            </div>

            <div className={styles.featureCardGlass}>
              <div className={styles.featureCardIcon}>
                <ShieldAlert size={28} />
              </div>
              <h3 className={styles.featureTitle}>Coordinated Field Dispatch</h3>
              <p className={styles.featureDesc}>When physical on-site intervention is required, central dispatch immediately deploys resources according to your customized property security plan.</p>
            </div>

            <div className={styles.featureCardGlass}>
              <div className={styles.featureCardIcon}>
                <FileText size={28} />
              </div>
              <h3 className={styles.featureTitle}>Digital Reporting</h3>
              <p className={styles.featureDesc}>Every system alert, verification, intervention, and dispatch action is automatically logged with verified metadata inside the SecureTrack platform, delivering transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: The Secure Guard Hybrid Security Model (Carousel) ===== */}
      <section className={styles.section} id="applications">
        <div className="container">
          <div className={styles.sectionHeader} style={{ maxWidth: "100%" }}>
            <span className={styles.sectionTag}>Secure Guard Framework</span>
            <h2 className={styles.sectionTitle}>
              The Secure Guard Hybrid Security Model
            </h2>
            <p className={styles.bodyTextCentered} style={{ maxWidth: "100%", textAlign: "center" }}>
              Secure Guard can connect mobile surveillance technology with live monitoring, dispatch, security officers, and mobile patrol services. This allows technology to extend the reach of physical security while giving physical security teams better information about what is happening at the property.
            </p>
          </div>

          <PillarsCarousel />
        </div>
      </section>

      {/* ===== SECTION 5: Existing Camera Integration (Escalation box) ===== */}
      <section className={styles.contactSection} id="integration">
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactContentPanel} style={{ backgroundColor: "#ffffff" }}>
            <div className={styles.sectionHeader} style={{ margin: "0 0 24px 0", textAlign: "left" }}>
              <span className={styles.sectionTag} style={{ color: "var(--color-dark-blue)" }}>Cost-Effective Oversight</span>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "16px", color: "var(--color-dark-blue)" }}>
                Existing Camera Integration
              </h2>
            </div>
            <p className={styles.bodyText} style={{ color: "var(--color-dark-blue)" }}>
              Secure Guard evaluates and integrates your existing security infrastructure into our hybrid monitoring network, eliminating the operational expense of complete hardware replacement.
            </p>
            <p className={styles.bodyText} style={{ color: "var(--color-dark-blue)", marginBottom: 0 }}>
              Compatible camera setups are connected directly into our 24/7 active monitoring, central dispatch, field response, and digital reporting ecosystem, instantly adding live human oversight and intervention to passive feeds.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Visibility Across the Entire Security Operation (Standard) ===== */}
      <section className={styles.section} id="visibility" style={{ position: "relative", overflow: "hidden" }}>
        <div className={styles.standardPatternLeft}>
          <ParticleMesh particleCount={25} theme="light" />
        </div>
        <div className={styles.standardPatternRight}>
          <ParticleMesh particleCount={25} theme="light" />
        </div>
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.sectionHeader} style={{ marginBottom: 0, maxWidth: "100%" }}>
            <span className={styles.sectionTag}>Total Transparency</span>
            <h2 className={styles.sectionTitle}>Visibility Across the Entire Security Operation</h2>
            <p className={styles.bodyTextCentered} style={{ maxWidth: "100%", textAlign: "center" }}>
              Secure Guard provides complete operational visibility across all your properties without requiring you to be physically on site. By unifying live monitoring, field guard activity, and central dispatch into the SecureTrack platform, property managers gain real-time operational oversight and audit-ready incident tracking—delivering total portfolio transparency from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: Serving Southern and Northern California (Marquee) ===== */}
      <CoverageSection />

      {/* ===== SECTION 8: FAQ ===== */}
      <section className={styles.faqSection} id="faq">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      <Footer />
      <BackToTop />
    </main>
  );
}
