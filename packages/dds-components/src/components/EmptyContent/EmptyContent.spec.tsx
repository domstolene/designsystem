import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from '../Typography';

import { EmptyContent } from '.';

describe('<EmptyContent>', () => {
  it('should render message text', () => {
    const message = 'message';
    render(<EmptyContent message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
  it('should render title text', () => {
    const message = 'message';
    const title = 'title';
    render(<EmptyContent message={message} headerText={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('should render message link', () => {
    const linkText = 'link';
    const message = (
      <>
        Tekst <Link href="/">{linkText}</Link>
      </>
    );
    render(<EmptyContent message={message} />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});
