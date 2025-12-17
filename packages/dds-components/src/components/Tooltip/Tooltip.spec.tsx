import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import { Tooltip } from '.';

const text = 'text';

describe('<Tooltip>', () => {
  describe('persistent', async () => {
    it('does not make tooltip accessible initially ', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });

    it('renders tooltip text', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );
      const textElement = screen.getByText(text);
      await waitFor(() => {
        expect(textElement).toBeInTheDocument();
      });
    });
    it('makes tooltip accessible on hover', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      await user.hover(anchorElement);

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('makes tooltip accessible on focus', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement);

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('anchor element has tooltip text as accessible description', async () => {
      const id = 'id';
      render(
        <Tooltip text={text} tooltipId={id}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      expect(anchorElement).toHaveAccessibleDescription(text);
    });

    it('gives tooltip aria-hidden=false on focus', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement);

      await waitFor(() => {
        expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('gives tooltip aria-hidden=true on blur', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement);

      await waitFor(() => {
        expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
      });
      fireEvent.blur(anchorElement);
      await waitFor(() => {
        expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('gives tooltip aria-hidden=false on mouse over', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      await userEvent.hover(screen.getByRole('button'));
      await waitFor(() =>
        expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false'),
      );
    });

    it('gives tooltip aria-hidden=true on mouse leave', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      await user.hover(screen.getByRole('button'));
      await user.unhover(screen.getByRole('button'));
      await waitFor(() =>
        expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'true'),
      );
    });

    it('calls button onFocus event', async () => {
      const event = vi.fn();
      render(
        <Tooltip text={text}>
          <Button onFocus={event} />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement!);
      await waitFor(() => {
        expect(event).toHaveBeenCalled();
      });
    });

    it('calls button onBlur event', async () => {
      const event = vi.fn();
      render(
        <Tooltip text={text}>
          <Button onBlur={event} />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement!);
      fireEvent.blur(anchorElement!);
      await waitFor(() => {
        expect(event).toHaveBeenCalled();
      });
    });

    it('calls container onMouseOver event', async () => {
      const event = vi.fn();
      const testId = 'test1';
      render(
        <Tooltip onMouseOver={event} text={text} data-testid={testId}>
          <Button />
        </Tooltip>,
      );

      const containerElement = screen.getByTestId(testId);

      await userEvent.hover(containerElement);

      expect(event).toHaveBeenCalled();
    });

    it('calls container onMouseLeave event', async () => {
      const event = vi.fn();
      const user = userEvent.setup();
      const testId = 'test1';
      render(
        <Tooltip onMouseLeave={event} text={text} data-testid={testId}>
          <Button />
        </Tooltip>,
      );

      const containerElement = screen.getByTestId(testId);

      await user.hover(containerElement);
      await user.unhover(containerElement);

      expect(event).toHaveBeenCalled();
    });

    it('closes on Esc', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );
      await user.hover(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });

      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });
  });
  describe('not persistent', () => {
    it('does not render tooltip initially', async () => {
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });

    it('renders tooltip on hover', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      const button = screen.getByRole('button');
      await user.hover(button);

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('renders tooltip on focus', async () => {
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      const button = screen.getByRole('button');
      fireEvent.focus(button);

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('renders tooltip text when mounted', async () => {
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      await userEvent.hover(anchorElement);

      await waitFor(() => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    it('anchor element does not have accessible description when tooltip not mounted', async () => {
      const id = 'id';
      render(
        <Tooltip keepMounted={false} text={text} tooltipId={id}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      expect(anchorElement).not.toHaveAccessibleDescription();
    });

    it('anchor element does have tooltip text as accessible description', async () => {
      const id = 'id';
      const user = userEvent.setup();
      render(
        <Tooltip keepMounted={false} text={text} tooltipId={id}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      await user.hover(anchorElement);
      await waitFor(() => {
        expect(anchorElement).toHaveAccessibleDescription(text);
      });
    });

    it('calls button onFocus event', async () => {
      const event = vi.fn();

      render(
        <Tooltip keepMounted={false} text={text}>
          <Button onFocus={event} />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement!);
      await waitFor(() => {
        expect(event).toHaveBeenCalled();
      });
    });

    it('calls button onBlur event', async () => {
      const event = vi.fn();
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button onBlur={event} />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      fireEvent.focus(anchorElement!);
      fireEvent.blur(anchorElement!);
      await waitFor(() => {
        expect(event).toHaveBeenCalled();
      });
    });

    it('calls container onMouseOver event', async () => {
      const event = vi.fn();
      const testId = 'test1';
      render(
        <Tooltip
          keepMounted={false}
          onMouseOver={event}
          text={text}
          data-testid={testId}
        >
          <Button />
        </Tooltip>,
      );

      const containerElement = screen.getByTestId(testId);

      await userEvent.hover(containerElement);

      expect(event).toHaveBeenCalled();
    });

    it('calls container onMouseLeave event', async () => {
      const event = vi.fn();

      const testId = 'test1';
      render(
        <Tooltip
          keepMounted={false}
          onMouseLeave={event}
          text={text}
          data-testid={testId}
        >
          <Button />
        </Tooltip>,
      );
      const containerElement = screen.getByTestId(testId);

      await userEvent.hover(containerElement);
      await userEvent.unhover(containerElement);

      expect(event).toHaveBeenCalled();
    });

    it('does not use aria-hidden', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      const button = screen.getByRole('button');
      await user.hover(button);

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).not.toHaveAttribute('aria-hidden');
      });
    });

    it('closes on Esc', async () => {
      const user = userEvent.setup();

      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      await user.hover(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });

      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });
  });
});
