import React, { useEffect, useRef, useState } from 'react';
import { calcMarqueeOffset } from '../utils/portfolioMath.ts';

const ROW1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const newOffset = calcMarqueeOffset(
              window.scrollY,
              sectionTop,
              window.innerHeight,
              0.3
            );
            setOffset(newOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Triple each row for continuous seamless looping
  const row1Triple = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const row2Triple = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  const transformRow1 = `translateX(${offset - 200}px)`;
  const transformRow2 = `translateX(-${offset - 200}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full relative z-0"
      aria-label="3D Work Marquee"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves right on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: transformRow1,
            willChange: 'transform',
          }}
        >
          {row1Triple.map((url, i) => (
            <div
              key={`row1-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-md border border-white/5"
            >
              <img
                src={url}
                alt="3D motion showcase item"
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves left on scroll */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: transformRow2,
            willChange: 'transform',
          }}
        >
          {row2Triple.map((url, i) => (
            <div
              key={`row2-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-md border border-white/5"
            >
              <img
                src={url}
                alt="3D motion showcase item"
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
