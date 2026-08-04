'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Sliders, Shield, ShieldAlert, CheckCircle2, ArrowRight, Zap, Camera, MapPin } from 'lucide-react';

export default function InteractiveAssessmentWidget() {
  const { openModal } = useModal();
  const [propertyType, setPropertyType] = useState('Commercial Property');
  const [hours, setHours] = useState('After-hours & Weekends');
  const [size, setSize] = useState('Medium (2-5 Acres / Multi-entry)');
  const [hasCameras, setHasCameras] = useState(true);

  // Dynamic calculations based on user input
  const getRecommendation = () => {
    if (propertyType === 'Warehouse / Logistics' || propertyType === 'Construction Site') {
      return {
        badge: 'High Perimeter & Asset Risk Zone',
        badgeColor: '#e63946',
        personnel: 'Dedicated Guard + Mobile Patrol Visits',
        tech: 'SecureTrack™ Real-Time GPS Patrols & Barrier Alerts',
        video: 'Active Video Verification + Alarm Dispatch Integration',
        fitScore: '98% Coverage Efficiency'
      };
    } else if (propertyType === 'Residential Community') {
      return {
        badge: 'Access Control & Visitor Audit Focus',
        badgeColor: '#1d2c48',
        personnel: 'Dedicated Gate Officer + Vehicle Patrol',
        tech: 'SecureTrack™ Resident & Visitor Access Logs',
        video: 'License Plate & Entrance Monitoring',
        fitScore: '95% Resident Satisfaction Fit'
      };
    } else if (hours === '24/7 Operations') {
      return {
        badge: 'Continuous 24/7 Security Coverage',
        badgeColor: '#1d2c48',
        personnel: 'Full-Time Shift Officers with Dispatch Support',
        tech: 'SecureTrack™ Hourly Duty & Post Order Audits',
        video: 'Perimeter Camera Motion Verification',
        fitScore: '99% Continuous Protection'
      };
    } else {
      return {
        badge: 'Optimized Hybrid Security Plan',
        badgeColor: '#1d2c48',
        personnel: 'Scheduled Mobile Patrol + Night Supervision',
        tech: 'SecureTrack™ Incident & Verification Logs',
        video: 'Remote Video Monitoring with Rapid Response',
        fitScore: '92% Cost-Efficient Security Fit'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section style={{
      backgroundColor: '#f8f9fc',
      padding: '80px 0',
      borderBottom: '1px solid #e2e5ec'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
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
            Interactive Risk Evaluator
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#1d2c48', marginBottom: '16px' }}>
            Instant Security Plan Simulator
          </h2>
          <p style={{ color: '#2a2829', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Select your property details below to see how SGSS coordinates personnel, technology, and supervision for your specific layout.
          </p>
        </div>

        {/* Simulator Main Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 10px 40px rgba(29, 44, 72, 0.08)',
          border: '1px solid #e2e5ec'
        }}>
          
          {/* Left Column: Interactive Inputs */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '2px solid #f0f2f6' }}>
              <Sliders size={22} color="#1d2c48" />
              <h3 style={{ fontSize: '1.25rem', color: '#1d2c48', margin: 0 }}>Configure Property Profile</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Property Type Selector */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', color: '#1d2c48', marginBottom: '8px' }}>
                  Property Type
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    'Commercial Property',
                    'Warehouse / Logistics',
                    'Residential Community',
                    'Construction Site',
                    'Retail Location',
                    'Industrial Facility'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        border: propertyType === type ? '2px solid #1d2c48' : '1px solid #c4c4c4',
                        backgroundColor: propertyType === type ? '#1d2c48' : '#ffffff',
                        color: propertyType === type ? '#ffffff' : '#2a2829',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', color: '#1d2c48', marginBottom: '8px' }}>
                  Critical Coverage Window
                </label>
                <select
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #c4c4c4',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="After-hours & Weekends">After-hours & Weekends Only</option>
                  <option value="24/7 Operations">24/7 Operations (Continuous Flow)</option>
                  <option value="Daytime Visitor Gate Control">Daytime Visitor Gate Control</option>
                  <option value="Night Patrols Only">Night Patrols Only (Unattended Premises)</option>
                </select>
              </div>

              {/* Property Footprint Size */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', color: '#1d2c48', marginBottom: '8px' }}>
                  Property Footprint & Entrances
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #c4c4c4',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="Single Building / Compact Site">Single Building / Compact Site (1 Access Gate)</option>
                  <option value="Medium (2-5 Acres / Multi-entry)">Medium Site (2-5 Acres / Multi-entry)</option>
                  <option value="Large Complex (5+ Acres / High Risk)">Large Complex (5+ Acres / High Risk Assets)</option>
                </select>
              </div>

              {/* Camera Presence Toggle */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.92rem', color: '#1d2c48', marginBottom: '8px' }}>
                  Existing CCTV Camera System?
                </label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setHasCameras(true)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: hasCameras ? '2px solid #1d2c48' : '1px solid #c4c4c4',
                      backgroundColor: hasCameras ? '#1d2c48' : '#ffffff',
                      color: hasCameras ? '#ffffff' : '#2a2829'
                    }}
                  >
                    Yes, Cameras Installed
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasCameras(false)}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: !hasCameras ? '2px solid #1d2c48' : '1px solid #c4c4c4',
                      backgroundColor: !hasCameras ? '#1d2c48' : '#ffffff',
                      color: !hasCameras ? '#ffffff' : '#2a2829'
                    }}
                  >
                    No Cameras / Gaps Present
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Live Recommendation Results Card */}
          <div style={{
            backgroundColor: '#1d2c48',
            borderRadius: '16px',
            padding: '28px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                  backgroundColor: 'rgba(254, 207, 49, 0.2)',
                  color: '#fecf31',
                  border: '1px solid #fecf31',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  {rec.badge}
                </span>
                <span style={{ color: '#fecf31', fontWeight: 800, fontSize: '0.9rem' }}>
                  {rec.fitScore}
                </span>
              </div>

              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '6px' }}>
                Recommended SGSS Security Framework
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Tailored for {propertyType} ({hours})
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(254, 207, 49, 0.15)', color: '#fecf31', padding: '8px', borderRadius: '8px' }}>
                    <Shield size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#fecf31', fontWeight: 700 }}>Personnel Strategy</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff' }}>{rec.personnel}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(254, 207, 49, 0.15)', color: '#fecf31', padding: '8px', borderRadius: '8px' }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#fecf31', fontWeight: 700 }}>Reporting & Dispatch</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff' }}>{rec.tech}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(254, 207, 49, 0.15)', color: '#fecf31', padding: '8px', borderRadius: '8px' }}>
                    <Camera size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#fecf31', fontWeight: 700 }}>Video & Verification</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff' }}>{rec.video}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => openModal(propertyType)}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                Lock In This Free Assessment <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
