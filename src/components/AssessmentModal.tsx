'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building2, Lock, Clock, MapPin, Phone, Mail, User } from 'lucide-react';

export default function AssessmentModal() {
  const { isModalOpen, closeModal, selectedPropertyType } = useModal();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    propertyType: selectedPropertyType || 'Commercial Property',
    operatingHours: '24/7 Operations',
    primaryConcern: 'After-hours intrusion & trespass',
    location: 'Los Angeles / SoCal',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isModalOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    closeModal();
  };

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '36px' }}
      >
        {/* Header bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#1d2c48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fecf31'
            }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#929292', fontWeight: 700 }}>
                Secure Guard Security Services
              </span>
              <h3 style={{ fontSize: '1.35rem', color: '#1d2c48', margin: 0 }}>
                Get Your Free Security Assessment
              </h3>
            </div>
          </div>
          <button 
            onClick={closeModal}
            aria-label="Close dialog"
            style={{
              background: '#f0f2f6',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1d2c48',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: '#1d2c48', marginBottom: '8px' }}>
              <span>Step {step} of 2: {step === 1 ? 'Property & Coverage Needs' : 'Contact & Assessment Details'}</span>
              <span>{step === 1 ? '50%' : '100%'}</span>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e5ec', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: step === 1 ? '50%' : '100%',
                height: '100%',
                backgroundColor: '#fecf31',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>
        )}

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(254, 207, 49, 0.2)',
              color: '#1d2c48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={44} color="#1d2c48" />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#1d2c48', marginBottom: '12px' }}>
              Assessment Request Received!
            </h3>
            <p style={{ color: '#2a2829', fontSize: '1.05rem', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              Thank you, <strong>{formData.name || 'valued property manager'}</strong>. A Secure Guard security specialist will review your property profile for <strong>{formData.propertyType}</strong> in <strong>{formData.location}</strong> and reach out shortly to discuss your custom security plan.
            </p>
            <div style={{
              background: '#f8f9fc',
              border: '1px solid #e2e5ec',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '28px',
              textAlign: 'left',
              fontSize: '0.92rem',
              color: '#2a2829'
            }}>
              <div style={{ fontWeight: 700, color: '#1d2c48', marginBottom: '6px' }}>What happens next?</div>
              <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Review of your property layout & operating hours</li>
                <li>Identification of risk gaps & officer vs. video patrol needs</li>
                <li>Zero-obligation tailored proposal with transparent pricing</li>
              </ul>
            </div>
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleResetAndClose}>
              Done &amp; Return to Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleNextStep}>
            {step === 1 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '8px' }}>
                    <Building2 size={16} /> What type of property do you manage?
                  </label>
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Commercial Property">Commercial Property / Office Building</option>
                    <option value="Warehouse / Logistics">Warehouse & Logistics Center</option>
                    <option value="Residential Community">Residential Community / HOA</option>
                    <option value="Construction Site">Active Construction Site</option>
                    <option value="Retail Location">Retail Plaza & Shopping Center</option>
                    <option value="Industrial / Utility Facility">Industrial / Utility Facility</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '8px' }}>
                    <Clock size={16} /> Operating Hours & High-Vulnerability Times
                  </label>
                  <select 
                    value={formData.operatingHours}
                    onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="24/7 Operations">24/7 Operations (Continuous Flow)</option>
                    <option value="Standard Business Hours">Standard Business Hours (Unattended Overnight)</option>
                    <option value="Night & Weekend Shift Focus">Night & Weekend Shift Focus</option>
                    <option value="Seasonal / Event Specific">Seasonal / Event Specific Coverage</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '8px' }}>
                    <Lock size={16} /> Primary Security Concern
                  </label>
                  <select 
                    value={formData.primaryConcern}
                    onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="After-hours intrusion & trespass">After-hours intrusion & trespass</option>
                    <option value="Unverified camera alerts & lack of guard presence">Unverified camera alerts & lack of guard presence</option>
                    <option value="Parking lot, vehicle break-ins & vandalism">Parking lot, vehicle break-ins & vandalism</option>
                    <option value="Access control & gate management gaps">Access control & gate management gaps</option>
                    <option value="Unsure if current service is actually working">Unsure if current service is actually working</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '8px' }}>
                    <MapPin size={16} /> Southern California City / Region
                  </label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Los Angeles, Orange County, Inland Empire, San Diego"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  Next Step: Contact Details <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '6px' }}>
                    <User size={16} /> Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <Phone size={16} /> Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #c4c4c4',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '6px' }}>
                      <Mail size={16} /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #c4c4c4',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1d2c48', marginBottom: '6px', display: 'block' }}>
                    Additional Site Details or Notes (Optional)
                  </label>
                  <textarea 
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about existing cameras, guard services, or specific access gates..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #c4c4c4',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <button 
                    type="button" 
                    className="btn-outline"
                    onClick={() => setStep(1)}
                    style={{ flex: 1 }}
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ flex: 2 }}
                  >
                    Build My Security Plan <ShieldCheck size={18} />
                  </button>
                </div>

                <p style={{ fontSize: '0.82rem', color: '#929292', textAlign: 'center', margin: 0 }}>
                  🔒 No obligation. No unnecessary services. Just a clear recommendation based on your property&apos;s actual security needs.
                </p>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
