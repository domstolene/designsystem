import preview from '#.storybook/preview';

import { commonArgTypes } from '../../storybook';
import { StoryHStack } from '../layout/Stack/storybook-utils';

import { InputMessage } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/InputMessage',
  component: InputMessage,
  argTypes: {
    ...commonArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
  args: {
    messageType: 'error',
    children: 'Feilmelding',
  },
});

export const Variants = meta.story({
  args: {
    messageType: 'error',
  },
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
});
