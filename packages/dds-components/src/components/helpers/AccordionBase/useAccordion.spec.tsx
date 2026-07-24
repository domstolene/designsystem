import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { type AccordionConfig, useAccordion } from './useAccordion';

// ---------------------------------------------------------------------------
// Test wrapper — exposes all AccordionConfig props and renders both header and body
// ---------------------------------------------------------------------------

const AccordionWrapper = (props: AccordionConfig) => {
  const { isExpanded, bodyContentRef, headerProps, bodyProps } =
    useAccordion(props);
  const { height, ...restBodyProps } = bodyProps;

  return (
    <div>
      <button {...headerProps}>{isExpanded ? 'Skjul' : 'Vis'} innhold</button>
      <div style={{ height }} {...restBodyProps}>
        <div ref={bodyContentRef}>innhold</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('useAccordion', () => {
  describe('default initial state', () => {
    it('renders a header button', () => {
      render(<AccordionWrapper />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('header button is not expanded by default', () => {
      render(<AccordionWrapper />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('body region is hidden by default', () => {
      render(<AccordionWrapper />);
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });
  });

  describe('expanded initial state', () => {
    it('header button is expanded', () => {
      render(<AccordionWrapper isInitiallyExpanded />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('body region is visible', () => {
      render(<AccordionWrapper isInitiallyExpanded />);
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('body region aria-hidden is false', () => {
      render(<AccordionWrapper isInitiallyExpanded />);
      expect(screen.getByRole('region')).toHaveAttribute(
        'aria-hidden',
        'false',
      );
    });
  });

  describe('toggle interaction', () => {
    it('expands on click', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);

      await user.click(screen.getByRole('button'));

      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      await waitFor(() => {
        expect(screen.getByRole('region')).toHaveAttribute(
          'aria-hidden',
          'false',
        );
      });
    });

    it('collapses on click', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper isInitiallyExpanded />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });

    it('toggles back and forth', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);

      const button = screen.getByRole('button');

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('aria attributes', () => {
    it('body is labelled by header', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        const body = screen.getByRole('region');
        const button = screen.getByRole('button');
        expect(body).toHaveAttribute('aria-labelledby', button.id);
      });
    });

    it('header controls body', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        const button = screen.getByRole('button');
        const body = screen.getByRole('region');
        expect(button).toHaveAttribute('aria-controls', body.id);
      });
    });

    it('header id ends with -header suffix', () => {
      render(<AccordionWrapper />);
      expect(screen.getByRole('button').id).toMatch(/-header$/);
    });

    it('body id ends with -body suffix', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);
      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('region').id).toMatch(/-body$/);
      });
    });

    it('header id and body id share the same base', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper />);
      const button = screen.getByRole('button');
      await user.click(button);

      await waitFor(() => {
        const body = screen.getByRole('region');
        const base = button.id.replace(/-header$/, '');
        expect(body.id).toBe(`${base}-body`);
      });
    });

    it('uses custom id prop as base', async () => {
      const user = userEvent.setup();
      render(<AccordionWrapper id="my-accordion" />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('id', 'my-accordion-header');
      expect(button).toHaveAttribute('aria-controls', 'my-accordion-body');

      await user.click(button);
      await waitFor(() => {
        const body = screen.getByRole('region');
        expect(body).toHaveAttribute('id', 'my-accordion-body');
        expect(body).toHaveAttribute('aria-labelledby', 'my-accordion-header');
      });
    });
  });

  describe('onChange callback', () => {
    it('is called with true when expanding', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<AccordionWrapper onChange={onChange} />);

      await user.click(screen.getByRole('button'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it('is called with false when collapsing', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<AccordionWrapper isInitiallyExpanded onChange={onChange} />);

      await user.click(screen.getByRole('button'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(false);
    });

    it('is called in order on multiple clicks', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<AccordionWrapper onChange={onChange} />);

      const button = screen.getByRole('button');
      await user.click(button);
      await user.click(button);

      expect(onChange).toHaveBeenNthCalledWith(1, true);
      expect(onChange).toHaveBeenNthCalledWith(2, false);
    });
  });

  describe('controlled mode (isExpanded)', () => {
    it('respects isExpanded=false and does not expand on click', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<AccordionWrapper isExpanded={false} onChange={onChange} />);

      await user.click(screen.getByRole('button'));

      expect(onChange).toHaveBeenCalledWith(true);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });

    it('renders as expanded when isExpanded=true', () => {
      render(<AccordionWrapper isExpanded={true} />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('does not collapse when isExpanded=true and button is clicked', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<AccordionWrapper isExpanded={true} onChange={onChange} />);

      await user.click(screen.getByRole('button'));

      expect(onChange).toHaveBeenCalledWith(false);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });
  });
});
