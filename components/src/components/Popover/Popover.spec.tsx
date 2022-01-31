import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Popover, PopoverGroup } from '.';
import { Button } from '../Button';

describe('<Popover />', () => {
  it('should have aria-controls attribute on anchor element', () => {
    const { container } = render(
      <PopoverGroup>
        <Button />
        <Popover />
      </PopoverGroup>
    );
    const anchorElement = container.querySelector('button');
    expect(anchorElement).toHaveAttribute('aria-controls');
  });
  it('should have aria-haspopup attribute on anchor element', () => {
    const { container } = render(
      <PopoverGroup>
        <Button />
        <Popover />
      </PopoverGroup>
    );
    const anchorElement = container.querySelector('button');
    expect(anchorElement).toHaveAttribute('aria-haspopup');
  });
  it('should run onclick event for closing button', () => {
    const event = jest.fn();
    const { container } = render(
      <PopoverGroup onCloseButtonClick={event}>
        <Button />
        <Popover />
      </PopoverGroup>
    );
    const closeButton = container.querySelector('div')?.querySelector('button');
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
});
