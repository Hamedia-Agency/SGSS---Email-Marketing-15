'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  Check, 
  ShieldAlert, 
  TrendingUp, 
  Eye, 
  Award, 
  FileCheck, 
  ArrowRight,
  DollarSign,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function PlanAndValueSection() {
  const { openModal } = useModal();

  const gainPoints = [
    {
      title: 'Vulnerability Analysis',
      desc: 'Clear insight into where your property layout, gates, or after-hours schedule may be vulnerable.'
    },
    {
      title: 'Risk vs. Coverage Alignment',
      desc: 'Unbiased verification of whether your current security setup actually matches your real risk profile.'
    },
    {
      title: 'Maximum Service Value',
      desc: 'Identification of which services (armed/unarmed, mobile patrol, gate control) provide the highest return.'
    },
    {
      title: 'Technology Integration Gaps',
      desc: 'Understanding where cameras, human video verification, and GPS tracking improve site visibility.'
    },
    {
      title: 'Supervision & Accountability',
      desc: 'How documented officer guard tours, dispatch pings, and supervisor spot-checks enforce standards.'
    },
    {
      title: 'Clear Action Plan',
      desc: 'A practical, staged roadmap for immediate implementation with zero pressure or hidden fees.'
    }
  ];

  return (
    <section id="gains" style={{
      backgroundColor: '#ffffff',
      padding: '96px 0',
      borderBottom: '1px solid #e2e5ec'
    }}>
      <div className="container">

        {/* Section 1: A Plan Built Around Your Risks and Budget */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '96px'
        }}>
          <div>
            <span style={{
              color: '#1d2c48',
              backgroundColor: '#fecf31',
              padding: '6px 14px',
              borderRadius: '20px',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '14px'
            }}>
              Tailored Risk & Budget Alignment
            </span>
            
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#1d2c48', marginBottom: '20px' }}>
              A Security Plan Built Around Your Risks and Budget
            </h2>

            <p style={{ color: '#2a2829', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '20px' }}>
              Once we understand the property, we can recommend the right balance of personnel, technology, supervision, and reporting.
            </p>

            <p style={{ color: '#2a2829', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '28px' }}>
              <strong>We do not believe every property needs the most expensive option.</strong> Our goal is to place the right level of coverage in the right areas during the hours when it will make the greatest difference.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Tailored Risk Assessments',
                'Site-Specific Procedures',
                'Trained Officers',
                '24/7 Dispatch Support',
                'Documented Supervision',
                'SecureTrack™ GPS Logs',
                'Active Video Verification',
                'Flexible Option Packages'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#1d2c48',
                    color: '#fecf31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1d2c48' }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              Build My Security Plan <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Visual Highlight Box */}
          <div style={{
            backgroundColor: '#f8f9fc',
            borderRadius: '24px',
            border: '1px solid #e2e5ec',
            padding: '40px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#1d2c48',
              color: '#fecf31',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <DollarSign size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#1d2c48', marginBottom: '14px' }}>
              Eliminate Unnecessary Security Spending
            </h3>
            <p style={{ color: '#2a2829', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Paying for unmonitored guard hours when active video patrol or scheduled vehicle visits are more effective wastes your operating budget. SGSS structures your program to deliver peak coverage where it counts.
            </p>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #c4c4c4'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1d2c48', fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px' }}>
                <Sparkles size={18} color="#fecf31" /> Transparent & Practical Recommendations
              </div>
              <p style={{ fontSize: '0.88rem', color: '#929292', margin: 0 }}>
                No mandatory long-term lock-in packages or unwanted services.
              </p>
            </div>
          </div>

        </div>

        {/* Section 2: What You Will Gain From the Consultation */}
        <div style={{
          backgroundColor: '#f8f9fc',
          borderRadius: '32px',
          padding: '56px 40px',
          border: '1px solid #e2e5ec'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
            <span style={{
              color: '#1d2c48',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e5ec',
              padding: '6px 16px',
              borderRadius: '20px',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '14px'
            }}>
              Consultation Deliverables
            </span>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#1d2c48', marginBottom: '16px' }}>
              What You Will Gain From the Consultation
            </h2>

            <p style={{ color: '#2a2829', fontSize: '1.05rem', lineHeight: 1.6 }}>
              After speaking with our team, you will have complete clarity on your property's security status. There is no obligation to move forward, and you will not be pressured into services your property does not need.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {gainPoints.map((gain, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid #e2e5ec',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#1d2c48',
                  color: '#fecf31',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 800,
                  fontSize: '0.95rem'
                }}>
                  {idx + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#1d2c48', marginBottom: '8px' }}>
                    {gain.title}
                  </h3>
                  <p style={{ color: '#2a2829', fontSize: '0.95rem', lineHeight: 1.55, margin: 0 }}>
                    {gain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Clarity Promise Banner */}
          <div style={{
            backgroundColor: '#1d2c48',
            borderRadius: '16px',
            padding: '24px 32px',
            color: '#ffffff',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ color: '#fecf31', fontSize: '1.15rem', marginBottom: '4px' }}>
                The Purpose of the Consultation is Clarity
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', margin: 0 }}>
                No obligation. No high-pressure sales pitch. Just a clear, professional security recommendation.
              </p>
            </div>

            <button
              onClick={() => openModal()}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              Claim My Free Consultation <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
