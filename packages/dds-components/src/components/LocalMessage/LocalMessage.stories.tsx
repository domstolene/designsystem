import { type Meta, type StoryObj } from '@storybook/react';

import { LocalMessage } from './LocalMessage';
import { Button } from '../Button';
import { List, ListItem } from '../List';
import { StoryHStack, StoryVStack } from '../Stack/utils';
import { Heading, Paragraph } from '../Typography';

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
};

export const Overview: Story = {
  args: {
    children: 'Dette er en lokal melding',
  },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <LocalMessage {...args} purpose="info" />
        <LocalMessage {...args} purpose="success" />
        <LocalMessage {...args} purpose="warning" />
        <LocalMessage {...args} purpose="danger" />
        <LocalMessage {...args} purpose="tips" />
        <LocalMessage {...args} layout="vertical" />
      </StoryVStack>
      <StoryVStack>
        <LocalMessage {...args} purpose="info" closable />
        <LocalMessage {...args} purpose="success" closable />
        <LocalMessage {...args} purpose="warning" closable />
        <LocalMessage {...args} purpose="danger" closable />
        <LocalMessage {...args} purpose="tips" closable />
        <LocalMessage {...args} layout="vertical" closable />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Closable: Story = {
  args: {
    children: 'Dette er en lokal melding',
    closable: true,
  },
};

export const ComplexContent: Story = {
  args: {},
  render: args => (
    <StoryVStack>
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
      <LocalMessage {...args} closable={true} purpose="success">
        {'"Dokumentnavn" ble slettet '}
        <Button purpose="secondary" onClick={() => alert('Du angret!')}>
          Angre
        </Button>
      </LocalMessage>
    </StoryVStack>
  ),
};
