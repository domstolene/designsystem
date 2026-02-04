import { type Story } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  responsivePropsArgTypes,
} from '../../storybook';
import { Button } from '../Button';
import { DRAWER_SIZES } from './Drawer';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { Heading, Paragraph } from '../Typography';

import { Drawer, DrawerGroup } from '.';

const { width, maxWidth, minWidth } = responsivePropsArgTypes;

const meta: Meta<typeof Drawer> = {
  title: 'dds-components/Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      story: { height: '500px', scrollbar: false },
    },
  },
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    parentElement: { control: false },
    width,
    maxWidth,
    minWidth,
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Preview: Story = {
  args: { header: 'Tittel' },
  render: args => (
    <DrawerGroup>
      <Button>Åpne</Button>
      <Drawer {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <Button>Gjør noe</Button>
      </Drawer>
    </DrawerGroup>
  ),
};

export const WithBackdrop: Story = {
  args: { header: 'Tittel' },
  render: args => (
    <DrawerGroup>
      <Button>Åpne</Button>
      <Drawer {...args} withBackdrop>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <Button>Gjør noe</Button>
      </Drawer>
    </DrawerGroup>
  ),
};

export const OverviewPlacement: Story = {
  args: { header: 'Tittel' },
  render: args => (
    <StoryHStack>
      <DrawerGroup>
        <Button>Åpne høyre</Button>
        <Drawer {...args}>
          Innhold
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button>Åpne venstre</Button>
        <Drawer {...args} placement="left">
          Innhold
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  args: { header: 'Header' },
  render: args => (
    <StoryHStack>
      {DRAWER_SIZES.map(size => (
        <DrawerGroup key={size}>
          <Button>Åpne {size}</Button>
          <Drawer {...args} size={size}>
            <div>
              <Paragraph>
                Dette er en eksempeletekst. Den er litt lengre slik at man kan
                tydelig vise forskjeller mellom ulike størrelser på komponenten.
                Teksten er et par setninger lang.
              </Paragraph>
              <Heading level={3} withMargins>
                Dette er en overskrift
              </Heading>
              <Paragraph>
                Dette er en eksempeletekst. Den er litt lengre slik at man kan
                tydelig vise forskjeller mellom ulike størrelser på komponenten.
                Teksten er et par setninger lang. Dette er en eksempeletekst.
                Den er litt lengre slik at man kan tydelig vise forskjeller
                mellom ulike størrelser på komponenten. Teksten er et par
                setninger lang. Dette er en eksempeletekst. Den er litt lengre
                slik at man kan tydelig vise forskjeller mellom ulike størrelser
                på komponenten. Teksten er et par setninger lang.
              </Paragraph>
            </div>
            <Button>Gjør noe</Button>
          </Drawer>
        </DrawerGroup>
      ))}
    </StoryHStack>
  ),
};

export const WithOnCloseAndOnOpen: Story = {
  args: { header: 'Tittel' },
  render: args => {
    const [text, setText] = useState('Aktiver Drawer.');
    const onClose = () => {
      setText('onClose ble kalt.');
    };
    const onOpen = () => {
      setText('onOpen ble kalt.');
    };
    return (
      <StoryVStack>
        <span>{text}</span>
        <DrawerGroup onClose={onClose} onOpen={onOpen}>
          <Button>Åpne</Button>
          <Drawer {...args}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <Button>Gjør noe</Button>
          </Drawer>
        </DrawerGroup>
      </StoryVStack>
    );
  },
};

export const LongContent: Story = {
  args: { header: 'Rettsmekling' },
  render: args => (
    <DrawerGroup>
      <Button>Åpne lang</Button>
      <Drawer {...args}>
        <div>
          <Paragraph withMargins>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Paragraph>
          <Heading level={3} withMargins>
            Hva er rettsmekling?
          </Heading>
          <Paragraph withMargins>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Paragraph>
          <Heading level={3} withMargins>
            Hva er fordelene med rettsmekling?
          </Heading>
          <Paragraph withMargins>
            Formålet med rettsmekling er at partene blir enige om en løsning som
            alle partene kan leve med. En mekler hjelper partene til å komme
            fram til enighet ved å få innblikk i hva slags interesser og behov
            partene har, og vil prøve å skape en dialog preget av forståelse og
            enighet. Det innebærer som regel at partene må være innstilt på et
            kompromiss sammenlignet med sitt opprinnelige standpunkt.
          </Paragraph>
          <Paragraph withMargins>
            I et meklingsresultat blir ingen av partene "vinner" eller "taper".
            Hensikten er at begge parter skal vinne på denne metoden og at
            resultatet blir lettere å leve med i ettertid.
          </Paragraph>
          <Paragraph withMargins>
            Rettsmekling egner seg derfor særlig godt som metode hvis partene
            fortsatt skal ha kontakt i tiden framover (for eksempel
            forretningsforbindelser, naboer eller i arbeids- og husleieforhold).
            Rettsmekling kan uansett være et godt alternativ også i de fleste
            andre typer konflikter. En mekling er raskere, enklere og vanligvis
            billigere for partene enn ordinær domstolsbehandling.
          </Paragraph>
          <Paragraph withMargins>
            Gjennom meklingen bidrar dommeren til å sette partenes faktiske
            interesser og behov i fokus, mer enn de rent juridiske argumentene.
            Dermed blir det også lettere å finne en skreddersydd løsning på
            tvisten. Andre tema enn det saken gjelder kan trekkes inn i
            rettsmeklingen. Dette gjør at rettsmeklingen kan bidra til løsning
            av flere konflikter mellom partene enn det saken i utgangspunktet
            gjelder.
          </Paragraph>
          <Paragraph withMargins>
            Rettsmekling foregår for lukkede dører og uten rettsmøte. Partene
            unngår dermed den publisiteten som ordinær rettsbehandling kan
            medføre.
          </Paragraph>
        </div>
        <Button>Gjør noe</Button>
      </Drawer>
    </DrawerGroup>
  ),
};
