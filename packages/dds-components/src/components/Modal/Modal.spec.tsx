import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';
import { ThemeProvider } from '../ThemeProvider';

import { Modal, ModalBody, type ModalProps } from '.';

// Modal skal wrappes i ThemeProvider for React Portal
const WrappedModal = (props: ModalProps) => (
  <ThemeProvider>
    <Modal {...props} />
  </ThemeProvider>
);

// Test komponent med full funksjonalitet
const TestComponent = ({
  children,
  defaultOpen = false,
}: {
  children?: ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <ThemeProvider>
      <Button onClick={show} />
      <Modal isOpen={open} onClose={close}>
        {children}
      </Modal>
    </ThemeProvider>
  );
};

describe('<Modal>', () => {
  it('should have header', () => {
    const header = 'title';
    render(<WrappedModal isOpen={true} header={header} />);
    const el = screen.getByText(header);
    expect(el).toBeInTheDocument();
  });

  it('should have role="dialog"', () => {
    render(<WrappedModal isOpen={true} />);
    const el = screen.getByRole('dialog');

    expect(el).toBeInTheDocument();
  });

  it('dialog should not be in DOM by default', () => {
    render(<TestComponent />);
    const el = screen.queryByRole('dialog');
    expect(el).not.toBeInTheDocument();
  });

  it('should be labelled by header', () => {
    const header = 'title';
    render(<WrappedModal isOpen={true} header={header} />);
    const el = screen.getByRole('dialog');

    expect(el).toHaveAccessibleName(header);
  });

  it('should have body content', () => {
    const content = 'content';
    render(
      <WrappedModal isOpen={true}>
        <ModalBody>{content}</ModalBody>
      </WrappedModal>,
    );
    const el = screen.getByText(content);
    expect(el).toBeInTheDocument();
  });

  it('should show after trigger button click', async () => {
    render(<TestComponent />);
    const button = screen.getAllByRole('button')[0];

    await userEvent.click(button);

    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
  });

  it('should hide after Esc keydown', async () => {
    render(<TestComponent defaultOpen />);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('dialog');
    expect(elQuery).not.toBeInTheDocument();
  });

  it('should not hide after Esc keydown if not closable', async () => {
    render(<WrappedModal isOpen={true} />);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    expect(el).toBeInTheDocument();
  });

  it('should prevent scroll when open', async () => {
    // so that scroll is triggered
    window.innerHeight = -1;

    render(<WrappedModal isOpen />);

    expect(document.body.style.position).toBe('fixed');
  });

  it('should restore scroll after unmount', async () => {
    const ModalTest = () => {
      const [showModal, setShowModal] = useState(true);
      return (
        <>
          <button onClick={() => setShowModal(false)}>Close modal</button>
          {showModal && <WrappedModal isOpen />}
        </>
      );
    };

    // so that scroll is triggered
    window.innerHeight = -1;

    render(<ModalTest />);
    const button = screen.getByRole('button');

    expect(document.body.style.position).toBe('fixed');

    await userEvent.click(button);

    expect(document.body.style.position).toBe('');
  });

  it('should not re-mount body when closing', async () => {
    const mount = vi.fn();

    const MountTestComponent = () => {
      useEffect(() => {
        mount();
      }, []);

      return <></>;
    };

    render(
      <TestComponent defaultOpen>
        <ModalBody>
          <MountTestComponent />
        </ModalBody>
      </TestComponent>,
    );
    expect(mount).toBeCalledTimes(1);
    await userEvent.keyboard('[Escape]');
    expect(mount).toBeCalledTimes(1);
  });
});
