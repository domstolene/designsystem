# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Domstolenes designsystem Elsa](https://design.domstol.no/): farger, typografi, avstander skygger og størrelser. Design tokens kan brukes i domstolenes tjenester i bl.a. global styling og custom elementer. Ellers er det obligatorisk å bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components).

## 🔍 Oversikt

Design tokens består av base-tokens og semantiske tokens. Base-tokens er variabler genererte fra Figma styles og tilsvarer identiteten til domstolene definert i designprofilen.

Semantiske tokens (OBS! under arbeid) bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., semantiske tokens kan spesifisere hva fokusfargen skal være, eller font og farger for knapper. Tanken med semantiske tokens er å innbake i navnet hva token brukes til og kunne benytte seg av themes.

### 📃 Tilgjengelige base-tokens

- borderRadius
- breakpoints
- colors
- font
- fontPackages (kun JS)
- grid
- iconSizes
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
import * as React from 'react';
import { render } from 'react-dom';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';

const style = {
  backgroundColor: ddsTokens.DdsColorBgDefault,
  padding: ddsTokens.DdsSpacingX075,
};

const App = () => <div style={style}>Tekst</div>;

render(<App />, document.getElementById('root'));
```

### CSS

```css
@import '@norges-domstoler/dds-design-tokens/dist/css/ddsTokens.css';

body {
  background-color: var(--dds-color-bg-default);
}
```

### SCSS

```scss
@use '@norges-domstoler/dds-design-tokens/dist/scss/ddsTokens' as ddsTokens;

body {
  background-color: ddsTokens.$dds-color-bg-default;
}
```

## ⌨️ For bidragsytere

Bilioteket ligger under `packages/tokens`.

### Installasjon

Installer style-dictionary:

```
pnpm --filter "@norges-domstoler/dds-design-tokens" add -D style-dictionary
```

### Generere design tokens i kode

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere design tokens som JS-konstanter, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `packages/tokens/dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
node build.js
```

Genererte variabler ligger i `packages/tokens/dds/build` organisert etter plattform.

### Build

Det brukes custom build for generering av variabler, den ligger i `/dds/build.js`. I tillegg spesifiserer `/dds/config.json` hva output skal være og mappestruktur for den etter `node build.js` kjøres.
