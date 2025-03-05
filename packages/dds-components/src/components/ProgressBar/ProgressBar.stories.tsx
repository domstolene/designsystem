import { type Meta, type StoryObj } from '@storybook/react';

import { StoryVStack } from '../Stack/utils';

import { ProgressBar } from '.';

export default {
  title: 'dds-components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    width: { control: 'text' },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};

export const Overview: Story = {
  args: {
    label: 'Label',
  },
  render: args => (
    <StoryVStack>
      <ProgressBar {...args} max={10} value={8} />
      <ProgressBar {...args} />
      <ProgressBar {...args} max={10} value={8} tip="Dette er en hjelpetekst" />
      <ProgressBar {...args} errorMessage="Dette er en feilmedling" />
      <ProgressBar {...args} max={10} value={10} />
    </StoryVStack>
  ),
};
export const Sizes: Story = {
  args: {
    label: 'Label',
    value: 50,
  },
  render: args => (
    <StoryVStack>
      <ProgressBar {...args} />
      <ProgressBar {...args} size="small" />
    </StoryVStack>
  ),
};
