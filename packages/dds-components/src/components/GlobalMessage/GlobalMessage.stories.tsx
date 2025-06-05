import { type Meta, type StoryObj } from '@storybook/react-vite';

import { GlobalMessage } from './GlobalMessage';
import { htmlPropsArgType } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    htmlProps: htmlPropsArgType,
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
