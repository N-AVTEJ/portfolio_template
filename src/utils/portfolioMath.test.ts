import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ringFor,
  zoneAt,
  calcProjectCardScale,
  calcMarqueeOffset,
  calcMagnetOffset,
} from './portfolioMath.ts';

test('ringFor maps directions around the clock correctly', () => {
  // Looking right (positive x, zero y)
  assert.equal(ringFor(100, 0), 'e');
  // Looking up (zero x, negative y in screen coordinates)
  assert.equal(ringFor(0, -100), 'n');
  // Looking left (negative x, zero y)
  assert.equal(ringFor(-100, 0), 'w');
  // Looking down (zero x, positive y in screen coordinates)
  assert.equal(ringFor(0, 100), 's');
  // Diagonal up-right
  assert.equal(ringFor(100, -100), 'ne');
  // Diagonal down-left
  assert.equal(ringFor(-100, 100), 'sw');
});

test('zoneAt detects facial regions correctly', () => {
  // Top center is hair
  assert.equal(zoneAt(0.5, 0.1), 'hair');
  // Forehead/brow
  assert.equal(zoneAt(0.5, 0.32), 'brow');
  // Left eye region (observer's left: u ~ 0.38, v ~ 0.45)
  assert.equal(zoneAt(0.38, 0.455), 'eyeL');
  // Right eye region (u ~ 0.6, v ~ 0.45)
  assert.equal(zoneAt(0.6, 0.455), 'eyeR');
  // Nose region
  assert.equal(zoneAt(0.5, 0.52), 'nose');
  // Mouth region
  assert.equal(zoneAt(0.505, 0.65), 'mouth');
  // Chin region
  assert.equal(zoneAt(0.5, 0.8), 'chin');
});

test('calcProjectCardScale computes progressive card stacking scales', () => {
  const total = 3;
  // Card 0 (bottom of stack): 1 - (3 - 1 - 0) * 0.03 = 1 - 0.06 = 0.94
  assert.equal(calcProjectCardScale(total, 0), 0.94);
  // Card 1 (middle): 1 - (3 - 1 - 1) * 0.03 = 1 - 0.03 = 0.97
  assert.equal(calcProjectCardScale(total, 1), 0.97);
  // Card 2 (top of stack): 1 - 0 = 1.00
  assert.equal(calcProjectCardScale(total, 2), 1.0);
});

test('calcMarqueeOffset computes scroll displacement', () => {
  const offset = calcMarqueeOffset(1000, 500, 800, 0.3);
  // (1000 - 500 + 800) * 0.3 = 1300 * 0.3 = 390
  assert.equal(offset, 390);
});

test('calcMagnetOffset calculates bounded magnetic pull', () => {
  // Within boundary
  const inside = calcMagnetOffset(30, 20, 100, 50, 40, 2);
  assert.equal(inside.active, true);
  assert.equal(inside.x, 15);
  assert.equal(inside.y, 10);

  // Outside boundary
  const outside = calcMagnetOffset(200, 200, 100, 50, 40, 2);
  assert.equal(outside.active, false);
  assert.equal(outside.x, 0);
  assert.equal(outside.y, 0);
});
