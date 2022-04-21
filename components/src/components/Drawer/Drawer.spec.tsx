import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Drawer, DrawerGroup } from '.';
import { Button } from '../Button';

const buttonLabel = 'label';
const content = 'content';

const TestComponent = () => {
  return (
    <DrawerGroup>
      <Button label={buttonLabel} />
      <Drawer>{content}</Drawer>
    </DrawerGroup>
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

  it('should call additional onClose event on click', () => {
    const event = jest.fn();
    render(
      <DrawerGroup onClose={event}>
        <Button label={buttonLabel} />
        <Drawer>{content}</Drawer>
      </DrawerGroup>
    );
    const button = screen.getByText(buttonLabel);
    button.click();
    const closeButton = screen.getAllByRole('button')[1];
    fireEvent.click(closeButton!);
    expect(event).toHaveBeenCalled();
  });
  it('should call additional onClose event on Esc keydown', () => {
    const event = jest.fn();
    render(
      <DrawerGroup onClose={event}>
        <Button label={buttonLabel} />
        <Drawer>{content}</Drawer>
      </DrawerGroup>
    );
    const button = screen.getByText(buttonLabel);
    button.click();
    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
    fireEvent.keyDown(el, { key: 'Escape', code: 'Escape' });
    expect(event).toHaveBeenCalled();
  });
  it('should call additional onOpen event on click', () => {
    const event = jest.fn();
    render(
      <DrawerGroup onOpen={event}>
        <Button label={buttonLabel} />
        <Drawer>{content}</Drawer>
      </DrawerGroup>
    );
    const button = screen.getByText(buttonLabel);
    fireEvent.click(button!);
    expect(event).toHaveBeenCalled();
  });
});
