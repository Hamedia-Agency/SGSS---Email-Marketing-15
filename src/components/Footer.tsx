'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { Shield, ArrowUp, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { openModal } = useModal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 20; // Radius 20 for SVG progress ring
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer style={{ backgroundColor: '#131e33', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative' }}>
      
      {/* Pre-footer CTA Banner */}
      <div style={{
        backgroundColor: '#1d2c48',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '60px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '10px' }}>
              Ready to Eliminate Security Gaps on Your Property?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', margin: 0 }}>
              Get a clear recommendation tailored to your risks, hours, and budget. No obligation.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => openModal()}
              className="btn-primary"
              style={{ padding: '16px 32px', fontSize: '1.05rem' }}
            >
              Get Free Security Assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ padding: '72px 0 48px' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px'
        }}>
          
          {/* Brand Info */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#fecf31',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1d2c48'
              }}>
                <Shield size={24} strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.15rem' }}>SECURE GUARD</div>
                <div style={{ color: '#fecf31', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Security Services</div>
              </div>
            </a>
            <p style={{ color: '#929292', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Providing tailored risk assessments, site-specific post orders, trained officers, dispatch support, and SecureTrack™ verification throughout Southern California.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#fecf31', fontWeight: 600 }}>
              Licensed & Insured Security Operations
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Overview & Advantage', href: '#overview' },
                { label: 'What We Review', href: '#what-we-review' },
                { label: 'SecureTrack™ GPS Simulator', href: '#securetrack' },
                { label: 'Consultation Gains', href: '#gains' },
                { label: 'SoCal Coverage', href: '#coverage' },
                { label: 'Free Assessment Form', href: '#assessment-form' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    style={{
                      color: '#929292',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fecf31')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#929292')}
                  >
                    <ChevronRight size={14} color="#fecf31" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Service Regions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: '#929292' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} color="#fecf31" /> Los Angeles Metro Area</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} color="#fecf31" /> Orange County</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} color="#fecf31" /> Inland Empire (Riverside & San Bernardino)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} color="#fecf31" /> San Diego County</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} color="#fecf31" /> Ventura County</li>
            </ul>
          </div>

          {/* Operations Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '20px', letterSpacing: '0.02em' }}>
              Operations & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: '#929292' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '8px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fecf31' }}>
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#929292' }}>24/7 Live Dispatch</div>
                  <a href="tel:18005080128" style={{ color: '#ffffff', fontWeight: 700 }}>(800) 508-0128</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ padding: '8px', borderRadius: '6px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fecf31' }}>
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#929292' }}>Consultation Inquiries</div>
                  <a href="mailto:info@secureguard.com" style={{ color: '#ffffff', fontWeight: 600 }}>info@secureguard.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '24px 0',
        fontSize: '0.85rem',
        color: '#929292'
      }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div>
            © {new Date().getFullYear()} Secure Guard Security Services (SGSS). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#929292', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#929292', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#929292', textDecoration: 'none' }}>Post Orders & Compliance</a>
          </div>
        </div>
      </div>

      {/* Floating Back-To-Top Button with Circular Progress Indicator */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: '#1d2c48',
            color: '#fecf31',
            border: 'none',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 800,
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {/* Progress Ring */}
          <svg width="52" height="52" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
            <circle
              cx="26"
              cy="26"
              r="20"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="26"
              cy="26"
              r="20"
              stroke="#fecf31"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>
          <ArrowUp size={22} strokeWidth={2.5} />
        </button>
      )}

    </footer>
  );
}
