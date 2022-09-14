import { render, screen } from '@testing-library/react';
import { Legend } from './Legend';

describe('<Legend />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Legend>{text}</Legend>);
    expect(screen.queryByText(text)).toBeInTheDocument();
  });
  it('should render <legend>', () => {
    const text = 'text';
    render(<Legend>{text}</Legend>);
    expect(screen.getByText(text).nodeName).toBe('LEGEND');
  });
});
