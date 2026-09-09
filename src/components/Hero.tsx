"use client";

import React from "react";
import { ShieldCheck, Video, Play, ArrowRight, Activity, Eye, Zap, Lock } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1d2c48] overflow-hidden text-white">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#fecf31]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#263659] rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-[#fecf31] pulsing-badge">
              <span className="relative flex h-2.5 w-2.5">
                <span className="live-dot-ping absolute inline-flex h-full w-full rounded-full bg-[#fecf31] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fecf31]"></span>
              </span>
              <span>The Secure Guard Advantage</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
              Turn Passive Security Cameras into a{" "}
              <span className="text-[#fecf31] underline decoration-[#fecf31]/40 underline-offset-8">
                Proactive Real-Time Defense
              </span>{" "}
              System.
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Most property security systems share a common flaw:{" "}
              <strong className="text-white font-semibold">they are reactive.</strong> They record footage after a theft, vandalism, or safety incident has already occurred.{" "}
              <span className="text-white font-medium">Secure Guard Security Services (SGSS)</span> changes that—moving your site safety from <em className="italic text-gray-400">"recording history"</em> to <strong className="text-[#fecf31] font-semibold">active intervention.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenModal}
                className="btn-primary text-base py-4 px-7 font-bold rounded-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-[#fecf31]/20 group"
              >
                <span>See How Active Monitoring Works</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#live-demo"
                className="btn-outline-light text-base py-4 px-6 font-semibold rounded-xl flex items-center justify-center gap-2.5"
              >
                <Play className="w-4 h-4 text-[#fecf31] fill-[#fecf31]" />
                <span>Try Live Simulator</span>
              </a>
            </div>

            {/* Proof Badges Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-[#fecf31]">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">Instant</div>
                  <div className="text-gray-400 text-xs">AI Threat Detection</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-[#fecf31]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">100% Verified</div>
                  <div className="text-gray-400 text-xs">Human Expert Review</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-[#fecf31]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm sm:text-base">Immediate</div>
                  <div className="text-gray-400 text-xs">Emergency Dispatch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Preview Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#131e33] border border-white/15 p-4 shadow-2xl overflow-hidden">
              {/* Header Bar of Video Feed */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-white uppercase tracking-wider">CAM-04 | FRONT ENTRANCE</span>
                </div>
                <div className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  ACTIVE OVERSIGHT
                </div>
              </div>

              {/* Simulated Live Video Monitor Box */}
              <div className="relative mt-3 h-64 sm:h-72 rounded-xl bg-slate-900 overflow-hidden border border-white/10 flex flex-col justify-between p-4 group">
                {/* Background Camera Scene SVG overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-slate-900/60 to-black/70 flex items-center justify-center">
                  <div className="w-full h-full opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* AI Target Detection Overlay Frame */}
                <div className="absolute top-12 left-10 w-44 h-36 border-2 border-[#fecf31] rounded-lg bg-[#fecf31]/10 flex flex-col justify-between p-1.5 shadow-[0_0_15px_rgba(254,207,49,0.3)] animate-pulse">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#fecf31] font-bold bg-[#1d2c48]/90 px-1.5 py-0.5 rounded">
                    <span>OBJECT: HUMAN</span>
                    <span>99.4%</span>
                  </div>
                  <div className="text-[10px] font-mono font-extrabold text-[#1d2c48] bg-[#fecf31] px-1.5 py-0.5 rounded text-center uppercase tracking-tighter">
                    ⚠️ LOITERING DETECTED
                  </div>
                </div>

                {/* Video Watermark & Grid */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-[#fecf31]" />
                    <span>REC ● 1080P / 60FPS</span>
                  </div>
                  <div className="bg-[#1d2c48]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#fecf31] border border-[#fecf31]/30">
                    LIVE AI STREAM
                  </div>
                </div>

                {/* Threat Response Alert Toast overlay */}
                <div className="relative z-10 bg-[#1d2c48]/95 backdrop-blur-md border border-[#fecf31]/40 rounded-lg p-3 text-xs shadow-xl">
                  <div className="flex items-center justify-between text-white font-bold mb-1">
                    <span className="flex items-center gap-1.5 text-[#fecf31]">
                      <ShieldCheck className="w-4 h-4" />
                      SGSS Verification Command
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">00:04s RESPONSE</span>
                  </div>
                  <p className="text-gray-300 text-[11px] leading-tight">
                    Threat verified by SGSS Operator #412. Dispatching Mobile Patrol & Audio Intervention.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric strip */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="text-gray-400 text-[11px] block">Legacy CCTV</span>
                  <span className="text-red-400 font-semibold text-xs">100% Reactive</span>
                </div>
                <div className="bg-[#fecf31]/10 p-2 rounded-lg border border-[#fecf31]/30">
                  <span className="text-[#fecf31] text-[11px] block font-medium">SGSS Active Monitoring</span>
                  <span className="text-white font-bold text-xs">Real-Time Defense</span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Shield Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#1d2c48] p-4 rounded-xl shadow-2xl border border-gray-200 hidden sm:flex items-center gap-3">
              <div className="p-3 bg-[#fecf31] rounded-lg">
                <Lock className="w-6 h-6 text-[#1d2c48]" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Site Protection</div>
                <div className="text-base font-extrabold text-[#1d2c48]">Zero Theft Tolerated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
