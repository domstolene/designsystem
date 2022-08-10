import { screen, render } from '@testing-library/react';
import { Popover, PopoverGroup } from '.';
import { Button } from '../Button';

describe('<Popover />', () => {
  it('should have aria-controls attribute on trigger element', () => {
    const { container } = render(
      <PopoverGroup>
        <Button />
        <Popover />
      </PopoverGroup>
    );
    const triggerElement = container.querySelector('button');
    expect(triggerElement).toHaveAttribute('aria-controls');
  });

  it('should have aria-haspopup attribute on trigger element', () => {
    const { container } = render(
      <PopoverGroup>
        <Button />
        <Popover />
      </PopoverGroup>
    );
    const triggerElement = container.querySelector('button');
    expect(triggerElement).toHaveAttribute('aria-haspopup', 'dialog');
  });

  it('should render title', () => {
    const title = 'title';
    render(
      <PopoverGroup>
        <Button />
        <Popover title={title} />
      </PopoverGroup>
    );
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render content', () => {
    const content = 'content';
    render(
      <PopoverGroup>
        <Button />
        <Popover>{content}</Popover>
      </PopoverGroup>
    );
    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  //må fikse disse testene

  // it('trigger element should control aria-hidden attribute in <Popover /> on click', () => {
  //   const idButton = 'test';
  //   const idPopover = 'test2';
  //   render(
  //     <PopoverGroup popoverId={idPopover}>
  //       <Button id={idButton} />
  //       <Popover />
  //     </PopoverGroup>
  //   );
  //   const popover = document.getElementById(idPopover);
  //   expect(popover).toHaveAttribute('aria-hidden', 'true');
  //   const triggerElement = document.getElementById(idButton);
  //   triggerElement?.click();
  //   expect(popover).toHaveAttribute('aria-hidden', 'false');
  //   triggerElement?.click();
  //   expect(popover).toHaveAttribute('aria-hidden', 'true');
  // });

  // it('Esc press should set aria-hidden=true attribute in <Popover />', async () => {
  //   const buttonId = 'test';
  //   const popoverId = 'test2';
  //   const { container } = render(
  //     <PopoverGroup popoverId={popoverId}>
  //       <Button id={buttonId} />
  //       <Popover />
  //     </PopoverGroup>
  //   );
  //   const popover = container.querySelector(`#${popoverId}`);
  //   expect(popover).toHaveAttribute('aria-hidden', 'true');
  //   const triggerElement = document.getElementById(buttonId);
  //   triggerElement?.click();
  //   expect(popover).toHaveAttribute('aria-hidden', 'false');
  //   fireEvent.keyDown(container, {
  //     key: 'Escape',
  //     code: 'Escape',
  //     keyCode: 27,
  //     charCode: 27
  //   });
  //   expect(popover).toHaveAttribute('aria-hidden', 'true');
  //   await waitFor(() => {
  //     expect(document.activeElement === triggerElement).toBeTruthy();
  //   });
  // });

  // it('should run onclick event for closing button', () => {
  //   const event = jest.fn();
  //   const { container } = render(
  //     <PopoverGroup onCloseButtonClick={event}>
  //       <Button />
  //       <Popover />
  //     </PopoverGroup>
  //   );
  //   const closeButton = container.querySelector('div')?.querySelector('button');
  //   fireEvent.click(closeButton!);
  //   expect(event).toHaveBeenCalled();
  // });
  // it('should run onclick event for trigger element', () => {
  //   const event = jest.fn();
  //   const { container } = render(
  //     <PopoverGroup onTriggerClick={event}>
  //       <Button />
  //       <Popover />
  //     </PopoverGroup>
  //   );
  //   const triggerButton = container.querySelector('button');
  //   fireEvent.click(triggerButton!);
  //   expect(event).toHaveBeenCalled();
  // });
});
