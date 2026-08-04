'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { 
  Building, 
  Warehouse, 
  Home, 
  HardHat, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

export default function PropertyTypesSection() {
  const { openModal } = useModal();

  const propertyTypes = [
    {
      title: 'Commercial Properties',
      desc: 'Office buildings, multi-tenant corporate centers, financial hubs, and business parks.',
      icon: <Building size={28} color="#1d2c48" />
    },
    {
      title: 'Warehouses & Storage',
      desc: 'High-value inventory hubs, distribution centers, cross-dock facilities, and storage yards.',
      icon: <Warehouse size={28} color="#1d2c48" />
    },
    {
      title: 'Residential Communities',
      desc: 'Gated HOAs, apartment complexes, luxury high-rises, and private residential estates.',
      icon: <Home size={28} color="#1d2c48" />
    },
    {
      title: 'Construction Sites',
      desc: 'Active build sites, heavy machinery yards, building materials, and perimeter fences.',
      icon: <HardHat size={28} color="#1d2c48" />
    },
    {
      title: 'Retail & Shopping Plazas',
      desc: 'Shopping centers, auto dealerships, strip malls, and high-foot-traffic retail plazas.',
      icon: <ShoppingBag size={28} color="#1d2c48" />
    },
    {
      title: 'Logistics & Trucking Terminals',
      desc: 'Freight yards, port facilities, container staging areas, and fleet transit centers.',
      icon: <Truck size={28} color="#1d2c48" />
    }
  ];

  const socalCounties = [
    'Los Angeles County',
    'Orange County',
    'Inland Empire (Riverside & San Bernardino)',
    'San Diego County',
    'Ventura & Surrounding Regions'
  ];

  return (
    <section id="coverage" style={{
      backgroundColor: '#f8f9fc',
      padding: '96px 0',
      borderBottom: '1px solid #e2e5ec'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <span style={{
            color: '#1d2c48',
            backgroundColor: '#fecf31',
            padding: '6px 16px',
            borderRadius: '20px',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '14px'
          }}>
            Southern California Coverage
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#1d2c48', marginBottom: '18px' }}>
            Properties We Protect Across Southern California
          </h2>

          <p style={{ color: '#2a2829', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Your property does not need a generic package. It needs a plan based on how people enter, where valuable assets are located, when risk is highest, and how quickly someone must respond when an issue occurs.
          </p>
        </div>

        {/* Property Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {propertyTypes.map((prop, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(254, 207, 49, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {prop.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#1d2c48', marginBottom: '10px' }}>
                  {prop.title}
                </h3>

                <p style={{ color: '#2a2829', fontSize: '0.95rem', lineHeight: 1.55, marginBottom: '20px' }}>
                  {prop.desc}
                </p>
              </div>

              <button
                onClick={() => openModal(prop.title)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#1d2c48',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                Assess {prop.title} <ArrowRight size={16} color="#fecf31" />
              </button>
            </div>
          ))}
        </div>

        {/* Regional Footprint Banner */}
        <div style={{
          backgroundColor: '#1d2c48',
          borderRadius: '24px',
          padding: '36px 40px',
          color: '#ffffff',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fecf31', fontWeight: 800, fontSize: '0.9rem', marginBottom: '8px' }}>
              <MapPin size={20} /> Southern California Regional Headquarters & Dispatch
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '10px' }}>
              Local Supervision & Fast Patrol Response
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '0.98rem', margin: 0 }}>
              Serving commercial and industrial clients throughout Southern California with field supervisors on duty 24 hours a day, 365 days a year.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {socalCounties.map((county, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.92rem',
                color: '#ffffff',
                fontWeight: 600
              }}>
                <span style={{ color: '#fecf31', fontWeight: 800 }}>✓</span> {county}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
