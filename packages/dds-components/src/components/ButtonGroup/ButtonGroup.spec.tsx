import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button/Button';

import { ButtonGroup } from '.';

describe('<ButtonGroup>', () => {
  it('renders a button', () => {
    render(
      <ButtonGroup>
        <Button />
      </ButtonGroup>,
    );
    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
  });
  it('renders three buttons', () => {
    render(
      <ButtonGroup>
        <Button />
        <Button />
        <Button />
      </ButtonGroup>,
    );
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
  });
  it('has group role as default', () => {
    render(<ButtonGroup />);
    const group = screen.getByRole('group');

    expect(group).toBeInTheDocument();
  });
  it('has toolbar role', () => {
    render(<ButtonGroup role="toolbar" />);
    const toolbar = screen.getByRole('toolbar');

    expect(toolbar).toBeInTheDocument();
  });
});
