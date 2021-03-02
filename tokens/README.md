# Tokens

Design tokens brukt i domstolenes designsystem (DDS).

## Installasjon

Installer dependencies:

```
npm install
```

## Bruk

*Under arbeid*
Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere tokens som JS-variabler, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
npm run build
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `npm run build` kjøres.

## Tokens

*innholdet kommer snart*