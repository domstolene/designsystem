import { type Meta, type StoryObj } from '@storybook/react';

import { categoryHtml } from '../../../storybook/helpers';
import { StoryVStack } from '../../Stack/utils';

import { NativeSelect, NativeSelectPlaceholder } from '.';

export default {
  title: 'dds-components/Select/NativeSelect',
  component: NativeSelect,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
  argTypes: {
    label: { control: 'text' },
    tip: { control: 'text' },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof NativeSelect>;

type Story = StoryObj<typeof NativeSelect>;

const options = [
  { value: 'Alternativ 1', label: 'Alternativ 1' },
  { value: 'Alternativ 2', label: 'Alternativ 2' },
  {
    value: 'Veldig langt alternativ her veldig langt alternativ her',
    label: 'Veldig langt alternativ her veldig langt alternativ her',
  },
  { value: 'Alternativ 3', label: 'Alternativ 3' },
  { value: 'Alternativ 4', label: 'Alternativ 4' },
];

const nativeOptions = options.map((item, index) => (
  <option value={item.value} key={index}>
    {item.label}
  </option>
));

const children = [<NativeSelectPlaceholder />, ...nativeOptions];

export const Default: Story = {
  args: {
    label: 'Label',
    children,
  },
};

export const Overview: Story = {
  args: {
    label: 'Label',
    children,
  },
  render: args => (
    <StoryVStack>
      <NativeSelect {...args} required />
      <NativeSelect {...args} readOnly />
      <NativeSelect {...args} disabled />
      <NativeSelect {...args} errorMessage="Dette er en feilmelding" />
      <NativeSelect {...args} tip="Dette er en hjelpetekst" />
    </StoryVStack>
  ),
};

export const OverviewSizes: Story = {
  args: {
    label: 'Label',
    children,
  },
  render: args => (
    <StoryVStack>
      <NativeSelect {...args} componentSize="medium" />
      <NativeSelect {...args} componentSize="small" />
      <NativeSelect {...args} componentSize="xsmall" />
    </StoryVStack>
  ),
};

export const Multi: Story = {
  args: { label: 'Label', children, multiple: true },
};

export const Groups: Story = {
  args: {
    label: 'Label',
    children: (
      <>
        <NativeSelectPlaceholder />
        <optgroup label="Group 1">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option>Option 1</option>
          <option>Option 2</option>
        </optgroup>
      </>
    ),
  },
};
