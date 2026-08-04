'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  Clock, 
  DoorOpen, 
  Car, 
  Users, 
  AlertTriangle, 
  Lock, 
  Video, 
  BellRing, 
  ShieldCheck, 
  FileText, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AssessmentReviewSection() {
  const { openModal } = useModal();

  const reviewItems = [
    {
      icon: <Clock size={24} color="#1d2c48" />,
      title: 'Operating Hours & Vulnerable Windows',
      description: 'We evaluate when your property is unattended, shift changes, weekend risks, and hours when perimeter threats spike.'
    },
    {
      icon: <DoorOpen size={24} color="#1d2c48" />,
      title: 'Entrances & Access Control Gates',
      description: 'Reviewing vehicular and pedestrian access points, perimeter gates, keycard readers, and visitor check-in procedures.'
    },
    {
      icon: <Car size={24} color="#1d2c48" />,
      title: 'Parking Areas & Lot Coverage',
      description: 'Auditing lighting, isolated parking structures, vehicle break-in history, cargo staging areas, and trailer security.'
    },
    {
      icon: <Users size={24} color="#1d2c48" />,
      title: 'Visitor & Vehicle Traffic Activity',
      description: 'Analyzing high-density foot traffic, vendor deliveries, contractor logs, and resident vs. guest separation.'
    },
    {
      icon: <AlertTriangle size={24} color="#1d2c48" />,
      title: 'Previous Incidents & Trespass Gaps',
      description: 'Mapping out past incidents, recurring vandalism, unauthorized loitering, and documented security breaches.'
    },
    {
      icon: <Lock size={24} color="#1d2c48" />,
      title: 'Restricted Zones & High-Value Assets',
      description: 'Protecting server rooms, equipment yards, inventory vaults, management offices, and hazardous material areas.'
    },
    {
      icon: <Video size={24} color="#1d2c48" />,
      title: 'Existing Cameras & System Blindspots',
      description: 'Verifying camera field-of-view, night vision clarity, recording retention, and unmonitored blindspots.'
    },
    {
      icon: <BellRing size={24} color="#1d2c48" />,
      title: 'Alert Verification & Dispatch Response',
      description: 'Determining who receives emergency alerts, whether footage is human-verified before dispatch, and officer response speeds.'
    },
    {
      icon: <FileText size={24} color="#1d2c48" />,
      title: 'Documentation & Post Order Audits',
      description: 'Ensuring shift reports, officer guard tour logs, and incident photos provide clear, legally defendable accountability.'
    }
  ];

  return (
    <section id="what-we-review" style={{
      backgroundColor: '#ffffff',
      padding: '96px 0',
      borderBottom: '1px solid #e2e5ec'
    }}>
      <div className="container">
        
        {/* Top Feature Box: Stop Guessing */}
        <div style={{
          backgroundColor: '#1d2c48',
          borderRadius: '24px',
          padding: '44px',
          color: '#ffffff',
          marginBottom: '80px',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(254, 207, 49, 0.08)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '840px' }}>
            <span style={{
              color: '#fecf31',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '12px'
            }}>
              Zero Guesswork Security Management
            </span>
            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', marginBottom: '20px' }}>
              Stop Guessing About Your Security Coverage
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '28px' }}>
              Many property owners know they have a security concern but are not sure what type of service will solve it. Secure Guard helps you determine which services are necessary, how they should work together, and where you may be paying for coverage that does not address your most important risks.
            </p>

            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              Get My Free Security Assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Header for What We Review */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span style={{
            color: '#1d2c48',
            backgroundColor: '#f8f9fc',
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
            Comprehensive Site Inspection
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#1d2c48', marginBottom: '18px' }}>
            What We Review During Your Free Assessment
          </h2>
          <p style={{ color: '#2a2829', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Our consultation begins with a conversation about your property—not a generic sales presentation. We review how your property operates, identify where stronger protection may be needed, and evaluate whether existing systems are providing real protection or only the appearance of coverage.
          </p>
        </div>

        {/* 9 Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '64px'
        }}>
          {reviewItems.map((item, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px'
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#f8f9fc',
                  border: '1px solid #e2e5ec',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#1d2c48', marginBottom: '12px', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#2a2829', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Review Question Box */}
        <div style={{
          backgroundColor: '#f8f9fc',
          borderRadius: '20px',
          padding: '36px',
          border: '1px solid #e2e5ec',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ color: '#1d2c48', fontSize: '1.35rem', marginBottom: '10px' }}>
              We Also Review What Happens <span style={{ color: '#1d2c48', borderBottom: '3px solid #fecf31' }}>After</span> an Issue is Detected
            </h3>
            <p style={{ color: '#2a2829', fontSize: '0.98rem', margin: 0 }}>
              Who receives the alert? Is anyone verifying the activity? Can an officer or patrol unit respond? Are incidents documented clearly? Can management confirm required duties were completed?
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => openModal()}
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              Evaluate My Property's Coverage
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
