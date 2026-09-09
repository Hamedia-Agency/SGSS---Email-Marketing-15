"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";
import { ChevronDown } from "lucide-react";

const faqData = [
  { question: "What is hybrid security?", answer: "Hybrid security combines technology-based monitoring (fixed cameras, thermal sensors, and mobile surveillance towers) with physical security services (central dispatch, standing officers, and mobile patrols) into one synchronized response network tailored to your site." },
  { question: "What types of properties benefit most from hybrid security?", answer: "It is ideal for commercial properties with after-hours vulnerabilities, expansive footprints, or multi-access points—including construction sites, industrial yards, retail centers, multi-level parking structures, multi-family complexes, and vacant properties." },
  { question: "Do I need to replace my existing security cameras?", answer: "In most cases, no. Secure Guard evaluates your current cameras and network infrastructure to layer live monitoring directly onto compatible hardware, eliminating hardware replacement costs. Supplemental equipment, such as mobile surveillance towers, is introduced only where coverage gaps exist." },
  { question: "Are operators watching my camera feeds continuously 24/7?", answer: "Active monitoring is configured around your property's specific schedule and risk profile. It typically activates during high-vulnerability off-hours, routing live feeds to central specialists the moment motion sensors or video analytics trigger an alert." },
  { question: "What happens when suspicious motion is detected?", answer: "Central specialists inspect the live feed within seconds. If a threat is confirmed, operators execute your pre-established protocol—broadcasting live voice-down warnings directly to trespassers, notifying property managers, or dispatching mobile field patrols and law enforcement." },
  { question: "How does live visual verification prevent false alarm fines?", answer: "Operators inspect live footage before initiating an escalation, filtering out environmental triggers like stray animals, wind-blown debris, or passing headlights. Emergency services and field units are dispatched only for verified threats, eliminating costly municipal false-alarm penalties." },
  { question: "Does hybrid security replace physical security guards?", answer: "Not necessarily. Hybrid security can operate without on-site guards by relying on remote monitoring and mobile patrols, or it can complement standing officers by extending coverage into blind spots beyond a guard's physical line of sight." },
  { question: "What is the role of central dispatch?", answer: "Dispatch serves as the operational link between monitoring operators and physical security personnel. When an incident requires on-ground intervention, dispatch routes verified situational intelligence to mobile patrol units, standing guards, property contacts, or local emergency services." },
  { question: "How does SecureTrack support hybrid security?", answer: "SecureTrack consolidates operations, patrol activity, guard tracking, and incident documentation into a single digital dashboard. It automatically logs exact timestamps for initial threat detection, human verification, voice intervention, field dispatch, and final resolution—delivering audit-ready transparency across your portfolio." }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={styles.accordionItem}>
            <button
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
            >
              <h3 className={styles.accordionTitle}>{faq.question}</h3>
              <div className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                 <ChevronDown size={20} />
              </div>
            </button>
            <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ""}`}>
              <p className={styles.accordionText}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
