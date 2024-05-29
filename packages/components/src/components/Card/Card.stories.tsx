import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
} from '../DescriptionList';
import { Divider } from '../Divider';
import { HStack, VStack } from '../Stack';
import { Heading, Link, Paragraph, Typography } from '../Typography';

import { Card, CardAccordion, CardAccordionBody, CardAccordionHeader } from '.';

export default {
  title: 'dds-components/Card',
  component: Card,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    htmlProps: { control: false },
    cardRef: { control: false },
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const body = (
  <Paragraph>
    Content Content Content Content Content Content Content Content
  </Paragraph>
);

const contentContainerStyle = {
  padding: 'var(--dds-spacing-x0-75)',
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <HStack gap="x1.5" align="start">
      <VStack gap="x1" align="start">
        <Card {...args} cardType="info">
          <div style={contentContainerStyle}>
            <Heading level={2} typographyType="headingSans03">
              Title
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="navigation" href="#">
          <div style={contentContainerStyle}>
            <Heading level={2} typographyType="headingSans03">
              Title
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} cardType="expandable">
          <CardAccordion>
            <CardAccordionHeader> Title </CardAccordionHeader>
            <CardAccordionBody>Content</CardAccordionBody>
          </CardAccordion>
        </Card>
      </VStack>
      <VStack gap="x1" align="start">
        <Card {...args} cardType="info" appearance="border">
          <div style={contentContainerStyle}>
            <Heading level={2} typographyType="headingSans03">
              Title
            </Heading>
            {body}
          </div>
        </Card>
        <Card {...args} appearance="border" cardType="navigation" href="#">
          <div style={contentContainerStyle}>
            <Heading level={2} typographyType="headingSans03">
              Title
            </Heading>
            {body}
          </div>
        </Card>

        <Card {...args} cardType="expandable" appearance="border">
          <CardAccordion>
            <CardAccordionHeader> Title </CardAccordionHeader>
            <CardAccordionBody>Content</CardAccordionBody>
          </CardAccordion>
        </Card>
      </VStack>
    </HStack>
  ),
};

export const Default: Story = {
  args: { children: 'Content' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Accordion: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} cardType="expandable">
      <CardAccordion>
        <CardAccordionHeader>Header</CardAccordionHeader>
        <CardAccordionBody>Content</CardAccordionBody>
      </CardAccordion>
    </Card>
  ),
};

export const Accordions: Story = {
  decorators: Story => (
    <StoryTemplate gap="0">
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Dekning av reiseutgifter</CardAccordionHeader>
          <CardAccordionBody>
            I sivile saker avtales dekning av utgifter med den part som innkalte
            deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
            <Link href="#">
              særavtale om dekning av utgifter til reise og kost
            </Link>
            ). Reisen skal foretas på raskeste og rimeligste måte for staten.
            Offentlig transport må benyttes der det er tilgjengelig.
            Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det
            er rimeligst for det offentlige, med mindre særlige grunner tilsier
            at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer,
            unntatt for rimeligste offentlig transport, for eksempel buss, tog
            og så videre. For reiser over 15 km og som varer utover 6 timer,
            dekkes utgifter til måltider etter satsene i særavtalen om dekning
            av utgifter til reise og kost. Dersom enkeltmåltider er dekket av
            andre enn deg selv, må du registrere måltidsfradrag.
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Ansvar for behandlingen</CardAccordionHeader>
          <CardAccordionBody>
            DA er behandlingsansvarlig for opplysningene som registreres i
            Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige
            ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen
            for oss. <Link href="#">Lenke</Link>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Bli vitnestøtte?</CardAccordionHeader>
          <CardAccordionBody>
            <Typography typographyType="headingSans02" withMargins>
              Opplæringsfilm
            </Typography>
            <Typography withMargins>
              Film «Vitnestøtte» viser fire problemstillinger for hvordan man
              møter vitner med ulike behov. Den viser både gode og mindre gode
              løsninger, vitnestøtter kan diskutere.
            </Typography>
            <Typography>
              Filmen viser altså ikke «beste praksis», men er en opplæringsfilm.
            </Typography>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </>
  ),
};

export const AccordionControlled: Story = {
  decorators: Story => (
    <StoryTemplate gap="0">
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <Card {...args} cardType="expandable">
        <CardAccordion
          isExpanded={isExpanded}
          onChange={() => setIsExpanded(!isExpanded)}
        >
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    );
  },
};

export const AccordionCustom: Story = {
  decorators: Story => (
    <StoryTemplate gap="0">
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} cardType="expandable" appearance="border">
      <CardAccordion>
        <CardAccordionHeader
          typographyType="bodySans01"
          padding="4px 12px"
          bold
        >
          Dekning av reiseutgifter
        </CardAccordionHeader>
        <CardAccordionBody padding="16px 12px">
          <Paragraph typographyType="bodySans01">
            I sivile saker avtales dekning av utgifter med den part som innkalte
            deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
            <Link href="#">
              særavtale om dekning av utgifter til reise og kost
            </Link>
            ). Reisen skal foretas på raskeste og rimeligste måte for staten.
            Offentlig transport må benyttes der det er tilgjengelig.
            Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det
            er rimeligst for det offentlige, med mindre særlige grunner tilsier
            at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer,
            unntatt for rimeligste offentlig transport, for eksempel buss, tog
            og så videre. For reiser over 15 km og som varer utover 6 timer,
            dekkes utgifter til måltider etter satsene i særavtalen om dekning
            av utgifter til reise og kost. Dersom enkeltmåltider er dekket av
            andre enn deg selv, må du registrere måltidsfradrag.
          </Paragraph>
        </CardAccordionBody>
      </CardAccordion>
    </Card>
  ),
};

export const Examples: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args}>
      <div style={contentContainerStyle}>
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
        <Divider />
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
      </div>
    </Card>
  ),
};
