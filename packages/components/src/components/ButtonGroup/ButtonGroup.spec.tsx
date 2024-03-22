import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button/Button';

import { ButtonGroup } from '.';

describe('<ButtonGroup />', () => {
  it('should render a button', () => {
    render(
      <ButtonGroup>
        <Button />
      </ButtonGroup>,
    );
    const button = screen.queryByRole('button');

    expect(button).toBeInTheDocument();
  });
  it('should render three buttons', () => {
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
  it('should have role=group as default', () => {
    render(<ButtonGroup />);
    const group = screen.getByRole('group');

    expect(group).toBeInTheDocument();
  });
  it('should have role=toolbar', () => {
    render(<ButtonGroup role="toolbar" />);
    const toolbar = screen.getByRole('toolbar');

    expect(toolbar).toBeInTheDocument();
  });
});
