import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { G_MESSAGE_PURPOSES, GlobalMessage } from './GlobalMessage';
import {
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
} from '../../storybook';
import { StoryVStack } from '../layout/Stack/utils';

export default {
  title: 'dds-components/Components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof GlobalMessage>;

type Story = StoryObj<typeof GlobalMessage>;

export const Preview: Story = {
  args: {
    purpose: 'info',
    children: 'En tilfeldig melding',
  },
};

export const Variants: Story = {
  args: {},
  render: args => (
    <StoryVStack>
      {G_MESSAGE_PURPOSES.map(p => (
        <GlobalMessage {...args} key={`p-${p}`} purpose={p}>
          {labelText(p)}
        </GlobalMessage>
      ))}
    </StoryVStack>
  ),
};

export const Closable: Story = {
  args: {
    children: 'En tilfeldig melding',
    closable: true,
  },
};
