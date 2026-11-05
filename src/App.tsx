/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] w-full min-h-screen relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Footer / Contact CTA */}
      <FooterSection onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive Contact Drawer/Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
