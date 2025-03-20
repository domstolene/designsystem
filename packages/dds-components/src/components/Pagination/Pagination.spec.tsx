import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Pagination } from '.';

describe('<Pagination>', () => {
  it('has aria label', () => {
    render(<Pagination itemsAmount={10} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveAccessibleName('paginering');
  });
  it('has aria label on each page', () => {
    render(<Pagination itemsAmount={100} defaultActivePage={3} />);
    expect(
      within(screen.getAllByRole('listitem')[0]).getByRole('button'),
    ).toHaveAttribute('aria-label', 'Gå til forrige siden');
    expect(
      within(screen.getAllByRole('listitem')[1]).getByRole('button'),
    ).toHaveAttribute('aria-label', 'Gå til side 1');
    expect(
      within(screen.getAllByRole('listitem')[3]).getByRole('button'),
    ).toHaveAttribute('aria-label', 'Nåværende side (side 3)');
  });
  it('should render correct number of pages', () => {
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
  it('should not render previous page-button while on first page', () => {
    const itemsAmount = 6;
    render(<Pagination itemsAmount={itemsAmount} defaultItemsPerPage={1} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(itemsAmount + 1); // itemsAmount +  > button
  });
  it('should not render next page-button while on last page', () => {
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
      expect(pagination).toHaveAccessibleName('paginering');
    });
    it('should render correct number of pages', () => {
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
    it('should not render previous page-button while on first page', () => {
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
    it('should not render next page-button while on last page', () => {
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
});
