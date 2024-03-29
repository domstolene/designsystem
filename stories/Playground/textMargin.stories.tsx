import { Typography as DDSTypography } from "@norges-domstoler/dds-components";
import styled from "styled-components";
import { StoryTemplate } from "@norges-domstoler/storybook-components";

export default {
  title: "Playground/Text margins example",
  component: DDSTypography,
};

const ArticleContainer = styled.div`
  max-width: 700px;
`;

export const ArticleWebsite = () => {
  const styleP = { marginTop: 0, marginBottom: "40px" };
  const styleH = { marginTop: 0, marginBottom: "16px" };
  return (
    <StoryTemplate title="Article - example">
      <ArticleContainer>
        <DDSTypography typographyType="headingSans06" style={styleH}>
          Føre min egen sak
        </DDSTypography>
        <DDSTypography typographyType="leadSans04" style={styleP}>
          I sivile saker kan du velge å føre din egen sak, uten å bruke advokat.
          Her er noen ting du bør tenke gjennom før du velger dette
          alternativet.
        </DDSTypography>
        <DDSTypography typographyType="headingSans04" as="h2" style={styleH}>
          1. Dette bør du ta i betraktning
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Det kan være lurt å sette deg godt inn i rettsprosessen, og forberede
          deg grundig på å legge fram din sak på en oversiktlig måte.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Selv om du sparer utgiftene til egen advokat, må du normalt betale
          motpartens sakskostnader hvis du skulle tape saken. Hvis du går til
          sak mot noen, men trekker saken underveis, må du også vanligvis betale
          motpartens advokat.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Det kan være vanskelig å føre sin egen sak, hvis jussen er komplisert
          eller bevissituasjonen veldig omfattende. Det kan også være vanskelig
          å holde hodet kaldt, hvis konflikten involverer sterke følelser. I
          slike tilfeller kan det vært tilrådelig å bruke advokat.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Vær også oppmerksom på at retten enkelte ganger kan pålegge deg å
          bruke en advokat. Les om erstatning av sakskostnader i tvisteloven
          (lovdata.no)
        </DDSTypography>
        <DDSTypography
          typographyType="headingSans03"
          as="h3"
          bold
          style={styleH}
        >
          Først til Forliksrådet
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Hvis du ikke skal bruke advokat, er hovedregelen at Forliksrådet først
          skal behandle konflikten. Det er forliksråd i alle kommuner.
          Forliksrådet er det laveste leddet i rettssystemet. Her kan dere enten
          komme til enighet om en løsning, eller få saken avgjort med en dom.
          Denne dommen kan du så bringe inn for tingretten innen én måned.
        </DDSTypography>
        <DDSTypography typographyType="headingSans04" as="h2" style={styleH}>
          2. Kan du få støtte til advokat?
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Det finnes muligheter for å få dekket utgifter til advokat. Har du lav
          inntekt og formue, kan du søke om fri rettshjelp. Også forsikringer,
          borettslag og fagforeninger kan tilby rettshjelp. Det gjør også
          Advokatvakten og noen studentforeninger.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Et annet alternativ er å bringe saken inn for Konfliktrådet, som er
          gratis. Det kan være en fordel hvis du skal forholde deg til
          motparten, også etter at konflikten er avgjort. Eksempler på dette er
          nabokrangel og konflikt på arbeidsplassen.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Les mer på http://www.konfliktraadet.no/.
        </DDSTypography>
        <DDSTypography typographyType="headingSans04" as="h2" style={styleH}>
          3. Stevning, tilsvar og saksforberedelse
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Du går til sak mot noen ved å skrive en stevning som du sender inn
          eller leverer til tingretten. Tingretten sender stevningen til den du
          går til sak mot.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Er det du som har mottatt en stevning, må du skrive et tilsvar og
          sende det inn til tingretten innen en bestemt frist som står i brevet.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Det er også mulig å be domstolen om hjelp til å skrive både stevning
          og tilsvar. Som regel må du avtale dette på forhånd. Vær klar over at
          tingretten ikke kan gi deg juridiske råd i saken.Regler om stevning og
          tilsvar, se tvisteloven § 9-2 og § 9-3 (lovdata.no).
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Når tilsvaret er sendt til den saksøkte, får begge parter tilbud om å
          komme til rettsmekling i domstolen. Begge må være enige om å prøve
          mekling. Les mer om rettsmekling her.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Dommeren i saken vil prøve å tilrettelegge saksbehandlingen slik at
          den passer best mulig til det konflikten handler om.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Hvis konflikten dreier seg om penger, og beløpet er under 250 000
          kroner, skal saken i utgangspunktet behandles som en småkravsak. Les
          mer om småkravsprosessen her. Hvis ikke, vil saken normalt bli
          behandlet som en sivil sak med hovedforhandling. Les mer om
          sivilprosessen her.
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          Hvis du skal føre din egen sak, må du gjøre alle de oppgavene som
          advokatene vanligvis gjør under saksforberedelsen og i rettsmøtene.
        </DDSTypography>
        <DDSTypography
          typographyType="headingSans03"
          as="h3"
          bold
          style={styleH}
        >
          Gebyr
        </DDSTypography>
        <DDSTypography typographyType="bodySans03" style={styleP}>
          I de fleste sakene må man betale gebyr for å få saken behandlet. Noen
          saker er fritatt for gebyr: barnefordeling, farskapssaker, visse saker
          etter husleieloven og stillingsvernssaker reist av arbeidstaker mv.
        </DDSTypography>
      </ArticleContainer>
    </StoryTemplate>
  );
};
