# @norges-domstoler/dds-components

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-components)](https://www.npmjs.com/package/@norges-domstoler/dds-components) ![License](https://img.shields.io/npm/l/@norges-domstoler/dds-components)

React UI komponenter til bruk i domstolenes tjenester.

Sjekk ut [Elsa - domstolenes designsystem](https://design.domstol.no/) og [Elsa Storybook](https://domstolene.github.io/designsystem) for dokumentasjon og demoer.

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-components
```

Importer styling av komponentene i CSS:

```css
@import '@norges-domstoler/dds-components/index.css';
```

## 🔨 Bruk

Wrapp applikasjonen din i `<ThemeProvider>`.

```js
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Button,
  TextInput,
  ThemeProvider,
} from '@norges-domstoler/dds-components';

const App = () => (
  <ThemeProvider>
    <TextInput label="Input" />
    <Button>Primary</Button>
    <Button purpose="secondary" size="small">
      Secondary
    </Button>
  </ThemeProvider>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
```

## 📃 Komponenter

Sjekk [Komponenter](https://design.domstol.no/987b33f71/p/438035-komponenter) for oversikt over alle komponenter, og [nyheter](https://design.domstol.no/987b33f71/p/438035-komponenter/t/page-438035-50469210-4) for status på nye komponenter.
