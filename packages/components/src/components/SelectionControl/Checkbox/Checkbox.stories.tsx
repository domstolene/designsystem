import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

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

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate display="grid">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Checkbox {...args} label={args.label ?? 'Default'} />
      <Checkbox {...args} label={args.label ?? 'Checked'} checked />
      <Checkbox {...args} label={args.label ?? 'Indeterminate'} indeterminate />
      <Checkbox {...args} label={args.label ?? 'Disabled'} disabled />
      <Checkbox
        {...args}
        label={args.label ?? 'Disabled checked'}
        disabled
        checked
      />
      <Checkbox
        {...args}
        label={args.label ?? 'Disabled indeterminate'}
        disabled
        indeterminate
      />
      <Checkbox {...args} label={args.label ?? 'Error'} error />
      <Checkbox {...args} label={args.label ?? 'Error checked'} error checked />
      <Checkbox {...args} />
    </>
  ),
};

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
