import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { fn } from 'storybook/test';

import { htmlPropsArgType } from '../../storybook/helpers';
import { Button } from '../Button';
import { StoryHStack } from '../layout/Stack/utils';
import { Search } from '../Search';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';

import { Modal, ModalActions, ModalBody } from '.';

const meta: Meta<typeof Modal> = {
  title: 'dds-components/Components/Modal',
  component: Modal,
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
  argTypes: {
    header: { control: 'text' },
    scrollable: { control: 'boolean' },
    parentElement: { control: false },
    onClose: { control: false },
    isOpen: { control: false },
    triggerRef: { control: false },
    initialFocusRef: { control: false },
    htmlProps: htmlPropsArgType,
  },
  args: { onClose: fn() },
  parameters: {
    docs: {
      story: { height: '350px', inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: { onClose: undefined },
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
          onClose={close}
          triggerRef={buttonRef}
          isOpen={!closed}
          htmlProps={{ style: { width: '400px' } }}
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

export const Closable: Story = {
  args: { header: 'Tittel', onClose: undefined },
  render: args => {
    const [closed, setClosed] = useState(true);
    const show = () => setClosed(false);
    const close = () => setClosed(true);

    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <StoryHStack>
        <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
          Åpne lukkbar
        </Button>
        <Modal
          {...args}
          isOpen={!closed}
          triggerRef={buttonRef}
          onClose={close}
        >
          <ModalBody>Ikke lukkbar modal</ModalBody>
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

export const NoActionButtons: Story = {
  args: { header: 'Info' },
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
