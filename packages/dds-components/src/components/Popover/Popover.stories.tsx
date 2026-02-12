import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { fn } from 'storybook/test';

import { type Placement } from '../../hooks';
import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  htmlEventArgType,
} from '../../storybook';
import { Button } from '../Button';
import { InlineButton } from '../InlineButton';
import { VStack } from '../layout';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { LocalMessage } from '../LocalMessage';
import { Paragraph } from '../Typography';

import { Popover, PopoverGroup } from '.';

const meta: Meta<typeof Popover> = {
  title: 'dds-components/Components/Popover',
  component: Popover,
  decorators: [ddsProviderDecorator],
  argTypes: {
    header: { control: 'text' },
    onBlur: htmlEventArgType,
    isOpen: { control: false },
    anchorRef: { control: false },
    ...commonArgTypesWithNodeChildren,
    sizeProps: { control: false },
  },
  args: { onBlur: fn(), onClose: fn() },
  parameters: {
    docs: {
      story: { height: '300px' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Preview: Story = {
  render: args => (
    <VStack alignItems="center">
      <PopoverGroup isInitiallyOpen={true}>
        <Button>Åpne</Button>
        <Popover {...args}>
          <VStack>
            <Paragraph withMargins>
              Dette er en popover med tekst og knapp
            </Paragraph>
            <Button>Klikk</Button>
          </VStack>
        </Popover>
      </PopoverGroup>
    </VStack>
  ),
};

export const ContentOverview: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <StoryHStack justifyContent="center">
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} header="Tittel">
            <VStack>
              <Paragraph withMargins>
                Dette er en popover med tittel, innhold og lukkeknapp
              </Paragraph>
              <Button>Klikk</Button>
            </VStack>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} header="Tittel" withCloseButton={false}>
            <VStack>
              <Paragraph withMargins>
                Dette er en popover med tittel og innhold
              </Paragraph>
              <Button>Klikk</Button>
            </VStack>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args}>
            <VStack>
              <Paragraph withMargins>
                Dette er en popover med innhold og lukkeknapp
              </Paragraph>
              <Button>Klikk</Button>
            </VStack>
          </Popover>
        </PopoverGroup>
      </div>
    </StoryHStack>
  ),
};

export const PlacementOverview: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const popover = (placement: Placement) => (
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} placement={placement}>
            {placement}
          </Popover>
        </PopoverGroup>
      </div>
    );
    return (
      <StoryHStack justifyContent="center" paddingBlock="x6">
        <StoryVStack>
          {popover('top-start')}
          {popover('bottom-start')}
          {popover('left-start')}
          {popover('right-start')}
        </StoryVStack>
        <StoryVStack>
          {popover('top')}
          {popover('bottom')}
          {popover('right')}
          {popover('left')}
        </StoryVStack>
        <StoryVStack>
          {popover('top-end')}
          {popover('bottom-end')}
          {popover('right-end')}
          {popover('left-end')}
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithOnOpenAndOnClose: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [text, setText] = useState('aktiver Popover');
    const onOpen = () => setText('Popover ble åpnet');
    const onClose = () => setText('Popover ble lukket');

    return (
      <VStack>
        {text}
        <PopoverGroup onClose={onClose} onOpen={onOpen}>
          <Button>Åpne</Button>
          <Popover {...args}>
            <VStack>
              <Paragraph withMargins>
                Dette er en popover med tekst og knapp
              </Paragraph>
              <Button>Klikk</Button>
            </VStack>
          </Popover>
        </PopoverGroup>
      </VStack>
    );
  },
};

export const Overflow: Story = {
  render: args => (
    <PopoverGroup>
      <Button>Åpne</Button>
      <Popover {...args} sizeProps={{ maxWidth: '150px', maxHeight: '200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Dette er en popover med tekst og knapp
          </p>
          <Button>Klikk</Button>
        </div>
      </Popover>
    </PopoverGroup>
  ),
};

export const InlineExample: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    return (
      <Paragraph>
        Når du kommer til domstolen er det viktig at du finner rettssalen der
        innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når
        det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i
        gang når du skal inn. Før du og andre vitner slipper til, skal retten få
        en redegjørelse fra{' '}
        <PopoverGroup>
          <InlineButton>advokatene</InlineButton>
          <Popover {...args} header="Advokat">
            <Paragraph withMargins>Dette er en definisjon</Paragraph>
          </Popover>
        </PopoverGroup>{' '}
        (eller fra aktor i straffesaker) om hva saken gjelder og hva man er
        uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i
        straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de
        skal være upåvirket av det som er sagt tidligere i saken. Det er
        vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør
        det vanskelig for deg å vente, så ta det opp på forhånd med den som har
        innkalt deg.
      </Paragraph>
    );
  },
};

export const Custom: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const bRef = useRef<HTMLButtonElement>(null);
    const id = 'id';
    return (
      <StoryVStack alignItems="center">
        <LocalMessage purpose="warning">
          Brukes kun ved corner cases
        </LocalMessage>

        <Button
          ref={bRef}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-controls={id}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          Åpne
        </Button>
        <Popover
          {...args}
          id={id}
          isOpen={isOpen}
          anchorRef={bRef}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <VStack>
            <Paragraph withMargins>
              Dette er en popover med tekst og knapp
            </Paragraph>
            <Button>Klikk</Button>
          </VStack>
        </Popover>
      </StoryVStack>
    );
  },
};
