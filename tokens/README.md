# Tokens

Design tokens brukt i domstolenes designsystem (DDS).

## Installasjon

Installer style-dictionary:

```
npm install -D style-dictionary
```

## Bruk

_Under arbeid_
Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere tokens som JS-variabler, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
npm run build
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `npm run build` kjøres.

## Tokens

_under arbeid_
Tokens består av base-tokens, altså variablene genererte vha Style-dictionary, og referanse-tokens - et objekt som bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter. F.eks., referanse-tokens kan spesifisere hva fokusfarge skal være, eller font og farge for label i skjemakomponenter. Tanken med referanse-tokens er å gjøre det enklere å gjenbruke koden og eventuelt endre på styling i komponenter ved å endre kun på tokens, uten å røre CSS inni komponentene.
