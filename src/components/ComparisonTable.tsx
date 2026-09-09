"use client";

import React from "react";
import { Check, X, ShieldAlert, Zap } from "lucide-react";

interface ComparisonTableProps {
  onOpenModal: () => void;
}

export default function ComparisonTable({ onOpenModal }: ComparisonTableProps) {
  const comparisonRows = [
    {
      feature: "Primary Function",
      passive: "Records history after damage occurs",
      active: "Real-time active threat intervention",
    },
    {
      feature: "Incident Prevention",
      passive: "0% — Only provides post-theft playback",
      active: "Neutralizes 98%+ of threats before entry",
    },
    {
      feature: "Live Human Verification",
      passive: "None — Rely on delayed review next morning",
      active: "Instant 24/7 certified operator review",
    },
    {
      feature: "False Alarm Handling",
      passive: "Frequent unverified police dispatches",
      active: "100% filtered by human + AI synergy",
    },
    {
      feature: "Emergency Dispatch Speed",
      passive: "Hours later when property owner notices",
      active: "Under 30 seconds verified dispatch",
    },
    {
      feature: "Property Liability Impact",
      passive: "High — You absorb damage & insurance hikes",
      active: "Minimized — Significant risk reduction",
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1d2c48] px-3.5 py-1.5 rounded-full bg-[#1d2c48]/10 inline-block">
            Clear Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1d2c48] tracking-tight">
            Stop Recording History. Start Stopping Crime.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            See how traditional passive CCTV compares to SGSS Active Video Monitoring.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-5 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider w-1/3 bg-[#f8f9fc]">
                    Security Capability
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider w-1/3 bg-gray-50 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <X className="w-5 h-5" />
                      <span>Passive Cameras</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-bold text-white uppercase tracking-wider w-1/3 bg-[#1d2c48] text-center">
                    <div className="flex items-center justify-center gap-2 text-[#fecf31]">
                      <Zap className="w-5 h-5 fill-[#fecf31]" />
                      <span>SGSS Active Monitoring</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#1d2c48] bg-[#f8f9fc]/50">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600 bg-gray-50/30">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.passive}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#1d2c48] bg-[#fecf31]/10">
                      <div className="flex items-center justify-center gap-2 text-[#1d2c48]">
                        <Check className="w-5 h-5 text-emerald-600 stroke-[3] shrink-0" />
                        <span>{row.active}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Footer CTA */}
          <div className="bg-[#1d2c48] p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left text-white space-y-1">
              <div className="font-bold text-base text-[#fecf31]">Ready to upgrade your camera infrastructure?</div>
              <div className="text-xs text-gray-300">We plug into existing camera hardware with zero downtime.</div>
            </div>
            <button
              onClick={onOpenModal}
              className="btn-primary text-xs font-bold py-3 px-6 rounded-lg whitespace-nowrap"
            >
              Get Upgrade Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
