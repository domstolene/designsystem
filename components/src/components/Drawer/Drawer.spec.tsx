import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRef, useState } from 'react';
import { Drawer } from '.';
import { Button } from '../Button';

const buttonLabel = 'label';
const content = 'content';

const TestComponent = () => {
  const [isClosed, setIsClosed] = useState(true);
  const close = () => setIsClosed(true);
  const show = () => setIsClosed(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button label={buttonLabel} ref={buttonRef} onClick={show} />
      <Drawer isOpen={!isClosed} onClose={close} triggerRef={buttonRef}>
        {content}
      </Drawer>
    </>
  );
};

describe('<Drawer />', () => {
  it('should be hidden by default', () => {
    render(<TestComponent />);
    const element = screen.queryByText(content);
    expect(element).not.toBeInTheDocument();
    const drawer = screen.queryByRole('dialog');
    expect(drawer).not.toBeInTheDocument();
  });

  it('should open on click', () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);
    fireEvent.click(button);
    const drawer = screen.getByRole('dialog');
    expect(drawer).toBeInTheDocument();
  });
  it('should render content when open', () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);
    fireEvent.click(button);
    const element = screen.getByText(content);
    expect(element).toBeInTheDocument();
  });
  it('should hide after Esc keydown', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);
    button.click();
    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
    fireEvent.keyDown(el, { key: 'Escape', code: 'Escape' });
    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });
  it('should hide after close button click', async () => {
    render(<TestComponent />);
    const button = screen.getByText(buttonLabel);
    button.click();
    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
    const closeButton = screen.getByLabelText('Lukk');
    fireEvent.click(closeButton!);
    const elQuery = screen.queryByRole('dialog');
    await waitFor(() => {
      expect(elQuery).not.toBeInTheDocument();
    });
  });
});
