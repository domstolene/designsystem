# @norges-domstoler/dds-design-tokens

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-design-tokens)](https://www.npmjs.com/package/@norges-domstoler/dds-design-tokens) ![License](https://img.shields.io/npm/l/@norges-domstoler/dds-design-tokens)

Biblioteket inneholder design tokens brukt i [Elsa - domstolenes designsystem](https://design.domstol.no/): farger, typografi, osv. Design tokens kan brukes i domstolenes tjenester i bl.a. global styling og custom elementer. Ellers er det obligatorisk å bruke komponentbiblioteket [dds-components](https://www.npmjs.com/package/@norges-domstoler/dds-components) i domstolenes applikasjoner.

Design tokens kommer i flere temaer. Valg av tema styres med `<DdsProvider>` komponent som ligger i `dds-components`.

## 🔍 Oversikt

> 💡 Se alle tokens i [Elsa Storybook](https://domstolene.github.io/designsystem/?path=/story/dds-design-tokens-tokens).

Design tokens består av base-tokens og semantiske tokens.

Base-tokens er variabler genererte fra Figma styles og tilsvarer identiteten til domstolene definert i designprofilen.

Semantiske tokens har innbakt i navnet hva token brukes til, samt tillater bruk av temaer. De refererer til base-tokens og definerer logikk for deres bruk i komponenter og andre elementer. F.eks., semantiske tokens kan spesifisere fokusfargen, eller font og farger for knapper.

Enkelte typer tokens er tilgjengelige kun i base-variant, da de brukes i ulike kontekster og ikke har snevret bruksområde. Dette inkluderer avstander, brekkpunkter og skygger.

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-design-tokens
```

## 🔨 Bruk

Design tokens er eksportert som JS-konstanter, CSS-variabler og SCSS-variabler. De brukes i kombinasjon med `<DdsProvider>` komponent fra `@norges-domstoler/dds-components` biblioteket for å sette riktig tema. CSS-variabler brukes direkte fra `@norges-domstoler/dds-components` - se [README](https://github.com/domstolene/designsystem/blob/main/packages/components/README.md).

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

```jsx
import { DdsProvider } from '@norges-domstoler/dds-components';
import './styles.css';

const Panel = <div className="panel"> tekst </div>;

const App = () => (
  <DdsProvider>
    <Panel />;
  </DdsProvider>
);
```

### JS

```js
import * as React from 'react';
import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import { DdsProvider, useTheme } from '@norges-domstoler/dds-components';

const { theme } = useTheme();

const style = {
  backgroundColor: theme.ddsColorBgDefault,
  padding: theme.ddsSpacingX075,
};

const App = () => (
  <DdsProvider>
    <div style={style}>Tekst</div>;
  </DdsProvider>
);
```

### SCSS

SCSS-variabler refererer til CSS-variabler; theming skjer dermed utenfor SCSS. Dermed trenger du å importere både `index.css` fra dds-components og `_ddsTokens.scss`.

```scss
/* _styles.scss */
@import '@norges-domstoler/dds-components/index.css';
@import '@norges-domstoler/dds-design-tokens/dist/scss/_ddsTokens.scss';

.panel {
  background-color: $dds-color-bg-default;
}
```

```js
import { DdsProvider } from '@norges-domstoler/dds-components';
import './_styles.scss';

const Panel = <div className="panel"> tekst </div>;

const App = () => (
  <DdsProvider>
    <Panel />;
  </DdsProvider>
);
```
