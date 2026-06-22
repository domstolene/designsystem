import { describe, expect, it } from 'vitest';

import { isAccepted } from './attr-accept';

describe('isAccepted', () => {
  const pngFile = new File(['content'], 'photo.png', { type: 'image/png' });

  it('accepts file by extension (positive match)', () => {
    expect(isAccepted(pngFile, ['.png'])).toBe(true);
  });

  it('rejects file by non-matching extension', () => {
    expect(isAccepted(pngFile, ['.pdf'])).toBe(false);
  });

  it('accepts file by wildcard MIME type', () => {
    expect(isAccepted(pngFile, ['image/*'])).toBe(true);
  });

  it('rejects file by non-matching wildcard MIME type', () => {
    expect(isAccepted(pngFile, ['video/*'])).toBe(false);
  });

  it('accepts file by exact MIME type', () => {
    expect(isAccepted(pngFile, ['image/png'])).toBe(true);
  });

  it('accepts file when acceptedFiles is undefined', () => {
    expect(isAccepted(pngFile, undefined)).toBe(true);
  });

  it('accepts file with comma-separated string accept value', () => {
    expect(isAccepted(pngFile, 'image/jpeg,.png')).toBe(true);
  });
});
