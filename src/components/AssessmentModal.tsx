"use client";

import React, { useState } from "react";
import { X, Shield, ArrowRight, CheckCircle2, Video, Building, Mail, Phone, User } from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    propertyName: "",
    email: "",
    phone: "",
    propertyType: "Commercial",
    cameraCount: "6-15",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#1d2c48] text-white rounded-3xl shadow-2xl border border-[#fecf31]/30 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#263659] border-b border-white/10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fecf31] text-[#1d2c48] text-xs font-black uppercase">
            <Shield className="w-3.5 h-3.5 fill-[#1d2c48]" />
            <span>SGSS Property Assessment</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">
            See How Active Monitoring Works at Your Property
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm">
            Get a tailored 15-minute live camera compatibility audit & proactive security proposal.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Assessment Scheduled!</h4>
                <p className="text-gray-300 text-sm max-w-xs mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName || "Partner"}</strong>. An SGSS Active Monitoring Specialist will contact you within 2 business hours.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs space-y-1.5 text-gray-300">
                <div><strong>Property:</strong> {formData.propertyName || "Not specified"}</div>
                <div><strong>Property Type:</strong> {formData.propertyType}</div>
                <div><strong>Estimated Cameras:</strong> {formData.cameraCount}</div>
              </div>
              <button
                onClick={handleReset}
                className="btn-primary w-full py-3.5 text-sm font-bold rounded-xl"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Property Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fecf31] focus:ring-1 focus:ring-[#fecf31]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Business / Property Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      placeholder="Metro Plaza Center"
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fecf31] focus:ring-1 focus:ring-[#fecf31]"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fecf31] focus:ring-1 focus:ring-[#fecf31]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#fecf31] focus:ring-1 focus:ring-[#fecf31]"
                    />
                  </div>
                </div>
              </div>

              {/* Property Type & Camera Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#1d2c48] border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#fecf31]"
                  >
                    <option value="Retail Center">Retail Plaza / Mall</option>
                    <option value="Commercial Office">Commercial Office Park</option>
                    <option value="Warehouse / Industrial">Warehouse / Industrial</option>
                    <option value="Multi-Family HOA">Multi-Family / HOA</option>
                    <option value="Construction Site">Construction Site</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Existing Camera Count
                  </label>
                  <select
                    value={formData.cameraCount}
                    onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#1d2c48] border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-[#fecf31]"
                  >
                    <option value="1-5">1 - 5 Cameras</option>
                    <option value="6-15">6 - 15 Cameras</option>
                    <option value="16-30">16 - 30 Cameras</option>
                    <option value="30+">30+ Cameras (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary w-full py-4 text-sm font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-xl mt-4"
              >
                <span>Request Custom Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                🔒 Your info is 100% confidential. Zero hardware replacement required.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
