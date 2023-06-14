import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { List, ListItem } from '../List';
import { Typography } from '../Typography';
import { LocalMessage, LocalMessageProps } from './LocalMessage';

export default {
  title: 'dds-components/LocalMessage',
  component: LocalMessage,
  argTypes: {
    message: {
      control: { type: 'text' },
      defaultValue: 'En tilfeldig melding',
    },
    width: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } },
  },
};

export const Overview = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - overview">
      <LocalMessage {...args} purpose="info" />
      <LocalMessage {...args} purpose="warning" />
      <LocalMessage {...args} purpose="danger" />
      <LocalMessage {...args} purpose="confidential" />
      <LocalMessage {...args} purpose="success" />
      <LocalMessage {...args} purpose="tips" />
      <LocalMessage {...args} layout="vertical" />
      <LocalMessage {...args} purpose="info" closable />
      <LocalMessage {...args} purpose="warning" closable />
      <LocalMessage {...args} purpose="danger" closable />
      <LocalMessage {...args} purpose="confidential" closable />
      <LocalMessage {...args} purpose="success" closable />
      <LocalMessage {...args} purpose="tips" closable />
      <LocalMessage {...args} layout="vertical" closable />
    </StoryTemplate>
  );
};

export const Default = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - default">
      <LocalMessage {...args} message={args.message} />
    </StoryTemplate>
  );
};

export const Closable = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - closable">
      <LocalMessage
        {...args}
        purpose={args.purpose}
        message={args.message}
        closable
      />
    </StoryTemplate>
  );
};

export const ComplexContent = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - complex content">
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
    </StoryTemplate>
  );
};
