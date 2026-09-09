"use client";

import React from "react";
import { Zap, ShieldCheck, Siren, ArrowRight, CheckCircle } from "lucide-react";

interface HowItWorksProps {
  onOpenModal: () => void;
}

export default function HowItWorks({ onOpenModal }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Instant Detection",
      subtitle: "AI-Powered Real-Time Surveillance",
      desc: "Our technology flags suspicious activity the moment it occurs—loitering, unauthorized access, or after-hours movement—ensuring no event goes unnoticed.",
      icon: Zap,
      badge: "0s Reaction Time",
      highlights: ["AI Motion Tracking", "After-hours Loitering Alerts", "Perimeter Breach Flags"],
    },
    {
      number: "02",
      title: "Professional Verification",
      subtitle: "Human Intelligence Filter",
      desc: "Our trained personnel review the live feed immediately upon detection. We filter out false alarms (like animals or environmental movement) to focus exclusively on genuine security threats.",
      icon: ShieldCheck,
      badge: "Zero False Alarms",
      highlights: ["24/7 Command Center", "Environmental Filtering", "Live Feed Inspection"],
    },
    {
      number: "03",
      title: "Rapid, Coordinated Response",
      subtitle: "Immediate Threat Intervention",
      desc: "Once a threat is verified, we take immediate action. This includes notifying your designated contacts, dispatching mobile patrol units, or coordinating with local emergency services to stop incidents while they are still in progress.",
      icon: Siren,
      badge: "< 30s Dispatch",
      highlights: ["Two-Way Audio Warning", "Mobile Patrol Dispatch", "911 Emergency Coordination"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1d2c48] px-3.5 py-1.5 rounded-full bg-[#fecf31]/20 border border-[#fecf31]/40 inline-block">
            Proactive Defense Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d2c48] tracking-tight">
            How Active Video Monitoring Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We add a live, intelligent layer behind your existing camera infrastructure. Our system doesn't just store data; it provides <strong className="text-[#1d2c48]">real-time awareness and immediate intervention.</strong>
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-custom relative p-8 flex flex-col justify-between group rounded-2xl border border-gray-100 bg-white"
              >
                {/* Step Badge & Number Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1d2c48] text-[#fecf31] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#fecf31] group-hover:text-[#1d2c48] transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-gray-200 group-hover:text-[#fecf31] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#f8f9fc] text-[#1d2c48] text-xs font-bold border border-gray-200 mb-3">
                    {step.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-[#1d2c48] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {step.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#fecf31] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner bottom */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#1d2c48] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#fecf31]">
              Works with Your Existing Camera Hardware
            </h4>
            <p className="text-gray-300 text-sm">
              No need to replace your current cameras. SGSS integrates seamlessly into 99% of IP security setups.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="btn-primary text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl whitespace-nowrap"
          >
            <span>Verify Compatibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
