import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '../Button';

import { Modal, ModalBody } from '.';

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
    <>
      <Button onClick={show} data-testid="open-button" />
      <Modal isOpen={open} onClose={close}>
        {children}
      </Modal>
    </>
  );
};

describe('<Modal />', () => {
  it('should have header with title', () => {
    const header = 'title';
    render(<Modal isOpen={true} header={header}></Modal>);
    const el = screen.getByText(header);
    expect(el).toBeInTheDocument();
  });

  it('should have role="dialog"', () => {
    render(<Modal isOpen={true}></Modal>);
    const el = screen.getByRole('dialog');

    expect(el).toBeInTheDocument();
  });

  it('dialog should not be in DOM by default', () => {
    render(<TestComponent />);
    const el = screen.queryByRole('dialog');
    expect(el).not.toBeInTheDocument();
  });

  it('should have aria-labelledby set to header id', () => {
    const header = 'title';
    const id = 'id';
    render(<Modal id={id} isOpen={true} header={header}></Modal>);
    const el = screen.getByRole('dialog');

    expect(el).toHaveAttribute('aria-labelledby', `${id}-header`);
    const label = screen.getByLabelText(header);
    expect(label).toBeInTheDocument();
  });

  it('should have body content', () => {
    const content = 'content';
    render(
      <Modal isOpen={true}>
        <ModalBody>{content}</ModalBody>
      </Modal>,
    );
    const el = screen.getByText(content);
    expect(el).toBeInTheDocument();
  });

  it('should show after trigger button click', async () => {
    render(<TestComponent />);
    const button = screen.getAllByRole('button')[0];

    act(() => {
      button.click();
    });

    const el = await screen.findByRole('dialog');
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

  it('should prevent scroll when open', async () => {
    // so that scroll is triggered
    window.innerHeight = -1;

    render(<Modal isOpen />);

    expect(document.body.style.position).toBe('fixed');
  });

  it('should restore scroll after unmount', async () => {
    const ModalTest = () => {
      const [showModal, setShowModal] = useState(true);
      return (
        <>
          <button onClick={() => setShowModal(false)}>Close modal</button>
          {showModal && <Modal isOpen></Modal>}
        </>
      );
    };

    // so that scroll is triggered
    window.innerHeight = -1;

    render(<ModalTest />);
    const button = screen.getByRole('button');

    expect(document.body.style.position).toBe('fixed');

    act(() => {
      button.click();
    });
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
