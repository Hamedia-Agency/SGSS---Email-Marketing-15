"use client";

import React, { useState, useEffect } from "react";
import { Shield, PhoneCall, Menu, X, ArrowRight, Video } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1d2c48]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-[#1d2c48] py-4 border-b border-white/10"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-lg bg-[#fecf31] flex items-center justify-center text-[#1d2c48] font-bold shadow-md group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 fill-[#1d2c48]/20 stroke-[#1d2c48] stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-lg tracking-tight flex items-center gap-1.5 leading-none">
              SECURE GUARD
              <span className="text-[#fecf31] font-semibold text-xs px-1.5 py-0.5 rounded bg-[#fecf31]/15 border border-[#fecf31]/30">
                SGSS
              </span>
            </span>
            <span className="text-gray-300 text-xs tracking-wider uppercase font-medium mt-1">
              Active Video Monitoring
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          <a
            href="#how-it-works"
            className="hover:text-[#fecf31] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#live-demo"
            className="hover:text-[#fecf31] transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Simulator
          </a>
          <a
            href="#business-benefits"
            className="hover:text-[#fecf31] transition-colors"
          >
            Business Benefits
          </a>
          <a
            href="#comparison"
            className="hover:text-[#fecf31] transition-colors"
          >
            Active vs Passive
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:18005557477"
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-white/5"
          >
            <PhoneCall className="w-4 h-4 text-[#fecf31]" />
            <span>1-800-SGSS-PRO</span>
          </a>
          <button
            onClick={onOpenModal}
            className="btn-primary text-xs font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 group"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1d2c48] border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-200">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fecf31] py-1 border-b border-white/5"
            >
              How It Works
            </a>
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fecf31] py-1 border-b border-white/5 flex items-center justify-between"
            >
              <span>Live Simulator</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                LIVE DEMO
              </span>
            </a>
            <a
              href="#business-benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fecf31] py-1 border-b border-white/5"
            >
              Business Benefits
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#fecf31] py-1 border-b border-white/5"
            >
              Active vs Passive
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:18005557477"
              className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-lg text-sm text-gray-200 font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-[#fecf31]" />
              <span>Call 1-800-SGSS-PRO</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="btn-primary w-full py-3.5 text-sm justify-center"
            >
              <span>Book Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
