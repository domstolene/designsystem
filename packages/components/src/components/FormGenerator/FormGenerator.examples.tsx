import { ScreenSize } from '../../hooks/useScreenSize';
import { createSelectOptions } from '../Select';
import { FormGeneratorField, FormGeneratorRow, FormGeneratorSupportedFields } from './FormGenerator.types';

export const exampleDefault: (FormGeneratorField | FormGeneratorRow)[] = [
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
  },
  {
    component: FormGeneratorSupportedFields.Button,
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
      },
    ],
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: 'Postnummer',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: FormGeneratorSupportedFields.TextInput,
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
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: 'Antall biler',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: 'Bilmerker',
          type: 'text',
        },
      },
      {
        component: FormGeneratorSupportedFields.TextInput,
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
        component: FormGeneratorSupportedFields.Button,
        props: {
          label: 'Gå til partsopplysninger',
          onClick: event => {
            event.preventDefault();
          },
        },
      },
      {
        component: FormGeneratorSupportedFields.Button,
        props: {
          label: 'Send til godkjenning',
          purpose: 'secondary',
          onClick: event => {
            event.preventDefault();
          },
        },
      },
      {
        component: FormGeneratorSupportedFields.Button,
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
    component: FormGeneratorSupportedFields.RadioButtonGroup,
    props: {
      label: 'Kjønn',
      name: 'kjønn',
    },
    children: [
      {
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
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.CheckboxGroup,
    props: {
      label: 'Favorittfarger',
    },
    children: [
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Rød',
          value: 'red',
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Blå',
          value: 'blue',
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Grønn',
          value: 'green',
        },
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.ToggleButtonGroup,
    props: {
      label: 'Innstillinger',
    },
    children: [
      {
        component: FormGeneratorSupportedFields.ToggleButton,
        props: {
          label: 'Strømsparing',
        },
      },
      {
        component: FormGeneratorSupportedFields.ToggleButton,
        props: {
          label: 'Skjermlås',
        },
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.Button,
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
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.Select,
    props: {
      options: options,
      label: 'Velg favorittfarge',
    },
    name: 'color',
  },
  {
    component: FormGeneratorSupportedFields.Datepicker,
    props: {
      label: 'Fødselsdato',
    },
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: 'Postnummer',
          type: 'number',
          width: '88px',
        },
      },
      {
        component: FormGeneratorSupportedFields.TextInput,
        props: {
          label: 'Poststed',
          type: 'text',
        },
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.RadioButtonGroup,
    props: {
      label: 'Kjønn',
      name: 'kjønn',
    },
    children: [
      {
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
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.Divider,
    props: {
      color: 'primary',
    },
  },
  {
    component: FormGeneratorSupportedFields.CheckboxGroup,
    props: {
      label: 'Kvalifikasjoner',
      direction: 'column',
    },
    children: [
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Holde pusten i 30 sekunder',
          name: 'hold-breath',
          defaultChecked: false,
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Hoppe på én fot i 1 minutt',
          name: 'jump-one-foot',
          defaultChecked: false,
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Den lille gangetabellen',
          name: 'little-multiply',
          defaultChecked: false,
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Knyte sko i blinde',
          name: 'tying-shoe',
          defaultChecked: false,
        },
      },
      {
        component: FormGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Sykle kjempefort',
          name: 'bicycle-fast',
          defaultChecked: false,
        },
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.Divider,
    props: {
      color: 'primary',
    },
  },
  {
    component: FormGeneratorSupportedFields.Typography,
    props: {
      typographyType: 'headingSans02',
    },
    innerHTML: 'Godtgjørelser',
  },
  {
    component: FormGeneratorSupportedFields.List,
    children: [
      {
        component: FormGeneratorSupportedFields.ListItem,
        innerHTML:
          'Sjokolademelk i kantina hver fredag (kun mellom kl.11 og kl.12)',
      },
      {
        component: FormGeneratorSupportedFields.ListItem,
        innerHTML: '3 kaffepauser á 5 minutter hver dag',
      },
      {
        component: FormGeneratorSupportedFields.ListItem,
        innerHTML: 'Gratis frukt på deling i etasjen (leveres én gang i uken)',
      },
    ],
  },
  {
    component: FormGeneratorSupportedFields.Button,
    props: {
      label: 'Gjør ting',
      onClick: event => {
        event.preventDefault();
      },
    },
  },
];
