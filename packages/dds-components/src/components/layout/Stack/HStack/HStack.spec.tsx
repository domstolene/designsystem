import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HStack } from '.';

describe('<HStack>', () => {
  it('renders content', () => {
    const text = 'text';
    render(<HStack>{text}</HStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders specified HTML element', () => {
    render(<HStack as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
