import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { ContactButton } from './ContactButton.tsx';
import { ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  onContactClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/10 px-6 md:px-12 pt-20 pb-12 w-full relative z-20"
      aria-label="Footer and Contact"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 pb-16 border-b border-white/10">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} y={20}>
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-semibold block mb-2">
                Available for Q1 / Q2 Projects
              </span>
              <h2
                className="hero-heading font-black uppercase tracking-tight leading-none mb-6"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 90px)' }}
              >
                Let&apos;s create something remarkable
              </h2>
              <p className="text-base sm:text-lg text-[#D7E2EA]/70 max-w-lg leading-relaxed">
                Whether you need 3D characters, cinematic motion graphics, or photorealistic brand imagery, I am here to help.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20} className="shrink-0">
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#D7E2EA]/60 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#D7E2EA]">MINA</span>
            <span>&bull;</span>
            <span>3D Creator &amp; Motion Artist</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Twitter <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Instagram <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              ArtStation <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <span>&copy; {new Date().getFullYear()} Mina. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
