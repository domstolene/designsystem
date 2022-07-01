import {
  screen,
  fireEvent,
  render,
  waitFor,
  act
} from '@testing-library/react';
import { Tooltip } from '.';
import { Button } from '../Button';

// Mock the ResizeObserver
window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

describe('<Tooltip />', () => {
  it('should render tooltip', async () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>
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
      </Tooltip>
    );
    const textElement = screen.getByText(text);
    await waitFor(() => {
      expect(textElement).toBeDefined();
    });
  });
  it('anchor element should have tooltip id as aria-describedby', async () => {
    const text = 'text';
    const id = 'id';
    render(
      <Tooltip text={text} tooltipId={id}>
        <Button />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    const tooltip = screen.getByText(text);
    await waitFor(() => {
      expect(anchorElement).toHaveAttribute('aria-describedby', id);
      expect(tooltip).toHaveAttribute('id', id);
    });
  });
  it('should give tooltip aria-hidden=false on focus', async () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    fireEvent.focusIn(anchorElement);
    await waitFor(() => {
      expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
    });
  });
  it('should give tooltip aria-hidden=false on mouse over', async () => {
    const text = 'text';
    const testId = 'test1';
    render(
      <Tooltip text={text} data-testid={testId}>
        <Button />
      </Tooltip>
    );

    const containerElement = screen.getByTestId(testId);

    act(() => {
      fireEvent.mouseOver(containerElement!);
    });

    await waitFor(() => {
      expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
    });
  });
  it('should call button onFocus event', async () => {
    const event = jest.fn();
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button onFocus={event} />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    fireEvent.focus(anchorElement!);
    await waitFor(() => {
      expect(event).toHaveBeenCalled();
    });
  });
  it('should call container onMouseLeave event', async () => {
    const event = jest.fn();
    const text = 'text';
    const testId = 'test1';
    render(
      <Tooltip onMouseLeave={event} text={text} data-testid={testId}>
        <Button />
      </Tooltip>
    );

    const containerElement = screen.getByTestId(testId);

    act(() => {
      fireEvent.mouseLeave(containerElement!);
    });

    await waitFor(() => {
      expect(event).toHaveBeenCalled();
    });
  });
});
