# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Design tokens brukt i [domstolenes designsystem (DDS)](https://design.domstol.no/): farger, typografi, skygger osv. OBS! Domstolenes tjenester skal bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components), dds-design-tokens kan brukes direkte kun som en midlertidig løsning.

Tokens består av base-tokens, altså variabler genererte fra Figma styles, og referanse-tokens - et objekt som bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter. F.eks., referanse-tokens kan spesifisere hva fokusfargen skal være, eller font og farge for label i skjemakomponenter. Tanken med referanse-tokens er å gjøre det enklere å gjenbruke koden og eventuelt endre på styling i komponenter ved å endre kun på tokens, uten å røre CSS inni komponentene. OBS! referanse-tokens er under arbeid.

## Installasjon

```sh
npm install @norges-domstoler/dds-design-tokens
```

## Bruk

```js
import { ddsBaseTokens } from "@norges-domstoler/dds-design-tokens";
```

## Tilgjengelige base-tokens

- colors
- fontPackages
- spacing
- borderRadius
- border
- outerShadow
- innerShadow

## For bidragsytere

### Installasjon

Installer style-dictionary:

```
npm install -D style-dictionary
```

### Bruk

_Under arbeid_

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere tokens som JS-variabler, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
npm run build
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `npm run build` kjøres.
