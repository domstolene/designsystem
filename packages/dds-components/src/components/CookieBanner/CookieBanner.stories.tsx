import { type Meta, type StoryObj } from '@storybook/react-vite';

import { CookieBanner } from './CookieBanner';
import {
  commonArgTypes,
  ddsProviderDecorator,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { Box, Paper, VStack } from '../layout';
import { Link } from '../Typography';

const { position, left, right, top, bottom, maxHeight, width } =
  responsivePropsArgTypes;

const meta: Meta<typeof CookieBanner> = {
  title: 'dds-components/Components/CookieBanner',
  component: CookieBanner,
  argTypes: {
    ...commonArgTypes,
    position,
    left,
    right,
    top,
    bottom,
    maxHeight,
    width,
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof CookieBanner>;

export const Preview: Story = {
  args: {
    headerText: 'Tittel for banner',
    description: (
      <>
        Eksempeltekst for dette cookie-banneret. Fyll inn passende tekst om at
        vi har noen valgfrie og noen nødvendige informasjonskapsler.{' '}
        <Link href="/">Se alle våre informasjonskapsler</Link>.
      </>
    ),
    buttons: [{ children: 'Godkjenn alle' }, { children: 'Kun nødvendige' }],
  },
};

export const WithCheckboxes: Story = {
  args: {
    headerText: 'Tittel for banner',
    description: (
      <>
        Eksempeltekst for dette cookie-banneret. Fyll inn passende tekst om at
        vi har noen valgfrie og noen nødvendige informasjonskapsler.{' '}
        <Link href="/">Se alle våre informasjonskapsler</Link>.
      </>
    ),
    buttons: [{ children: 'Godkjenn valgte' }],
    checkboxes: [
      {
        headerText: 'Nødvendige informasjonskapsler',
        description:
          'Detaljer rundt nødvendige informasjonskapsler; typisk er denne readonly, slik at brukeren skjønner at denne type er forhåndsvalgt, men kan likevel lese detaljene og hvorfor den ikke kan velges bort.',
        checked: true,
        readOnly: true,
      },
      {
        headerText: 'Type informasjonskapsel',
        description:
          'Beskrivelse av denne typen informasjonskapsler, som hva de gjør. Fyll inn med passende tekst.',
      },
      {
        headerText: 'Type informasjonskapsel',
        description:
          'Beskrivelse av denne typen informasjonskapsler, som hva de gjør. Fyll inn med passende tekst.',
      },
    ],
  },
};

export const Placement: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  args: {
    headerText: 'Tittel for banner',
    description: (
      <>
        Eksempeltekst for dette cookie-banneret. Fyll inn passende tekst om at
        vi har noen valgfrie og noen nødvendige informasjonskapsler.{' '}
        <Link href="/">Se alle våre informasjonskapsler</Link>.
      </>
    ),
    buttons: [{ children: 'Godkjenn alle' }, { children: 'Kun nødvendige' }],
  },
  render: args => {
    const divs = Array.from({ length: 5 }, (_, index) => (
      <VStack key={index} gap="x1.5" padding="x2">
        Eksempel innhold <Button> Testknapp </Button> Eksempel innhold
      </VStack>
    ));

    return (
      <Box position="relative">
        <CookieBanner
          {...args}
          position="fixed"
          bottom={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x1.5',
            xl: 'x1.5',
          }}
          left={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x2',
            xl: 'x2',
          }}
          right={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x2',
            xl: 'x2',
          }}
        />
        <VStack gap="x1.5">
          <Paper
            height="100px"
            padding="x1.5"
            background="brand-primary-subtle"
          >
            Banner
          </Paper>
          <Paper padding="x1.5" background="brand-secondary-subtle">
            <VStack>{divs}</VStack>
          </Paper>
        </VStack>
      </Box>
    );
  },
};

export const PlacementWithCheckboxes: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
  args: {
    headerText: 'Tittel for banner',
    description: (
      <>
        Eksempeltekst for dette cookie-banneret. Fyll inn passende tekst om at
        vi har noen valgfrie og noen nødvendige informasjonskapsler.{' '}
        <Link href="/">Se alle våre informasjonskapsler</Link>.
      </>
    ),
    buttons: [{ children: 'Godkjenn valgte' }],
    checkboxes: [
      {
        headerText: 'Nødvendige informasjonskapsler',
        description:
          'Detaljer rundt nødvendige informasjonskapsler; typisk er denne readonly, slik at brukeren skjønner at denne type er forhåndsvalgt, men kan likevel lese detaljene og hvorfor den ikke kan velges bort.',
        checked: true,
        readOnly: true,
      },
      {
        headerText: 'Type informasjonskapsel',
        description:
          'Beskrivelse av denne typen informasjonskapsler, som hva de gjør. Fyll inn med passende tekst.',
      },
      {
        headerText: 'Type informasjonskapsel',
        description:
          'Beskrivelse av denne typen informasjonskapsler, som hva de gjør. Fyll inn med passende tekst.',
      },
    ],
  },
  render: args => {
    const divs = Array.from({ length: 5 }, (_, index) => (
      <VStack key={index} gap="x1.5" padding="x2">
        Eksempel innhold <Button> Testknapp </Button> Eksempel innhold
      </VStack>
    ));

    return (
      <Box position="relative">
        <CookieBanner
          {...args}
          position="fixed"
          bottom={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x1.5',
            xl: 'x1.5',
          }}
          left={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x2',
            xl: 'x2',
          }}
          right={{
            xs: 'x0.25',
            sm: 'x0.5',
            md: 'x1',
            lg: 'x2',
            xl: 'x2',
          }}
        />
        <VStack gap="x1.5">
          <Paper
            height="100px"
            padding="x1.5"
            background="brand-primary-subtle"
          >
            Banner
          </Paper>
          <Paper padding="x1.5" background="brand-secondary-subtle">
            <VStack>{divs}</VStack>
          </Paper>
        </VStack>
      </Box>
    );
  },
};

export const Collapsible: Story = {
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Sammentrukket variant vises ved sm brekkpunkt.',
      ),
  ],
  args: {
    headerText: 'Tittel for banner',
    collapsedBreakpoint: 'sm',
    description: (
      <>
        Eksempeltekst for dette cookie-banneret. Fyll inn passende tekst om at
        vi har noen valgfrie og noen nødvendige informasjonskapsler.{' '}
        <Link href="/">Se alle våre informasjonskapsler</Link>.
      </>
    ),
    buttons: [{ children: 'Godkjenn alle' }, { children: 'Kun nødvendige' }],
  },
};
