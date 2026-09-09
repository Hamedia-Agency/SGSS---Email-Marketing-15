"use client";

import React, { useState } from "react";
import {
  Video,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Clock,
  UserCheck,
  Zap,
  Play,
  RotateCcw,
  Sliders,
  Eye
} from "lucide-react";

interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: "Normal" | "Threat Detected" | "Verified & Dispatched";
  riskLevel: "Low" | "Medium" | "High";
  videoOverlay: {
    threatType: string;
    confidence: number;
    boundingTop: string;
    boundingLeft: string;
  };
}

const CAMERAS: CameraFeed[] = [
  {
    id: "cam-1",
    name: "CAM 01 - Commercial Plaza Front",
    location: "Main Entrance & Courtyard",
    status: "Threat Detected",
    riskLevel: "High",
    videoOverlay: {
      threatType: "After-Hours Loitering",
      confidence: 99.1,
      boundingTop: "25%",
      boundingLeft: "35%",
    },
  },
  {
    id: "cam-2",
    name: "CAM 02 - Retail Parking North",
    location: "Vehicular Perimeter & Gate",
    status: "Normal",
    riskLevel: "Low",
    videoOverlay: {
      threatType: "Vehicle Scanning",
      confidence: 88.4,
      boundingTop: "40%",
      boundingLeft: "55%",
    },
  },
  {
    id: "cam-3",
    name: "CAM 03 - Warehouse Loading Dock",
    location: "Back Alley Access",
    status: "Verified & Dispatched",
    riskLevel: "High",
    videoOverlay: {
      threatType: "Unauthorized Fence Crossing",
      confidence: 99.8,
      boundingTop: "20%",
      boundingLeft: "20%",
    },
  },
];

export default function LiveSimulator() {
  const [selectedCam, setSelectedCam] = useState<CameraFeed>(CAMERAS[0]);
  const [simulatingStep, setSimulatingStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [eventLogs, setEventLogs] = useState([
    {
      time: "02:14:02 AM",
      type: "AI Detection",
      desc: "Motion & suspicious loitering flagged at CAM 01 Courtyard.",
      badgeColor: "bg-[#fecf31]/20 text-[#1d2c48] border-[#fecf31]",
    },
    {
      time: "02:14:05 AM",
      type: "Human Review",
      desc: "SGSS Operator #204 opens live stream & confirms active loitering.",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-400/40",
    },
    {
      time: "02:14:11 AM",
      type: "Intervention",
      desc: "Live audio warning broadcasted: 'Property is monitored by SGSS.'",
      badgeColor: "bg-[#fecf31] text-[#1d2c48] border-[#fecf31]",
    },
    {
      time: "02:14:20 AM",
      type: "Patrol Dispatch",
      desc: "Mobile Unit #07 dispatched to verify site evacuation.",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    },
  ]);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatingStep(1);

    setTimeout(() => setSimulatingStep(2), 1200);
    setTimeout(() => setSimulatingStep(3), 2800);
    setTimeout(() => {
      setSimulatingStep(4);
      setIsSimulating(false);
      const newLog = {
        time: new Date().toLocaleTimeString(),
        type: "Live Simulation Trigger",
        desc: `Threat verified on ${selectedCam.name}. Mobile patrol dispatched in < 25s.`,
        badgeColor: "bg-[#fecf31] text-[#1d2c48] font-bold border-[#fecf31]",
      };
      setEventLogs((prev) => [newLog, ...prev.slice(0, 5)]);
    }, 4500);
  };

  return (
    <section id="live-demo" className="py-20 bg-[#f8f9fc]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d2c48]/10 text-[#1d2c48] text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-[#1d2c48] animate-pulse" />
            <span>Interactive Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d2c48] tracking-tight">
            See Active Video Monitoring in Action
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Experience how our intelligent AI layer and 24/7 expert command center interact with your property camera feeds to neutralize threats in under 30 seconds.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="bg-[#1d2c48] text-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-[#1d2c48]/20">
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fecf31] flex items-center justify-center text-[#1d2c48] font-bold shadow-md">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">SGSS Command Center Console</h3>
                <p className="text-xs text-gray-300">Active Camera Feed & Real-Time Incident Simulator</p>
              </div>
            </div>

            {/* Camera Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {CAMERAS.map((cam) => (
                <button
                  key={cam.id}
                  onClick={() => {
                    setSelectedCam(cam);
                    setSimulatingStep(1);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                    selectedCam.id === cam.id
                      ? "bg-[#fecf31] text-[#1d2c48] shadow-md font-bold"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cam.status === "Normal"
                        ? "bg-emerald-400"
                        : "bg-amber-400 animate-ping"
                    }`}
                  />
                  <span>{cam.name.split("-")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Console Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Left Feed Screen (8 cols) */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              {/* Simulated Camera Stream Container */}
              <div className="relative h-72 sm:h-96 rounded-2xl bg-slate-950 overflow-hidden border border-white/15 shadow-inner flex flex-col justify-between p-4 group">
                {/* Simulated Camera Background Grid */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-slate-900 to-black/80">
                  <div className="w-full h-full opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                {/* Top Video Overlay Stats */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/70 text-gray-200 text-xs font-mono border border-white/10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {selectedCam.name}
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-white/10 text-gray-300 text-xs font-mono">
                      {selectedCam.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#fecf31] text-[#1d2c48] text-xs font-bold uppercase tracking-wider">
                      SGSS LIVE AI OVERSIGHT
                    </span>
                  </div>
                </div>

                {/* Dynamic AI Detection Box Overlay */}
                <div
                  className={`absolute z-10 border-2 rounded-xl p-2.5 transition-all duration-500 backdrop-blur-xs flex flex-col justify-between ${
                    simulatingStep >= 2
                      ? "border-red-500 bg-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                      : "border-[#fecf31] bg-[#fecf31]/15 shadow-[0_0_20px_rgba(254,207,49,0.3)]"
                  }`}
                  style={{
                    top: selectedCam.videoOverlay.boundingTop,
                    left: selectedCam.videoOverlay.boundingLeft,
                    width: "220px",
                    height: "140px",
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/80 text-[#fecf31]">
                    <span>TARGET ID: #904</span>
                    <span>{selectedCam.videoOverlay.confidence}%</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-white uppercase tracking-tight flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#fecf31]" />
                      {selectedCam.videoOverlay.threatType}
                    </div>
                    <div className="text-[10px] text-gray-200 font-mono">
                      {simulatingStep === 1 && "Step 1: AI Motion Detection..."}
                      {simulatingStep === 2 && "Step 2: Human Operator Verifying..."}
                      {simulatingStep === 3 && "Step 3: Live Audio Warning Active!"}
                      {simulatingStep === 4 && "Step 4: Dispatch Unit En Route!"}
                    </div>
                  </div>

                  <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        simulatingStep >= 3 ? "bg-red-500" : "bg-[#fecf31]"
                      }`}
                      style={{ width: `${simulatingStep * 25}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Console Overlay Notification */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#1d2c48]/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        simulatingStep === 4
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-[#fecf31]/20 text-[#fecf31]"
                      }`}
                    >
                      {simulatingStep === 4 ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <ShieldAlert className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {simulatingStep === 1 && "1. Instant AI Detection (0s)"}
                        {simulatingStep === 2 && "2. Human Verification (3s)"}
                        {simulatingStep === 3 && "3. Voice Intervention (8s)"}
                        {simulatingStep === 4 && "4. Emergency Response (18s)"}
                      </div>
                      <div className="text-[11px] text-gray-300">
                        {simulatingStep === 1 && "Algorithm identifies suspicious loitering patterns."}
                        {simulatingStep === 2 && "Trained operator filters false alarms and confirms threat."}
                        {simulatingStep === 3 && "Two-way audio deters intruders before damage occurs."}
                        {simulatingStep === 4 && "Local authorities and SGSS patrol notified."}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                      isSimulating
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-[#fecf31] text-[#1d2c48] hover:bg-[#e8bb1e] shadow-md"
                    }`}
                  >
                    {isSimulating ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-2 border-[#1d2c48] border-t-transparent animate-spin" />
                        <span>Simulating...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-[#1d2c48]" />
                        <span>Simulate Threat Event</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Live Incident Feed & Audit Logs (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#131e33] p-5 rounded-2xl border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#fecf31]" />
                    Live Activity Stream
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    REAL-TIME
                  </span>
                </div>

                {/* Log Feed Items */}
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {eventLogs.map((log, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs transition-all hover:bg-white/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-gray-400">
                          {log.time}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold border ${log.badgeColor}`}
                        >
                          {log.type}
                        </span>
                      </div>
                      <p className="text-gray-200 text-xs leading-snug">
                        {log.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Feature Summary Card */}
              <div className="mt-6 pt-4 border-t border-white/10 bg-[#1d2c48] p-3.5 rounded-xl border border-[#fecf31]/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#fecf31] text-[#1d2c48]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Human + AI Synergy</div>
                    <div className="text-[11px] text-gray-300">
                      Zero false police dispatches. 100% verified security incidents.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
