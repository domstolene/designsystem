import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../../storybook/helpers';
import { storyTypographyHtmlAttrs } from '../storyUtils';

import { Caption } from '.';

export default {
  title: 'dds-components/Components/Typography/Caption',
  component: Caption,
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
} satisfies Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: { children: 'Caption' },
};
