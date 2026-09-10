"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    "question": "What is a security cost optimization review?",
    "answer": "An operational review evaluates how your current security budget, guard schedules, post orders, and technology align with your facility's actual daily activity and risk profile. Rather than assuming more guard hours equal better security, we identify coverage redundancies, quiet-period waste, and unaddressed gap periods so every dollar delivers maximum protection."
  },
  {
    "question": "Does cost optimization mean simply cutting security guards or reducing protection?",
    "answer": "No. The objective is strategic budget alignment, not blind cost-cutting. We eliminate paid guard hours during low-vulnerability periods and reallocate those existing funds toward peak-risk windows, mobile patrols, or hybrid video surveillance. This tightens site security while lowering or maintaining overall operational costs."
  },
  {
    "question": "Can Secure Guard evaluate our site while our current security provider contract is active?",
    "answer": "Yes. You do not need to alter or cancel your current security arrangement to request a review. Secure Guard conducts an independent evaluation of your physical layout, guard schedules, and post orders, giving you an objective baseline of where your budget is performing effectively and where coverage can be optimized."
  },
  {
    "question": "What does \"architectural efficiency\" mean in property security?",
    "answer": "Architectural efficiency means designing security directly around your property's unique physical blueprint and daily operational behavior. We evaluate entry points, loading docks, equipment yards, camera sightlines, and foot/vehicle traffic as an integrated system\u2014ensuring physical officers, mobile patrols, and surveillance technology support each other without redundant coverage."
  },
  {
    "question": "Can our existing cameras and security hardware be included in the review?",
    "answer": "Yes. We evaluate your existing camera infrastructure, access controls, and monitoring equipment as part of the total security ecosystem. Our objective is to maximize the utility of your functional hardware and integrate it into our operational network, avoiding unnecessary equipment replacement costs."
  },
  {
    "question": "What types of facilities benefit most from an operational security review?",
    "answer": "Any facility with fluctuating activity cycles benefits from an evaluation. This includes industrial facilities, commercial real estate, construction sites, logistics centers, multi-family communities, healthcare campuses, and multi-location commercial portfolios throughout California."
  },
  {
    "question": "Is there any cost or obligation tied to requesting an operational security review?",
    "answer": "No. Secure Guard offers a no-obligation security assessment with zero financial commitment. We review your layout, examine your current security structure, and outline practical strategy recommendations to eliminate wasted spend and enhance site protection."
  }
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
