import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import {
  DetailList,
  DetailListDesc,
  DetailListRow,
  DetailListTerm,
} from '../DetailList';
import { useAccordion } from '../helpers/AccordionBase';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon/icons';
import { InlineButton } from '../InlineButton';
import { Link, Paragraph, Typography } from '../Typography';

import { Accordion, AccordionBody, AccordionHeader } from '.';

export default {
  title: 'dds-components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    isExpanded: { control: 'boolean' },
    htmlProps: { control: false },
  },
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: args => (
    <Accordion {...args}>
      <AccordionHeader>Header</AccordionHeader>
      <AccordionBody>Content</AccordionBody>
    </Accordion>
  ),
};

export const Group: Story = {
  render: args => (
    <>
      <div>
        <Accordion {...args}>
          <AccordionHeader>Dekning av reiseutgifter</AccordionHeader>
          <AccordionBody>
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
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Ansvar for behandlingen</AccordionHeader>
          <AccordionBody>
            DA er behandlingsansvarlig for opplysningene som registreres i
            Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige
            ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen
            for oss. <Link href="#">Lenke</Link>
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Bli vitnestøtte?</AccordionHeader>
          <AccordionBody>
            <Typography typographyType="headingSans01" withMargins>
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
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Header</AccordionHeader>
          <AccordionBody>Content</AccordionBody>
        </Accordion>
      </div>
    </>
  ),
};

export const Controlled: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: args => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <Accordion
        {...args}
        isExpanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionHeader>Header</AccordionHeader>
        <AccordionBody>Content</AccordionBody>
      </Accordion>
    );
  },
};

export const Styled: Story = {
  render: args => (
    <Accordion {...args}>
      <AccordionHeader
        typographyType="bodySans01"
        htmlProps={{
          style: {
            padding: 'var(--dds-spacing-x0-5) var(--dds-spacing-x0-75)',
          },
        }}
        bold
      >
        Dekning av reiseutgifter
      </AccordionHeader>
      <AccordionBody
        htmlProps={{
          style: {
            padding: 'var(--dds-spacing-x0-5) var(--dds-spacing-x0-75)',
          },
        }}
      >
        <Paragraph typographyType="bodySans01">
          I sivile saker avtales dekning av utgifter med den part som innkalte
          deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
          <Link href="#">
            særavtale om dekning av utgifter til reise og kost
          </Link>
          ). Reisen skal foretas på raskeste og rimeligste måte for staten.
          Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse
          for bruk av egen bil godtas bare i den utstrekning det er rimeligst
          for det offentlige, med mindre særlige grunner tilsier at du må bruke
          bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for
          rimeligste offentlig transport, for eksempel buss, tog og så videre.
          For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til
          måltider etter satsene i særavtalen om dekning av utgifter til reise
          og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du
          registrere måltidsfradrag.
        </Paragraph>
      </AccordionBody>
    </Accordion>
  ),
};

export const Custom: Story = {
  render: () => {
    const { isExpanded, bodyContentRef, headerProps, bodyProps } = useAccordion(
      {
        initiallyExpanded: false,
      },
    );

    const { height, ...restBodyProps } = bodyProps;

    return (
      <div>
        <Button
          icon={isExpanded ? ChevronUpIcon : ChevronDownIcon}
          iconPosition="right"
          {...headerProps}
        >
          Vis dokumenter
        </Button>
        <div
          style={{
            height: height,
            paddingBlock: 'var(dds-spacing-x1)',
          }}
          {...restBodyProps}
        >
          <div ref={bodyContentRef}>
            <DetailList>
              <DetailListRow>
                <DetailListTerm>Dokument id</DetailListTerm>
                <DetailListDesc>Dokumentnavn</DetailListDesc>
                <DetailListDesc style={{ textAlign: 'right' }}>
                  <InlineButton
                    onClick={() => {
                      null;
                    }}
                  >
                    Slett
                  </InlineButton>
                </DetailListDesc>
              </DetailListRow>
              <DetailListRow>
                <DetailListTerm>Dokument id</DetailListTerm>
                <DetailListDesc>Dokumentnavn</DetailListDesc>
                <DetailListDesc style={{ textAlign: 'right' }}>
                  <InlineButton
                    onClick={() => {
                      null;
                    }}
                  >
                    Slett
                  </InlineButton>
                </DetailListDesc>
              </DetailListRow>
            </DetailList>
          </div>
        </div>
      </div>
    );
  },
};
