# @norges-domstoler/dds-components

![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-components) [![License](https://img.shields.io/npm/l/@norges-domstoler/dds-components)](https://www.npmjs.com/package/@norges-domstoler/dds-components) ![Checks](https://github.com/domstolene/designsystem/actions/workflows/release.yml/badge.svg)

React UI komponenter til bruk i domstolenes tjenester.

Sjekk ut [Elsa - domstolenes designsystem](https://design.domstol.no/) og [ Elsa Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## 📦 Installasjon

```sh
pnpm add @norges-domstoler/dds-components
```

## 🔨 Bruk

```js
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, TextInput } from '@norges-domstoler/dds-components';

const App = () => (
  <>
    <TextInput label="Input" />
    <Button>Primary</Button>
    <Button purpose="secondary" size="small">
      Secondary
    </Button>
  </>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
```

## 📃 Komponenter

Sjekk [komponentstatus](https://design.domstol.no/987b33f71/p/438035-komponenter/b/160db9) for oppdatert status.

Tilgjengelige komponenter:

- AppShell
- Breadcrumbs
- Button
- Card (inkludert CardAccordion)
- Checkbox
- Chip
- DatePicker
- DescriptionList
- Divider
- Drawer
- EmptyContent
- FavStar
- Feedback
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
- TimePicker
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

## ⌨️ For bidragsytere

Sjekk ut [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-bidra/b/3611d5).
