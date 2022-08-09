import { render, screen } from '@testing-library/react';
import { Search } from '.';

describe('<Search />', () => {
  it('should render a searchbox', () => {
    render(<Search />);
    const search = screen.getByRole('searchbox');
    expect(search).toBeInTheDocument();
  });
  it('should render a search button with a label', () => {
    const label = 'Søk';
    render(<Search buttonProps={{ onClick: e => {}, label: label }} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'tip';
    render(<Search tip={tip} />);
    expect(screen.queryByText(tip)).toBeInTheDocument();
  });
  it('should have aria-dsecribedby when tip provided', () => {
    const tip = 'tip';
    const id = 'id';
    render(<Search tip={tip} id={id} />);
    expect(screen.getByRole('searchbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`
    );
  });
});
