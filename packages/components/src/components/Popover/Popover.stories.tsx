import { Popover, PopoverProps, PopoverGroup } from '.';
import { Button } from '../Button';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { Placement } from '@norges-domstoler/dds-core';
import { Typography } from '@norges-domstoler/dds-typography';
import styled from 'styled-components';
import {
  ddsBaseTokens,
  ddsReferenceTokens,
} from '@norges-domstoler/dds-design-tokens';
import { removeButtonStyling } from '@norges-domstoler/dds-core';

export default {
  title: 'dds-components/Popover',
  component: Popover,
  argTypes: {
    withCloseButton: { control: { type: 'boolean' } },
    placement: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    offset: { control: { type: 'number' } },
  },
  parameters: {
    controls: {
      exclude: ['onCloseButton', 'anchorElement'],
    },
  },
};

export const ContentOverview = (args: PopoverProps) => {
  return (
    <StoryTemplate title="Popover - content overview" display="grid">
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
    </StoryTemplate>
  );
};
export const PlacementOverview = () => {
  const popover = (placement: Placement) => (
    <div>
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover placement={placement}>{placement}</Popover>
      </PopoverGroup>
    </div>
  );
  return (
    <StoryTemplate
      title="Popover - placement overview"
      display="grid"
      columnsAmount={4}
      containerStyle={{
        alignContent: 'center',
        justifyContent: 'center',
        padding: '150px 40px 200px 40px',
      }}
    >
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
    </StoryTemplate>
  );
};

export const Default = (args: PopoverProps) => {
  return (
    <StoryTemplate title="Popover - default" display="block">
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover {...args}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography withMargins>
              Dette er en popover med tekst og knapp
            </Typography>
            <Button>Klikk</Button>
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>
  );
};

export const Overflow = (args: PopoverProps) => {
  return (
    <StoryTemplate title="Popover - overflow" display="block">
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover
          {...args}
          sizeProps={{ maxWidth: '150px', maxHeight: '200px' }}
        >
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
    </StoryTemplate>
  );
};

export const InlineExample = (args: PopoverProps) => {
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
    <StoryTemplate title="Popover - inline example" display="block">
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
    </StoryTemplate>
  );
};
