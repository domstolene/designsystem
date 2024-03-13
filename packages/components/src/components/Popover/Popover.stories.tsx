import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { type Placement } from '../../hooks';
import { Button } from '../Button';
import { removeButtonStyling } from '../helpers';
import { VStack } from '../Stack';
import { Typography } from '../Typography';

import { Popover, PopoverGroup } from '.';

export default {
  title: 'dds-components/Popover',
  component: Popover,
  argTypes: {
    withCloseButton: { control: 'boolean' },
    placement: { control: 'text' },
    title: { control: 'text' },
    offset: { control: 'number' },
    htmlProps: { control: false },
    sizeProps: { control: false },
    anchorElement: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <PopoverGroup>
      <Button>Åpne</Button>
      <Popover {...args}>
        <VStack align="flex-start">
          <Typography withMargins>
            Dette er en popover med tekst og knapp
          </Typography>
          <Button>Klikk</Button>
        </VStack>
      </Popover>
    </PopoverGroup>
  ),
};

export const ContentOverview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="grid">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} title="Tittel">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '16px',
              }}
            >
              <Typography withMargins>
                Dette er en popover med tittel, innhold og lukkeknapp
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} title="Tittel" withCloseButton={false}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography withMargins>
                Dette er en popover med tittel og innhold
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography withMargins>
                Dette er en popover med innhold og lukkeknapp
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
    </>
  ),
};

export const PlacementOverview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate
      display="grid"
      $columnsAmount={4}
      containerStyle={{
        alignContent: 'center',
        justifyContent: 'center',
        padding: '150px 40px 200px 40px',
      }}
    >
      <Story />
    </StoryTemplate>
  ),
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
      <>
        {popover('top-start')}
        {popover('bottom-start')}
        {popover('left-start')}
        {popover('right-start')}
        {popover('top')}
        {popover('bottom')}
        {popover('right')}
        {popover('left')}
        {popover('top-end')}
        {popover('bottom-end')}
        {popover('right-end')}
        {popover('left-end')}
      </>
    );
  },
};

export const Overflow: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <PopoverGroup>
      <Button>Åpne</Button>
      <Popover {...args} sizeProps={{ maxWidth: '150px', maxHeight: '200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            withMargins
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            Dette er en popover med tekst og knapp
          </Typography>
          <Button>Klikk</Button>
        </div>
      </Popover>
    </PopoverGroup>
  ),
};

export const InlineExample: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="block">
      <Story />
    </StoryTemplate>
  ),
  render: args => {
    const Trigger = styled.button`
      ${removeButtonStyling}
      user-select: text;
      text-decoration: underline;
      color: ${ddsBaseTokens.colors.DdsColorInteractiveBase};
      &:hover {
        color: ${ddsBaseTokens.colors.DdsColorInteractiveDark};
      }
      &:focus {
        color: ${ddsBaseTokens.colors.DdsColorNeutralsWhite};
        background-color: ${ddsReferenceTokens.focus.colorDefault};
        text-decoration: none;
      }
    `;
    return (
      <Typography>
        Når du kommer til domstolen er det viktig at du finner rettssalen der
        innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når
        det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i
        gang når du skal inn. Før du og andre vitner slipper til, skal retten få
        en redegjørelse fra{' '}
        <PopoverGroup>
          <Trigger>advokatene</Trigger>
          <Popover {...args} title="Advokat">
            <Typography withMargins>Dette er en definisjon</Typography>
          </Popover>
        </PopoverGroup>{' '}
        (eller fra aktor i straffesaker) om hva saken gjelder og hva man er
        uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i
        straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de
        skal være upåvirket av det som er sagt tidligere i saken. Det er
        vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør
        det vanskelig for deg å vente, så ta det opp på forhånd med den som har
        innkalt deg.
      </Typography>
    );
  },
};
