import {
  PageGeneratorField,
  PageGeneratorRow,
  PageGeneratorSupportedFields,
} from '../types';

export const FormFields: (PageGeneratorField | PageGeneratorRow)[] = [
  {
    component: PageGeneratorSupportedFields.Heading,
    props: {
      level: 1,
    },
    innerHTML: 'Skjema',
  },
  {
    component: PageGeneratorSupportedFields.Heading,
    props: {
      level: 2,
    },
    innerHTML: 'Personinformasjon',
  },
  {
    component: PageGeneratorSupportedFields.TextInput,
    props: {
      label: 'Fødselsnummer',
      name: 'nin',
    },
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: PageGeneratorSupportedFields.Datepicker,
        props: {
          label: 'Fødselsdato',
          name: 'dateOfBirth',
          width: '320px',
        },
      },
      {
        component: PageGeneratorSupportedFields.Select,
        props: {
          label: 'Status',
          name: 'status',
          options: [
            { label: 'Glad', value: 'glad' },
            { label: 'Superglad', value: 'superglad' },
          ],
        },
        name: 'status',
      },
    ],
  },
  {
    component: PageGeneratorSupportedFields.Heading,
    props: {
      level: 3,
    },
    innerHTML: 'Kontaktinformasjon',
  },
  {
    component: PageGeneratorSupportedFields.TextInput,
    props: {
      label: 'E-post',
      name: 'email',
    },
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: PageGeneratorSupportedFields.TextInput,
        props: {
          label: 'Landkode',
          width: '90px',
          name: 'countryCode',
        },
      },
      {
        component: PageGeneratorSupportedFields.TextInput,
        props: {
          label: 'Telefon',
          name: 'phoneNumber',
        },
      },
    ],
  },
  {
    rowType: 'standard',
    fields: [
      {
        component: PageGeneratorSupportedFields.TextArea,
        props: {
          label: 'Adresse',
          name: 'adresse',
        },
      },
    ],
  },
  {
    component: PageGeneratorSupportedFields.Heading,
    props: {
      level: 4,
    },
    innerHTML: 'Annet',
  },
  {
    component: PageGeneratorSupportedFields.CheckboxGroup,
    props: {
      label: 'Kvalifikasjoner',
    },
    children: [
      {
        component: PageGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Glad',
          value: 'glad',
        },
      },
      {
        component: PageGeneratorSupportedFields.Checkbox,
        props: {
          label: 'Superglad',
          value: 'superglad',
        },
      },
    ],
  },
  {
    component: PageGeneratorSupportedFields.RadioButtonGroup,
    props: {
      label: 'Kjønn',
      name: 'gender',
    },
    children: [
      {
        component: PageGeneratorSupportedFields.RadioButton,
        props: {
          label: 'Mann',
          value: 'mann',
          name: 'gender',
        },
      },
      {
        component: PageGeneratorSupportedFields.RadioButton,
        props: {
          label: 'Kvinne',
          value: 'kvinne',
          name: 'gender',
        },
      },
    ],
  },
  {
    rowType: 'button',
    fields: [
      {
        component: PageGeneratorSupportedFields.Button,
        props: {
          label: 'Lagre',
          type: 'submit',
        },
      },
      {
        component: PageGeneratorSupportedFields.Button,
        props: {
          label: 'Superlagre',
          purpose: 'secondary',
          onClick: event => {
            event.preventDefault();
            console.log('Du superlagret!');
          },
        },
      },
    ],
  },
];
