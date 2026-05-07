import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { G_MESSAGE_PURPOSES, GlobalMessage } from './GlobalMessage';
import {
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
} from '../../storybook';
import { StoryVStack } from '../layout/Stack/utils';

const meta = preview.meta({
  title: 'dds-components/Components/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: {
    purpose: 'info',
    children: 'En tilfeldig melding',
  },
});

export const Variants = meta.story({
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
});

export const Closable = meta.story({
  args: {
    children: 'En tilfeldig melding',
    closable: true,
  },
});
