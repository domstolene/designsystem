import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FormSummary } from './FormSummary';
import {
  FormSummaryEditButton,
  FormSummaryEmptyValue,
  FormSummaryError,
  FormSummaryHeading,
  FormSummaryLabel,
  FormSummaryValue,
} from './FormSummary.components';

describe('<FormSummary>', () => {
  it('renders children', () => {
    const text = 'text';
    render(<FormSummary>{text}</FormSummary>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders button', () => {
    render(<FormSummaryEditButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders heading', () => {
    render(<FormSummaryHeading />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders label', () => {
    const label = 'Label';
    render(<FormSummaryLabel>{label}</FormSummaryLabel>);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders value', () => {
    const value = 'Value';
    render(<FormSummaryValue>{value}</FormSummaryValue>);
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it('renders error message', () => {
    const msg = 'Msg';
    render(<FormSummaryError>{msg}</FormSummaryError>);
    expect(screen.getByText(msg)).toBeInTheDocument();
  });

  it('renders spinner when loading value', () => {
    render(<FormSummaryValue isLoading />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('has accessible empty value', () => {
    render(<FormSummaryEmptyValue />);
    expect(screen.getByText('Ikke fylt ut')).toBeInTheDocument();
    expect(
      screen.getByText('-', { selector: '[aria-hidden="true"]' }),
    ).toBeInTheDocument();
  });
});
