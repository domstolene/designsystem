import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid, GridChild } from '.';

describe('<Grid>', () => {
  it('should render content', () => {
    const text = 'text';
    render(
      <Grid as="div">
        <GridChild>{text}</GridChild>
      </Grid>,
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
