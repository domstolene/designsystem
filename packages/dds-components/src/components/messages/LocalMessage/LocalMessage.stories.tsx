import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import {
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../../storybook';
import { Button } from '../../Button';
import { HStack } from '../../layout';
import { StoryVStack } from '../../layout/Stack/storybook-utils';
import { L_MESSAGE_PURPOSES, LocalMessage } from './LocalMessage';

const meta = preview.meta({
  title: 'dds-components/Components/LocalMessage',
  component: LocalMessage,
  argTypes: {
    width: responsivePropsArgTypes.width,
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: {
    children: 'Dette er en lokal melding',
  },
});

export const Purposes = meta.story({
  render: args => (
    <StoryVStack alignItems="stretch">
      {L_MESSAGE_PURPOSES.map(p => (
        <LocalMessage {...args} key={`p-${p}`} purpose={p}>
          {labelText(p)}
        </LocalMessage>
      ))}
    </StoryVStack>
  ),
});

export const Variants = meta.story({
  render: args => (
    <StoryVStack alignItems="stretch">
      <LocalMessage {...args} closable>
        Closable
      </LocalMessage>
      <LocalMessage {...args} heading="Overskrift">
        Med overskrift
      </LocalMessage>
      <LocalMessage {...args} closable heading="Overskrift">
        Closable med overskrift
      </LocalMessage>
      <LocalMessage {...args} layout="vertical">
        Vertical
      </LocalMessage>
      <LocalMessage {...args} layout="vertical" closable>
        Vertical closable
      </LocalMessage>
      <LocalMessage {...args} layout="vertical" heading="Overskrift">
        Vertical med overskrift
      </LocalMessage>
      <LocalMessage {...args} layout="vertical" closable heading="Overskrift">
        Vertical closable med overskrift
      </LocalMessage>
    </StoryVStack>
  ),
});

export const WithExtraButton = meta.story({
  args: {
    children: (
      <HStack justifyContent="space-between" gap="x0.75">
        <span>Dette er en melding</span>
        <Button size="xsmall" purpose="secondary">
          Angre
        </Button>
      </HStack>
    ),
    closable: true,
  },
});

export const ResponsiveWidth = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    children: 'Dette er en lokal melding',
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'fit-content',
      xl: 'fit-content',
    },
  },
});
