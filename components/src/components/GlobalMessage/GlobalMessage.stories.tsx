import { StoryTemplate } from '../../storybook/StoryTemplate';
import {
  GlobalMessage as DDSGlobalMessage,
  GlobalMessageProps
} from './GlobalMessage';

export default {
  title: 'design system/GlobalMessage',
  component: DDSGlobalMessage,
  argTypes: {
    message: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } }
  }
};

export const Overview = (args: GlobalMessageProps) => {
  return (
    <StoryTemplate title="GlobalMessage - overview">
      <DDSGlobalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
      />
      <DDSGlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
      />
      <DDSGlobalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
      />
      <DDSGlobalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
        closable
      />
      <DDSGlobalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
        closable
      />
      <DDSGlobalMessage
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
      <DDSGlobalMessage
        {...args}
        message={args.message || 'En tilfeldig melding'}
      />
    </StoryTemplate>
  );
};

export const Closable = (args: GlobalMessageProps) => {
  return (
    <StoryTemplate title="GlobalMessage - closable">
      <DDSGlobalMessage
        {...args}
        purpose={args.purpose || 'info'}
        message={args.message || 'En tilfeldig melding'}
        closable
      />
    </StoryTemplate>
  );
};
