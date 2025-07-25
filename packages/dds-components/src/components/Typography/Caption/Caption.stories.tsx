import { type Meta, type StoryObj } from '@storybook/react-vite';

import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Caption } from '.';

export default {
  title: 'dds-components/Components/Typography/Caption',
  component: Caption,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
} satisfies Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Preview: Story = {
  args: { children: 'Caption' },
};
