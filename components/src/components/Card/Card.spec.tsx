import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {
  it('should render content text', () => {
    const text = 'text';
    render(<Card>{text}</Card>);
    expect(screen.queryByText(text)).toBeDefined;
  });
  it('should render an anchor element when cardType is navigation and href is provided', () => {
    render(
      <Card cardType="navigation" href="#">
        text
      </Card>
    );
    const card = screen.getByRole('link');
    expect(card).toBeInTheDocument();
  });
});
