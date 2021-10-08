import { Typography as DDSTypography } from './Typography';
import styled from 'styled-components';
import { LocalMessage } from '../LocalMessage';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Typography/Examples',
  component: DDSTypography
};

const ArticleContainer = styled.div`
  max-width: 700px;
`;

export const Article = () => {
  return (
    <StoryTemplate title="Article - example">
      <ArticleContainer>
        <DDSTypography typographyType="headingSans06" withMargins>
          Vitne
        </DDSTypography>
        <DDSTypography typographyType="leadSans03" withMargins>
          Et vitne har sett, hørt eller erfart noe av betydning for en rettssak.
          Denne siden er for deg som skal vitne i en straffesak eller en sivil
          sak.
        </DDSTypography>
        <DDSTypography typographyType="headingSans05" as="h2" withMargins>
          Hvorfor vitne?
        </DDSTypography>
        <DDSTypography typographyType="bodySerif02" withMargins>
          Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått
          en innkalling (kalles stevning) til saken fordi partene eller retten
          mener du kjenner til noe som kan være viktig for retten å vite. Du har
          plikt til å møte opp i tråd med innkallingen og forklare deg for
          retten.
        </DDSTypography>
        <DDSTypography typographyType="bodySerif02" withMargins>
          En rettssak avgjøres med bakgrunn i det som er kommet fram i
          rettssalen. Derfor må vitner forklare seg for retten slik at dommerne
          hører vitneforklaringen. Det gjelder selv om man tidligere ha forklart
          seg for politiet eller partenes advokat. En vitneforklaring kan
          avgjøre utfallet av en sak, derfor har vitner plikt til å snakke sant.
        </DDSTypography>
        <DDSTypography typographyType="headingSans05" as="h2" withMargins>
          Møteplikt og fritak
        </DDSTypography>
        <DDSTypography typographyType="headingSans04" as="h3" withMargins>
          Lang reisevei
        </DDSTypography>
        <DDSTypography typographyType="bodySerif02" withMargins>
          Det viktig at du møter opp i tråd med det som står i innkallingen du
          har fått. Du har i utgangspunktet plikt til å møte som vitne uansett
          hvor langt du må reise. Retten kan imidlertid gi fritak hvis
          reiseveien én vei er mer enn 800 km med rutegående transport eller 125
          km på annen måte. Slikt fritak kan gis dersom ditt oppmøte medfører
          uforholdsmessige ulemper eller kostnader sammenlignet med din
          betydning for å få belyst saken. Dersom du tror slikt fritak kan være
          aktuelt, må du straks ta kontakt med domstolen. Du kan ikke la være å
          møte uten at du har fått klar beskjed om at du er fritatt.
        </DDSTypography>
        <DDSTypography typographyType="headingSans04" as="h3" withMargins>
          Sykdom
        </DDSTypography>
        <DDSTypography typographyType="bodySerif02" withMargins>
          Blir du syk eller det av andre grunner er umulig for deg å møte, må du
          gi beskjed til domstolene så snart du kan. Dersom du mener du har
          lovlig forfall på grunn av sykdom, må du få en legeerklæring og sende
          den til retten. Det er domstolen som avgjør om sykdommen utgjør et
          lovlig forfall. Hvis du ikke gir retten beskjed om forfallet så snart
          som mulig, risikerer du også bot og erstatningsansvar. Innkallingen
          gjelder inntil du eventuelt har fått beskjed fra retten om at du er
          blitt fritatt for å møte.
        </DDSTypography>
      </ArticleContainer>
    </StoryTemplate>
  );
};

export const Link = () => {
  return (
    <StoryTemplate title="Link - examples">
      <DDSTypography>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <DDSTypography
          typographyType="a"
          href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
        >
          sivile saker
        </DDSTypography>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <DDSTypography
          typographyType="a"
          href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3"
          externalLink
        >
          tvisteloven §§ 8-3
        </DDSTypography>
        . Litt mer tekst.
      </DDSTypography>
      <LocalMessage>
        <DDSTypography>
          Dette er tekst med{' '}
          <DDSTypography
            typographyType="a"
            href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          >
            lenke
          </DDSTypography>
          .
        </DDSTypography>
      </LocalMessage>
      <LocalMessage purpose="danger">
        <DDSTypography>
          Dette er tekst med{' '}
          <DDSTypography
            typographyType="a"
            href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          >
            lenke
          </DDSTypography>
          .
        </DDSTypography>
      </LocalMessage>
      <LocalMessage purpose="success">
        <DDSTypography>
          Dette er tekst med{' '}
          <DDSTypography
            typographyType="a"
            href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          >
            lenke
          </DDSTypography>
          .
        </DDSTypography>
      </LocalMessage>
      <LocalMessage purpose="tips">
        <DDSTypography>
          Dette er tekst med{' '}
          <DDSTypography
            typographyType="a"
            href="http://localhost:6006/?path=/story/design-system-typography-link--overview"
          >
            lenke
          </DDSTypography>
          .
        </DDSTypography>
      </LocalMessage>
    </StoryTemplate>
  );
};
