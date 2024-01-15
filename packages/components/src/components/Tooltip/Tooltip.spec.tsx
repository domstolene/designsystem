import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { Tooltip } from '.';
import { Button } from '../Button';
import userEvent from '@testing-library/user-event';

// Mock the IntersectionObserver
window.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('<Tooltip />', () => {
  it('should render tooltip', async () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>,
    );
    const tooltip = screen.getByText(text);
    await waitFor(() => {
      expect(tooltip).toHaveAttribute('role', 'tooltip');
    });
  });
  it('should render tooltip text', async () => {
    const text = 'text';
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
  it('anchor element should have tooltip id as aria-describedby', async () => {
    const text = 'text';
    const id = 'id';
    render(
      <Tooltip text={text} tooltipId={id}>
        <Button />
      </Tooltip>,
    );
    const anchorElement = screen.getByRole('button');
    const tooltip = screen.getByText(text);
    expect(anchorElement).toHaveAttribute('aria-describedby', id);
    expect(tooltip).toHaveAttribute('id', id);
  });
  it('should give tooltip aria-hidden=false on focus', async () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>,
    );
    const anchorElement = screen.getByRole('button');
    fireEvent.focusIn(anchorElement);
    await waitFor(() => {
      expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
    });
  });
  it('should give tooltip aria-hidden=false on mouse over', async () => {
    const text = 'text';
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
  it('should call button onFocus event', async () => {
    const event = vi.fn();
    const text = 'text';
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
  it('should call container onMouseLeave event', async () => {
    const event = vi.fn();
    const text = 'text';
    const testId = 'test1';
    render(
      <Tooltip onMouseLeave={event} text={text} data-testid={testId}>
        <Button />
      </Tooltip>,
    );

    const containerElement = screen.getByTestId(testId);

    await userEvent.hover(containerElement);
    await userEvent.unhover(containerElement);

    expect(event).toHaveBeenCalled();
  });
});
