import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from '../Typography';

import { EmptyContent } from '.';

describe('<EmptyContent>', () => {
  it('renders message text', () => {
    const message = 'message';
    render(<EmptyContent>{message}</EmptyContent>);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
  it('renders title text', () => {
    const message = 'message';
    const title = 'title';
    render(<EmptyContent headerText={title}>{message}</EmptyContent>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('renders heading', () => {
    const message = 'message';
    const title = 'title';
    render(<EmptyContent headerText={title}>{message}</EmptyContent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('renders message link', () => {
    const linkText = 'link';
    const message = (
      <>
        Tekst <Link href="/">{linkText}</Link>
      </>
    );
    render(<EmptyContent>{message}</EmptyContent>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});
