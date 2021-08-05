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
  it('renders error message instead of tip when both are provided', () => {
    const tip = 'this is a tip';
    const errorMessage = 'this is an error';
    render(<TextInput tip={tip} errorMessage={errorMessage} />);
    expect(screen.queryByText(errorMessage)).toBeDefined;
    expect(screen.queryByText(tip)).not.toBeDefined;
  });
});