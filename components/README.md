# @norges-domstoler/dds-components

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-components)](https://www.npmjs.com/package/@norges-domstoler/dds-components)

_biblioteket er under arbeid_

React UI komponenter til bruk i Domstolenes tjenester.

Sjekk ut [Domstolenes designsystem (DDS)](https://design.domstol.no/) og [Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## Installasjon

```sh
npm install @norges-domstoler/dds-components styled-components
```

## Bruk

```js
import * as React from 'react';
import { render } from 'react-dom';
import { Button, TextInput } from '@norges-domstoler/dds-components';

const App = () => (
  <>
    <TextInput label="Input" />
    <Button label="Primary" />
    <Button purpose="secondary" appearance="ghost" label="Secondary" />
  </>
);

render(<App />, document.getElementById('root'));
```

## Komponenter

oversikten kommer snart

## For bidragsytere

Sjekk ut [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-bidra/b/3611d5).
