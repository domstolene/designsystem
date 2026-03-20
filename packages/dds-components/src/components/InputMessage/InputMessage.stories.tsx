import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook';
import { StoryHStack } from '../layout/Stack/utils';

import { InputMessage } from '.';

const meta: Meta<typeof InputMessage> = {
  title: 'dds-components/Components/InputMessage',
  component: InputMessage,
  argTypes: {
    ...commonArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof InputMessage>;

export const Preview: Story = {
  args: {
    messageType: 'error',
    children: 'Feilmelding',
  },
};

export const Variants: Story = {
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
