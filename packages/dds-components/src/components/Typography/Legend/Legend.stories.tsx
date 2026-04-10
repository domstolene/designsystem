import preview from '#.storybook/preview';

import { Legend } from '..';
import { ddsProviderDecorator } from '../../../storybook';
import { storyTypographyHtmlAttrs } from '../storyUtils';

const meta = preview.meta({
  title: 'dds-components/Components/Typography/Legend',
  component: Legend,
  argTypes: {
    ...storyTypographyHtmlAttrs,
  },
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  args: { children: 'Legend' },
});
