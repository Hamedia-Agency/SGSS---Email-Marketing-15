"use client";

import React, { useState } from "react";
import { Radar, Eye, Zap, FileCheck2, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenAuditModal: () => void;
}

export default function HowItWorksSection({ onOpenAuditModal }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Detect",
      subtitle: "AI-Powered Camera Sensing",
      icon: Radar,
      description: "AI-powered cameras identify suspicious activity.",
      details:
        "Custom thermal and HD video analytics scan perimeter lines 24/7. When unauthorized human or vehicle movement is detected, a high-priority alert triggers automatically.",
      tag: "Instant AI Sensing",
    },
    {
      number: "02",
      title: "Verify",
      subtitle: "Human Command Center Review",
      icon: Eye,
      description: "Our expert team reviews the live stream in seconds.",
      details:
        "Trained security specialists view live feeds immediately to eliminate false alerts (wind, animals, weather) and confirm legitimate threats.",
      tag: "<15s Human Verification",
    },
    {
      number: "03",
      title: "Act",
      subtitle: "Active Voice Intervention & Dispatch",
      icon: Zap,
      description: "We intervene verbally or dispatch support instantly.",
      details:
        "Operators broadcast live personalized voice warnings to intruders while simultaneously calling designated keyholders and priority emergency services.",
      tag: "Real-time Intervention",
    },
    {
      number: "04",
      title: "Resolve",
      subtitle: "Complete Audit & Report Log",
      icon: FileCheck2,
      description: "You get a full report of the incident and the action taken.",
      details:
        "Receive detailed video evidence logs, operator intervention timestamps, and dispatch reports directly sent to your dashboard and smartphone.",
      tag: "Full Transparency",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#1d2c48] text-white relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#263659_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#fecf31] font-bold text-xs uppercase tracking-wider mb-4 border border-white/15">
            Step-By-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-gray-300 font-normal leading-relaxed">
            From initial threat detection to complete resolution—here is how Secure Guard protects your property around the clock.
          </p>
        </div>

        {/* 4 Step Pipeline Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-[#263659] border-[#fecf31] shadow-2xl scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black ${isActive ? "text-[#fecf31]" : "text-gray-400"}`}>
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? "bg-[#fecf31] text-[#1d2c48]" : "bg-white/10 text-white"}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#fecf31] font-semibold mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Step Feature Showcase Box */}
        <div className="bg-[#263659] rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-[#fecf31]/20 text-[#fecf31] text-xs font-bold uppercase tracking-wider">
                Step {steps[activeStep].number} Focus: {steps[activeStep].tag}
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>
              <p className="text-lg text-gray-200 font-medium">
                {steps[activeStep].description}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {steps[activeStep].details}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#1d2c48] p-6 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#fecf31] text-[#1d2c48] flex items-center justify-center mx-auto shadow-lg">
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 stroke-[2.5]" })}
              </div>
              <h4 className="text-lg font-bold text-white">
                Ready for {steps[activeStep].title} Security?
              </h4>
              <p className="text-xs text-gray-300">
                Integrate active response into your property today.
              </p>
              <button
                onClick={onOpenAuditModal}
                className="btn-gold text-xs py-3 px-5 w-full"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
