# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Domstolenes designsystem Elsa](https://design.domstol.no/): farger, typografi, avstander, grid, brekkpunker og skygger. Design tokens kan brukes i domstolenes tjenester i bl.a. global styling og custom elementer. Ellers er det obligatorisk å bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components).

Les mer om [design tokens i dokumentasjonen](https://design.domstol.no/987b33f71/p/50f2cd-design-tokens).

## 🔍 Oversikt

Design tokens består av base-tokens og semantiske tokens. Base-tokens er variabler genererte fra Figma styles og tilsvarer identiteten til domstolene definert i designprofilen.

Tanken med semantiske tokens er å innbake i navnet hva token brukes til og kunne benytte seg av themes. Semantiske tokens bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., semantiske tokens kan spesifisere hva fokusfargen skal være, eller font og farger for knapper.

### 📃 Tilgjengelige samantiske tokens

> [!NOTE]
> Semantiske tokens er under arbeid. Flere typer tokens blir tilgjengelige over tid.

- color

### 📃 Tilgjengelige base-tokens

- borderRadius
- breakpoint
- font
- fontPackages (kun JS)
- grid
- iconSize
- shadow
- spacing

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-design-tokens
```

## 🔨 Bruk

Design tokens er eksportert som JS-konstanter, CSS-variabler og SCSS-variabler.

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

> [!TIP]
> Vi anbefaler VS Code plugin [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) for sømløs bruk av tokens i CSS.

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
