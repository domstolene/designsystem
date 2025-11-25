import { CalendarDate } from '@internationalized/date';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';
import { portalRender } from '../../../test.utils';

describe('<DatePicker>', () => {
  it('renders calender button', () => {
    portalRender(<DatePicker />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('calendar button has aria attributes', () => {
    portalRender(<DatePicker />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('renders date segments in Norwegian format (day, month, year)', () => {
    portalRender(<DatePicker />);

    const segments = screen.getAllByRole('spinbutton');

    expect(segments).toHaveLength(3);

    expect(segments[0]).toHaveAccessibleName(/dag/i);
    expect(segments[1]).toHaveAccessibleName(/måned/i);
    expect(segments[2]).toHaveAccessibleName(/år/i);
  });

  it('renders date segments with Norwegian placeholders', () => {
    portalRender(<DatePicker />);

    const segments = screen.getAllByRole('spinbutton');
    expect(segments).toHaveLength(3);

    const expectedPlaceholders = ['dd', 'mm', 'åååå'];

    segments.forEach((segment, index) => {
      const hiddenSpan = segment.querySelector('span[aria-hidden="true"]');
      expect(hiddenSpan).not.toBeNull();
      expect(hiddenSpan?.textContent).toBe(expectedPlaceholders[index]);
    });
  });

  it('renders three spinbuttons for the date', () => {
    portalRender(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons).toHaveLength(3);
  });
  it('spinbuttons have aria-valuemin', () => {
    portalRender(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '1');
    expect(spinbuttons[2]).toHaveAttribute('aria-valuemin', '1');
  });
  it('spinbuttons have aria-valuemax', () => {
    portalRender(<DatePicker />);

    const spinbuttons = screen.getAllByRole('spinbutton');
    expect(spinbuttons[0]).toHaveAttribute('aria-valuemax');
    expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '12');
  });
  it('spinbuttons have accesible description if error message present', () => {
    const errorMessage = 'error';
    portalRender(<DatePicker errorMessage={errorMessage} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(errorMessage);
    });
  });

  it('spinbuttons have accesible description if tip present', () => {
    const tip = 'tip';
    portalRender(<DatePicker tip={tip} />);

    const spinbuttons = screen.getAllByRole('spinbutton');

    spinbuttons.forEach(sb => {
      expect(sb).toHaveAccessibleDescription(tip);
    });
  });
  it('spinbuttons render error message', () => {
    const errorMessage = 'error';
    portalRender(<DatePicker errorMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('spinbuttons render tip', () => {
    const tip = 'tip';
    portalRender(<DatePicker tip={tip} />);

    expect(screen.getByText(tip)).toBeInTheDocument();
  });

  it('clear button is not rendered if no value', () => {
    portalRender(<DatePicker clearable />);

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).not.toBeInTheDocument();
  });
  it('clear button is rendered if there is value', () => {
    portalRender(
      <DatePicker clearable value={new CalendarDate(2023, 8, 28)} />,
    );

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).toBeInTheDocument();
  });
});
