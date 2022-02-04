# @norges-domstoler/dds-components

[![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-components)](https://www.npmjs.com/package/@norges-domstoler/dds-components) [![Build, test and publish](https://img.shields.io/github/workflow/status/domstolene/designsystem/release.yml)](https://github.com/domstolene/designsystem/actions/workflows/release.yml)

React UI komponenter til bruk i Domstolenes tjenester.

Sjekk ut [Domstolenes designsystem Elsa](https://design.domstol.no/) og [Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## Installasjon

```sh
npm install @norges-domstoler/dds-components
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

Sjekk [komponentstatus](https://design.domstol.no/987b33f71/p/438035-komponenter/b/160db9) for oppdatert status.

Tilgjengelige komponenter:

- Breadcrumbs
- Button
- Card (inkludert CardAccordion)
- Checkbox
- Datepicker
- DescriptionList
- Divider
- GlobalMessage
- IconWrapper
- InternaHeader
- List
- LocalMessage
- Pagination
- Popover
- RadioButton
- Search
- Select
- SkipToContent
- Spinner
- Table
- TextInput
- Typography

## Release av ny versjon

Det brukes en egen workflow for release av ny versjon av `@norges-domstoler/dds-components` som kjører på publisering av ny github release. Her brukes `npm publish` for å publisere en ny versjon av pakken til npm sitt pakkeregister, hvor det nye versjonsnummeret leses fra `package.json`. For å lage en ny release gjøres følgende:

1. Versjonsnummeret i `package.json` må oppdateres manuelt med en egen commit i forkant av publisering av ny github release.

2. Lag en ny release på github med _release tag = versjonsnummer_ for best mulig oversikt, og legg ved en passende beskrivelse av hva som er nytt i denne versjonen. Publiser så releasen når alt er klart.
   Man kan også lage en Draft-release i forkant, og publisere denne releasen når alt som skal være med er merget inn i master.

For versjonering brukes [_semantisk versjonering_](https://semver.org/) for å holde ting organisert og for å enkelt kommunisere utviklingsløpet til pakken.

## For bidragsytere

Sjekk ut [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-bidra/b/3611d5).
