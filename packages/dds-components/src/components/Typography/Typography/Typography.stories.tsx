import preview from '#.storybook/preview';

import { Typography } from '..';
import { categoryHtml } from '../../../storybook';
import { blockTgCommonArgTypes } from '../storybook-utils/storyUtils';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'text' },
    href: { control: 'text', table: categoryHtml },
    target: { control: false, table: categoryHtml },
    as: { control: 'text' },
    ...blockTgCommonArgTypes,
  },
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Typography' },
});

export const CustomColor = meta.story({
  args: { children: 'Typography', color: 'text-action-resting' },
});
