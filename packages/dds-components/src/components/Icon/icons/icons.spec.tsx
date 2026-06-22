import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { type SvgIcon } from '../utils';

import * as Icons from './index';

const iconEntries = Object.entries(Icons).filter(
  ([, value]) => typeof value === 'function',
) as Array<[string, SvgIcon]>;

describe('Icon handlers', () => {
  it.each(iconEntries)('%s renders an svg element', (_name, IconComponent) => {
    const { container } = render(<IconComponent />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it.each(iconEntries)('%s renders a title element', (_name, IconComponent) => {
    const title = 'title';
    const { container } = render(<IconComponent title={title} />);
    expect(container.querySelector('title')).toBeInTheDocument();
    expect(container.querySelector('title')).toHaveTextContent(title);
  });
});
