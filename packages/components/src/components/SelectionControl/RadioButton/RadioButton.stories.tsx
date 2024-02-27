import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { RadioButton } from '.';

export default {
  title: 'dds-components/RadioButton/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <RadioButton {...args} label={args.label ?? 'Default'} />
      <RadioButton {...args} label={args.label ?? 'Checked'} checked />
      <RadioButton {...args} label={args.label ?? 'Disabled'} disabled />
      <RadioButton
        {...args}
        label={args.label ?? 'Disabled checked'}
        disabled
        checked
      />
      <RadioButton {...args} label={args.label ?? 'Error'} error />
    </>
  ),
};
