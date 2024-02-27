import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { Select as DDSSelect, type SelectProps } from './Select';
import { CourtIcon } from '../Icon/icons';

export default {
  title: 'dds-components/Select/MultiSelect',
  component: DDSSelect,
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

interface Option {
  label: string;
  value: string;
}

const options: Array<Option> = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
].map(s => ({ label: s, value: s }));

type MultiSelectProps = SelectProps<Option, true>;

export const Overview = (args: MultiSelectProps) => {
  return (
    <StoryTemplate gap="25px" display="grid" $columnsAmount={2}>
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        required
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        isDisabled
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        isDisabled
        value={options[0]}
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        value={options[0]}
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        errorMessage="Dette er en feilmelding"
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        tip="Dette er en hjelpetekst"
        options={options}
        isMulti
      />
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        placeholder="Annerledes placeholder"
        options={options}
        isMulti
      />
      <DDSSelect {...args} options={options} isMulti />
    </StoryTemplate>
  );
};

export const OverviewSizes = (args: MultiSelectProps) => {
  return (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <DDSSelect {...args} options={options} isMulti />
      <DDSSelect {...args} options={options} isMulti icon={CourtIcon} />
      <DDSSelect {...args} options={options} isMulti componentSize="small" />
      <DDSSelect
        {...args}
        options={options}
        isMulti
        componentSize="small"
        icon={CourtIcon}
      />
    </StoryTemplate>
  );
};

export const Default = (args: MultiSelectProps) => {
  return (
    <StoryTemplate>
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        options={options}
        isMulti
      />
    </StoryTemplate>
  );
};

export const WithDefaultValue = (args: MultiSelectProps) => {
  return (
    <StoryTemplate>
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        options={options}
        isMulti
        defaultValue={options[0]}
      />
    </StoryTemplate>
  );
};

export const WithValue = (args: MultiSelectProps) => {
  return (
    <StoryTemplate>
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        options={options}
        isMulti
        value={options[0]}
      />
    </StoryTemplate>
  );
};

export const WithFitContent = (args: MultiSelectProps) => {
  return (
    <StoryTemplate>
      <DDSSelect
        {...args}
        label={args.label ?? 'Label'}
        options={options}
        isMulti
        width="fit-content"
        style={{ minWidth: '320px' }}
      />
    </StoryTemplate>
  );
};
