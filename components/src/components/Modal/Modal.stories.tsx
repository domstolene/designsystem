import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Modal, ModalBody, ModalActions, ModalProps } from '.';
import { Button } from '../Button';
import { useRef, useState } from 'react';

export default {
  title: 'design system/Modal',
  component: Modal,
  argTypes: {
    header: { control: { type: 'text' } }
  }
};

export const Overview = (args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };

  const [closed2, setClosed2] = useState(true);
  const show2 = () => setClosed2(false);
  const close2 = () => {
    setClosed2(true);
    buttonRef2.current?.focus();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Modal - overview">
      <Button
        aria-haspopup="dialog"
        label="Åpne"
        onClick={show}
        ref={buttonRef}
      />
      <Modal isOpen={!closed} onClose={close} header="Tittel">
        <ModalBody>Lukkbar modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
      <Button
        aria-haspopup="dialog"
        label="Åpne"
        onClick={show2}
        ref={buttonRef2}
      />
      <Modal isOpen={!closed2} header="Tittel">
        <ModalBody>Ikke lukkbar modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close2} />
          <Button purpose="secondary" label="Avbryt" onClick={close2} />
        </ModalActions>
      </Modal>
    </StoryTemplate>
  );
};

export const Default = (args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Modal - default">
      <Button
        aria-haspopup="dialog"
        label="Åpne"
        onClick={show}
        ref={buttonRef}
      />
      <Modal {...args} isOpen={!closed} onClose={close}>
        <ModalBody>Modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
    </StoryTemplate>
  );
};

export const Scrollable = (args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Modal - scrollable">
      <Button
        aria-haspopup="dialog"
        label="Åpne"
        onClick={show}
        ref={buttonRef}
      />
      <Modal
        {...args}
        isOpen={!closed}
        onClose={close}
        style={{ width: '300px' }}
      >
        <ModalBody scrollable>
          Innhold Innhold Innhold Innhold Innhold Innhold Innhold Innhold{' '}
          Innhold Innhold Innhold Innhold Innhold InInnhold Innhold Innhold
          Innhold Innhold Innhold Innhold Innhold Innhold Innhold Innhold
          Innhold Innhold Innhold Innhold Innhold nhold Innhold Innhold{' '}
        </ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
    </StoryTemplate>
  );
};
