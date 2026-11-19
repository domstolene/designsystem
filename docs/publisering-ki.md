# Bygg og publisering av KI-dokumentasjon

Kjør `pnpm build:docs` fra roten av repoet. Kommandoen bygger `docs-static/llms.txt` og `docs-static/ki/` og sjekker at lenker inn i `/ki/` har et mål i leveransen. Åpne `docs-static/ki/oversikt.md` i en Markdown-leser for å se dokumentasjonen. `llms.txt` i roten av repoet er inngangen til indeksen; emnelistene i den publiserbare filen genereres fra dokumentene som ble bygd.

## Kilder og vedlikehold

- Rediger Markdown-oversikten i [`docs/ki/oversikt.md`](ki/oversikt.md), komponent- og mønstertekst i Storybook-MDX, API i TypeScript/JSDoc, og pakkedokumentasjon i README og changelog. Tokenverdier og ikonbeskrivelser hentes fra eksisterende kilder.
- Bygget gjør Storybook-demoer om til lenker, beholder tekst og kodeeksempler og leser eksporterte typer uten å kjøre demoene. En MDX-blokk bygget ikke støtter, gir en feil med kildefil og linjenummer.
- Bruk [Zeroheight-kartleggingen](zeroheight-kartlegging.md) til å avklare innhold som skal inn i repoet. Legg nye frittstående Markdown-veiledninger under `docs/ki/`; de tas automatisk med i indeksen. Når en oppføring er overført, lenk til den nye kilden fra kartleggingen.

## Legg filene på design.domstol.no

1. Bygg fra revisjonen dere skal publisere. Publiser innholdet i `docs-static/` slik at `llms.txt` ligger på `/llms.txt`, og hele `ki/` beholder mappestrukturen sin på `/ki/`. Publiser den genererte `llms.txt`, som inneholder hele indeksen.
2. Avklar rutingen med domeneeier. `design.domstol.no` peker til Zeroheight, og repoets Storybook ligger på GitHub Pages. DNS alene kan ikke rute etter sti. Hvis Zeroheight ikke kan servere filene på disse stiene, bruk en proxy eller en annen godkjent publiseringsløsning som kan servere `/llms.txt` og `/ki/*` på samme domene og sende øvrige forespørsler til Zeroheight.
3. Kontroller uten innlogging at `/llms.txt` og noen lenkede `.md`-filer gir `200` med filinnholdet, for eksempel `text/plain` for indeksen og `text/markdown` for sidene. Sjekk at eksisterende Zeroheight-lenker og faner fortsatt fungerer.

## Ta dokumentasjonen i bruk i Context7

1. Legg til `https://design.domstol.no/llms.txt` som offentlig `llms.txt`-kilde i [Context7](https://context7.com/). Med [Admin MCP](https://context7.com/docs/howto/admin-mcp) er kildetypen `llmstxt`.
2. Vent til indekseringen er ferdig. Finn biblioteket med «Elsa – Domstolenes designsystem» eller `@norges-domstoler/dds-components`, og slå opp `DdsProvider`, skjemavalidering og et konkret CSS-token. Sjekk at svarene kommer fra detaljsidene under `/ki/`.
3. Noter bibliotek-ID-en her etter registrering. Etter ny publisering kan eier [oppdatere indeksen](https://context7.com/docs/library-updates) ved behov.
