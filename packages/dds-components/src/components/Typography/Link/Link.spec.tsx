import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';
import { Checkbox } from '../../SelectionControl/Checkbox';

describe('<Link>', () => {
  it('renders text', () => {
    const text = 'text';
    render(<Link>{text}</Link>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('has link role', () => {
    render(<Link href="/" />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  it('should open on new page', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
  it('has noopener noreferrer', () => {
    render(<Link href="/" external />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
  it('has button role', () => {
    render(<Link href="/" as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
  it('renders checkbox when React component returning checkbox is passed', () => {
    render(<Link as={Checkbox} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
  it('supports Checkbox props if as={Checkbox}', () => {
    render(<Link href="/" as={Checkbox} disabled checked={true} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('checked', '');
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled', '');
  });
  it('supports Checkbox htmlProps if as={Checkbox}', () => {
    render(<Link href="/" as={Checkbox} htmlProps={{ tabIndex: 0 }} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('tabIndex', '0');
  });
});
