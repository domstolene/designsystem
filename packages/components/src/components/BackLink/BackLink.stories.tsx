import { BackLink, BackLinkProps } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'Design system/BackLink',
  component: BackLink,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Forrige nivå',
    },
    href: {
      control: 'text',
      defaultValue: '/',
    },
  },
};

export const Default = (args: BackLinkProps) => (
  <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>
);
