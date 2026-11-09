import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { G_MESSAGE_PURPOSES, GlobalMessage } from './GlobalMessage';
import {
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
} from '../../../storybook';
import { StoryVStack } from '../../layout/Stack/storybook-utils';

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

export const Purposes = meta.story({
  args: {},
  render: args => (
    <StoryVStack alignItems="stretch">
      {G_MESSAGE_PURPOSES.map(p => (
        <GlobalMessage {...args} key={`p-${p}`} purpose={p}>
          {labelText(p)}
        </GlobalMessage>
      ))}
    </StoryVStack>
  ),
});

export const Variants = meta.story({
  render: args => (
    <StoryVStack alignItems="stretch">
      <GlobalMessage {...args} closable>
        Lukkbar
      </GlobalMessage>

      <GlobalMessage {...args} closable heading="Overskrift">
        Med overskrift
      </GlobalMessage>
      <GlobalMessage {...args} closable heading="Overskrift">
        Lukkbar med overskrift
      </GlobalMessage>
    </StoryVStack>
  ),
});
