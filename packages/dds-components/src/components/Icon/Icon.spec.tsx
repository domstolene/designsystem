// Icon.test.tsx
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from './Icon';
import { AgreementIcon, AnimatedChevronUpDownIcon } from './icons';

function expectHasClass(el: Element | null, token: string) {
  const cls = el && el.getAttribute('class');
  expect(cls).toEqual(expect.stringContaining(token));
}

function expectNotHasClass(el: Element | null, token: string) {
  const cls = el && el.getAttribute('class');
  expect(cls).not.toEqual(expect.stringContaining(token));
}

describe('<Icon>', () => {
  it('renders an icon', () => {
    const { container } = render(<Icon icon={AgreementIcon} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('forwards iconState to an animated icon', () => {
    const { container, rerender } = render(
      <Icon icon={AnimatedChevronUpDownIcon} iconState="up" />,
    );
    const svg = container.querySelector('svg');
    expectHasClass(svg, 'svg--up');
    expectNotHasClass(svg, 'svg--down');

    rerender(<Icon icon={AnimatedChevronUpDownIcon} iconState="down" />);
    expectHasClass(svg, 'svg--down');
    expectNotHasClass(svg, 'svg--up');
  });

  it('sets aria-hidden=true by default unless overridden via htmlProps', () => {
    const { container, rerender } = render(<Icon icon={AgreementIcon} />);
    let svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).toBe('true');

    rerender(
      <Icon icon={AgreementIcon} htmlProps={{ 'aria-hidden': false }} />,
    );
    svg = container.querySelector('svg')!;
    expect(svg.getAttribute('aria-hidden')).toBe('false');
  });
});
