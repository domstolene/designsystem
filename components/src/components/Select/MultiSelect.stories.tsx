import { StoryTemplate } from '../../storybook/StoryTemplate';

import { Select as DDSSelect, SelectProps } from './Select';

export default {
  title: 'design system/Select/MultiSelect',
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
    loading: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue']
    }
  }
};

const options = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4'
].map(s => ({ label: s, value: s }));

const optionsLong = [
  'Alternativ 1',
  'Alternativ 2',
  'Veldig langt alternativ her veldig langt alternativ her',
  'Alternativ 3',
  'Alternativ 4',
  'Alternativ 5',
  'Alternativ 6',
  'Alternativ 7'
].map(s => ({ label: s, value: s }));

export const Default = (args: SelectProps) => {
  return (
    <StoryTemplate title="MultiSelect - default">
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        options={options}
        isMulti
      />
    </StoryTemplate>
  );
};

export const WithLabel = (args: SelectProps) => {
  return (
    <StoryTemplate title="MultiSelect - with label">
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        options={options}
        isMulti
      />
    </StoryTemplate>
  );
};

export const WithDefaultValue = (args: SelectProps) => {
  return (
    <StoryTemplate title="Select - multiselect with value">
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        options={options}
        isMulti
        defaultValue={options[0]}
      />
    </StoryTemplate>
  );
};

export const WithFitContent = (args: SelectProps) => {
  return (
    <StoryTemplate title="Select - multiselect with value">
      <DDSSelect
        {...args}
        label={args.label || 'Label'}
        options={options}
        isMulti
        width="fit-content"
        style={{ minWidth: '320px' }}
      />
    </StoryTemplate>
  );
};
