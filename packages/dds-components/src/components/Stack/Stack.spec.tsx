import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HStack, VStack } from '.';

describe('<VStack>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<VStack>{text}</VStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
describe('<HStack>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<HStack>{text}</HStack>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
