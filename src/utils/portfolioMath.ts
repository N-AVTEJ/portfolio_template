/**
 * Pure mathematical and layout helper functions for Mina's 3D Creator Portfolio.
 * Decoupled for deterministic unit testing.
 */

export const RING = [
  'e', 'ene', 'ne', 'nne', 'n', 'nnw', 'nw', 'wnw',
  'w', 'wsw', 'sw', 'ssw', 's', 'sse', 'se', 'ese'
] as const;

export type RingDirection = typeof RING[number];

/**
 * Maps relative displacement vector (dx, dy) to 16 gaze directions
 */
export function ringFor(dx: number, dy: number): RingDirection {
  const angle = (Math.atan2(-dy, dx) + Math.PI * 2) % (Math.PI * 2);
  const index = Math.round(angle / (Math.PI / 8)) % 16;
  return RING[index];
}

/**
 * Calculates facial zone based on normalized UV coordinates [0, 1]
 */
export function zoneAt(u: number, v: number): 'hair' | 'brow' | 'eyeL' | 'eyeR' | 'nose' | 'mouth' | 'chin' | 'cheek' {
  const a = (u - 0.505) / 0.225;
  const b = (v - 0.485) / 0.33;
  if (a * a + b * b > 1 || v < 0.23) return 'hair';
  if (v < 0.385) return 'brow';
  if (Math.abs(v - 0.455) < 0.05 && u > 0.33 && u < 0.455) return 'eyeL';
  if (Math.abs(v - 0.455) < 0.05 && u > 0.545 && u < 0.67) return 'eyeR';
  if (Math.abs(u - 0.5) < 0.055 && v < 0.6) return 'nose';
  if (v > 0.6 && v < 0.71 && Math.abs(u - 0.5) < 0.1) return 'mouth';
  return v > 0.71 ? 'chin' : 'cheek';
}

/**
 * Calculates project card scale based on card index and total count
 * targetScale = 1 - (totalCards - 1 - index) * 0.03
 */
export function calcProjectCardScale(totalCards: number, index: number, factor = 0.03): number {
  return 1 - (totalCards - 1 - index) * factor;
}

/**
 * Calculates marquee translation offset based on scroll position
 * (scrollY - sectionTop + innerHeight) * 0.3
 */
export function calcMarqueeOffset(
  scrollY: number,
  sectionTop: number,
  innerHeight: number,
  speed = 0.3
): number {
  return (scrollY - sectionTop + innerHeight) * speed;
}

/**
 * Magnetic translation calculation given mouse coordinates relative to element center
 */
export function calcMagnetOffset(
  relX: number,
  relY: number,
  elementWidth: number,
  elementHeight: number,
  padding = 60,
  strength = 3
): { x: number; y: number; active: boolean } {
  const halfW = elementWidth / 2;
  const halfH = elementHeight / 2;
  const thresholdX = halfW + padding;
  const thresholdY = halfH + padding;

  if (Math.abs(relX) <= thresholdX && Math.abs(relY) <= thresholdY) {
    return {
      x: relX / strength,
      y: relY / strength,
      active: true,
    };
  }

  return { x: 0, y: 0, active: false };
}
