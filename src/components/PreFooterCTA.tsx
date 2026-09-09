'use client';

import React, { useState } from 'react';
import styles from './PreFooterCTA.module.css';

export const PreFooterCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (field: string, value: string, required: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      let isInvalid = false;
      if (required && !value.trim()) {
        isInvalid = true;
      } else if (field === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isInvalid = true;
        }
      }
      setErrors((prev) => ({ ...prev, [field]: isInvalid }));
    }
  };

  const handleInputBlur = (field: string, value: string, required: boolean) => {
    let isInvalid = false;
    if (required && !value.trim()) {
      isInvalid = true;
    } else if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isInvalid = true;
      }
    }
    setErrors((prev) => ({ ...prev, [field]: isInvalid }));
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    const requiredFields = ['name', 'email', 'phone', 'location', 'service'];
    requiredFields.forEach((field) => {
      const value = formData[field as keyof typeof formData];
      if (typeof value === 'string' && !value.trim()) {
        newErrors[field] = true;
        isValid = false;
      }
    });

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = true;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      setMessage('Please fill in all required fields correctly.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Secure Guard Active Supervision CTA Form',
        formType: 'Security Performance Review & Consultation',
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
      };

      const n8nWebhookUrl = 'https://n8n.srv906821.hstgr.cloud/webhook/94d912da-0449-4d6d-93f5-a808af031b4d';
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thank you! Your request has been submitted. We'll contact you shortly.");
        setTimeout(() => {
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            location: '',
            service: '',
            message: '',
          });
          setStatus('idle');
          setMessage('');
          setErrors({});
        }, 3000);
      } else {
        setStatus('error');
        setMessage('There was an error submitting your request. Please try again.');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setMessage('There was an error submitting the form. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="free-assessment" className={styles.eyjiCtaSection}>
      <div className={styles.eyjiCtaInner}>
        <div className={styles.eyjiCtaPanel}>
          {/* Left content */}
          <div className={styles.eyjiCtaCopy}>
            <div className={styles.eyjiCtaKicker}>
              <div className={styles.eyjiCtaKickerText}>Free Performance Review</div>
              <span className={styles.eyjiCtaKickerBullet}></span>
            </div>

            <h2 className={styles.eyjiCtaTitle}>
              Get a Hybrid Security Plan Built for Your Site
            </h2>

            <p className={styles.eyjiCtaText}>
              Every property has a unique physical layout and specific security challenges, and true protection starts with a clear response strategy behind your cameras. Share a few details about your current coverage and site concerns, and our security specialists will evaluate how a custom hybrid model can support your property
            </p>

            {/* CONTACT INFO */}
            <div className={styles.eyjiCtaContacts}>
              <div className={styles.eyjiCtaContactItem}>
                <span className={styles.eyjiCtaContactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 4.5l2.5-1.5 2 3-1.6 1a10 10 0 0 0 4.6 4.6l1-1.6 3 2-1.5 2.5a2 2 0 0 1-2 1c-7 0-11-4-11-11a2 2 0 0 1 1-2z"></path>
                  </svg>
                </span>
                <span className={styles.eyjiCtaContactLabel}>Call</span>
                <span className={styles.eyjiCtaContactValue}>
                  <a href="tel:18889087818">888-908-7818</a>
                </span>
              </div>

              <div className={styles.eyjiCtaContactItem}>
                <span className={styles.eyjiCtaContactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5"></rect>
                    <path d="M4.5 7l7.5 5 7.5-5"></path>
                  </svg>
                </span>
                <span className={styles.eyjiCtaContactLabel}>Email</span>
                <span className={styles.eyjiCtaContactValue}>
                  <a href="mailto:info@secureguardservices.com">info@secureguardservices.com</a>
                </span>
              </div>

              <div className={styles.eyjiCtaContactItem}>
                <span className={styles.eyjiCtaContactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-6-6.2-6-10.2A6 6 0 0 1 18 10.8C18 14.8 12 21 12 21z"></path>
                    <circle cx="12" cy="10" r="2.3"></circle>
                  </svg>
                </span>
                <span className={styles.eyjiCtaContactLabel}>Office</span>
                <span className={styles.eyjiCtaContactValue}>
                  18001 Sky Park Circle J, Irvine, CA 92614
                </span>
              </div>
            </div>

            <div className={styles.eyjiCtaBadge}>
              <span></span>
              <div>Serving clients across California since 2005</div>
            </div>
          </div>

          {/* Right form */}
          <div className={styles.eyjiCtaFormWrap}>
            <form className={styles.eyjiCtaForm} onSubmit={handleSubmit}>
              <div className={styles.eyjiCtaFormGrid}>
                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-name">Full Name*</label>
                  <input
                    className={`${styles.eyjiCtaInput} ${errors.name ? styles.invalidInput : ''}`}
                    id="pf-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value, true)}
                    onBlur={(e) => handleInputBlur('name', e.target.value, true)}
                  />
                </div>

                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-company">Company / Property</label>
                  <input
                    className={styles.eyjiCtaInput}
                    id="pf-company"
                    name="company"
                    type="text"
                    placeholder="Irvine Logistics Yard"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value, false)}
                  />
                </div>

                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-email">Work Email*</label>
                  <input
                    className={`${styles.eyjiCtaInput} ${errors.email ? styles.invalidInput : ''}`}
                    id="pf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value, true)}
                    onBlur={(e) => handleInputBlur('email', e.target.value, true)}
                  />
                </div>

                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-phone">Phone Number*</label>
                  <input
                    className={`${styles.eyjiCtaInput} ${errors.phone ? styles.invalidInput : ''}`}
                    id="pf-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value, true)}
                    onBlur={(e) => handleInputBlur('phone', e.target.value, true)}
                  />
                </div>

                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-location">City / Site Location*</label>
                  <input
                    className={`${styles.eyjiCtaInput} ${errors.location ? styles.invalidInput : ''}`}
                    id="pf-location"
                    name="location"
                    type="text"
                    required
                    placeholder="Irvine, CA"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value, true)}
                    onBlur={(e) => handleInputBlur('location', e.target.value, true)}
                  />
                </div>

                <div className={styles.eyjiCtaField}>
                  <label className={styles.eyjiCtaLabel} htmlFor="pf-service">Type of Service*</label>
                  <select
                    className={`${styles.eyjiCtaSelect} ${errors.service ? styles.invalidInput : ''}`}
                    id="pf-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleInputChange('service', e.target.value, true)}
                    onBlur={(e) => handleInputBlur('service', e.target.value, true)}
                  >
                    <option value="">Select an option</option>
                    <option value="video-monitoring">Video Monitoring Service</option>
                    <option value="mobile-surveillance-towers">Mobile Surveillance Tower</option>
                    <option value="onsite-guards">On-Site Security Officers</option>
                    <option value="mobile-patrols">Mobile Patrols</option>
                    <option value="event-security">Event Security / Officers</option>
                    <option value="traffic-control">Traffic Control</option>
                    <option value="executive-protection">Executive Protection</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className={styles.eyjiCtaField}>
                <label className={styles.eyjiCtaLabel} htmlFor="pf-message">Brief Overview</label>
                <textarea
                  className={styles.eyjiCtaTextarea}
                  id="pf-message"
                  name="message"
                  placeholder="Tell us about your site, hours of operation, and any recent security concerns."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value, false)}
                ></textarea>
              </div>

              <div className={styles.eyjiCtaActions}>
                <button
                  type="submit"
                  className={styles.eyjiCtaButton}
                  disabled={status === 'loading'}
                  style={
                    status === 'loading'
                      ? { opacity: 0.7, cursor: 'not-allowed' }
                      : status === 'success'
                      ? { backgroundColor: '#4CAF50', borderColor: '#4CAF50', color: '#ffffff' }
                      : status === 'error' && message !== 'Please fill in all required fields correctly.'
                      ? { backgroundColor: '#ff4444', borderColor: '#ff4444', color: '#ffffff' }
                      : {}
                  }
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    '✓ Request Sent!'
                  ) : status === 'error' && message !== 'Please fill in all required fields correctly.' ? (
                    '✗ Error - Try Again'
                  ) : (
                    <>
                      Request Performance Review
                      <span className={styles.eyjiCtaKickerBullet1}></span>
                    </>
                  )}
                </button>
              </div>

              {message && (
                <div className={status === 'success' ? styles.eyjiCtaSuccess : styles.eyjiCtaError}>
                  <p style={{ margin: 0 }}>{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
