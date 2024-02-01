import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { GlobalMessage } from './GlobalMessage';
import { VStack } from '../Stack';

export default {
  title: 'dds-components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    message: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof GlobalMessage>;

export const Default: Story = {
  args: {
    purpose: 'info',
    message: 'En tilfeldig melding',
  },
  decorators: Story => (
    <StoryTemplate title="GlobalMessage - default">
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate title="GlobalMessage - overview">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack>
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <GlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
      />
      <GlobalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
      />
      <GlobalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
        closable
      />
      <GlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
        closable
      />
      <GlobalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
        closable
      />
    </VStack>
  ),
};

export const Closable: Story = {
  args: {
    purpose: 'info',
    message: 'En tilfeldig melding',
    closable: true,
  },
  decorators: Story => (
    <StoryTemplate title="GlobalMessage - default">
      <Story />
    </StoryTemplate>
  ),
};
