import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack, StoryVStack } from '../../Stack/utils';

import { Checkbox, CheckboxGroup } from '.';

export default {
  title: 'dds-components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
};

export const Overview: Story = {
  args: {
    label: 'Label',
    children: [
      <Checkbox key={0} label="Option 1" />,
      <Checkbox key={1} label="Option 2" />,
      <Checkbox key={2} label="Option 3" />,
    ],
  },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <CheckboxGroup {...args} />
        <CheckboxGroup {...args} disabled />
        <CheckboxGroup {...args} errorMessage="Dette er en feilmelding" />
        <CheckboxGroup {...args} direction="column" />
      </StoryVStack>
      <StoryVStack>
        <CheckboxGroup {...args} required />
        <CheckboxGroup {...args} readOnly />
        <CheckboxGroup {...args} tip="Dette er en hjelpetekst" />
      </StoryVStack>
    </StoryHStack>
  ),
};
