import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { GlobalMessage } from './GlobalMessage';
import { VStack } from '../Stack';

export default {
  title: 'dds-components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    message: { control: 'text' },
    closable: { control: 'boolean' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof GlobalMessage>;

type Story = StoryObj<typeof GlobalMessage>;

export const Default: Story = {
  args: {
    purpose: 'info',
    message: 'En tilfeldig melding',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <VStack gap="x1">
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
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
