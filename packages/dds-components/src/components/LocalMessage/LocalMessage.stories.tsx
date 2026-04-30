import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import { L_MESSAGE_PURPOSES, LocalMessage } from './LocalMessage';
import {
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { Button } from '../Button';
import { HStack } from '../layout';
import { StoryVStack } from '../layout/Stack/utils';
import { List, ListItem } from '../List';
import { Heading, Paragraph } from '../Typography';

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
      <LocalMessage {...args} layout="vertical">
        Vertical
      </LocalMessage>
      <LocalMessage {...args} layout="vertical" closable>
        Vertical closable
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

export const ComplexContent = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <LocalMessage {...args} layout="vertical" closable>
      <Heading level={2} typographyType="headingLarge" withMargins>
        Dette er en viktig melding
      </Heading>
      <Paragraph withMargins>Meldingen har en liste i seg:</Paragraph>
      <List>
        <ListItem>Noe her</ListItem>
        <ListItem>Og også her</ListItem>
        <ListItem>Og litt mer info her</ListItem>
      </List>
    </LocalMessage>
  ),
});
