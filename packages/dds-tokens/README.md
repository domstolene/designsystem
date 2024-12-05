# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Elsa - domstolenes designsystem](https://design.domstol.no/): farger, typografi, avstander, grid, brekkpunker, størrelser, broder-radius og skygger. Design tokens kan brukes i domstolenes tjenester i bl.a. global styling og custom elementer. Ellers er det obligatorisk å bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components).

Design tokens kommer i to temaer: Core og Public. Valg av tema styres med `<ThemeProvider>` komponent som ligger i `dds-components`.

Les mer om [design tokens i dokumentasjonen](https://design.domstol.no/987b33f71/p/50f2cd-design-tokens).

## 🔍 Oversikt

Design tokens består av base-tokens og semantiske tokens.

Base-tokens er variabler genererte fra Figma styles og tilsvarer identiteten til domstolene definert i designprofilen.

Tanken med semantiske tokens er å innbake i navnet hva token brukes til og kunne benytte seg av temaer. Semantiske tokens bruker base-tokens til å definere logikk for hvordan base-tokens skal brukes videre i komponenter og andre elementer. F.eks., semantiske tokens kan spesifisere hva fokusfargen skal være, eller font og farger for knapper.

Enkelte typer tokens er tilgjengelige kun i base-variant, da de brukes i ulike kontekster og ikke har snevret bruksområde. Dette inkluderer avstander, brekkpunkter og skygger.

### 📃 Tilgjengelige tokens

- border-radius
- breakpoint
- color
- font
- grid
- icon-size
- shadow
- spacing

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-design-tokens
```

## 🔨 Bruk

Design tokens er eksportert som JS-konstanter, CSS-variabler og SCSS-variabler. De brukes i kombinasjon med `<ThemeProvider>` komponent fra `@norges-domstoler/dds-components` biblioteket for å sette riktig tema. CSS-variabler brukes direkte fra `@norges-domstoler/dds-components` - se [README](https://github.com/domstolene/designsystem/blob/main/packages/components/README.md).

### CSS

> [!TIP]
> Vi anbefaler VS Code plugin [CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) for sømløs bruk av tokens i CSS.

```css
/* styles.css */
@import '@norges-domstoler/dds-components/index.css';

.panel {
  background-color: var(--dds-color-bg-default);
}
```

```js
import { ThemeProvider } from '@norges-domstoler/dds-components';
import './styles.css';

const Panel = <div className="panel"> tekst </div>;

const App = () => (
  <ThemeProvider>
    <Panel />;
  </ThemeProvider>
);
```

### JS

```js
import * as React from 'react';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import { ThemeProvider, useTheme } from '@norges-domstoler/dds-components';

const { theme } = useTheme();

const style = {
  backgroundColor: theme.ddsColorBgDefault,
  padding: theme.ddsSpacingX075,
};

const App = () => (
  <ThemeProvider>
    <div style={style}>Tekst</div>;
  </ThemeProvider>
);
```

### SCSS

SCSS-variabler refererer til CSS-variabler; theming skjer dermed utenfor SCSS og du kan importere .

```scss
/* _styles.scss */
@import '@norges-domstoler/dds-components/index.css';
@import '@norges-domstoler/dds-design-tokens/dist/scss/_ddsTokens.scss';

.panel {
  background-color: $dds-color-bg-default;
}
```

```js
import { ThemeProvider } from '@norges-domstoler/dds-components';
import './_styles.scss';

const Panel = <div className="panel"> tekst </div>;

const App = () => (
  <ThemeProvider>
    <Panel />;
  </ThemeProvider>
);
```

## ⌨️ For bidragsytere

Bilioteket ligger under `packages/tokens`. Selve design tokens ligger i JSON-filer hentet fra Figma.

### Installasjon

Installer style-dictionary:

```
pnpm --filter "@norges-domstoler/dds-design-tokens" add -D style-dictionary
```

### Generere variabler fra design tokens

Biblioteket bruker [Style-dictionary](https://amzn.github.io/style-dictionary) for å generere JS-konstanter, CSS-variabler og SCSS-variabler fra en eller flere JSON-filer. JSON-filen(e) ligger i `dds/properties`. For å generere variabler fra JSON kjør følgende kommando fra `/dds`:

```
node build.js
```

Genererte variabler ligger i `dds/build` organisert etter plattform.

Vi bruker custom build, den ligger i `/dds/build.js`.
