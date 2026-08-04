'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Shield, Menu, X, ArrowRight, Phone } from 'lucide-react';

export default function Header() {
  const { openModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'What We Review', href: '#what-we-review' },
    { label: 'SecureTrack™', href: '#securetrack' },
    { label: 'Consultation Gains', href: '#gains' },
    { label: 'SoCal Coverage', href: '#coverage' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      backgroundColor: '#1d2c48',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(29, 44, 72, 0.2)'
    }}>
      {/* Top emergency/call banner */}
      <div style={{
        backgroundColor: '#131e33',
        padding: '6px 0',
        fontSize: '0.82rem',
        color: '#ffffff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              backgroundColor: '#fecf31',
              borderRadius: '50%'
            }} />
            <span style={{ opacity: 0.9 }}>Southern California Security Operations & Live Dispatch</span>
          </div>
          <a 
            href="tel:18008000000" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: '#fecf31', 
              fontWeight: 600,
              fontSize: '0.82rem'
            }}
          >
            <Phone size={13} /> 24/7 Security Hotline: (800) 508-0128
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            backgroundColor: '#fecf31',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1d2c48',
            boxShadow: '0 4px 12px rgba(254, 207, 49, 0.3)'
          }}>
            <Shield size={26} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              SECURE GUARD
            </div>
            <div style={{
              color: '#fecf31',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Security Services
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fecf31')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <button
            onClick={() => openModal()}
            className="btn-primary"
            style={{ padding: '12px 22px', fontSize: '0.95rem' }}
          >
            Get Free Assessment <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#131e33',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '1.05rem',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openModal();
            }}
            className="btn-primary"
            style={{ width: '100%', marginTop: '12px' }}
          >
            Get Free Assessment <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Inline style tag for responsive media queries */}
      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
