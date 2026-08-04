'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  Radio, 
  MapPin, 
  Camera, 
  FileCheck2, 
  Shield, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  AlertCircle,
  Smartphone,
  ArrowRight
} from 'lucide-react';

export default function SecureTrackSimulator() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState<'gps' | 'photos' | 'postorders' | 'dispatch'>('gps');

  return (
    <section id="securetrack" style={{
      backgroundColor: '#1d2c48',
      color: '#ffffff',
      padding: '96px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '350px',
        height: '350px',
        backgroundColor: 'rgba(254, 207, 49, 0.05)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 52px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(254, 207, 49, 0.15)',
            border: '1px solid #fecf31',
            borderRadius: '20px',
            padding: '6px 16px',
            marginBottom: '16px'
          }}>
            <Smartphone size={16} color="#fecf31" />
            <span style={{ color: '#fecf31', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Real-Time Verification & Supervision
            </span>
          </div>

          <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 2.9rem)', marginBottom: '18px' }}>
            How Secure Guard Supports Your Security Program
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: 1.65 }}>
            Secure Guard places an operating structure behind every assignment. Officers receive site-specific preparation and clear Post Orders. Dispatch helps monitor attendance, while SecureTrack™ provides documented patrol activity, incident reports, photos, and real-time site updates.
          </p>
        </div>

        {/* Interactive Simulator Shell */}
        <div style={{
          backgroundColor: '#131e33',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden'
        }}>
          
          {/* Dashboard Header Bar */}
          <div style={{
            backgroundColor: '#0d1524',
            padding: '20px 28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fecf31' }} />
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                SecureTrack™ Client Audit Dashboard
              </span>
              <span style={{
                backgroundColor: 'rgba(74, 222, 128, 0.15)',
                color: '#4ade80',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '12px',
                border: '1px solid rgba(74, 222, 128, 0.3)'
              }}>
                ● Live GPS Active
              </span>
            </div>

            {/* Tab Selector Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'gps', label: 'GPS Patrol Tour', icon: <MapPin size={15} /> },
                { id: 'photos', label: 'Photo Incident Log', icon: <Camera size={15} /> },
                { id: 'postorders', label: 'Post Orders Checklist', icon: <FileCheck2 size={15} /> },
                { id: 'dispatch', label: '24/7 Dispatch Feed', icon: <Radio size={15} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: 'none',
                    backgroundColor: activeTab === tab.id ? '#fecf31' : 'rgba(255, 255, 255, 0.08)',
                    color: activeTab === tab.id ? '#1d2c48' : '#ffffff',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Screen Display Area */}
          <div style={{ padding: '32px' }}>

            {/* TAB 1: GPS Patrol */}
            {activeTab === 'gps' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <div style={{ color: '#fecf31', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Active Patrol Checkpoints
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '16px' }}>
                    North Gate & Loading Dock Perimeter
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#ffffff' }}>Check-in #1: Main Entrance Gate</span>
                      <span style={{ color: '#4ade80', fontSize: '0.82rem', fontWeight: 700 }}>✓ Verified 03:14 AM</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#ffffff' }}>Check-in #2: South Warehouse Vault</span>
                      <span style={{ color: '#4ade80', fontSize: '0.82rem', fontWeight: 700 }}>✓ Verified 03:28 AM</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#ffffff' }}>Check-in #3: Trailer Staging Lot</span>
                      <span style={{ color: '#4ade80', fontSize: '0.82rem', fontWeight: 700 }}>✓ Verified 03:42 AM</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'rgba(254, 207, 49, 0.1)', borderRadius: '8px', border: '1px solid rgba(254, 207, 49, 0.3)' }}>
                      <span style={{ fontSize: '0.9rem', color: '#fecf31', fontWeight: 700 }}>Check-in #4: West Security Fence</span>
                      <span style={{ color: '#fecf31', fontSize: '0.82rem', fontWeight: 700 }}>● In Progress 03:55 AM</span>
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#1d2c48',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fecf31', marginBottom: '12px' }}>
                      <UserCheck size={20} />
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Supervisor Verification</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
                      "SecureTrack ensures guard patrol accountability through geo-fenced NFC tag scans. Property managers receive automated shift summaries showing exact patrol paths and timestamped checkpoint verifications."
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px', fontSize: '0.85rem', color: '#929292' }}>
                    Officer ID: #SG-4092 (Armed & Guard-Card Verified)
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Photo Evidence */}
            {activeTab === 'photos' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {[
                  {
                    time: '02:45 AM - Gate Lock Inspection',
                    desc: 'Rear delivery gate secured & padlocked per Post Order #4.',
                    tag: 'Photo Evidence Attached'
                  },
                  {
                    time: '03:10 AM - Vehicle License Log',
                    desc: 'Unrecognized contractor vehicle logged at Visitor Gate 2.',
                    tag: 'Plate Image Logged'
                  },
                  {
                    time: '04:02 AM - Light Fixture Warning',
                    desc: 'Bulb out near East Stairwell. Maintenance ticket generated.',
                    tag: 'Maintenance Notice'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '20px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.8rem', color: '#fecf31', fontWeight: 700 }}>{item.time}</span>
                      <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(254, 207, 49, 0.15)', color: '#fecf31', padding: '2px 8px', borderRadius: '4px' }}>
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.92rem', color: '#ffffff', marginBottom: '12px' }}>{item.desc}</p>
                    <div style={{
                      height: '80px',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '8px',
                      border: '1px dashed rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '0.82rem',
                      gap: '6px'
                    }}>
                      <Camera size={16} /> [ High-Res SecureTrack Photo Upload ]
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: Post Orders */}
            {activeTab === 'postorders' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '4px' }}>
                  Site-Specific Post Orders Mandatory Shift Compliance Checklist:
                </div>
                {[
                  { duty: 'Conduct foot patrol of all exterior perimeter fences every 45 minutes', status: 'Completed', time: 'Every 45 mins' },
                  { duty: 'Verify all overhead bay doors are closed and locked after 10:00 PM', status: 'Completed', time: '10:00 PM' },
                  { duty: 'Check HVAC and utility room access doors for forced entry signs', status: 'Completed', time: '01:30 AM' },
                  { duty: 'Log all overnight delivery drivers and cross-reference bill of lading', status: 'Active Duty', time: 'Continuous' },
                  { duty: 'Perform keycard audit on executive wing doors', status: 'Scheduled', time: '05:00 AM' }
                ].map((order, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={18} color="#4ade80" />
                      <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500 }}>{order.duty}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '0.82rem', color: '#929292' }}>{order.time}</span>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: order.status === 'Completed' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(254, 207, 49, 0.15)',
                        color: order.status === 'Completed' ? '#4ade80' : '#fecf31'
                      }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: Dispatch Feed */}
            {activeTab === 'dispatch' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { time: '03:52:10 AM', event: 'Dispatch System', msg: 'Supervisor completed random field inspection. Guard in full uniform, attentive, and on duty.' },
                  { time: '03:22:04 AM', event: 'Active Camera Alert', msg: 'Motion detected at West Fence line. Dispatch operator reviewed video—verified local wildlife, no threat.' },
                  { time: '02:00:00 AM', event: 'Guard Check-in', msg: 'Officer hourly dispatch ping acknowledged via mobile terminal. All quiet.' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    padding: '16px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '10px',
                    borderLeft: '4px solid #fecf31'
                  }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ color: '#fecf31', fontWeight: 800, fontSize: '0.82rem', fontFamily: 'monospace' }}>{item.time}</span>
                      <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>[{item.event}]</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '0.92rem', margin: 0 }}>
                      {item.msg}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer Callout */}
          <div style={{
            backgroundColor: '#1d2c48',
            padding: '24px 32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                This gives you more than a guard or a camera system.
              </div>
              <div style={{ fontSize: '0.88rem', color: '#929292' }}>
                It gives you a coordinated security program that can be monitored, verified, and adjusted.
              </div>
            </div>
            <button
              onClick={() => openModal()}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              Get SecureTrack™ on Your Site <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
