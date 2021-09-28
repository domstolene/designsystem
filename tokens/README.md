# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Domstolenes designsystem Elsa](https://design.domstol.no/): farger, typografi, skygger osv. Tokens kan brukes i Domstolenes tjenester i elementer som ikke ligger i komponentbiblioteket. OBS! Domstolenes tjenester skal bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components), dds-design-tokens kan brukes direkte i egne komponenter kun som en midlertidig løsning i eldre prosjekter.

Tokens består av base-tokens - variabler genererte fra Figma styles, og referanse-tokens - et objekt som bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., referanse-tokens kan spesifisere hva fokusfargen skal være, eller font og farge for label i skjemakomponenter. Tanken med referanse-tokens er å gjøre det enklere å gjenbruke koden og eventuelt endre på styling i komponenter ved å endre kun på tokens, uten å røre CSS inni komponentene. OBS! referanse-tokens er under arbeid.

Design tokens er eksportert som JS-konstanter, CSS-variabler og SCSS-variabler. Les mer under [Kom i gang](https://design.domstol.no/987b33f71/p/956e78-kom-i-gang/b/0174a7) og [Design tokens](https://design.domstol.no/987b33f71/p/18bd6f-design-tokens/b/499a2c) i dokumentasjonen.

## Installasjon

```sh
npm install @norges-domstoler/dds-design-tokens
```

## Bruk

### JS

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

### CSS

```css
@import "@norges-domstoler/dds-design-tokens/dist/css/colors.css";

body {
  background-color: var(--dds-color-primary-base);
}
```

### SCSS

```scss
@use '@norges-domstoler/dds-design-tokens/dist/scss/colors';

body {
  background-color: $dds-color-primary-base;
}
```

## Tilgjengelige base-tokens

- colors
- fontPackages (kun JS)
- font
- spacing
- iconSizes
- borderRadius
- border
- outerShadow
- innerShadow

## For bidragsytere

Bilioteket ligger under `/tokens`.

### Installasjon

Klon repoet og installer style-dictionary i `/tokens/dds`:

```
cd tokens/dds
npm install -D style-dictionary
```

### Bruk

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere tokens som JS-konstanter, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
npm run build
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `npm run build` kjøres.
