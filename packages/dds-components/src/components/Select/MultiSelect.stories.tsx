import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Select } from './Select';
import { CourtIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { StoryThemeProvider } from '../ThemeProvider/utils/StoryThemeProvider';

const meta: Meta<typeof Select<Option, true>> = {
  title: 'dds-components/Components/Select/MultiSelect',
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
    docs: {
      story: { height: '450px' },
    },
    controls: {
      exclude: ['style', 'className', 'items', 'value', 'defaultValue'],
    },
  },
  decorators: [
    Story => (
      <StoryThemeProvider>
        <Story />
      </StoryThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select<Option, true>>;

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

export const Preview: Story = {
  args: { label: 'Label', options: options, isMulti: true },
};

export const Overview: Story = {
  args: { label: 'Label', options: options, isMulti: true },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Select {...args} />
        <Select {...args} isDisabled value={options[0]} />
        <Select {...args} icon={CourtIcon} />
        <Select {...args} tip="Dette er en hjelpetekst" />
      </StoryVStack>
      <StoryVStack>
        <Select {...args} required />
        <Select {...args} readOnly value={options[0]} />
        <Select {...args} errorMessage="Dette er en feilmelding" />
        <Select {...args} placeholder="Annerledes placeholder" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const OverviewSizes: Story = {
  args: { label: 'Label', options: options, isMulti: true },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <Select {...args} />
          <Select {...args} componentSize="small" />
        </StoryVStack>
        <StoryVStack>
          <Select {...args} icon={CourtIcon} />
          <Select {...args} componentSize="small" icon={CourtIcon} />
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Label',
    options: options,
    isMulti: true,
    defaultValue: options[0],
  },
};

export const WithValue: Story = {
  args: {
    label: 'Label',
    options: options,
    isMulti: true,
    value: options[0],
  },
};

export const WithFitContent: Story = {
  args: {
    label: 'Label',
    options: options,
    isMulti: true,
    width: 'fit-content',
    style: { minWidth: 'var(--dds-input-default-width)' },
  },
};
