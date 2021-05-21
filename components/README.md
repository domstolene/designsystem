# @norges-domstoler/dds-components

_biblioteket er under arbeid_

React UI komponenter til bruk i Domstolenes tjenester.

Sjekk ut [Domstolenes designsystem (DDS)](https://design.domstol.no/) og [Storybook](https://domstolene.github.io/designsystem) for mer informasjon og demoer.

## Installasjon

```sh
npm install @norges-domstoler/dds-components styled-components
```

## Bruk

```js
import * as React from 'react';
import { render } from 'react-dom';
import { Button, TextInput } from '@equinor/eds-core-react';

const App = () => (
  <>
    <TextInput label="Input" />
    <Button label="Primary" />
    <Button purpose="Secondary" form="ghost" label="Secondary" />
  </>
);

render(<App />, document.getElementById('root'));
```

## Komponenter

oversikten kommer snart
