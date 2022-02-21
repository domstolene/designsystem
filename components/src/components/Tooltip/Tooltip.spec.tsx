import '@testing-library/jest-dom';
import { screen, fireEvent, render } from '@testing-library/react';
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
      <Tooltip text={text} id={id}>
        <Button />
      </Tooltip>
    );
    const anchorElement = screen.getByRole('button');
    expect(anchorElement).toHaveAttribute('aria-describedby', id);
    const tooltip = screen.getByText(text);
    expect(tooltip).toHaveAttribute('id', id);
  });
  it('should call onFocus event', () => {
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
});
