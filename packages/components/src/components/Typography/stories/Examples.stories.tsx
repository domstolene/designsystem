import { Heading, Paragraph } from '..';

export default {
  title: 'dds-components/Typography/Examples',
};

export const Article = () => {
  return (
    <div className="story-article">
      <Heading level={1} withMargins>
        Vitne
      </Heading>
      <Paragraph typographyType="leadMedium" withMargins>
        Et vitne har sett, hørt eller erfart noe av betydning for en rettssak.
        Denne siden er for deg som skal vitne i en straffesak eller en sivil
        sak.
      </Paragraph>
      <Heading level={2} withMargins>
        Hvorfor vitne?
      </Heading>
      <Paragraph withMargins>
        Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått en
        innkalling (kalles stevning) til saken fordi partene eller retten mener
        du kjenner til noe som kan være viktig for retten å vite. Du har plikt
        til å møte opp i tråd med innkallingen og forklare deg for retten.
      </Paragraph>
      <Paragraph withMargins>
        En rettssak avgjøres med bakgrunn i det som er kommet fram i rettssalen.
        Derfor må vitner forklare seg for retten slik at dommerne hører
        vitneforklaringen. Det gjelder selv om man tidligere ha forklart seg for
        politiet eller partenes advokat. En vitneforklaring kan avgjøre utfallet
        av en sak, derfor har vitner plikt til å snakke sant.
      </Paragraph>
      <Heading level={2} withMargins>
        Møteplikt og fritak
      </Heading>
      <Heading level={3} withMargins>
        Lang reisevei
      </Heading>
      <Paragraph withMargins>
        Det viktig at du møter opp i tråd med det som står i innkallingen du har
        fått. Du har i utgangspunktet plikt til å møte som vitne uansett hvor
        langt du må reise. Retten kan imidlertid gi fritak hvis reiseveien én
        vei er mer enn 800 km med rutegående transport eller 125 km på annen
        måte. Slikt fritak kan gis dersom ditt oppmøte medfører uforholdsmessige
        ulemper eller kostnader sammenlignet med din betydning for å få belyst
        saken. Dersom du tror slikt fritak kan være aktuelt, må du straks ta
        kontakt med domstolen. Du kan ikke la være å møte uten at du har fått
        klar beskjed om at du er fritatt.
      </Paragraph>
      <Heading level={3} withMargins>
        Sykdom
      </Heading>
      <Paragraph withMargins>
        Blir du syk eller det av andre grunner er umulig for deg å møte, må du
        gi beskjed til domstolene så snart du kan. Dersom du mener du har lovlig
        forfall på grunn av sykdom, må du få en legeerklæring og sende den til
        retten. Det er domstolen som avgjør om sykdommen utgjør et lovlig
        forfall. Hvis du ikke gir retten beskjed om forfallet så snart som
        mulig, risikerer du også bot og erstatningsansvar. Innkallingen gjelder
        inntil du eventuelt har fått beskjed fra retten om at du er blitt
        fritatt for å møte.
      </Paragraph>
      <style>
        {`
        .story-article {
          max-width: 700px;
          margin-top: -1rem; 
        }
        `}
      </style>
    </div>
  );
};
