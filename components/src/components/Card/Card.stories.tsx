import {
  CardAccordion as DDSAccordion,
  CardAccordionHeader,
  CardAccordionBody,
  Card as DDSCard,
  CardProps
} from '.';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { Divider } from '../Divider';
import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm
} from '../DescriptionList';
import { Typography } from '../Typography';
import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';

export default {
  title: 'Design system/Card',
  component: DDSCard
};

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
  padding: ${ddsBaseTokens.spacing.SizesDdsSpacingLocalX075};
`;

export const Overview = () => {
  return (
    <StoryTemplate title="Card - overview" display="grid" columnsAmount={4}>
      <DDSCard>
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="filledDark">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="strokeDark">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="strokeLight">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="filledDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="strokeDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="strokeLight" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </DDSCard>
      <DDSCard color="filledLight">
        <DDSAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </DDSAccordion>
      </DDSCard>
      <DDSCard color="filledDark">
        <DDSAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </DDSAccordion>
      </DDSCard>
      <DDSCard color="strokeLight">
        <DDSAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </DDSAccordion>
      </DDSCard>
      <DDSCard color="strokeDark">
        <DDSAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </DDSAccordion>
      </DDSCard>
    </StoryTemplate>
  );
};

export const Default = (args: CardProps) => {
  return (
    <StoryTemplate title="Card - default">
      <DDSCard {...args}>Content</DDSCard>
    </StoryTemplate>
  );
};

export const Accordion = (args: CardProps) => {
  return (
    <StoryTemplate title="Card - accordion" gap="0">
      <DDSCard {...args}>
        <DDSAccordion>
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
        </DDSAccordion>
      </DDSCard>
      <DDSCard {...args}>
        <DDSAccordion>
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
        </DDSAccordion>
      </DDSCard>
      <DDSCard {...args}>
        <DDSAccordion>
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </DDSAccordion>
      </DDSCard>
    </StoryTemplate>
  );
};

export const Examples = (args: CardProps) => {
  return (
    <StoryTemplate title="Card - examples">
      <DDSCard {...args}>
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
      </DDSCard>
    </StoryTemplate>
  );
};
