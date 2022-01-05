import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Datepicker } from '.';

describe('<Datepicker />', () => {
  it('should have a label', () => {
    const label = 'label';
    render(<Datepicker label={label} />);
    expect(screen.queryByText(label)).toBeDefined;
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<Datepicker errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeDefined;
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<Datepicker tip={tip} />);
    expect(screen.queryByText(tip)).toBeDefined;
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<Datepicker tip={tip} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeDefined;
    expect(screen.queryByText(tip)).not.toBeDefined;
  });
});
