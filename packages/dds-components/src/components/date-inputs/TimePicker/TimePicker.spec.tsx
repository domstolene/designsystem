import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TimePicker } from './TimePicker';

describe('<TimePicker>', () => {
  it('renders 2 spinbuttons for the time', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons).toHaveLength(2);
  });
  it('has accessible description if tip present', () => {
    const tip = 'tip';
    render(<TimePicker tip={tip} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(tip);
    });
  });
  it('has accessible description if errorMessage present', () => {
    const errorMessage = 'errorMessage';
    render(<TimePicker errorMessage={errorMessage} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(errorMessage);
    });
  });
  it('spinbuttons have aria-valuemin', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '0');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '0');
  });
  it('spinbuttons have aria-valuemax', () => {
    render(<TimePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemax', '23');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '59');
  });
});
