import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Caption } from './Caption';

describe('<Caption>', () => {
  it('renders text', () => {
    const text = 'text';
    render(
      <table>
        <Caption>{text}</Caption>
      </table>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it('renders a caption', () => {
    render(
      <table>
        <Caption />
      </table>,
    );
    expect(screen.getByRole('caption')).toBeInTheDocument();
  });
});
