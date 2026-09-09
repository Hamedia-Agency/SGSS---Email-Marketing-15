"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import LeadGenForm from "./LeadGenForm";

interface LeadGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function LeadGenModal({
  isOpen,
  onClose,
  title = "See How Active Video Monitoring Works at Your Property",
  subtitle = "Stop recording history after damage occurs. Fill out the details below to speak with an SGSS active video monitoring specialist.",
  buttonText = "Schedule Your Free Consultation",
}: LeadGenModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#1d2c48]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-[#fecf31] text-[#1d2c48] rounded-full flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <div className="p-2 sm:p-4">
          <LeadGenForm
            hideHeader={false}
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
}

export default LeadGenModal;
