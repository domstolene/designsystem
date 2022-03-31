import '@testing-library/jest-dom';
import { Modal, ModalBody } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Button } from '../Button';

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

  it('should show after trigger button click', () => {
    render(<TestComponent />);
    const button = screen.getAllByRole('button')[0];
    button.click();
    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
  });

  it('should hide after Esc keydown', () => {
    render(<TestComponent />);
    const button = screen.getAllByRole('button')[0];
    button.click();
    const el = screen.getByRole('dialog');
    expect(el).toBeInTheDocument();
    fireEvent.keyDown(el, { key: 'Escape', code: 'Escape' });
    const elQuery = screen.queryByRole('dialog');
    expect(elQuery).not.toBeInTheDocument();
  });
});
