import { StoryTemplate } from '../../storybook';
import { List, ListItem } from '../List';
import { Typography } from '../Typography';
import { LocalMessage, LocalMessageProps } from './LocalMessage';

export default {
  title: 'design system/LocalMessage',
  component: LocalMessage,
  argTypes: {
    message: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } }
  }
};

export const Overview = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - overview">
      <LocalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <LocalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
      />
      <LocalMessage {...args} purpose="danger" message="En tilfeldig melding" />
      <LocalMessage
        {...args}
        purpose="confidential"
        message="En tilfeldig melding"
      />
      <LocalMessage
        {...args}
        purpose="success"
        message="En tilfeldig melding"
      />
      <LocalMessage {...args} purpose="tips" message="En tilfeldig melding" />
      <LocalMessage
        {...args}
        message="En tilfeldig melding"
        layout="vertical"
      />
      <LocalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        purpose="confidential"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        purpose="success"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        purpose="tips"
        message="En tilfeldig melding"
        closable
      />
      <LocalMessage
        {...args}
        message="En tilfeldig melding"
        layout="vertical"
        closable
      />
    </StoryTemplate>
  );
};

export const Default = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - default">
      <LocalMessage
        {...args}
        message={args.message || 'En tilfeldig melding'}
      />
    </StoryTemplate>
  );
};

export const Closable = (args: LocalMessageProps) => {
  return (
    <StoryTemplate title="LocalMessage - closable">
      <LocalMessage
        {...args}
        purpose={args.purpose}
        message={args.message || 'En tilfeldig melding'}
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
