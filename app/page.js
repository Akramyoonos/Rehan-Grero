import Hero from '@/components/Hero';
import CoreCompetencies from '@/components/CoreCompetencies';
import Services from '@/components/Services';
import PropertyTypes from '@/components/PropertyTypes';
import BuyerRepresentation from '@/components/BuyerRepresentation';
import Protocol from '@/components/Protocol';
import Insights from '@/components/Insights';
import Careers from '@/components/Careers';
import Testimonials from '@/components/Testimonials';
import Advisor from '@/components/Advisor';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Rehan Grero | Strategic Property Advisor & Buyer’s Representative',
  description: 'Exclusively representing buyers in Sri Lanka. Independent property analysis, due diligence, and strategic negotiation for residential and commercial acquisitions.',
  openGraph: {
    title: 'Rehan Grero | Strategic Property Advisor & Buyer’s Representative',
    description: 'Exclusively representing buyers in Sri Lanka. Independent property analysis, due diligence, and strategic negotiation for residential and commercial acquisitions.',
    images: [{ url: '/RJ Grero.jpeg', width: 1200, height: 630, alt: 'Rehan Grero Advisory' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/RJ Grero.jpeg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreCompetencies />
      <Services />
      <PropertyTypes />
      <BuyerRepresentation />
      <Protocol />
      <Insights />
      <Careers />
      <Testimonials />
      <Advisor />
      <FinalCTA />
    </main>
  );
}
