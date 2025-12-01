import { type Meta, type StoryObj } from '@storybook/react-vite';
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
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { List, ListItem } from '../List';
import { Heading, Paragraph } from '../Typography';

export default {
  title: 'dds-components/Components/LocalMessage',
  component: LocalMessage,
  argTypes: {
    width: responsivePropsArgTypes.width,
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof LocalMessage>;

type Story = StoryObj<typeof LocalMessage>;

export const Preview: Story = {
  args: {
    children: 'Dette er en lokal melding',
  },
};

export const Variants: Story = {
  render: args => (
    <StoryVStack alignItems="stretch">
      {L_MESSAGE_PURPOSES.map(p => (
        <LocalMessage {...args} key={`p-${p}`} purpose={p}>
          {labelText(p)}
        </LocalMessage>
      ))}
    </StoryVStack>
  ),
};

export const Closable: Story = {
  args: {
    children: 'Dette er en lokal melding',
    closable: true,
  },
};

export const Vertical: Story = {
  args: {
    children: 'Dette er en lokal melding',
    layout: 'vertical',
  },
  render: args => (
    <StoryHStack>
      <LocalMessage {...args} />
      <LocalMessage {...args} closable />
    </StoryHStack>
  ),
};

export const WithExtraButton: Story = {
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
};

export const ResponsiveWidth: Story = {
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
};

export const ComplexContent: Story = {
  args: {},
  render: args => (
    <LocalMessage {...args} purpose={args.purpose} layout="vertical" closable>
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
};
