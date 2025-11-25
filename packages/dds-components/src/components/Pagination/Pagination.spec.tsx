import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Pagination } from '.';

describe('<Pagination>', () => {
  it('has aria label', () => {
    render(<Pagination itemsAmount={10} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveAccessibleName('Paginering');
  });
  it('has aria label on each page', () => {
    render(<Pagination itemsAmount={100} defaultActivePage={3} />);
    expect(
      within(screen.getAllByRole('listitem')[0]).getByRole('button'),
    ).toHaveAccessibleName('Forrige side');
    expect(
      within(screen.getAllByRole('listitem')[1]).getByRole('button'),
    ).toHaveAccessibleName('Side 1');
    expect(
      within(screen.getAllByRole('listitem')[3]).getByRole('button'),
    ).toHaveAccessibleName('Nåværende side (3)');
  });
  it('renders correct number of pages', () => {
    const itemsAmount = 6;
    render(
      <Pagination
        itemsAmount={itemsAmount}
        defaultItemsPerPage={1}
        defaultActivePage={2}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 2); // itemsAmount + < > buttons)
  });
  it('does not render previous page-button while on first page', () => {
    const itemsAmount = 6;
    render(<Pagination itemsAmount={itemsAmount} defaultItemsPerPage={1} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 1); // itemsAmount +  > button
  });
  it('does not render next page-button while on last page', () => {
    const itemsAmount = 6;
    render(
      <Pagination
        itemsAmount={itemsAmount}
        defaultItemsPerPage={1}
        defaultActivePage={6}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 1); // itemsAmount +  < button
  });
  describe('pagination with small screen variant', () => {
    it('has aria label', () => {
      render(<Pagination itemsAmount={10} smallScreenBreakpoint="sm" />);
      const pagination = screen.getByRole('navigation');
      expect(pagination).toHaveAccessibleName('Paginering');
    });
    it('renders correct number of pages', () => {
      const itemsAmount = 6;
      render(
        <Pagination
          itemsAmount={itemsAmount}
          defaultItemsPerPage={1}
          defaultActivePage={2}
          smallScreenBreakpoint="sm"
        />,
      );

      // itemsAmount + < > buttons for large screen, active item + |< >| < > buttons for small screen
      expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 7);
    });
    it('does not render previous page-button while on first page', () => {
      const itemsAmount = 6;
      render(
        <Pagination
          itemsAmount={itemsAmount}
          defaultItemsPerPage={1}
          smallScreenBreakpoint="sm"
        />,
      );
      // itemsAmount +  > button for large screen, active item + >| > buttons for small screen
      expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 4);
    });
    it('does not render next page-button while on last page', () => {
      const itemsAmount = 6;
      render(
        <Pagination
          itemsAmount={itemsAmount}
          defaultItemsPerPage={1}
          defaultActivePage={6}
          smallScreenBreakpoint="sm"
        />,
      );
      // itemsAmount +  < button for large screen, active item + |< < buttons for small screen
      expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 4);
    });
  });
  it('is a controlled component when activePage prop is provided', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Pagination
        itemsAmount={100}
        defaultItemsPerPage={10}
        activePage={3}
        onChange={onChange}
      />,
    );

    // Should display page 3 as active (controlled)
    expect(
      screen.getByRole('button', { name: 'Nåværende side (3)' }),
    ).toBeInTheDocument();

    // Click page 5
    const page5Button = screen.getByRole('button', { name: 'Side 5' });
    await user.click(page5Button);

    // onChange should be called
    expect(onChange).toHaveBeenCalledWith(expect.anything(), 5);

    // Page should still be 3 (controlled - doesn't change until prop changes)
    expect(
      screen.getByRole('button', { name: 'Nåværende side (3)' }),
    ).toBeInTheDocument();

    // Re-render with new activePage
    rerender(
      <Pagination
        itemsAmount={100}
        defaultItemsPerPage={10}
        activePage={5}
        onChange={onChange}
      />,
    );

    // Now page 5 should be active
    expect(
      screen.getByRole('button', { name: 'Nåværende side (5)' }),
    ).toBeInTheDocument();
  });
});
