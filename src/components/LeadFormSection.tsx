'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  Shield
} from 'lucide-react';

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Commercial Property',
    operatingHours: '24/7 Operations',
    location: '',
    concerns: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="assessment-form" style={{
      backgroundColor: '#ffffff',
      padding: '96px 0',
      borderBottom: '1px solid #e2e5ec'
    }}>
      <div className="container">
        
        <div style={{
          backgroundColor: '#1d2c48',
          borderRadius: '32px',
          padding: '56px 40px',
          color: '#ffffff',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background graphics */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(254, 207, 49, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            position: 'relative',
            zIndex: 1
          }}>
            
            {/* Left Content Column */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(254, 207, 49, 0.15)',
                border: '1px solid #fecf31',
                borderRadius: '20px',
                padding: '6px 16px',
                marginBottom: '20px'
              }}>
                <Shield size={16} color="#fecf31" />
                <span style={{ color: '#fecf31', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Free Security Assessment
                </span>
              </div>

              <h2 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '20px', lineHeight: 1.15 }}>
                Let&apos;s Build the <span className="gold-highlight">Right Security Plan</span>
              </h2>

              <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Your property does not need a generic package. It needs a plan based on how people enter, where valuable assets are located, when risk is highest, and how quickly someone must respond when an issue occurs.
              </p>

              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Complete the short form and tell us about your property. A member of our team will contact you to discuss your concerns and recommend the most practical next step.
              </p>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <h4 style={{ color: '#fecf31', fontSize: '1.05rem', marginBottom: '12px' }}>
                  The SGSS Assessment Guarantee
                </h4>
                <ul style={{ paddingLeft: '20px', margin: 0, color: 'rgba(255, 255, 255, 0.9)', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem' }}>
                  <li>No obligation &amp; no long-term commitment pressure</li>
                  <li>No unnecessary or inflated services</li>
                  <li>Clear, written recommendation built for your budget</li>
                  <li>Direct communication with SoCal security leadership</li>
                </ul>
              </div>
            </div>

            {/* Right Form Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px',
              color: '#2a2829',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#1d2c48',
                    color: '#fecf31',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: '#1d2c48', marginBottom: '12px' }}>
                    Assessment Request Submitted!
                  </h3>

                  <p style={{ color: '#2a2829', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our Southern California security operations team has received your details for <strong>{formData.propertyType}</strong>.
                  </p>

                  <div style={{
                    backgroundColor: '#f8f9fc',
                    border: '1px solid #e2e5ec',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'left',
                    fontSize: '0.9rem',
                    marginBottom: '24px'
                  }}>
                    <div style={{ fontWeight: 700, color: '#1d2c48', marginBottom: '4px' }}>Next Action Item:</div>
                    <p style={{ margin: 0, color: '#2a2829' }}>
                      A local SGSS security specialist will call or email you within 1 business day to schedule your zero-obligation consultation.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                    style={{ width: '100%' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  
                  <h3 style={{ fontSize: '1.4rem', color: '#1d2c48', marginBottom: '4px' }}>
                    Get Your Free Security Assessment
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#929292', marginBottom: '12px' }}>
                    Fill in your details for a tailored recommendation.
                  </p>

                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <User size={15} /> Your Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid #c4c4c4',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                        <Phone size={15} /> Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid #c4c4c4',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                        <Mail size={15} /> Work Email *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@property.com"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid #c4c4c4',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <Building2 size={15} /> Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
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
                      <option value="Commercial Property">Commercial Office Building</option>
                      <option value="Warehouse / Logistics">Warehouse & Logistics Center</option>
                      <option value="Residential Community">Residential Community / HOA</option>
                      <option value="Construction Site">Active Construction Site</option>
                      <option value="Retail Location">Retail Plaza / Center</option>
                      <option value="Industrial / Facility">Industrial / Utility Facility</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <MapPin size={15} /> Property Location / City in SoCal
                    </label>
                    <input 
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Irvine, CA or Inland Empire"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid #c4c4c4',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <MessageSquare size={15} /> Tell us about your main security concern
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                      placeholder="After-hours trespass, unverified cameras, gate control, vehicle break-ins..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid #c4c4c4',
                        fontSize: '0.92rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '6px' }}
                  >
                    Build My Security Plan <ArrowRight size={20} />
                  </button>

                  <p style={{ fontSize: '0.82rem', color: '#929292', textAlign: 'center', margin: 0 }}>
                    No obligation. No unnecessary services. Just a clear recommendation based on your property&apos;s actual security needs.
                  </p>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
