import { type Meta, type StoryObj } from '@storybook/react';

import { StoryHStack } from '../Stack/utils';

import { InputMessage } from '.';

export default {
  title: 'dds-components/InputMessage',
  component: InputMessage,
  argTypes: {
    message: { control: 'text' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof InputMessage>;

type Story = StoryObj<typeof InputMessage>;

export const Default: Story = {
  args: {
    messageType: 'error',
    message: 'Feilmelding',
  },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <InputMessage {...args} messageType="error" message="Feilmelding" />
      <InputMessage {...args} messageType="tip" message="Hjelpetekst" />
    </StoryHStack>
  ),
};
