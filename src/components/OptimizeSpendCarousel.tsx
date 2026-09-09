"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ScanSearch, Eye, Volume2 } from "lucide-react";

export function OptimizeSpendCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Aligning Security with Site Activity",
      description: "Secure Guard analyzes daily workflows, shift changes, delivery schedules, and foot/vehicle traffic to eliminate duplicated, underutilized, or poorly timed coverage hours. Rather than automatically cutting guard hours, we redirect your existing budget away from static, low-activity shifts and focus it directly on peak-vulnerability windows where a physical presence delivers the highest operational value.",
      image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-2.webp",
      icon: <ScanSearch className="w-6 h-6" />
    },
    {
      title: "Allocating Resources by Risk Level",
      description: "Secure Guard evaluates your physical layout—from high-value equipment yards and restricted storage zones to routine perimeters and parking structures—to determine where continuous guard presence is necessary, where periodic mobile patrols suffice, and where surveillance technology offers the best coverage. Assigning security resources based on localized risk rather than rigid standard templates ensures your budget delivers maximum protection where it is needed most.",
      image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em8-2.webp",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Technology & Personnel Integration",
      description: "Existing cameras, access control systems, and monitoring tools deliver maximum value when seamlessly integrated with your physical security force. Secure Guard evaluates your property to determine where technology can maintain continuous observation and where human presence is essential for access control, visitor management, and direct response. By coordinating remote video monitoring, mobile patrols, and on-site officers into a unified network, we ensure your technology and personnel complement each other, eliminating redundant expenses while making your current security hardware work significantly harder.",
      image: "https://cms.secureguardservices.com/wp-content/uploads/2026/08/em12-1.webp",
      icon: <Volume2 className="w-6 h-6" />
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-7xl mx-auto my-12 relative z-10">
      {/* Main Card */}
      <div className="w-full lg:w-2/3 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] overflow-hidden shadow-2xl text-left flex flex-col transition-all">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            fill
            className="object-cover transition-transform duration-1000 ease-in-out scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/30 to-transparent"></div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-6 flex items-center">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fecf31] hover:text-black backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-6 flex items-center">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fecf31] hover:text-black backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-10 flex-1 flex flex-col bg-[#111827]/80 backdrop-blur-lg border-t border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#fecf31]/10 flex items-center justify-center text-[#fecf31] border border-[#fecf31]/20">
              {features[activeIndex].icon}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{features[activeIndex].title}</h3>
          </div>
          <p className="text-gray-300 text-[15px] leading-relaxed">
            {features[activeIndex].description}
          </p>

          {/* Progress Dots */}
          <div className="mt-auto pt-8 flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-12 bg-[#fecf31]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Side Cards Stack */}
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-5 p-6 rounded-[24px] text-left transition-all duration-300 border h-[120px] ${index === activeIndex
                ? "bg-[#1d2c48] text-white border-[#fecf31]/50 shadow-[0_10px_30px_rgba(29,44,72,0.5)] scale-105"
                : "bg-white/5 backdrop-blur-md text-gray-300 border-white/10 hover:bg-white/10"
              }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${index === activeIndex ? "bg-[#fecf31]/20 border border-[#fecf31]/30" : "bg-white/10"
              }`}>
              {React.cloneElement(feature.icon as React.ReactElement<any>, {
                className: `w-6 h-6 transition-colors ${index === activeIndex ? "text-[#fecf31]" : "text-white/60"}`
              })}
            </div>
            <span className={`font-semibold text-sm uppercase tracking-wide leading-tight ${index === activeIndex ? "text-white" : "text-gray-400"}`}>
              {feature.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
