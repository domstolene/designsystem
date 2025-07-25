import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { GlobalMessage } from './GlobalMessage';
import { commonArgTypes } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
} satisfies Meta<typeof GlobalMessage>;

type Story = StoryObj<typeof GlobalMessage>;

export const Preview: Story = {
  args: {
    purpose: 'info',
    message: 'En tilfeldig melding',
  },
};

export const Overview: Story = {
  args: {},
  render: args => (
    <StoryVStack>
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
    </StoryVStack>
  ),
};

export const Closable: Story = {
  args: {
    purpose: 'info',
    message: 'En tilfeldig melding',
    closable: true,
  },
};
