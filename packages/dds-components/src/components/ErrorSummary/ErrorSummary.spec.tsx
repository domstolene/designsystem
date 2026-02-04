import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorSummary, texts } from './ErrorSummary';
import { ErrorSummaryItem } from './ErrorSummaryItem';
import { Heading } from '../Typography';

describe('<ErrorSummary>', () => {
  it('Renders list, listitems and links', () => {
    render(
      <ErrorSummary>
        <ErrorSummaryItem href="#">test</ErrorSummaryItem>
        <ErrorSummaryItem href="#">test</ErrorSummaryItem>
      </ErrorSummary>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
  it('Renders children text', () => {
    const text = 'text';
    render(
      <ErrorSummary>
        <ErrorSummaryItem href="#">{text}</ErrorSummaryItem>
      </ErrorSummary>,
    );
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
  it('Renders level 2 heading', () => {
    render(<ErrorSummary></ErrorSummary>);
    expect(screen.queryByRole('heading', { level: 2 })).toBeInTheDocument();
  });
  it('Renders default heading text', () => {
    render(<ErrorSummary></ErrorSummary>);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      texts.toProceedCorrectErrors.nb,
    );
  });
  it('Renders custom heading text', () => {
    const text = 'text';
    render(<ErrorSummary heading={text}></ErrorSummary>);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(text);
  });
  it('Renders custom heading', () => {
    const text = 'text';
    const heading = <Heading level={3}>{text}</Heading>;
    render(<ErrorSummary heading={heading}></ErrorSummary>);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(text);
  });
});
