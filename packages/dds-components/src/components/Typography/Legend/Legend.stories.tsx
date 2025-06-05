import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Legend } from '..';
import { htmlPropsArgType } from '../../../storybook/helpers';
import { storyTypographyHtmlAttrs } from '../storyUtils';

export default {
  title: 'dds-components/Components/Typography/Legend',
  component: Legend,
  argTypes: {
    htmlProps: htmlPropsArgType,
    ...storyTypographyHtmlAttrs,
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
