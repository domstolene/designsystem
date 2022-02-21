import '@testing-library/jest-dom';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { Tooltip } from '.';
import { Button } from '../Button';

describe('<Tooltip />', () => {
  it('should render tooltip', () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>
    );
    const tooltip = screen.getByText(text);
    expect(tooltip).toHaveAttribute('role', 'tooltip');
  });
  it('should render tooltip text', () => {
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button />
      </Tooltip>
    );
    const textElement = screen.getByText(text);
    expect(textElement).toBeDefined();
  });
  it('anchor element should have tooltip id as aria-describedby', () => {
    const text = 'text';
    const id = 'id';
    render(
      <Tooltip text={text} tooltipId={id}>
        <Button />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    expect(anchorElement).toHaveAttribute('aria-describedby', id);
    const tooltip = screen.getByText(text);
    expect(tooltip).toHaveAttribute('id', id);
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
    fireEvent.mouseOver(containerElement);
    await waitFor(() => {
      expect(screen.getByText(text)).toHaveAttribute('aria-hidden', 'false');
    });
  });
  it('should call button onFocus event', () => {
    const event = jest.fn();
    const text = 'text';
    render(
      <Tooltip text={text}>
        <Button onFocus={event} />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    fireEvent.focus(anchorElement!);
    expect(event).toHaveBeenCalled();
  });
  it('should call container onMouseLeave event', () => {
    const event = jest.fn();
    const text = 'text';
    const testId = 'test1';
    render(
      <Tooltip onMouseLeave={event} text={text} data-testid={testId}>
        <Button />
      </Tooltip>
    );
    const containerElement = screen.getByTestId(testId);
    fireEvent.mouseLeave(containerElement!);
    expect(event).toHaveBeenCalled();
  });
});
