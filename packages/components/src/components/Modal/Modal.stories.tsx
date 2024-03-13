import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

import { Button } from '../Button';
import { Search } from '../Search';

import { Modal, ModalActions, ModalBody } from '.';

export default {
  title: 'dds-components/Modal',
  component: Modal,
  argTypes: {
    header: { control: 'text' },
    parentElement: { control: false },
    triggerRef: { control: false },
    initialFocusRef: { control: false },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [closed, setClosed] = useState(true);
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
          triggerRef={buttonRef}
          isOpen={!closed}
          onClose={close}
        >
          <ModalBody>Modal</ModalBody>
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

export const Overview: Story = {
  args: { header: 'Tittel', onClose: undefined },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [closed, setClosed] = useState(true);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const [closed2, setClosed2] = useState(true);
    const show2 = () => setClosed2(false);
    const close2 = () => setClosed2(true);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const buttonRef2 = useRef<HTMLButtonElement>(null);

    return (
      <>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne lukkbar
        </Button>
        <Modal
          {...args}
          isOpen={!closed}
          triggerRef={buttonRef}
          onClose={close}
        >
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
        <Modal {...args} isOpen={!closed2} triggerRef={buttonRef2}>
          <ModalBody>Ikke lukkbar modal</ModalBody>
          <ModalActions>
            <Button onClick={close2}>OK</Button>

            <Button purpose="secondary" onClick={close2}>
              Avbryt
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  },
};

export const NoActionButtons: Story = {
  args: { header: 'Info' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [closed, setClosed] = useState(true);
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
          isOpen={!closed}
          triggerRef={buttonRef}
          onClose={close}
        >
          <ModalBody>Infotekst</ModalBody>
        </Modal>
      </>
    );
  },
};

export const Scrollable: Story = {
  args: { header: 'Fritt valg av forsvarer' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const [closed, setClosed] = useState(true);
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
          htmlProps={{
            style: { width: '300px' },
          }}
        >
          <ModalBody scrollable height="100px">
            Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer
            i saken. Det må spesielle grunner til for at du ikke skal få oppfylt
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
      </>
    );
  },
};

export const WithInitialFocus: Story = {
  args: { header: 'Søk etter sak' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
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
