import React from 'react';
import Hero from '@/components/Hero';
import InteractiveAssessmentWidget from '@/components/InteractiveAssessmentWidget';
import AssessmentReviewSection from '@/components/AssessmentReviewSection';
import SecureTrackSimulator from '@/components/SecureTrackSimulator';
import PlanAndValueSection from '@/components/PlanAndValueSection';
import PropertyTypesSection from '@/components/PropertyTypesSection';
import LeadFormSection from '@/components/LeadFormSection';

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveAssessmentWidget />
      <AssessmentReviewSection />
      <SecureTrackSimulator />
      <PlanAndValueSection />
      <PropertyTypesSection />
      <LeadFormSection />
    </>
  );
}
