import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Link>{text}</Link>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
  it('should have role="link"', () => {
    render(<Link href="/">text</Link>);
    expect(screen.queryByRole('link')).toBeInTheDocument();
  });
});
