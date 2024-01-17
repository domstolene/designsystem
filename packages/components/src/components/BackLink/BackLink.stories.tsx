import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { BackLink, type BackLinkProps } from '.';

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
