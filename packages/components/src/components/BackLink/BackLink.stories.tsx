import { BackLink, BackLinkProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/BackLink',
  component: BackLink,
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
};

export const Default = (args: Partial<BackLinkProps>) => (
  <StoryTemplate title="BackLink - default">
    <BackLink label="Forrige nivå" href="?" {...args} />
  </StoryTemplate>
);
