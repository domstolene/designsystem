import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProgressTracker } from './ProgressTracker';

describe('<ProgressTracker>', () => {
  it('renders navigation', () => {
    render(<ProgressTracker />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('has accesible name', () => {
    render(<ProgressTracker />);
    expect(screen.getByRole('navigation')).toHaveAccessibleName(
      'Trinnprogresjon',
    );
  });
  describe('steps', () => {
    it('renders step buttons', () => {
      render(
        <ProgressTracker>
          <ProgressTracker.Item>Parter</ProgressTracker.Item>
          <ProgressTracker.Item>Slutning</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });
    it('renders button labels', () => {
      const text1 = 'a';
      const text2 = 'b';
      render(
        <ProgressTracker>
          <ProgressTracker.Item>{text1}</ProgressTracker.Item>
          <ProgressTracker.Item>{text2}</ProgressTracker.Item>
        </ProgressTracker>,
      );

      expect(screen.getByText(text1)).toBeInTheDocument();
      expect(screen.getByText(text2)).toBeInTheDocument();
    });
    it('renders disabled button', () => {
      const text1 = 'a';

      render(
        <ProgressTracker>
          <ProgressTracker.Item disabled>{text1}</ProgressTracker.Item>
        </ProgressTracker>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
    it('has accessible names', () => {
      const text1 = 'a';
      const text2 = 'b';
      render(
        <ProgressTracker>
          <ProgressTracker.Item>{text1}</ProgressTracker.Item>
          <ProgressTracker.Item>{text2}</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveAccessibleName(`${text1}, 1. trinn ikke ferdig`);
      expect(buttons[1]).toHaveAccessibleName(`${text2}, 2. trinn ikke ferdig`);
    });
    it('has accessible completed name', () => {
      const text1 = 'a';
      const text2 = 'b';
      render(
        <ProgressTracker>
          <ProgressTracker.Item>{text1}</ProgressTracker.Item>
          <ProgressTracker.Item completed>{text2}</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveAccessibleName(`${text2}, 2. trinn ferdig`);
    });
  });
});
