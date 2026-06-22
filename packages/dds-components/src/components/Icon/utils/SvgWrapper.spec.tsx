import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SvgWrapper } from './SvgWrapper';

describe('SvgWrapper', () => {
  it('renders an svg element', () => {
    const { container } = render(
      <SvgWrapper>
        <rect width="100%" height="100%" />
      </SvgWrapper>,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('applies the correct viewBox', () => {
    const { container } = render(
      <SvgWrapper>
        <rect width="100%" height="100%" />
      </SvgWrapper>,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
  it('applies the correct fill color', () => {
    const { container } = render(
      <SvgWrapper fill="red">
        <rect width="100%" height="100%" />
      </SvgWrapper>,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'red');
  });
  it('applies the correct height and width', () => {
    const { container } = render(
      <SvgWrapper height="50px" width="50px">
        <rect width="100%" height="100%" />
      </SvgWrapper>,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ height: '50px', width: '50px' });
  });
});
