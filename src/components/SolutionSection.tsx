"use client";

import React from "react";
import { Eye, Megaphone, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

interface SolutionSectionProps {
  onOpenAuditModal: () => void;
}

export default function SolutionSection({ onOpenAuditModal }: SolutionSectionProps) {
  const solutionFeatures = [
    {
      title: "Live Verification",
      icon: Eye,
      description:
        "Our command center staff reviews live video immediately to filter out false alarms and confirm real security threats in seconds.",
      bullets: [
        "Human verification within seconds",
        "Filters out wind, animals & false triggers",
        "Priority police & responder escalation",
      ],
    },
    {
      title: "Active Deterrence",
      icon: Megaphone,
      description:
        "Trained professionals use real-time voice intervention to challenge trespassers the moment they enter your property.",
      bullets: [
        "2-way live audio talk-down",
        "Direct warning to intruders on-site",
        "Stops crime before damage occurs",
      ],
    },
    {
      title: "Coordinated Response",
      icon: ShieldCheck,
      description:
        "We handle the logistics so you don't have to—notifying designated contacts, coordinating on-site security, and dispatching mobile patrols or emergency services.",
      bullets: [
        "Full incident logistics management",
        "Instant contact notifications",
        "Direct mobile patrol & 911 dispatch",
      ],
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fecf31]/20 text-[#1d2c48] font-bold text-xs uppercase tracking-wider mb-4 border border-[#fecf31]/40">
            <ShieldCheck className="w-4 h-4 text-[#1d2c48]" />
            The Solution
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1d2c48] tracking-tight">
            The Secure Guard <span className="text-[#1d2c48] bg-[#fecf31]/30 px-3 py-1 rounded-xl">Hybrid Advantage</span>
          </h2>

          <p className="mt-4 text-lg text-[#2a2829]/80 font-normal leading-relaxed">
            We unify advanced video monitoring with human expertise. We don&apos;t just alert you to a problem; we manage the resolution from start to finish.
          </p>
        </div>

        {/* 3 Solution Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutionFeatures.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9fc] rounded-2xl p-8 border border-[#c4c4c4]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-[#fecf31]"
              >
                <div>
                  {/* Circle Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#1d2c48] text-[#fecf31] flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110">
                    <IconComp className="w-8 h-8 stroke-[2.2]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d2c48] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-base text-[#2a2829]/80 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {feature.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#1d2c48]">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#c4c4c4]/30 flex items-center justify-between text-xs font-semibold text-[#1d2c48]">
                  <span>24/7 Managed Protocol</span>
                  <span className="w-2 h-2 rounded-full bg-[#fecf31]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner inside Solution */}
        <div className="bg-[#263659] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Want to see how Hybrid Security compares to your current setup?
            </h4>
            <p className="text-sm text-gray-300">
              Our security specialists provide a complimentary site risk assessment.
            </p>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="btn-gold shrink-0 py-3.5 px-6 text-sm font-bold w-full sm:w-auto"
          >
            <span>Request Site Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
