import { BackLink, BackLinkProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/BackLink',
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
