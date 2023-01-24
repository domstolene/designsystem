import { render, screen } from '@testing-library/react';
import { Tag } from '.';

describe('<Tag />', () => {
  it('displays provided text', () => {
    const text = 'text';
    render(<Tag text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
