# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

_biblioteket er under arbeid_

Design tokens brukt i [domstolenes designsystem (DDS)](https://design.domstol.no/): farger, typografi, skygger osv. Tokens kan brukes i Domstolenes tjenester i elementer som ikke ligger i komponentbiblioteket. OBS! Domstolenes tjenester skal bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components), dds-design-tokens kan brukes direkte i egne komponenter kun som en midlertidig løsning.

Tokens består av base-tokens - variabler genererte fra Figma styles, og referanse-tokens - et objekt som bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., referanse-tokens kan spesifisere hva fokusfargen skal være, eller font og farge for label i skjemakomponenter. Tanken med referanse-tokens er å gjøre det enklere å gjenbruke koden og eventuelt endre på styling i komponenter ved å endre kun på tokens, uten å røre CSS inni komponentene. OBS! referanse-tokens er under arbeid.

Design tokens er eksportert i JS-objekter. Det jobbes med støtte for CSS-variabler og SASS-variabler.

## Installasjon

```sh
npm install @norges-domstoler/dds-design-tokens
```

## Bruk

```js
import * as React from "react";
import { render } from "react-dom";
import { ddsBaseTokens } from "@norges-domstoler/dds-design-tokens";

const { colors: Colors, spacing: Spacing } = ddsBaseTokens;

const style = {
  backgroundColor: Colors.DdsColorPrimaryBase,
  padding: Spacing.SizesDdsSpacingLocalX075,
};

const App = () => <div style={style}>Tekst</div>;

render(<App />, document.getElementById("root"));
```

## Tilgjengelige base-tokens

- colors
- fontPackages
- spacing
- iconSizes
- borderRadius
- border
- outerShadow
- innerShadow

## For bidragsytere

### Installasjon

Klon repoet og installer style-dictionary:

```
npm install -D style-dictionary
```

### Bruk

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere tokens som JS-variabler, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
npm run build
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `npm run build` kjøres.
