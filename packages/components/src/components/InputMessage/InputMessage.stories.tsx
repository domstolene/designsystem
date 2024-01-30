import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { InputMessage } from '.';

export default {
  title: 'dds-components/InputMessage',
  component: InputMessage,
  argTypes: {
    message: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof InputMessage>;

export const Default: Story = {
  args: {
    messageType: 'error',
    message: 'feilmelding',
  },
  decorators: Story => (
    <StoryTemplate title="InputMessage - default">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate title="InputMessage - overview">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <InputMessage {...args} messageType="error" message="feilmelding" />
      <InputMessage {...args} messageType="tip" message="hjelpetekst" />
    </>
  ),
};
