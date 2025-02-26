import { type Meta, type StoryObj } from '@storybook/react';

import { Legend } from '..';
import { htmlPropsArgType } from '../../../storybook/helpers';

export default {
  title: 'dds-components/Typography/Legend',
  component: Legend,
  argTypes: {
    htmlProps: htmlPropsArgType,
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
};
