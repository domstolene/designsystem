import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as Icons from './index';

const iconEntries = Object.entries(Icons).filter(
  ([, value]) => typeof value === 'function',
) as Array<[string, React.ComponentType]>;

describe('Icon handlers', () => {
  it.each(iconEntries)('%s renders an svg element', (_name, IconComponent) => {
    const { container } = render(<IconComponent />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it.each(iconEntries)('%s renders an svg element', (_name, IconComponent) => {
    const { container } = render(<IconComponent />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
