import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Tag } from '.';

describe('<Tag>', () => {
  it('displays provided text', () => {
    const text = 'text';
    render(<Tag>{text}</Tag>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
