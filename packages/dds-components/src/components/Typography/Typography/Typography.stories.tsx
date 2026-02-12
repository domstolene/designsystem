import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Typography } from '..';
import { categoryHtml } from '../../../storybook';
import { storyTypographyHtmlAttrs } from '../storyUtils';

export default {
  title: 'dds-components/Components/Typography/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'text' },
    href: { control: 'text', table: categoryHtml },
    target: { control: false, table: categoryHtml },
    as: { control: 'text' },
    ...storyTypographyHtmlAttrs,
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Preview: Story = {
  args: { children: 'Typography' },
};

export const CustomColor: Story = {
  args: { children: 'Typography', color: 'text-action-resting' },
};
