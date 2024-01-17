import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Button } from '../Button';
import { Typography } from '../Typography';

import { Drawer, DrawerGroup, type DrawerProps } from '.';

export default {
  title: 'dds-components/Drawer',
  component: Drawer,
};

export const OverviewPlacement = (args: DrawerProps) => {
  return (
    <StoryTemplate title="Drawer - placement overview">
      <DrawerGroup>
        <Button>Åpne høyre</Button>
        <Drawer {...args} header="Tittel">
          Innhold
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button>Åpne venstre</Button>
        <Drawer {...args} header="Tittel" placement="left">
          Innhold
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: DrawerProps) => {
  return (
    <StoryTemplate title="Drawer - size overview">
      <DrawerGroup>
        <Button>Åpne liten</Button>
        <Drawer {...args} header="Rettsmekling">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button>Åpne medium</Button>
        <Drawer {...args} header="Rettsmekling" size="medium">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button>Åpne stor</Button>
        <Drawer {...args} header="Rettsmekling" size="large">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>
  );
};

export const Default = (args: DrawerProps) => {
  return (
    <StoryTemplate title="Drawer - default">
      <DrawerGroup>
        <Button>Åpne</Button>
        <Drawer {...args} header="Tittel">
          Innhold
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>
  );
};

export const LongContent = (args: DrawerProps) => {
  return (
    <StoryTemplate title="Drawer - long content">
      <DrawerGroup>
        <Button>Åpne</Button>
        <Drawer {...args} header="Rettsmekling">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er fordelene med rettsmekling?
          </Typography>
          <Typography>
            Formålet med rettsmekling er at partene blir enige om en løsning som
            alle partene kan leve med. En mekler hjelper partene til å komme
            fram til enighet ved å få innblikk i hva slags interesser og behov
            partene har, og vil prøve å skape en dialog preget av forståelse og
            enighet. Det innebærer som regel at partene må være innstilt på et
            kompromiss sammenlignet med sitt opprinnelige standpunkt.
          </Typography>
          <Typography>
            I et meklingsresultat blir ingen av partene "vinner" eller "taper".
            Hensikten er at begge parter skal vinne på denne metoden og at
            resultatet blir lettere å leve med i ettertid.
          </Typography>
          <Typography>
            Rettsmekling egner seg derfor særlig godt som metode hvis partene
            fortsatt skal ha kontakt i tiden framover (for eksempel
            forretningsforbindelser, naboer eller i arbeids- og husleieforhold).
            Rettsmekling kan uansett være et godt alternativ også i de fleste
            andre typer konflikter. En mekling er raskere, enklere og vanligvis
            billigere for partene enn ordinær domstolsbehandling.
          </Typography>
          <Typography>
            Gjennom meklingen bidrar dommeren til å sette partenes faktiske
            interesser og behov i fokus, mer enn de rent juridiske argumentene.
            Dermed blir det også lettere å finne en skreddersydd løsning på
            tvisten. Andre tema enn det saken gjelder kan trekkes inn i
            rettsmeklingen. Dette gjør at rettsmeklingen kan bidra til løsning
            av flere konflikter mellom partene enn det saken i utgangspunktet
            gjelder.
          </Typography>
          <Typography>
            Rettsmekling foregår for lukkede dører og uten rettsmøte. Partene
            unngår dermed den publisiteten som ordinær rettsbehandling kan
            medføre.
          </Typography>
          <Button>Gjør noe</Button>
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>
  );
};
