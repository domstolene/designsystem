# @norges-domstoler/dds-components

![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-components) [![License](https://img.shields.io/npm/l/@norges-domstoler/dds-components)](https://www.npmjs.com/package/@norges-domstoler/dds-components) ![Checks](https://github.com/domstolene/designsystem/actions/workflows/design-system.yml/badge.svg)

React UI komponenter til bruk i domstolenes tjenester.

Sjekk ut [Elsa - domstolenes designsystem](https://design.domstol.no/) og [ Elsa Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## 📦 Installasjon

```sh
npm install @norges-domstoler/dds-components
```

## 🔨 Bruk

```js
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, TextInput } from '@norges-domstoler/dds-components';

const App = () => (
  <>
    <TextInput label="Input" />
    <Button label="Primary" />
    <Button purpose="secondary" appearance="ghost" label="Secondary" />
  </>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
```

## 📃 Komponenter

Sjekk [komponentstatus](https://design.domstol.no/987b33f71/p/438035-komponenter/b/160db9) for oppdatert status.

Tilgjengelige komponenter:

- Breadcrumbs
- Button
- Card (inkludert CardAccordion)
- Checkbox
- Chip
- Datepicker
- DescriptionList
- Divider
- Drawer
- FileUploader
- GlobalMessage
- Grid
- Icon
- InputMessage
- InternaHeader
- List
- LocalMessage
- Modal
- OverflowMenu
- Pagination
- Popover
- ProgressTracker
- RadioButton
- Scrollbar
- Search
- Select
- SkipToContent
- Spinner
- Stack
  - VStack
  - HStack
- Table
- Tabs
- Tag
- TextInput
- TextArea
- ToggleBar
- ToggleButton
- Tooltip
- Typografikomponenter:
  - Caption
  - Heading
  - Label
  - Legend
  - Link
  - Paragraph
  - Typography
- VisuallyHidden

## ⏫ Release av ny versjon

Det brukes en egen workflow for release av ny versjon av `@norges-domstoler/dds-components` som kjører på publisering av ny github release. Her brukes `npm publish` for å publisere en ny versjon av pakken til npm sitt pakkeregister, hvor det nye versjonsnummeret leses fra `package.json`. For å lage en ny release gjøres følgende:

1. Versjonsnummeret i `package.json` må oppdateres manuelt med en egen commit i forkant av publisering av ny github release.

2. Lag en ny release på github med _release tag = versjonsnummer_ for best mulig oversikt, og legg ved en passende beskrivelse av hva som er nytt i denne versjonen. Publiser så releasen når alt er klart.
   Man kan også lage en Draft-release i forkant, og publisere denne releasen når alt som skal være med er merget inn i master.

For versjonering brukes [_semantisk versjonering_](https://semver.org/) for å holde ting organisert og for å enkelt kommunisere utviklingsløpet til pakken.

### Pre-release versjoner

Hvis man ønsker å publisere en pre-release kan man følge samme flyt som vanlig release, men markere releasen som "pre-release" på Github. Da vil det publiseres en ny versjon til `next`-taggen på NPM istedenfor `latest` som i normal flyt. Pre-releases kan brukes for å publisere innhold som er ment til å være med i neste versjon, men som kan testes av konsumenter før neste release er klar.

Versjonsnummerering for pre-releases skal følge `-beta.x`, eksempelvis `5.0.0-beta.1` osv.

## ⌨️ For bidragsytere

Sjekk ut [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-bidra/b/3611d5).
