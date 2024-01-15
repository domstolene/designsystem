import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Caption } from './Caption';

describe('<Caption />', () => {
  it('should have text', () => {
    const text = 'text';
    render(
      <table>
        <Caption>{text}</Caption>
      </table>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('should render a caption', () => {
    const text = 'text';
    render(
      <table>
        <Caption>{text}</Caption>
      </table>,
    );
    expect(screen.getByText(text).nodeName).toBe('CAPTION');
  });
});
