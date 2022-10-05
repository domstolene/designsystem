import {
  FormGenerator,
  FormGeneratorField,
  FormGeneratorRow,
} from '../../components/FormGenerator';
import { ScreenSize } from '../../hooks/useScreenSize';

export default {
  title: 'Examples/Forms',
};

const personaliaFields: (FormGeneratorField | FormGeneratorRow)[] = [
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
    component: 'Datepicker',
    props: {
      label: 'Fødselsdato',
      width: '320px',
    },
  },
  {
    component: 'TextInput',
    props: {
      label: 'Fødselsnummer (11 siffer)',
      type: 'text',
      name: 'nin',
    },
  },
  {
    component: 'RadioButtonGroup',
    props: {
      label: 'Utdanning',
      name: 'education',
    },
    children: [
      {
        component: 'RadioButton',
        props: {
          label: 'Master',
          value: 'master',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'Bachelor',
          value: 'bachelor',
        },
      },
      {
        component: 'RadioButton',
        props: {
          label: 'VGS',
          value: 'vgs',
        },
      },
    ],
  },
];

export const Personalia = () => {
  return (
    <FormGenerator
      fields={personaliaFields}
      stateOnChange={newState => console.log(newState)}
    />
  );
};

const addressFields: (FormGeneratorField | FormGeneratorRow)[] = [
  {
    component: 'TextInput',
    props: {
      label: 'Adresse',
      type: 'text',
      name: 'address',
    },
  },
  {
    component: 'TextInput',
    props: {
      type: 'text',
      name: 'address2',
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
];

export const Address = () => {
  return (
    <FormGenerator
      fields={addressFields}
      stateOnChange={newState => console.log(newState)}
    />
  );
};
