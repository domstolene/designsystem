import { InputMessage, InputMessageProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/InputMessage',
  component: InputMessage,
  argTypes: {
    message: { control: { type: 'text' } },
  },
};

export const Overview = () => (
  <StoryTemplate title="InputMessage - overview">
    <InputMessage messageType="error" message="feilmelding" />
    <InputMessage messageType="tip" message="hjelpetekst" />
  </StoryTemplate>
);

export const Default = (args: InputMessageProps) => (
  <StoryTemplate title="InputMessage - default">
    <InputMessage
      {...args}
      messageType={args.messageType || 'error'}
      message={args.message || 'feilmelding'}
    />
  </StoryTemplate>
);
