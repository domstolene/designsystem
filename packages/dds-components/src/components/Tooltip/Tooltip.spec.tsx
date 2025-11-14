import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import { Tooltip } from '.';

const text = 'text';

describe('<Tooltip>', () => {
  describe('persistent', async () => {
    it('should not make tooltip accessible initially ', async () => {
      render(
        <Tooltip text={text}>
          <Button />
        </Tooltip>,
      );

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });

    it('should render tooltip text', async () => {
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
    it('should make tooltip accessible on hover', async () => {
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

    it('should make tooltip accessible on focus', async () => {
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

    it('anchor element should have tooltip text as accessible description', async () => {
      const id = 'id';
      render(
        <Tooltip text={text} tooltipId={id}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      expect(anchorElement).toHaveAccessibleDescription(text);
    });

    it('should give tooltip aria-hidden=false on focus', async () => {
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

    it('should give tooltip aria-hidden=true on blur', async () => {
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

    it('should give tooltip aria-hidden=false on mouse over', async () => {
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

    it('should give tooltip aria-hidden=true on mouse leave', async () => {
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

    it('should call button onFocus event', async () => {
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

    it('should call button onBlur event', async () => {
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

    it('should call container onMouseOver event', async () => {
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

    it('should call container onMouseLeave event', async () => {
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

    it('should close on Esc', async () => {
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
    it('should not render tooltip initially', async () => {
      render(
        <Tooltip keepMounted={false} text={text}>
          <Button />
        </Tooltip>,
      );
      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });

    it('should render tooltip on hover', async () => {
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

    it('should render tooltip on focus', async () => {
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

    it('should render tooltip text when mounted', async () => {
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

    it('anchor element should not have accessible description when tooltip not mounted', async () => {
      const id = 'id';
      render(
        <Tooltip keepMounted={false} text={text} tooltipId={id}>
          <Button />
        </Tooltip>,
      );
      const anchorElement = screen.getByRole('button');
      expect(anchorElement).not.toHaveAccessibleDescription();
    });

    it('anchor element should have tooltip text as accessible description', async () => {
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

    it('should call button onFocus event', async () => {
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

    it('should call button onBlur event', async () => {
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

    it('should call container onMouseOver event', async () => {
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

    it('should call container onMouseLeave event', async () => {
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

    it('should not use aria-hidden', async () => {
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

    it('should close on Esc', async () => {
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
