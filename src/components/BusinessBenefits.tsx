"use client";

import React from "react";
import { ShieldCheck, Building2, UserCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

interface BusinessBenefitsProps {
  onOpenModal: () => void;
}

export default function BusinessBenefits({ onOpenModal }: BusinessBenefitsProps) {
  const benefits = [
    {
      title: "Minimized Liability",
      desc: "By identifying and acting on threats early, we help reduce the likelihood of property damage and theft, significantly lowering your risk exposure and insurance premiums.",
      icon: ShieldCheck,
      badge: "Risk Mitigation",
      bullets: [
        "Pre-damage threat neutralization",
        "Lower insurance deductibles & premiums",
        "Documented audit trails for legal claims",
      ],
    },
    {
      title: "Proactive Site Management",
      desc: "We don’t just watch; we help manage your property. From verifying access points to identifying potential safety hazards in parking lots or back entrances, we provide total operational visibility.",
      icon: Building2,
      badge: "Operational Control",
      bullets: [
        "After-hours delivery access verification",
        "Parking lot & alleyway hazard auditing",
        "Perimeter fence integrity checks",
      ],
    },
    {
      title: "Expert Oversight",
      desc: "You aren’t just getting software; you get a team. Our experts understand the unique security requirements of retail, residential, and commercial properties, tailoring solutions to your operations.",
      icon: UserCheck,
      badge: "Dedicated Command Team",
      bullets: [
        "Certified security operators on duty 24/7",
        "Tailored protocols for retail, commercial & HOA",
        "Regular security posture reviews",
      ],
    },
    {
      title: "Peace of Mind",
      desc: "You no longer need to rely on 3:00 AM manual reviews or wake up to destroyed property. Trained professionals actively guard your site so you can focus entirely on core business growth.",
      icon: HeartHandshake,
      badge: "Total Rest & Focus",
      bullets: [
        "No middle-of-the-night emergency calls",
        "Real-time mobile app alerts & reports",
        "Comprehensive site health status updates",
      ],
    },
  ];

  return (
    <section id="business-benefits" className="py-24 bg-[#f8f9fc]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1d2c48] px-3.5 py-1.5 rounded-full bg-[#1d2c48]/10 inline-block">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d2c48] tracking-tight">
            How Secure Guard Helps Your Business
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            By partnering with SGSS, you move beyond simple recording and gain a <strong className="text-[#1d2c48]">comprehensive security partner</strong> dedicated to site safety, asset protection, and operational excellence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-custom p-8 rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1d2c48] text-[#fecf31] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#1d2c48] bg-[#fecf31]/20 border border-[#fecf31]/40 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1d2c48] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  {item.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1d2c48] fill-[#fecf31]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Property Types Covered Row */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center space-y-6">
          <h4 className="text-xl font-bold text-[#1d2c48]">
            Tailored Active Surveillance for Every Industry
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-[#1d2c48]">
            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-gray-200 hover:border-[#fecf31] transition-colors">
              🏢 Commercial & Office Parks
            </div>
            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-gray-200 hover:border-[#fecf31] transition-colors">
              🛍️ Retail Centers & Malls
            </div>
            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-gray-200 hover:border-[#fecf31] transition-colors">
              🏭 Industrial & Warehouses
            </div>
            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-gray-200 hover:border-[#fecf31] transition-colors">
              🏘️ Residential & Multi-Family
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
