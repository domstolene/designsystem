import { render, screen } from '@testing-library/react';
import { Datepicker } from '.';

describe('<Datepicker />', () => {
  it('should have a label', () => {
    const label = 'label';
    render(<Datepicker label={label} />);
    expect(screen.queryByText(label)).toBeInTheDocument();
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<Datepicker errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<Datepicker tip={tip} />);
    expect(screen.queryByText(tip)).toBeInTheDocument();
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<Datepicker tip={tip} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
    expect(screen.queryByText(tip)).not.toBeInTheDocument();
  });
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    const { container } = render(<Datepicker tip="tip" id={id} />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveAttribute('aria-describedby', `${id}-tip`);
  });
  it('should have aria-describedby and aria-invalid when errorMessage provided', () => {
    const id = 'id';
    const { container } = render(<Datepicker errorMessage="error" id={id} />);
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      `${id}-errorMessage`
    );
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });
});
