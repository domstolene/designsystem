import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { createSelectOptions, Select, SelectOption, SelectProps } from '.';
import { CourtIcon } from '../../icons/tsx';

export default {
  title: 'dds-components/Select/SingleValue',
  component: Select,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isClearable: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    isLoading: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
};

const options = createSelectOptions(
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4'
);

const optionsLong = createSelectOptions(
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
  'Alternativ 5',
  'Alternativ 6',
  'Alternativ 7'
);

type SingleSelectProps = SelectProps<SelectOption, false>;

export const Overview = (args: SingleSelectProps) => {
  return (
    <StoryTemplate
      title="Select - overview"
      gap="25px"
      display="grid"
      columnsAmount={2}
    >
      <Select {...args} label={args.label ?? 'Label'} options={options} />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        required
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        isDisabled
        options={options}
        value={options[3]}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        options={options}
        value={options[3]}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        icon={CourtIcon}
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        errorMessage="Dette er en feilmelding"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        tip="Dette er en hjelpetekst"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        placeholder="Annerledes placeholder"
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        defaultValue={options[0]}
        options={options}
      />
      <Select
        {...args}
        label={args.label ?? 'Label'}
        value={options[3]}
        options={options}
      />
      <Select {...args} options={options} />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: SingleSelectProps) => {
  return (
    <StoryTemplate
      title="Select - overview sizes"
      display="grid"
      columnsAmount={2}
    >
      <Select {...args} componentSize="medium" options={options} />
      <Select
        {...args}
        componentSize="medium"
        icon={CourtIcon}
        options={options}
      />
      <Select {...args} componentSize="small" options={options} />
      <Select
        {...args}
        componentSize="small"
        icon={CourtIcon}
        options={options}
      />
      <Select {...args} componentSize="tiny" options={options} />
      <Select
        {...args}
        componentSize="tiny"
        icon={CourtIcon}
        options={options}
      />
    </StoryTemplate>
  );
};

export const Default = (args: SingleSelectProps) => {
  return (
    <StoryTemplate title="Select - default">
      <Select {...args} options={options} />
    </StoryTemplate>
  );
};

export const WithGroups = (args: SingleSelectProps) => {
  const groupedOptions = [
    {
      label: 'Gruppe 1',
      options: [
        { label: 'Alternativ 1', value: 'Alternativ 1' },
        { label: 'Alternativ 2', value: 'Alternativ 2' },
      ],
    },
    {
      label: 'Gruppe 2',
      options: [
        { label: 'Alternativ 3', value: 'Alternativ 3' },
        { label: 'Alternativ 4', value: 'Alternativ 4' },
      ],
    },
  ];
  return (
    <StoryTemplate title="Select - with groups">
      <Select {...args} options={groupedOptions} />
    </StoryTemplate>
  );
};

export const WithLabel = (args: SingleSelectProps) => {
  return (
    <StoryTemplate title="Select - with label">
      <Select {...args} label={args.label ?? 'Label'} options={options} />
    </StoryTemplate>
  );
};

export const ManyItems = (args: SingleSelectProps) => {
  return (
    <StoryTemplate title="Select - many options">
      <Select {...args} label={args.label ?? 'Label'} options={optionsLong} />
    </StoryTemplate>
  );
};
