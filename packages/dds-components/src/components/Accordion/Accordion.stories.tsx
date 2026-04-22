import preview from '#.storybook/preview';
import { type JSX, useState } from 'react';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
} from '../../storybook';
import { Button } from '../Button';
import {
  DetailList,
  DetailListDesc,
  DetailListRow,
  DetailListTerm,
} from '../DetailList';
import { useAccordion } from '../helpers/AccordionBase';
import { AnimatedChevronUpDownIcon } from '../Icon/icons/animated';
import { InlineButton } from '../InlineButton';
import { Link, Paragraph } from '../Typography';

import { Accordion, AccordionBody, AccordionHeader } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Accordion',
  component: Accordion,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
  },
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  render: (args): JSX.Element => (
    <Accordion {...args}>
      <AccordionHeader>Header</AccordionHeader>
      <AccordionBody>Content</AccordionBody>
    </Accordion>
  ),
});

export const Group = meta.story({
  render: args => (
    <>
      <div>
        <Accordion {...args}>
          <AccordionHeader>Administrator</AccordionHeader>
          <AccordionBody>
            Den som leder rettsmøtet, kalles en administrator. Både i
            jordskifterettene, tingrettene og lagmannsrettene er det en av
            dommerne fra domstolen. En meddommer er aldri administrator. Det er
            også administrator som skriver utkast til dom eller kjennelse i
            saken.
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Advokat</AccordionHeader>
          <AccordionBody>
            En advokat er en person med juridisk embetseksamen (cand.jur. eller
            master i rettsvitenskap) og spesiell tillatelse (advokatbevilling)
            til å utføre juridiske tjenester overfor en klient. Dette skjer
            vanligvis i form av rådgivning og å representere klienten overfor
            domstoler, andre offentlige myndigheter eller andre private parter.
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Advokaturen</AccordionHeader>
          <AccordionBody>
            Prøve som må bestås før en advokat har rett til å føre saker for
            Høyesterett. Prøven består av å føre to saker for Høyesterett.
            Dommerne i saken avgjør om advokaten består.{' '}
            <Link href="http://lovdata.no/all/hl-19150813-005.html#221">
              Les om Advokaturen på Lovdata
            </Link>
            .
          </AccordionBody>
        </Accordion>

        <Accordion {...args}>
          <AccordionHeader>Header</AccordionHeader>
          <AccordionBody>Content</AccordionBody>
        </Accordion>
      </div>
    </>
  ),
});

export const Controlled = meta.story({
  render: args => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <>
        utvided: {isExpanded.toString()}
        <Accordion
          {...args}
          isExpanded={isExpanded}
          onChange={() => setIsExpanded(!isExpanded)}
        >
          <AccordionHeader>Header</AccordionHeader>
          <AccordionBody>Content</AccordionBody>
        </Accordion>
      </>
    );
  },
});

export const Styled = meta.story({
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
        .custom-header {
          padding: var(--dds-spacing-x0-5) var(--dds-spacing-x0-75);
        }

        .custom-panel {
          padding: var(--dds-spacing-x0-5) var(--dds-spacing-x0-75);
        }
          `}
        </style>
      </>
    ),
  ],
  render: args => (
    <Accordion {...args}>
      <AccordionHeader
        typographyType="bodyShortMedium"
        className="custom-header"
        bold
      >
        Dekning av reiseutgifter
      </AccordionHeader>
      <AccordionBody className="custom-panel">
        <Paragraph typographyType="bodyLongSmall">
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
});

export const Custom = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story => (
      <>
        <Story />
        <style>
          {`
          .story-align-right {
            text-align: right;
          }
          `}
        </style>
      </>
    ),
  ],
  render: () => {
    const { isExpanded, bodyContentRef, headerProps, bodyProps } = useAccordion(
      {},
    );

    const { height, ...restBodyProps } = bodyProps;
    const iconState = isExpanded ? 'up' : 'down';

    return (
      <div>
        <Button
          icon={AnimatedChevronUpDownIcon}
          iconState={iconState}
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
                <DetailListDesc className="story-align-right">
                  <InlineButton
                    onClick={() => {
                      //kun for showcase
                    }}
                  >
                    Slett
                  </InlineButton>
                </DetailListDesc>
              </DetailListRow>
              <DetailListRow>
                <DetailListTerm>Dokument id</DetailListTerm>
                <DetailListDesc>Dokumentnavn</DetailListDesc>
                <DetailListDesc className="story-align-right">
                  <InlineButton
                    onClick={() => {
                      //kun for showcase
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
});
