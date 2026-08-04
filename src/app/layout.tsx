import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentModal from '@/components/AssessmentModal';

export const metadata: Metadata = {
  title: 'What Does Your Property Actually Need? | Secure Guard Security Services',
  description: 'Get a clear security recommendation based on your risks, operating hours, property layout, and budget. Professional security guard services, active video monitoring, and SecureTrack GPS reporting across Southern California.',
  keywords: [
    'Secure Guard Security Services',
    'SGSS',
    'Free Security Assessment',
    'Security Guard Services SoCal',
    'Commercial Security',
    'Warehouse Protection',
    'SecureTrack GPS Reporting',
    'Video Monitoring',
    'Los Angeles Security Guards',
    'Orange County Security',
    'Inland Empire Security Patrol'
  ],
  authors: [{ name: 'Secure Guard Security Services' }],
  openGraph: {
    title: 'What Does Your Property Actually Need? | Secure Guard Security Services',
    description: 'Get a clear security recommendation based on your risks, operating hours, property layout, and budget. Zero obligation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Secure Guard Security Services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <AssessmentModal />
        </ModalProvider>
      </body>
    </html>
  );
}
