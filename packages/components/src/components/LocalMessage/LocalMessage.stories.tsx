import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { LocalMessage } from './LocalMessage';
import { List, ListItem } from '../List';
import { HStack, VStack } from '../Stack';
import { Typography } from '../Typography';

export default {
  title: 'dds-components/LocalMessage',
  component: LocalMessage,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'En tilfeldig melding',
    },
    width: { control: 'text' },
    closable: { control: 'boolean' },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof LocalMessage>;

type Story = StoryObj<typeof LocalMessage>;

export const Default: Story = {
  args: {
    children: 'Dette er en lokal melding',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: {
    children: 'Dette er en lokal melding',
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <HStack gap="x1">
        <VStack gap="x0.75" align="start">
          <LocalMessage {...args} purpose="info" />
          <LocalMessage {...args} purpose="success" />
          <LocalMessage {...args} purpose="warning" />
          <LocalMessage {...args} purpose="danger" />
          <LocalMessage {...args} purpose="confidential" />
          <LocalMessage {...args} purpose="tips" />
          <LocalMessage {...args} layout="vertical" />
        </VStack>
        <VStack gap="x0.75" align="start">
          <LocalMessage {...args} purpose="info" closable />
          <LocalMessage {...args} purpose="success" closable />
          <LocalMessage {...args} purpose="warning" closable />
          <LocalMessage {...args} purpose="danger" closable />
          <LocalMessage {...args} purpose="confidential" closable />
          <LocalMessage {...args} purpose="tips" closable />
          <LocalMessage {...args} layout="vertical" closable />
        </VStack>
      </HStack>
    </>
  ),
};

export const Closable: Story = {
  args: {
    children: 'Dette er en lokal melding',
    closable: true,
  },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const ComplexContent: Story = {
  args: {},
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <LocalMessage {...args} purpose={args.purpose} layout="vertical" closable>
      <Typography typographyType="headingSans03" withMargins>
        Dette er en viktig melding
      </Typography>
      <Typography withMargins>Meldingen har en liste i seg:</Typography>
      <List>
        <ListItem>Noe her</ListItem>
        <ListItem>Og også her</ListItem>
        <ListItem>Og litt mer info her</ListItem>
      </List>
    </LocalMessage>
  ),
};
