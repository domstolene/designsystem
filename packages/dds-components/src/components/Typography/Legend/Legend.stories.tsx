import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Legend } from '..';
import { ddsProviderDecorator } from '../../../storybook';
import { storyTypographyHtmlAttrs } from '../storyUtils';

const meta: Meta<typeof Legend> = {
  title: 'dds-components/Components/Typography/Legend',
  component: Legend,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Legend>;

export const Preview: Story = {
  args: { children: 'Legend' },
};
