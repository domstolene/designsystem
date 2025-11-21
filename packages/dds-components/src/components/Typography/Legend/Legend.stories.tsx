import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Legend } from '..';
import { ddsProviderDecorator } from '../../../storybook';
import { storyTypographyHtmlAttrs } from '../storyUtils';

export default {
  title: 'dds-components/Components/Typography/Legend',
  component: Legend,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof Legend>;

type Story = StoryObj<typeof Legend>;

export const Preview: Story = {
  args: { children: 'Legend' },
};
