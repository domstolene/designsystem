import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Legend } from '..';

export default {
  title: 'dds-components/Typography/Legend',
  component: Legend,
  argTypes: {
    withMargins: { control: { type: 'boolean' } },
    htmlProps: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Legend>;

type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  args: { children: 'Legend' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
