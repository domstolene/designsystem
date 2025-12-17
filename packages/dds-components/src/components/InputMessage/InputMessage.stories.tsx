import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook';
import { StoryHStack } from '../layout/Stack/utils';

import { InputMessage } from '.';

export default {
  title: 'dds-components/Components/InputMessage',
  component: InputMessage,
  argTypes: {
    ...commonArgTypes,
  },
} satisfies Meta<typeof InputMessage>;

type Story = StoryObj<typeof InputMessage>;

export const Preview: Story = {
  args: {
    messageType: 'error',
    children: 'Feilmelding',
  },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <InputMessage {...args} messageType="error">
        Feilmelding
      </InputMessage>
      <InputMessage {...args} messageType="tip">
        Hjelpetekst
      </InputMessage>
    </StoryHStack>
  ),
};
