import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
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
      within(screen.getAllByRole('listitem')[0]).getByRole('button')
    ).toHaveAttribute('aria-label', 'Gå til forrige siden');
    expect(
      within(screen.getAllByRole('listitem')[1]).getByRole('button')
    ).toHaveAttribute('aria-label', 'Gå til side 1');
    expect(
      within(screen.getAllByRole('listitem')[3]).getByRole('button')
    ).toHaveAttribute('aria-label', 'Nåværende side (side 3)');
  });
  it('should render correct number of pages', () => {
    render(<Pagination itemsAmount={6} defaultItemsPerPage={1} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(8); // itemsAmount + < > buttons)
  });
});
