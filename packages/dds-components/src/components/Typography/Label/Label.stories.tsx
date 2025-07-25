import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryHtml } from '../../../storybook/helpers';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Label } from '.';

export default {
  title: 'dds-components/Components/Typography/Label',
  component: Label,
  argTypes: {
    htmlFor: { control: false, table: categoryHtml },
    ...storyTypographyHtmlAttrs,
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Preview: Story = {
  args: { children: 'Label' },
};
