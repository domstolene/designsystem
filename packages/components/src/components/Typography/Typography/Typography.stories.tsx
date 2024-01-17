import { StoryTemplate } from '@norges-domstoler/storybook-components';
import styled from 'styled-components';

import { Typography, type TypographyProps } from '..';

type StoryTProps = {
  text: string;
} & TypographyProps;

export default {
  title: 'dds-components/Typography/Typography',
  component: Typography,
  argTypes: {
    typographyType: { control: { type: 'select' } },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    withMargins: { control: { type: 'boolean' } },
    externalLink: { control: { type: 'boolean' } },
    color: { control: { type: 'text' } },
    href: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    as: { control: { type: 'text' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'target'],
    },
  },
};

export const Default = (args: StoryTProps) => {
  const { text, ...rest } = args;
  return (
    <StoryTemplate title="Typography - default">
      <Typography {...rest}>{text || 'default'}</Typography>
    </StoryTemplate>
  );
};

const ArticleContainer = styled.div`
  max-width: 700px;
`;

export const Article = () => {
  return (
    <StoryTemplate title="Article - example">
      <ArticleContainer>
        <Typography typographyType="headingSans06" withMargins>
          Vitne
        </Typography>
        <Typography typographyType="leadSans03" withMargins>
          Et vitne har sett, hørt eller erfart noe av betydning for en rettssak.
          Denne siden er for deg som skal vitne i en straffesak eller en sivil
          sak.
        </Typography>
        <Typography typographyType="headingSans05" as="h2" withMargins>
          Hvorfor vitne?
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått
          en innkalling (kalles stevning) til saken fordi partene eller retten
          mener du kjenner til noe som kan være viktig for retten å vite. Du har
          plikt til å møte opp i tråd med innkallingen og forklare deg for
          retten.
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          En rettssak avgjøres med bakgrunn i det som er kommet fram i
          rettssalen. Derfor må vitner forklare seg for retten slik at dommerne
          hører vitneforklaringen. Det gjelder selv om man tidligere ha forklart
          seg for politiet eller partenes advokat. En vitneforklaring kan
          avgjøre utfallet av en sak, derfor har vitner plikt til å snakke sant.
        </Typography>
        <Typography typographyType="headingSans05" as="h2" withMargins>
          Møteplikt og fritak
        </Typography>
        <Typography typographyType="headingSans04" as="h3" withMargins>
          Lang reisevei
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Det viktig at du møter opp i tråd med det som står i innkallingen du
          har fått. Du har i utgangspunktet plikt til å møte som vitne uansett
          hvor langt du må reise. Retten kan imidlertid gi fritak hvis
          reiseveien én vei er mer enn 800 km med rutegående transport eller 125
          km på annen måte. Slikt fritak kan gis dersom ditt oppmøte medfører
          uforholdsmessige ulemper eller kostnader sammenlignet med din
          betydning for å få belyst saken. Dersom du tror slikt fritak kan være
          aktuelt, må du straks ta kontakt med domstolen. Du kan ikke la være å
          møte uten at du har fått klar beskjed om at du er fritatt.
        </Typography>
        <Typography typographyType="headingSans04" as="h3" withMargins>
          Sykdom
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Blir du syk eller det av andre grunner er umulig for deg å møte, må du
          gi beskjed til domstolene så snart du kan. Dersom du mener du har
          lovlig forfall på grunn av sykdom, må du få en legeerklæring og sende
          den til retten. Det er domstolen som avgjør om sykdommen utgjør et
          lovlig forfall. Hvis du ikke gir retten beskjed om forfallet så snart
          som mulig, risikerer du også bot og erstatningsansvar. Innkallingen
          gjelder inntil du eventuelt har fått beskjed fra retten om at du er
          blitt fritatt for å møte.
        </Typography>
      </ArticleContainer>
    </StoryTemplate>
  );
};
