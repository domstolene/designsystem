import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { Caption } from '.';

export default {
  title: 'dds-components/Typography/Caption',
  component: Caption,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: { children: 'Caption' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
