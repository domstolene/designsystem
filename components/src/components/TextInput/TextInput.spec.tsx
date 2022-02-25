import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a label', () => {
    const label = 'button label';
    render(<TextInput label={label} />);
    expect(screen.queryByText(label)).toBeDefined;
  });
  it('renders provided error message', () => {
    const errorMessage = 'this is an error';
    render(<TextInput errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeDefined;
  });
  it('renders provided tip', () => {
    const tip = 'this is a tip';
    render(<TextInput tip={tip} />);
    expect(screen.queryByText(tip)).toBeDefined;
  });
  it('should have aria-describedby when tip provided', () => {
    const id = 'id';
    const tip = 'this is a tip';
    render(<TextInput id={id} tip={tip} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      `${id}-tip`
    );
  });
  it('should have aria-errormessage when errorMessage provided', () => {
    const id = 'id';
    const errorMessage = 'this is a errorMessage';
    render(<TextInput id={id} errorMessage={errorMessage} />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-errormessage',
      `${id}-errorMessage`
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid');
  });
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<TextInput tip={tip} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeDefined;
    expect(screen.queryByText(tip)).not.toBeDefined;
  });
});
