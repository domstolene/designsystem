import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack, StoryVStack } from '../../Stack/utils';

import { Checkbox } from '.';

export default {
  title: 'dds-components/Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Label' },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Checkbox {...args} label="Default" />
        <Checkbox {...args} label="Disabled" disabled />
        <Checkbox {...args} label="ReadOnly" readOnly />
        <Checkbox {...args} label="Error" error />
      </StoryVStack>
      <StoryVStack>
        <Checkbox {...args} label="Checked" checked />
        <Checkbox {...args} label="Disabled checked" disabled checked />
        <Checkbox {...args} label="ReadOnly checked" readOnly checked />
        <Checkbox {...args} label="Error checked" error checked />
      </StoryVStack>
      <StoryVStack>
        <Checkbox {...args} label="Indeterminate" indeterminate />
        <Checkbox
          {...args}
          label="Disabled indeterminate"
          disabled
          indeterminate
        />
        <Checkbox
          {...args}
          label="ReadOnly indeterminate"
          readOnly
          indeterminate
        />
        <Checkbox {...args} />
      </StoryVStack>
    </StoryHStack>
  ),
};
