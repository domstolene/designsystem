import { Popover, PopoverProps, PopoverGroup } from '.';
import { Button } from '../Button';

import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Placement } from '../../hooks';
import { Typography } from '../Typography';
import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export default {
  title: 'design system/Popover',
  component: Popover,
  argTypes: {
    withCloseButton: { control: { type: 'boolean' } },
    placement: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    spaceFromAnchor: { control: { type: 'number' } }
  },
  parameters: {
    controls: {
      exclude: ['onCloseButton', 'anchorElement']
    }
  }
};

export const ContentOverview = (args: PopoverProps) => {
  return (
    <StoryTemplate title="Popover - content overview" display="grid">
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args} title="Tittel">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography withMargins>
                Dette er en popover med tittel, innhold og lukkeknapp
              </Typography>
              <Button label="Klikk" />
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args} title="Tittel" withCloseButton={false}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography withMargins>
                Dette er en popover med tittel og innhold
              </Typography>
              <Button label="Klikk" />
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography withMargins>
                Dette er en popover med innhold og lukkeknapp
              </Typography>
              <Button label="Klikk" />
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
        <Button label="Åpne" />
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
        padding: '150px 40px 200px 40px'
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
        <Button label="Åpne" />
        <Popover {...args}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography withMargins>
              Dette er en popover med tekst og knapp
            </Typography>
            <Button label="Klikk" />
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>
  );
};

export const InlineExample = (args: PopoverProps) => {
  const Trigger = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: underline;
    color: ${ddsBaseTokens.colors.DdsColorInteractiveBase};
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
