"use client";

import React from "react";
import { AlertTriangle, HelpCircle, Clock, Moon, ShieldAlert, ArrowRight } from "lucide-react";

interface ProblemSectionProps {
  onOpenAuditModal: () => void;
}

export default function ProblemSection({ onOpenAuditModal }: ProblemSectionProps) {
  const painPoints = [
    {
      icon: HelpCircle,
      question: "Is it a real threat or a false alarm?",
      description:
        "Wind-blown branches, passing cars, or stray animals trip generic motion sensors, flooding your phone with endless false notifications.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Moon,
      question: "Who do you call at 2:00 AM?",
      description:
        "Waking up to a security ping leaves property owners stressed, isolated, and forced to play security guard in the middle of the night.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Clock,
      question: "How long will it take for a patrol to arrive?",
      description:
        "Unverified alarm calls receive low priority from local authorities, meaning responders often arrive long after damage or theft has occurred.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#f8f9fc]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 font-bold text-xs uppercase tracking-wider mb-4 border border-red-500/20">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            The Problem
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1d2c48] tracking-tight">
            The &quot;Alert Fatigue&quot; Reality
          </h2>

          <p className="mt-4 text-lg text-[#2a2829]/80 font-normal leading-relaxed">
            Most security systems stop at the notification. When your phone pings with a motion alert, you are left with a critical problem.
          </p>
        </div>

        {/* 3 Question Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#c4c4c4]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <IconComponent className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d2c48] mb-3 leading-snug">
                    &ldquo;{item.question}&rdquo;
                  </h3>
                  <p className="text-base text-[#2a2829]/75 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#929292] group-hover:text-[#1d2c48] transition-colors">
                  <span>Unresolved by standard cameras</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box: Why Passive Surveillance Fails */}
        <div className="max-w-4xl mx-auto bg-[#1d2c48] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#fecf31]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fecf31]/20 text-[#fecf31] text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                Critical Security Vulnerability
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Without a coordinated response, a camera is just a recording device.
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                You need a security partner that knows exactly what to do next the second an alert triggers.
              </p>
            </div>

            <button
              onClick={onOpenAuditModal}
              className="btn-gold shrink-0 py-4 px-7 text-sm font-bold w-full md:w-auto"
            >
              <span>Solve Your Security Gap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
