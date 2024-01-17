import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Pagination } from '.';

describe('<Pagination />', () => {
  it('has aria label', () => {
    render(<Pagination itemsAmount={10} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toHaveAttribute('aria-label', 'paginering');
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
    render(
      <Pagination
        itemsAmount={6}
        defaultItemsPerPage={1}
        defaultActivePage={2}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(8); // itemsAmount + < > buttons)
  });
  it('should not render previous page-button while on first page', () => {
    render(<Pagination itemsAmount={6} defaultItemsPerPage={1} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(7); // itemsAmount +  > button
  });
  it('should not render next page-button while on last page', () => {
    render(
      <Pagination
        itemsAmount={6}
        defaultItemsPerPage={1}
        defaultActivePage={6}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(7); // itemsAmount +  < button
  });
  it('should render smallScreen version with three items while on first page', () => {
    render(<Pagination itemsAmount={6} defaultItemsPerPage={1} smallScreen />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3); // active page +  > >| buttons
  });
  it('should render smallScreen version with five items while neither on first or last page', () => {
    render(
      <Pagination
        itemsAmount={6}
        defaultItemsPerPage={1}
        defaultActivePage={2}
        smallScreen
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(5); // active page + |< <  > >| buttons
  });
});
