import { Modal, ModalBody } from '.';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Button } from '../Button';
import { vi } from 'vitest';

const TestComponent = () => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);

  return (
    <>
      <Button onClick={show} />
      <Modal isOpen={!closed} onClose={close}></Modal>
    </>
  );
};

const spyScrollTo = vi.fn();
Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });

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

    expect(el.querySelector('div')?.querySelector('div')).toHaveAttribute(
      'id',
      `${id}-header`
    );
    expect(el).toHaveAttribute('aria-labelledby', `${id}-header`);
  });

  it('should have body content', () => {
    const content = 'content';
    render(
      <Modal isOpen={true}>
        <ModalBody>{content}</ModalBody>
      </Modal>
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
    render(<TestComponent />);
    const button = screen.getAllByRole('button')[0];

    act(() => {
      button.click();
    });

    const el = await screen.findByRole('dialog');
    expect(el).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(el, { key: 'Escape', code: 'Escape' });
    });

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
});
