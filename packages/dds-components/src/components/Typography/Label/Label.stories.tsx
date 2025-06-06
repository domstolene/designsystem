import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryHtml, htmlPropsArgType } from '../../../storybook/helpers';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Label } from '.';

export default {
  title: 'dds-components/Components/Typography/Label',
  component: Label,
  argTypes: {
    htmlFor: { control: false, table: categoryHtml },
    htmlProps: htmlPropsArgType,
    ...storyTypographyHtmlAttrs,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: 'Label' },
};
