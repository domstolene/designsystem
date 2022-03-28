import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Modal, ModalBody, ModalControls, ModalProps } from '.';
import { Button } from '../Button';
import { useRef, useState } from 'react';

export default {
  title: 'design system/Modal',
  component: Modal
};

export const Overview = (args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);

  const [closed2, setClosed2] = useState(true);
  const show2 = () => setClosed2(false);
  const close2 = () => setClosed2(true);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <StoryTemplate title="Modal - overview">
      <Button aria-haspopup="dialog" label="Åpne" onClick={show} />
      <Modal isOpen={!closed} onClose={close} title="Tittel">
        <ModalBody>Lukkbar modal</ModalBody>
        <ModalControls>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalControls>
      </Modal>
      <Button aria-haspopup="dialog" label="Åpne" onClick={show2} />
      <Modal isOpen={!closed2} title="Tittel">
        <ModalBody>Ikke lukkbar modal</ModalBody>
        <ModalControls>
          <Button label="OK" onClick={close2} />
          <Button purpose="secondary" label="Avbryt" onClick={close2} />
        </ModalControls>
      </Modal>
    </StoryTemplate>
  );
};
