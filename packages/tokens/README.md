# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Domstolenes designsystem Elsa](https://design.domstol.no/): farger, typografi, avstander skygger og størrelser. Design tokens kan brukes i domstolenes tjenester i bl.a. global styling og custom elementer. Ellers er det obligatorisk å bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components).

## 🔍 Oversikt

Design tokens består av base-tokens og referanse-tokens. Base-tokens er variabler genererte fra Figma styles og tilsvarer identiteten til domstolene definert i designprofilen.

Referanse-tokens (OBS! under arbeid) bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., referanse-tokens kan spesifisere hva fokusfargen skal være, eller font og farge for label i skjemakomponenter. Tanken med referanse-tokens er å gjøre det enklere å gjenbruke koden og eventuelt endre på styling i komponenter ved å endre kun på tokens, uten å røre CSS inni komponentene.

### 📃 Tilgjengelige base-tokens

- border
- borderRadius
- breakpoints
- colors
- font
- fontPackages (kun JS)
- grid
- iconSizes
- innerShadow
- outerShadow
- spacing

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-design-tokens
```

## 🔨 Bruk

Design tokens er eksportert som JS-konstanter, CSS-variabler og SCSS-variabler. Les mer under [Kom i gang](https://design.domstol.no/987b33f71/p/956e78-kom-i-gang/b/0174a7) og [Design tokens](https://design.domstol.no/987b33f71/p/18bd6f-design-tokens/b/499a2c) i dokumentasjonen.

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
@use "@norges-domstoler/dds-design-tokens/dist/scss/colors" as colors;

body {
  background-color: colors.$dds-color-primary-base;
}
```

## ⌨️ For bidragsytere

Bilioteket ligger under `/tokens`.

### Installasjon

Klon repoet og installer style-dictionary i `/tokens/dds`:

```
cd tokens/dds
pnpm add -D style-dictionary
```

### Generere design tokens i kode

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere design tokens som JS-konstanter, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
pnpm build-tokens
```

Genererte variabler ligger i `/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `pnpm build-tokens` kjøres.
