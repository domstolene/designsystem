import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Modal, ModalBody, ModalActions, ModalProps } from '.';
import { Button } from '../Button';
import { useRef, useState } from 'react';

export default {
  title: 'dds-components/Modal',
  component: Modal,
  argTypes: {
    header: { control: { type: 'text' } },
  },
};

export const Overview = () => {
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
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne lukkbar
      </Button>
      <Modal isOpen={!closed} onClose={close} header="Tittel">
        <ModalBody>Lukkbar modal</ModalBody>
        <ModalActions>
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
      <Button aria-haspopup="dialog" onClick={show2} ref={buttonRef2}>
        Åpne ikke lukkbar
      </Button>
      <Modal isOpen={!closed2} header="Tittel">
        <ModalBody>Ikke lukkbar modal</ModalBody>
        <ModalActions>
          <Button onClick={close2}>OK</Button>

          <Button purpose="secondary" onClick={close2}>
            Avbryt
          </Button>
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
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne
      </Button>
      <Modal {...args} isOpen={!closed} onClose={close}>
        <ModalBody>Modal</ModalBody>
        <ModalActions>
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
    </StoryTemplate>
  );
};

export const NoActionButtons = (args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <StoryTemplate title="Modal - no action buttons">
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne
      </Button>
      <Modal
        {...args}
        isOpen={!closed}
        triggerRef={buttonRef}
        onClose={close}
        header="Info"
      >
        <ModalBody>Infotekst</ModalBody>
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
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne scrollable
      </Button>
      <Modal
        {...args}
        isOpen={!closed}
        onClose={close}
        htmlProps={{
          style: { width: '300px' },
        }}
        header="Fritt valg av forsvarer"
      >
        <ModalBody scrollable height="100px">
          Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i
          saken. Det må spesielle grunner til for at du ikke skal få oppfylt
          ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at
          rettssaken din vil bli veldig forsinket.
        </ModalBody>
        <ModalActions>
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
    </StoryTemplate>
  );
};
