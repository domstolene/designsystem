import { ScreenSize } from '../../hooks/useScreenSize';
import { createSelectOptions } from '../Select';
import { FormGeneratorField, FormGeneratorRow } from './FormGenerator.types';

export const exampleDefault: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    component: 'TextInput',
    props: {
      label: 'Fornavn',
      type: 'text',
      name: 'firstName',
    },
  },
  {
    component: 'TextInput',
    props: {
      label: 'Etternavn',
      type: 'text',
      name: 'lastName',
    },
  },
  {
    component: 'Button',
    props: {
      label: 'Trykk meg',
      onClick: event => {
        event.preventDefault();
      },
    },
  },
];

export const exampleRowTypes: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    rowType: 'standard',
    breakpoint: ScreenSize.Small,
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Fornavn',
          type: 'text',
          name: 'firstName',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Etternavn',
          type: 'text',
          name: 'lastName',
        },
      },
    ],
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Postnummer',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Poststed',
          type: 'text',
        },
      },
    ],
  },
  {
    rowType: 'standard',
    breakpoint: ScreenSize.Medium,
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Antall biler',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Bilmerker',
          type: 'text',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Bilmodeller',
          type: 'text',
        },
      },
    ],
  },
  {
    rowType: 'button',
    fields: [
      {
        component: 'Button',
        props: {
          label: 'Gå til partsopplysninger',
          onClick: event => {
            event.preventDefault();
          },
        },
      },
      {
        component: 'Button',
        props: {
          label: 'Send til godkjenning',
          purpose: 'secondary',
          onClick: event => {
            event.preventDefault();
          },
        },
      },
      {
        component: 'Button',
        props: {
          label: 'Avbryt',
          purpose: 'secondary',
          onClick: event => {
            event.preventDefault();
          },
        },
      },
    ],
  },
];

export const exampleChildren: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    component: 'RadioButtonGroup',
    props: {
      label: 'Kjønn',
      name: 'kjønn',
    },
    children: [
      {
        component: 'RadioButton',
        props: {
          label: 'Kvinne',
          value: 'female',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'Mann',
          value: 'male',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'Annet',
          value: 'other',
        },
      },
    ],
  },
  {
    component: 'CheckboxGroup',
    props: {
      label: 'Favorittfarger',
    },
    children: [
      {
        component: 'Checkbox',
        props: {
          label: 'Rød',
          value: 'red',
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Blå',
          value: 'blue',
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Grønn',
          value: 'green',
        },
      },
    ],
  },
  {
    component: 'ToggleButtonGroup',
    props: {
      label: 'Innstillinger',
    },
    children: [
      {
        component: 'ToggleButton',
        props: {
          label: 'Strømsparing',
        },
      },
      {
        component: 'ToggleButton',
        props: {
          label: 'Skjermlås',
        },
      },
    ],
  },
  {
    component: 'Button',
    props: {
      label: 'Trykk meg',
      onClick: event => {
        event.preventDefault();
      },
    },
  },
];

const options = createSelectOptions('Blå', 'Rød', 'Hvit', 'Svart', 'Grønn');

export const exampleFull: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    rowType: 'standard',
    breakpoint: ScreenSize.Small,
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Fornavn',
          type: 'text',
          name: 'firstName',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Etternavn',
          type: 'text',
          name: 'lastName',
        },
      },
    ],
  },
  {
    component: 'Select',
    props: {
      options: options,
      label: 'Velg favorittfarge',
    },
    name: 'color',
  },
  {
    component: 'Datepicker',
    props: {
      label: 'Fødselsdato',
    },
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: 'TextInput',
        props: {
          label: 'Postnummer',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: 'TextInput',
        props: {
          label: 'Poststed',
          type: 'text',
        },
      },
    ],
  },
  {
    component: 'RadioButtonGroup',
    props: {
      label: 'Kjønn',
      name: 'kjønn',
    },
    children: [
      {
        component: 'RadioButton',
        props: {
          label: 'Kvinne',
          value: 'female',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'Mann',
          value: 'male',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'Annet',
          value: 'other',
        },
      },
    ],
  },
  {
    component: 'Divider',
    props: {
      color: 'primary',
    },
  },
  {
    component: 'CheckboxGroup',
    props: {
      label: 'Kvalifikasjoner',
      direction: 'column',
    },
    children: [
      {
        component: 'Checkbox',
        props: {
          label: 'Holde pusten i 30 sekunder',
          name: 'hold-breath',
          defaultChecked: false,
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Hoppe på én fot i 1 minutt',
          name: 'jump-one-foot',
          defaultChecked: false,
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Den lille gangetabellen',
          name: 'little-multiply',
          defaultChecked: false,
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Knyte sko i blinde',
          name: 'tying-shoe',
          defaultChecked: false,
        },
      },
      {
        component: 'Checkbox',
        props: {
          label: 'Sykle kjempefort',
          name: 'bicycle-fast',
          defaultChecked: false,
        },
      },
    ],
  },
  {
    component: 'Divider',
    props: {
      color: 'primary',
    },
  },
  {
    component: 'Typography',
    props: {
      typographyType: 'headingSans02',
    },
    innerHTML: 'Godtgjørelser',
  },
  {
    component: 'List',
    children: [
      {
        component: 'ListItem',
        innerHTML:
          'Sjokolademelk i kantina hver fredag (kun mellom kl.11 og kl.12)',
      },
      {
        component: 'ListItem',
        innerHTML: '3 kaffepauser á 5 minutter hver dag',
      },
      {
        component: 'ListItem',
        innerHTML: 'Gratis frukt på deling i etasjen (leveres én gang i uken)',
      },
    ],
  },
  {
    component: 'Button',
    props: {
      label: 'Gjør ting',
      onClick: event => {
        event.preventDefault();
      },
    },
  },
];
