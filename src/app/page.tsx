import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PreFooterCTA } from "@/components/PreFooterCTA";

import PillarsCarousel from "@/components/PillarsCarousel";
import { OptimizeSpendCarousel } from "@/components/OptimizeSpendCarousel";
import FloatingShapes from "@/components/FloatingShapes";
import ParticleMesh from "@/components/ParticleMesh";
import OptimizationTabs from "@/components/OptimizationTabs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CoverageSection } from "@/components/CoverageSection";
import { ScanSearch, Activity, Radio, Eye, Volume2, ShieldAlert, FileText, Layers } from "lucide-react";

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
              Operational Security Reviews
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Security Cost <span className={styles.heroTitleAccent}>Optimization</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services conducts operational security reviews designed to identify where coverage may be misaligned with the way a property actually operates and where the security budget may be better allocated.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Get a Security Assessment
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
                <span className={styles.sectionTag}>Operational Rhythms</span>
                <h2 className={styles.sectionTitle} style={{ marginBottom: "16px" }}>
                  Where Security Coverage Can Fall Short
                </h2>
              </div>
              <p className={styles.bodyText}>
                Simply increasing security hours does not guarantee better protection if coverage fails to align with your property’s actual operational rhythms.
              </p>
              <p className={styles.bodyText}>
                Secure Guard evaluates your site's daily activity patterns to align security hours directly with your highest-vulnerability periods, ensuring your resources are deployed where they deliver maximum protection rather than spread thin across static shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: STICKY FLOW (How We Optimize Your Security Spend) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="how-we-optimize">
        <div className="container">
          <div className={styles.stickyGrid}>
            <div className={styles.leftStickyCol}>
              <div className={styles.stickyHeader}>
                <span className={`${styles.sectionTag} ${styles.sectionTagDark}`}>Operational Support</span>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`} style={{ marginBottom: "16px" }}>
                  How We Optimize Your Security Spend
                </h2>
                <p className={`${styles.bodyText} ${styles.bodyTextDark}`} style={{ fontSize: "1.05rem", opacity: 0.85 }}>
                  Secure Guard analyzes daily workflows, risk profiles, and operational rhythms to ensure every dollar in your security budget delivers maximum protection.
                </p>
              </div>
            </div>

            <div className={styles.rightFlowCol}>
              {/* Card 1 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>01</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <ScanSearch size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Shift & Traffic Analysis</span>
                    <h3 className={styles.flowTitle}>Aligning Security with Site Activity</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    Secure Guard analyzes daily workflows, shift changes, delivery schedules, and foot/vehicle traffic to eliminate duplicated, underutilized, or poorly timed coverage hours. Rather than automatically cutting guard hours, we redirect your existing budget away from static, low-activity shifts and focus it directly on peak-vulnerability windows where a physical presence delivers the highest operational value.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>02</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <Eye size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Compliance & Risk Control</span>
                    <h3 className={styles.flowTitle}>Allocating Resources by Risk Level</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    Secure Guard evaluates your physical layout—from high-value equipment yards and restricted storage zones to routine perimeters and parking structures—to determine where continuous guard presence is necessary, where periodic mobile patrols suffice, and where surveillance technology offers the best coverage. Assigning security resources based on localized risk rather than rigid standard templates ensures your budget delivers maximum protection where it is needed most.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className={styles.flowCard}>
                <span className={styles.flowNumber}>03</span>
                <div className={styles.flowCardHeader}>
                  <div className={styles.flowIconContainer}>
                    <Radio size={26} />
                  </div>
                  <div className={styles.flowHeaderText}>
                    <span className={styles.flowCardTag}>Hardware & Human Network</span>
                    <h3 className={styles.flowTitle}>Technology & Personnel Integration</h3>
                  </div>
                </div>
                <div className={styles.flowBody}>
                  <p className={styles.flowDesc}>
                    Existing cameras, access control systems, and monitoring tools deliver maximum value when seamlessly integrated with your physical security force. Secure Guard evaluates your property to determine where technology can maintain continuous observation and where human presence is essential for access control, visitor management, and direct response. By coordinating remote video monitoring, mobile patrols, and on-site officers into a unified network, we ensure your technology and personnel complement each other, eliminating redundant expenses while making your current security hardware work significantly harder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Building the Right Security Combination (Carousel) ===== */}
      <section className={styles.section} id="applications">
        <div className="container">
          <div className={styles.sectionHeader} style={{ maxWidth: "100%" }}>
            <span className={styles.sectionTag}>Secure Guard Framework</span>
            <h2 className={styles.sectionTitle}>
              Building the Right Security Combination
            </h2>
            <p className={styles.bodyTextCentered} style={{ maxWidth: "100%", textAlign: "center" }}>
              Secure Guard evaluates your unique layout, risk profile, and operating hours to deploy the exact mix of protection your property requires.
            </p>
          </div>

          <PillarsCarousel />
        </div>
      </section>

      

      {/* ===== SECTION 5: Operational Security Review Process (Optimization Tabs) ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`} id="review-process" style={{ position: 'relative', overflow: 'hidden' }}>
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
            <span className={styles.sectionTag} style={{ color: "#b89000", background: "rgba(254, 207, 49, 0.13)", borderColor: "rgba(254, 207, 49, 0.35)" }}>Structured Review</span>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-white)', marginBottom: '16px' }}>
              Operational Security Review Process
            </h2>
            <p className={styles.bodyTextCentered} style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '850px', textAlign: 'center' }}>
              Secure Guard conducts a structured, five-step evaluation to align your security program directly with how your facility functions in real-world conditions.
            </p>
          </div>
          
          <OptimizationTabs />
        </div>
      </section>

      {/* ===== SECTION 6: The Secure Guard Difference (Split Image Feature Box) ===== */}
      <section className={styles.contactSection} id="difference">
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactContentPanel} style={{ backgroundColor: "#ffffff" }}>
            <div className={styles.sectionHeader} style={{ margin: "0 0 24px 0", textAlign: "left" }}>
              <span className={styles.sectionTag} style={{ color: "var(--color-dark-blue)" }}>Customized Protection</span>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "16px", color: "var(--color-dark-blue)" }}>
                The Secure Guard Difference
              </h2>
            </div>
            <p className={styles.bodyText} style={{ color: "var(--color-dark-blue)" }}>
              Secure Guard rejects rigid, template-based security in favor of custom strategies built around your site's exact layout, risk factors, and daily operating cycles. Rather than blindly adding costly guard hours or redundant hardware, we evaluate your existing setup to maximize budget efficiency and focus resources where vulnerabilities peak.
            </p>
            <p className={styles.bodyText} style={{ color: "var(--color-dark-blue)", marginBottom: 0 }}>
              By unifying physical officers, mobile patrols, smart surveillance, 24/7 central dispatch, and digital reporting into a single connected system, we deliver streamlined, high-impact protection for single properties and multi-location portfolios.
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
