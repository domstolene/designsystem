import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProgressTracker } from './ProgressTracker';

describe('<ProgressTracker>', () => {
  it('should render navigation', () => {
    render(<ProgressTracker />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('should have accesible name', () => {
    render(<ProgressTracker />);
    expect(screen.getByRole('navigation')).toHaveAccessibleName(
      'stegprogresjon',
    );
  });
  describe('steps', () => {
    it('should render step buttons', () => {
      render(
        <ProgressTracker>
          <ProgressTracker.Item>Parter</ProgressTracker.Item>
          <ProgressTracker.Item>Slutning</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });
    it('should render button labels', () => {
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
    it('should render disabled button', () => {
      const text1 = 'a';

      render(
        <ProgressTracker>
          <ProgressTracker.Item disabled>{text1}</ProgressTracker.Item>
        </ProgressTracker>,
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
    it('should have accessible names', () => {
      const text1 = 'a';
      const text2 = 'b';
      render(
        <ProgressTracker>
          <ProgressTracker.Item>{text1}</ProgressTracker.Item>
          <ProgressTracker.Item>{text2}</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveAccessibleName(
        `1. trinn, ${text1} , ikke ferdig`,
      );
      expect(buttons[1]).toHaveAccessibleName(
        `2. trinn, ${text2} , ikke ferdig`,
      );
    });
    it('should have accessible completed name', () => {
      const text1 = 'a';
      const text2 = 'b';
      render(
        <ProgressTracker>
          <ProgressTracker.Item>{text1}</ProgressTracker.Item>
          <ProgressTracker.Item completed>{text2}</ProgressTracker.Item>
        </ProgressTracker>,
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveAccessibleName(`2. trinn, ${text2} , ferdig`);
    });
  });
});
