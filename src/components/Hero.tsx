'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { Shield, ArrowRight, CheckCircle, Eye, MapPin, Radio, FileCheck, Layers } from 'lucide-react';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section id="overview" style={{
      backgroundColor: '#1d2c48',
      backgroundImage: `radial-gradient(circle at 80% 20%, rgba(254, 207, 49, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 10% 80%, rgba(38, 54, 89, 0.7) 0%, transparent 50%)`,
      color: '#ffffff',
      padding: '72px 0 80px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      {/* Decorative Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Main Hero Copy */}
          <div style={{ maxWidth: '780px' }}>
            
            {/* Pulsing Status Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(254, 207, 49, 0.3)',
              borderRadius: '30px',
              padding: '8px 18px',
              marginBottom: '28px',
              backdropFilter: 'blur(4px)'
            }}>
              <span className="pulse-dot-active" />
              <span style={{
                color: '#fecf31',
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                The Secure Guard Advantage
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              color: '#ffffff',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-0.025em'
            }}>
              What Does Your Property <span className="gold-highlight">Actually Need?</span>
            </h1>

            {/* Value Proposition Subtitle */}
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              marginBottom: '32px',
              fontWeight: 400
            }}>
              Get a clear security recommendation based on your risks, operating hours, property layout, and budget. You do not need to know the answer before contacting Secure Guard Security Services. Our team reviews how your property operates and recommends a practical security plan built around your actual concerns.
            </p>

            {/* Questions Teaser Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px',
              marginBottom: '36px'
            }}>
              {[
                'Do you need an officer on-site at all times?',
                'Would mobile patrol provide enough coverage?',
                'Could active video monitoring protect after hours?',
                'Are your current procedures leaving gaps you cannot see?'
              ].map((q, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <CheckCircle size={18} color="#fecf31" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.92)', fontWeight: 500 }}>
                    {q}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <button
                onClick={() => openModal()}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1.1rem' }}
              >
                Get My Free Security Assessment <ArrowRight size={20} />
              </button>

              <a
                href="#what-we-review"
                className="btn-outline"
                style={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  padding: '16px 28px',
                  fontSize: '1.05rem'
                }}
              >
                See What We Review
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(254, 207, 49, 0.15)', color: '#fecf31' }}>
              <Radio size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>24/7 Operations</div>
              <div style={{ fontSize: '0.85rem', color: '#929292' }}>Live SoCal Dispatch Center</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(254, 207, 49, 0.15)', color: '#fecf31' }}>
              <FileCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>SecureTrack™ GPS</div>
              <div style={{ fontSize: '0.85rem', color: '#929292' }}>Documented Patrol Reports</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(254, 207, 49, 0.15)', color: '#fecf31' }}>
              <Eye size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Active Video Audit</div>
              <div style={{ fontSize: '0.85rem', color: '#929292' }}>Human Verified Alerts</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(254, 207, 49, 0.15)', color: '#fecf31' }}>
              <MapPin size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>Southern California</div>
              <div style={{ fontSize: '0.85rem', color: '#929292' }}>LA, OC, IE & San Diego</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
