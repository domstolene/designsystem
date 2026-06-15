import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { vi } from 'vitest';

import { CardExpandable } from './CardExpandable';
import { CardExpandableBody } from './CardExpandableBody';
import { CardExpandableHeader } from './CardExpandableHeader';

describe('<CardExpandable>', () => {
  it('renders content text', () => {
    const textHeading = 'textHeading';
    const textBody = 'textBody';
    render(
      <CardExpandable>
        <CardExpandableHeader>{textHeading}</CardExpandableHeader>
        <CardExpandableBody>{textBody}</CardExpandableBody>
      </CardExpandable>,
    );
    expect(screen.getByText(textHeading)).toBeInTheDocument();
    expect(screen.getByText(textBody)).toBeInTheDocument();
  });

  describe('collapsed state', () => {
    it('renders correct semantic elements', () => {
      render(
        <CardExpandable>
          <CardExpandableHeader></CardExpandableHeader>
          <CardExpandableBody></CardExpandableBody>
        </CardExpandable>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });

    it('is not expanded', () => {
      render(
        <CardExpandable>
          <CardExpandableHeader></CardExpandableHeader>
          <CardExpandableBody></CardExpandableBody>
        </CardExpandable>,
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });
  });
  describe('expanded state', () => {
    it('renders correct semantic elements ', () => {
      render(
        <CardExpandable isInitiallyExpanded>
          <CardExpandableHeader></CardExpandableHeader>
          <CardExpandableBody></CardExpandableBody>
        </CardExpandable>,
      );

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('region')).toBeInTheDocument();
    });

    it('is expanded', () => {
      render(
        <CardExpandable isInitiallyExpanded>
          <CardExpandableHeader></CardExpandableHeader>
          <CardExpandableBody></CardExpandableBody>
        </CardExpandable>,
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      expect(screen.getByRole('region')).toHaveAttribute(
        'aria-hidden',
        'false',
      );
    });
    it('header controls body', () => {
      const id = 'test-id';
      render(
        <CardExpandable isInitiallyExpanded id={id}>
          <CardExpandableHeader></CardExpandableHeader>
          <CardExpandableBody></CardExpandableBody>
        </CardExpandable>,
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-controls',
        `${id}-body`,
      );
      expect(screen.getByRole('region')).toHaveAttribute(
        'aria-labelledby',
        `${id}-header`,
      );
    });
  });

  describe('interaction', () => {
    it('can collapse by clicking header button', async () => {
      const user = userEvent.setup();
      render(
        <CardExpandable isInitiallyExpanded>
          <CardExpandableHeader>Header</CardExpandableHeader>
          <CardExpandableBody>Body</CardExpandableBody>
        </CardExpandable>,
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(screen.getByRole('region', { hidden: true })).toHaveAttribute(
        'aria-hidden',
        'true',
      );
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });

    it('can expand by clicking header button', async () => {
      const user = userEvent.setup();
      render(
        <CardExpandable>
          <CardExpandableHeader>Header</CardExpandableHeader>
          <CardExpandableBody>Body</CardExpandableBody>
        </CardExpandable>,
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('region')).toHaveAttribute(
        'aria-hidden',
        'false',
      );
    });

    it('calls onChange with updated expanded state', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      render(
        <CardExpandable onChange={onChange}>
          <CardExpandableHeader>Header</CardExpandableHeader>
          <CardExpandableBody>Body</CardExpandableBody>
        </CardExpandable>,
      );

      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('button'));

      expect(onChange).toHaveBeenNthCalledWith(1, true);
      expect(onChange).toHaveBeenNthCalledWith(2, false);
    });

    it('uses controlled state when isExpanded is set', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      render(
        <CardExpandable isExpanded={false} onChange={onChange}>
          <CardExpandableHeader>Header</CardExpandableHeader>
          <CardExpandableBody>Body</CardExpandableBody>
        </CardExpandable>,
      );

      const button = screen.getByRole('button');
      await user.click(button);

      expect(onChange).toHaveBeenCalledWith(true);
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('region')).not.toBeInTheDocument();
    });
  });
});
