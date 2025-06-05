import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../storybook/helpers';
import { StoryHStack } from '../layout/Stack/utils';

import { InputMessage } from '.';

export default {
  title: 'dds-components/Components/InputMessage',
  component: InputMessage,
  argTypes: {
    htmlProps: htmlPropsArgType,
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
