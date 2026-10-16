import { describe, expect, it } from 'vitest';

import { getResponsiveCSSProperties } from './utils';

describe('layout.utils', () => {
  it('convert CSS prop to raw value', () => {
    expect(
      getResponsiveCSSProperties('flex', 'r', 'display', { mode: 'raw' }),
    ).toEqual({ '--dds-r-display': 'flex' });
    expect(
      getResponsiveCSSProperties('sticky', 'r', 'pos', { mode: 'raw' }),
    ).toEqual({ '--dds-r-pos': 'sticky' });
  });
  it('convert CSS prop to token', () => {
    expect(getResponsiveCSSProperties('x1', 'r', 'p')).toEqual({
      '--dds-r-p': 'var(--dds-spacing-x1)',
    });
  });
});
