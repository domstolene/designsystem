import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';

import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm,
} from '../DescriptionList';
import { Divider } from '../Divider';
import { Typography } from '../Typography';

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
};

type Story = StoryObj<typeof Card>;

const body = (
  <Typography>
    Content Content Content Content Content Content Content Content
  </Typography>
);

const bodyOnDark = (
  <Typography color="onDark">
    Content Content Content Content Content Content Content Content
  </Typography>
);

const ContentContainer = styled.div`
  padding: ${ddsBaseTokens.spacing.SizesDdsSpacingX075};
`;

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate title="Card - overview" display="grid" $columnsAmount={4}>
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <>
      <Card {...args} cardType="info">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} cardType="info" color="filledDark">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </Card>
      <Card {...args} cardType="info" color="strokeDark">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} cardType="info" color="strokeLight">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} color="filledDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </Card>
      <Card {...args} color="strokeDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} color="strokeLight" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card {...args} cardType="info" color="filledLight">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="info" color="filledDark">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="info" color="strokeDark">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="info" color="strokeLight">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </>
  ),
};

export const Default: Story = {
  args: { children: 'Content' },
  decorators: Story => (
    <StoryTemplate title="Card - default">
      <Story />
    </StoryTemplate>
  ),
};

export const Accordion: Story = {
  decorators: Story => (
    <StoryTemplate title="Card - accordion" gap="0">
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
            <Typography typographyType="a" href="#">
              særavtale om dekning av utgifter til reise og kost
            </Typography>
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
            for oss.{' '}
            <Typography typographyType="a" href="#">
              Lenke
            </Typography>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Bli vitnestøtte?</CardAccordionHeader>
          <CardAccordionBody paddingTop="4px">
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
    <StoryTemplate title="Card - accordion" gap="0">
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
    <StoryTemplate title="Card - accordion" gap="0">
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args} cardType="expandable" color="strokeLight">
      <CardAccordion>
        <CardAccordionHeader
          typographyType="bodySans01"
          padding="4px 12px"
          bold
        >
          Dekning av reiseutgifter
        </CardAccordionHeader>
        <CardAccordionBody padding="16px 12px">
          <Typography typographyType="bodySans01">
            I sivile saker avtales dekning av utgifter med den part som innkalte
            deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
            <Typography typographyType="a" href="#">
              særavtale om dekning av utgifter til reise og kost
            </Typography>
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
          </Typography>
        </CardAccordionBody>
      </CardAccordion>
    </Card>
  ),
};

export const Examples: Story = {
  decorators: Story => (
    <StoryTemplate title="Card - examples">
      <Story />
    </StoryTemplate>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <Card {...args}>
      <ContentContainer>
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
        <Divider />
        <DescriptionList>
          <DescriptionListTerm>Title</DescriptionListTerm>
          <DescriptionListDesc>Description</DescriptionListDesc>
        </DescriptionList>
      </ContentContainer>
    </Card>
  ),
};
