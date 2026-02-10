import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { fn } from 'storybook/test';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { StoryHStack } from '../layout/Stack/utils';
import { Search } from '../Search';

import { Modal, ModalActions, ModalBody } from '.';

const meta: Meta<typeof Modal> = {
  title: 'dds-components/Components/Modal',
  component: Modal,
  decorators: [ddsProviderDecorator],
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    header: { control: 'text' },
    parentElement: { control: false },
    onClose: { control: false },
    isOpen: { control: false },
    triggerRef: { control: false },
    initialFocusRef: { control: false },
  },
  args: { onClose: fn() },
  parameters: {
    docs: {
      story: { height: '350px' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Preview: Story = {
  render: args => {
    const [closed, setClosed] = useState(false);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne
        </Button>
        <Modal
          {...args}
          onClose={close}
          triggerRef={buttonRef}
          isOpen={!closed}
          header="Header"
          style={{ width: '400px' }}
        >
          <ModalBody>Lukkbar modal</ModalBody>
          <ModalActions>
            <Button onClick={close}>OK</Button>
            <Button purpose="secondary" onClick={close}>
              Avbryt
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};

export const NotClosable: Story = {
  args: { header: 'Tittel', onClose: undefined },
  render: args => {
    const [closed, setClosed] = useState(false);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <StoryHStack>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne ikke lukkbar
        </Button>
        <Modal {...args} isOpen={!closed} triggerRef={buttonRef}>
          <ModalBody>
            Ikke lukkbar modal; kan lukkes kun via "OK" og "Avbryt".
          </ModalBody>
          <ModalActions>
            <Button onClick={close}>OK</Button>
            <Button purpose="secondary" onClick={close}>
              Avbryt
            </Button>
          </ModalActions>
        </Modal>
      </StoryHStack>
    );
  },
};

export const Scrollable: Story = {
  args: { header: 'Header' },
  render: args => {
    const [closed, setClosed] = useState(false);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne scrollable
        </Button>
        <Modal
          {...args}
          isOpen={!closed}
          triggerRef={buttonRef}
          onClose={close}
          style={{ width: '300px' }}
        >
          <ModalBody scrollable height="100px">
            Tekst for å teste scrollable variant. Når teksten er lengre enn
            tilgjengelig høyde får den en scrollbar på siden. Den må være litt
            lengre, gjerne flere setningen, slik at den fyller tilgjengelig
            plass.
          </ModalBody>
          <ModalActions>
            <Button onClick={close}>OK</Button>
            <Button purpose="secondary" onClick={close}>
              Avbryt
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};

export const WithInitialFocus: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { header: 'Søk etter sak' },
  render: args => {
    const [closed, setClosed] = useState(true);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const initialFocusRef = useRef<HTMLInputElement>(null);

    return (
      <>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne
        </Button>
        <Modal
          {...args}
          isOpen={!closed}
          triggerRef={buttonRef}
          initialFocusRef={initialFocusRef}
          onClose={close}
        >
          <ModalBody>
            <Search ref={initialFocusRef} label="Saksnummer" />
          </ModalBody>
          <ModalActions>
            <Button onClick={close}>OK</Button>
            <Button purpose="secondary" onClick={close}>
              Avbryt
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};
