"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

interface WhyChooseProps {
  onOpenAuditModal: () => void;
}

export default function WhyChooseSection({ onOpenAuditModal }: WhyChooseProps) {
  const benefits = [
    {
      title: "Reduced Liability",
      icon: ShieldCheck,
      description:
        "Professional handling of security events minimizes risks, reduces insurance premiums, and prevents costly property loss before damage occurs.",
      metric: "-45% Claims Reduction",
      highlights: ["Insurance rate discounts", "Eliminating false alarm fines", "Documented evidence logs"],
    },
    {
      title: "24/7 Professional Oversight",
      icon: Award,
      description:
        "Your property is watched by certified security professionals in high-tech command centers, not left to unmonitored software algorithms.",
      metric: "100% Human Verified",
      highlights: ["Licensed dispatch operators", "Instant incident triage", "Redundant command servers"],
    },
    {
      title: "Operational Peace of Mind",
      icon: HeartHandshake,
      description:
        "Stop worrying about monitoring your phone late at night—we take care of the heavy lifting, dispatching, and contact protocols.",
      metric: "Zero Midnight Stress",
      highlights: ["Hands-free property monitoring", "Automated executive summary reports", "Tailored response protocols"],
    },
  ];

  return (
    <section id="why-hybrid" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d2c48]/10 text-[#1d2c48] font-bold text-xs uppercase tracking-wider mb-4">
            Value Proposition
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1d2c48] tracking-tight">
            Why Choose <span className="text-[#1d2c48] underline decoration-[#fecf31] underline-offset-8">Hybrid?</span>
          </h2>

          <p className="mt-4 text-lg text-[#2a2829]/80 font-normal leading-relaxed">
            Combine cutting-edge AI technology with active human intelligence for complete, uncompromised security.
          </p>
        </div>

        {/* 3 Main Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9fc] rounded-3xl p-8 border border-[#c4c4c4]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Top Pill Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1d2c48] text-[#fecf31] flex items-center justify-center shadow-md">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#fecf31]/30 text-[#1d2c48] font-bold text-xs">
                      {benefit.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d2c48] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-base text-[#2a2829]/80 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {benefit.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-[#1d2c48]">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#c4c4c4]/30">
                  <button
                    onClick={onOpenAuditModal}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#1d2c48] hover:text-[#e8bb1e] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
