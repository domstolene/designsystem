import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VStack } from '.';

describe('<VStack>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<VStack>{text}</VStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render specified HTML element', () => {
    render(<VStack as="button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
