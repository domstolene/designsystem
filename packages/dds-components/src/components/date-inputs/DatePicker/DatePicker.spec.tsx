import { CalendarDate } from '@internationalized/date';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { DatePicker } from './DatePicker';
import { portalRender } from '../../../test.utils';

describe('<DatePicker>', () => {
  it('throws if used outside DdsProvider', () => {
    expect(() => render(<DatePicker label="Label" />)).toThrow(
      'DatePicker must be used within a DdsProvider',
    );
  });
  it('renders calendar button', () => {
    portalRender(<DatePicker label="Label" />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('calendar button has aria attributes', () => {
    portalRender(<DatePicker label="Label" />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('opens the calendar and renders the month grid', async () => {
    const user = userEvent.setup();

    portalRender(
      <DatePicker label="Label" defaultValue={new CalendarDate(2024, 3, 15)} />,
    );

    await user.click(screen.getByRole('button'));

    const buttons = screen.getAllByRole('button');

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(
      screen.getByRole('grid', { name: /mars 2024/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('row').length).toBeGreaterThan(3);
    expect(screen.getByText(/Ukenummer/i)).toBeInTheDocument();
    // kalender-knapp + 2 måned-knapper + 31 dagceller
    expect(buttons.length).toBe(34);
    expect(buttons[1]).toHaveAccessibleName('Forrige måned');
    expect(buttons[2]).toHaveAccessibleName('Neste måned');
    expect(screen.getAllByRole('cell').length).toBeGreaterThan(3);
    expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(30);
  });

  it('closes the calendar on Shift+Tab from previous month button', async () => {
    const user = userEvent.setup();

    portalRender(
      <DatePicker label="Label" defaultValue={new CalendarDate(2024, 3, 15)} />,
    );

    await user.click(screen.getByRole('button'));

    const prevButton = screen.getByRole('button', { name: 'Forrige måned' });
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

    fireEvent.keyDown(prevButton, { key: 'Tab', shiftKey: true });

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('hides week numbers when showWeekNumbers is false', async () => {
    const user = userEvent.setup();

    portalRender(
      <DatePicker
        label="Label"
        defaultValue={new CalendarDate(2024, 2, 15)}
        showWeekNumbers={false}
      />,
    );

    await user.click(screen.getByRole('button'));

    expect(screen.queryByText(/Ukenummer/i)).not.toBeInTheDocument();
  });

  it('hides month navigation at min and max bounds', async () => {
    const user = userEvent.setup();

    portalRender(
      <DatePicker
        label="Label"
        defaultValue={new CalendarDate(2024, 3, 15)}
        minValue={new CalendarDate(2024, 3, 1)}
        maxValue={new CalendarDate(2024, 3, 31)}
      />,
    );

    await user.click(screen.getByRole('button'));

    const prevButton = screen.queryByRole('button', {
      name: 'Forrige måned',
      hidden: true,
    });
    const nextButton = screen.queryByRole('button', {
      name: 'Neste måned',
      hidden: true,
    });
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });

  it('closes previously opened calendar when another datepicker opens', async () => {
    const user = userEvent.setup();

    portalRender(
      <>
        <DatePicker
          label="Første dato"
          defaultValue={new CalendarDate(2024, 3, 15)}
        />
        <DatePicker
          label="Andre dato"
          defaultValue={new CalendarDate(2024, 4, 15)}
        />
      </>,
    );

    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);

    expect(
      screen.getByRole('grid', { name: /mars 2024/i }),
    ).toBeInTheDocument();

    await user.click(buttons[1]);

    expect(
      screen.queryByRole('grid', { name: /mars 2024/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('grid', { name: /april 2024/i }),
    ).toBeInTheDocument();
  });

  it('closes opened calendar when another datepicker field is clicked', async () => {
    const user = userEvent.setup();

    portalRender(
      <>
        <DatePicker
          label="Første dato"
          defaultValue={new CalendarDate(2024, 3, 15)}
        />
        <DatePicker
          label="Andre dato"
          defaultValue={new CalendarDate(2024, 4, 15)}
        />
      </>,
    );

    expect(screen.queryByRole('grid')).not.toBeInTheDocument();

    const buttons = screen.getAllByRole('button');

    await user.click(buttons[0]);

    expect(
      screen.getByRole('grid', { name: /mars 2024/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByText('Andre dato'));

    expect(
      screen.queryByRole('grid', { name: /mars 2024/i }),
    ).not.toBeInTheDocument();
  });

  describe('spinbuttons', () => {
    it('renders date segments in Norwegian format (day, month, year)', () => {
      portalRender(<DatePicker label="Label" />);

      const segments = screen.getAllByRole('spinbutton');

      expect(segments).toHaveLength(3);

      expect(segments[0]).toHaveAccessibleName(/dag/i);
      expect(segments[1]).toHaveAccessibleName(/måned/i);
      expect(segments[2]).toHaveAccessibleName(/år/i);
    });
    it('renders date segments with Norwegian placeholders', () => {
      portalRender(<DatePicker label="Label" />);

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
      portalRender(<DatePicker label="Label" />);

      const spinbuttons = screen.getAllByRole('spinbutton');
      expect(spinbuttons).toHaveLength(3);
    });

    it('spinbuttons have aria-valuemin', () => {
      portalRender(<DatePicker label="Label" />);

      const spinbuttons = screen.getAllByRole('spinbutton');
      expect(spinbuttons[0]).toHaveAttribute('aria-valuemin', '1');
      expect(spinbuttons[1]).toHaveAttribute('aria-valuemin', '1');
      expect(spinbuttons[2]).toHaveAttribute('aria-valuemin', '1');
    });

    it('spinbuttons have aria-valuemax', () => {
      portalRender(<DatePicker label="Label" />);

      const spinbuttons = screen.getAllByRole('spinbutton');
      expect(spinbuttons[0]).toHaveAttribute('aria-valuemax');
      expect(spinbuttons[1]).toHaveAttribute('aria-valuemax', '12');
    });

    it('spinbuttons have accessible description if error message present', () => {
      const errorMessage = 'error';
      portalRender(<DatePicker label="Label" errorMessage={errorMessage} />);

      const spinbuttons = screen.getAllByRole('spinbutton');

      spinbuttons.forEach(sb => {
        expect(sb).toHaveAccessibleDescription(errorMessage);
      });
    });

    it('spinbuttons have accessible description if tip present', () => {
      const tip = 'tip';
      portalRender(<DatePicker label="Label" tip={tip} />);

      const spinbuttons = screen.getAllByRole('spinbutton');

      spinbuttons.forEach(sb => {
        expect(sb).toHaveAccessibleDescription(tip);
      });
    });
  });

  it('renders error message', () => {
    const errorMessage = 'error';
    portalRender(<DatePicker label="Label" errorMessage={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders tip', () => {
    const tip = 'tip';
    portalRender(<DatePicker label="Label" tip={tip} />);

    expect(screen.getByText(tip)).toBeInTheDocument();
  });

  it('clear button is not rendered if no value', () => {
    portalRender(<DatePicker label="Label" clearable />);

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).not.toBeInTheDocument();
  });
  it('clear button is rendered if there is value', () => {
    portalRender(
      <DatePicker
        label="Label"
        clearable
        value={new CalendarDate(2023, 8, 28)}
      />,
    );

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).toBeInTheDocument();
  });
  it('clear button is not rendered if there is value and not clearable', () => {
    portalRender(
      <DatePicker label="Label" value={new CalendarDate(2023, 8, 28)} />,
    );

    const clearButton = screen.queryByRole('button', { name: /Tøm dato/i });
    expect(clearButton).not.toBeInTheDocument();
  });

  describe('keyboard handling for unavailable dates', () => {
    it('does not call onChange when Enter is pressed on an unavailable focused date', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      // Day 15 is both the default value and marked as unavailable
      portalRender(
        <DatePicker
          label="Label"
          defaultValue={new CalendarDate(2024, 3, 15)}
          isDateUnavailable={date => date.day === 15}
          onChange={onChange}
        />,
      );

      await user.click(screen.getByRole('button'));

      const grid = screen.getByRole('grid');
      fireEvent.keyDown(grid, { key: 'Enter' });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('does not call onChange when Space is pressed on an unavailable focused date', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      portalRender(
        <DatePicker
          label="Label"
          defaultValue={new CalendarDate(2024, 3, 15)}
          isDateUnavailable={date => date.day === 15}
          onChange={onChange}
        />,
      );

      await user.click(screen.getByRole('button'));

      const grid = screen.getByRole('grid');
      fireEvent.keyDown(grid, { key: ' ' });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('calls onChange when Enter is pressed on an available focused date', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      portalRender(
        <DatePicker
          label="Label"
          defaultValue={new CalendarDate(2024, 3, 15)}
          onChange={onChange}
        />,
      );

      await user.click(screen.getByRole('button'));

      const grid = screen.getByRole('grid');
      fireEvent.keyDown(grid, { key: 'Enter' });

      expect(onChange).toHaveBeenCalled();
    });

    it('keeps the calendar open when Enter is pressed on an unavailable focused date', async () => {
      const user = userEvent.setup();

      portalRender(
        <DatePicker
          label="Label"
          defaultValue={new CalendarDate(2024, 3, 15)}
          isDateUnavailable={date => date.day === 15}
        />,
      );

      await user.click(screen.getByRole('button'));

      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();

      const grid = screen.getByRole('grid');
      fireEvent.keyDown(grid, { key: 'Enter' });

      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
  });
});
