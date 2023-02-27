# @norges-domstoler/dds-page-generator

![Version](https://img.shields.io/npm/v/@norges-domstoler/dds-page-generator) [![License](https://img.shields.io/npm/l/@norges-domstoler/dds-page-generator)](https://www.npmjs.com/package/@norges-domstoler/dds-page-generator) ![Checks](https://github.com/domstolene/designsystem/actions/workflows/design-system.yml/badge.svg)

Side- og skjemagenerering basert på JSON-input for bruk i domstolenes tjenester.

Sjekk ut [Elsa - domstolenes designsystem](https://design.domstol.no/) og [ Elsa Storybook](https://domstolene.github.io/designsystem) for mer dokumentasjon og demoer.

## 📦 Installasjon

```sh
npm install @norges-domstoler/dds-page-generator
```

## 🔨 Bruk

```js
import {
  PageGenerator,
  SectionGenerator,
} from '@norges-domstoler/dds-page-generator';

const fields = [{
    rowType: 'standard',
    breakpoint: ScreenSize.Small,
    fields: [
    {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
            label: 'Fornavn',
            type: 'text',
            name: 'firstName',
        },
    },
    {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
            label: 'Etternavn',
            type: 'text',
            name: 'lastName',
        },
    }],
},
{
    component: FormGeneratorSupportedFields.RadioButtonGroup,
    props: {
        label: 'Kjønn',
        name: 'kjønn',
    },
    children: [{
        component: FormGeneratorSupportedFields.RadioButton,
        props: {
            label: 'Kvinne',
            value: 'female',
        },
    },
    {
        component: FormGeneratorSupportedFields.RadioButton,
        props: {
            label: 'Mann',
            value: 'male',
        },
    },
    {
        component: FormGeneratorSupportedFields.RadioButton,
        props: {
            label: 'Annet',
            value: 'other',
        },
    }],
}];

const stateOnChange = (newState: object) => {
    console.log(newState);
}

<PageGenerator as="form" fields={fields} stateOnChange={stateOnChange} />
<SectionGenerator as="form" fields={fields} stateOnChange={stateOnChange} />
```

## ⌨️ For bidragsytere

Sjekk ut [guiden for bidragsytere](https://design.domstol.no/987b33f71/p/34c962-bidra/b/3611d5).
