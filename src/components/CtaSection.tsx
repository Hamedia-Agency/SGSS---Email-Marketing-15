"use client";

import React from "react";
import { ShieldCheck, ArrowRight, PhoneCall, CheckCircle } from "lucide-react";

interface CtaSectionProps {
  onOpenAuditModal: () => void;
}

export default function CtaSection({ onOpenAuditModal }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#1d2c48] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fecf31]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#263659] to-[#1d2c48] p-8 sm:p-14 rounded-3xl border border-white/15 shadow-2xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#fecf31] text-[#1d2c48] flex items-center justify-center mx-auto mb-6 shadow-xl">
            <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to elevate your security?
          </h2>

          <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Stop waiting for someone else to call the police. Partner with a security service that takes action.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenAuditModal}
              className="btn-gold text-base py-4 px-8 w-full sm:w-auto shadow-xl"
            >
              <span>Request a Hybrid Security Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:18005557348"
              className="btn-dark text-base py-4 px-8 w-full sm:w-auto bg-white/10 hover:bg-white/20 border-white/20"
            >
              <PhoneCall className="w-5 h-5 text-[#fecf31]" />
              <span>Call (800) 555-7348</span>
            </a>
          </div>

          {/* Guarantee / Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs font-semibold text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#fecf31]" />
              <span>Free On-Site Risk Evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#fecf31]" />
              <span>No Long-Term Lock-in Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#fecf31]" />
              <span>Compatible with Existing Cameras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
