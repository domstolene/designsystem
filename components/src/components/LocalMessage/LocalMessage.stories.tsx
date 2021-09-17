import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { Typography } from '../Typography';
import {
  LocalMessage as DDSLocalMessage,
  LocalMessageProps
} from './LocalMessage';

export default {
  title: 'design system/LocalMessage',
  component: DDSLocalMessage,
  argTypes: {
    message: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } }
  }
};

export const Overview = (args: LocalMessageProps) => {
  return storyHTMLTemplate(
    'LocalMessage - overview',
    <>
      <DDSLocalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="confidential"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="success"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="tips"
        message="En tilfeldig melding"
      />
      <DDSLocalMessage
        {...args}
        purpose="info"
        message="En tilfeldig melding"
        closable
      />
      <DDSLocalMessage
        {...args}
        purpose="warning"
        message="En tilfeldig melding"
        closable
      />
      <DDSLocalMessage
        {...args}
        purpose="danger"
        message="En tilfeldig melding"
        closable
      />
      <DDSLocalMessage
        {...args}
        purpose="confidential"
        message="En tilfeldig melding"
        closable
      />
      <DDSLocalMessage
        {...args}
        purpose="success"
        message="En tilfeldig melding"
        closable
      />
      <DDSLocalMessage
        {...args}
        purpose="tips"
        message="En tilfeldig melding"
        closable
      />
    </>
  );
};

export const Default = (args: LocalMessageProps) => {
  return storyHTMLTemplate(
    'LocalMessage - default',
    <DDSLocalMessage
      {...args}
      message={args.message || 'En tilfeldig melding'}
    />
  );
};

export const Closable = (args: LocalMessageProps) => {
  return storyHTMLTemplate(
    'LocalMessage - closable',
    <DDSLocalMessage
      {...args}
      purpose={args.purpose || 'info'}
      message={args.message || 'En tilfeldig melding'}
      closable
    />
  );
};

export const ComplexContent = (args: LocalMessageProps) => {
  return storyHTMLTemplate(
    'LocalMessage complex',
    <DDSLocalMessage {...args} purpose={args.purpose || 'info'} closable>
      <div>
        <Typography typographyType="headingSans03" withMargins>
          Dette er en viktig melding
        </Typography>
        <Typography withMargins>Meldingen har en liste i seg:</Typography>
        <ul>
          <li>Noe her</li>
          <li>Og også her</li>
          <li>Og litt mer info her</li>
        </ul>
      </div>
    </DDSLocalMessage>
  );
};
