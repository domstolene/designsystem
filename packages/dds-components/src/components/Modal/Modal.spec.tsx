import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { portalRender } from '../../test.utils';
import { Button } from '../Button';

import { Modal, ModalBody } from '.';

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
    <>
      <Button onClick={show} />
      <Modal isOpen={open} onClose={close}>
        {children}
      </Modal>
    </>
  );
};

describe('<Modal>', () => {
  it('has header', () => {
    const header = 'title';
    portalRender(<Modal isOpen={true} header={header} />);
    const el = screen.getByText(header);
    expect(el).toBeInTheDocument();
  });

  it('has dialog role', () => {
    portalRender(<Modal isOpen={true} />);
    const el = screen.getByRole('dialog');

    expect(el).toBeInTheDocument();
  });

  it('dialog is not in DOM by default', () => {
    portalRender(<TestComponent />);
    const el = screen.queryByRole('dialog');
    expect(el).not.toBeInTheDocument();
  });

  it('is labelled by header', () => {
    const header = 'title';
    portalRender(<Modal isOpen={true} header={header} />);
    const el = screen.getByRole('dialog');

    expect(el).toHaveAccessibleName(header);
  });

  it('has body content', () => {
    const content = 'content';
    portalRender(
      <Modal isOpen={true}>
        <ModalBody>{content}</ModalBody>
      </Modal>,
    );
    const el = screen.getByText(content);
    expect(el).toBeInTheDocument();
  });

  it('shows after trigger button click', async () => {
    portalRender(<TestComponent />);
    const button = screen.getAllByRole('button')[0];

    await userEvent.click(button);

    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
  });

  it('hides after Esc keydown', async () => {
    portalRender(<TestComponent defaultOpen />);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    const elQuery = screen.queryByRole('dialog');
    expect(elQuery).not.toBeInTheDocument();
  });

  it('does not hide after Esc keydown if not closable', async () => {
    portalRender(<Modal isOpen={true} />);

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');

    expect(el).toBeInTheDocument();
  });

  it('prevents scroll when open', async () => {
    // so that scroll is triggered
    window.innerHeight = -1;

    portalRender(<Modal isOpen />);

    expect(document.body.style.position).toBe('fixed');
  });

  it('restores scroll after unmount', async () => {
    const ModalTest = () => {
      const [showModal, setShowModal] = useState(true);
      return (
        <>
          <button onClick={() => setShowModal(false)}>Close modal</button>
          {showModal && <Modal isOpen />}
        </>
      );
    };

    // so that scroll is triggered
    window.innerHeight = -1;

    portalRender(<ModalTest />);
    const button = screen.getByRole('button');

    expect(document.body.style.position).toBe('fixed');

    await userEvent.click(button);

    expect(document.body.style.position).toBe('');
  });

  it('does not re-mount body when closing', async () => {
    const mount = vi.fn();

    const MountTestComponent = () => {
      useEffect(() => {
        mount();
      }, []);

      return <></>;
    };

    portalRender(
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
