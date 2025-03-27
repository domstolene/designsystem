import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Show } from '.';

describe('<Show>', () => {
  it('should render content', () => {
    const text = 'text';
    render(<Show>{text}</Show>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
