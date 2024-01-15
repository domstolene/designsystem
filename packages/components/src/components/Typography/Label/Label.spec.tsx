import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('<Label />', () => {
  it('should have text', () => {
    const text = 'text';
    render(<Label>{text}</Label>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render <label>', () => {
    const text = 'text';
    render(<Label>{text}</Label>);
    expect(screen.getByText(text).nodeName).toBe('LABEL');
  });
});
