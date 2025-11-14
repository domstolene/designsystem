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
  it('should render children', () => {
    const text = 'text';
    render(<FormSummary>{text}</FormSummary>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render button', () => {
    render(<FormSummaryEditButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should render heading', () => {
    render(<FormSummaryHeading />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render label', () => {
    const label = 'Label';
    render(<FormSummaryLabel>{label}</FormSummaryLabel>);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should render value', () => {
    const value = 'Value';
    render(<FormSummaryValue>{value}</FormSummaryValue>);
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it('should render error message', () => {
    const msg = 'Msg';
    render(<FormSummaryError>{msg}</FormSummaryError>);
    expect(screen.getByText(msg)).toBeInTheDocument();
  });

  it('should render spinner when loading value', () => {
    render(<FormSummaryValue isLoading />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should have accessible empty value', () => {
    render(<FormSummaryEmptyValue />);
    expect(screen.getByText('Ikke fylt ut')).toBeInTheDocument();
    expect(
      screen.getByText('-', { selector: '[aria-hidden="true"]' }),
    ).toBeInTheDocument();
  });
});
