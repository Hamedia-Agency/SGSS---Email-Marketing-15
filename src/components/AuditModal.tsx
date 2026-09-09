"use client";

import React, { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building, Phone, Mail, User } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    propertyName: "",
    email: "",
    phone: "",
    propertyType: "commercial",
    existingCameras: "yes",
    notes: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-[#c4c4c4]/40 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Modal Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1d2c48] flex items-center justify-center transition-colors z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d2c48]">
              Audit Request Received!
            </h3>

            <p className="text-base text-[#2a2829]/80 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1d2c48]">{formData.fullName || "Valued Client"}</strong>. A Secure Guard security specialist will review your property profile and call you within 15 minutes.
            </p>

            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#c4c4c4]/30 text-left text-xs font-mono text-[#1d2c48] space-y-1">
              <div><strong>Property:</strong> {formData.propertyName || "Site Audit"}</div>
              <div><strong>Contact Email:</strong> {formData.email}</div>
              <div><strong>Priority Status:</strong> Expedited Verification</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-gold w-full py-3.5 text-sm font-bold"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Audit Form Screen */
          <div>
            {/* Modal Header */}
            <div className="bg-[#1d2c48] text-white p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#fecf31]/20 text-[#fecf31] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Free Hybrid Security Audit
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Request Your Security Risk Audit
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Fill out the details below to receive a custom security evaluation and site plan.
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                  Business / Property Name
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                    placeholder="Acme Commercial Complex"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all bg-white"
                  >
                    <option value="commercial">Commercial Building</option>
                    <option value="industrial">Industrial / Warehouse</option>
                    <option value="construction">Construction Site</option>
                    <option value="retail">Retail Shopping Center</option>
                    <option value="residential">Residential HOA / Estate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                    Existing Cameras?
                  </label>
                  <select
                    value={formData.existingCameras}
                    onChange={(e) => setFormData({ ...formData, existingCameras: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all bg-white"
                  >
                    <option value="yes">Yes, have existing cameras</option>
                    <option value="no">No, need full system installation</option>
                    <option value="upgrade">Looking to upgrade existing security</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1d2c48] uppercase tracking-wider mb-1.5">
                  Specific Concerns / Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe your property layout or security concerns..."
                  className="w-full p-3 rounded-xl border border-[#c4c4c4] text-sm focus:border-[#fecf31] focus:ring-2 focus:ring-[#fecf31]/40 outline-none transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full py-4 text-base font-bold shadow-lg mt-2">
                <span>Submit Security Audit Request</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-[11px] text-[#929292] text-center">
                Your details are kept 100% confidential. No spam policy.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
