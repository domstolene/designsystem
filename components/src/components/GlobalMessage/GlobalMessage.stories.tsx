import { StoryTemplate } from '../../storybook';
import { GlobalMessage, GlobalMessageProps } from './GlobalMessage';

export default {
  title: 'design system/GlobalMessage',
  component: GlobalMessage,
  argTypes: {
    message: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } }
  }
};

export const Overview = (args: GlobalMessageProps) => {
  return (
    <StoryTemplate title="GlobalMessage - overview">
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <GlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
      />
      <GlobalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
      />
      <GlobalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
        closable
      />
      <GlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
        closable
      />
      <GlobalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
        closable
      />
    </StoryTemplate>
  );
};

export const Default = (args: GlobalMessageProps) => {
  return (
    <StoryTemplate title="GlobalMessage - default">
      <GlobalMessage
        {...args}
        message={args.message || 'En tilfeldig melding'}
      />
    </StoryTemplate>
  );
};

export const Closable = (args: GlobalMessageProps) => {
  return (
    <StoryTemplate title="GlobalMessage - closable">
      <GlobalMessage
        {...args}
        purpose={args.purpose || 'info'}
        message={args.message || 'En tilfeldig melding'}
        closable
      />
    </StoryTemplate>
  );
};
