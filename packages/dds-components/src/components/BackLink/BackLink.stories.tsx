import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  ddsProviderDecorator,
  htmlEventArgType,
} from '../../storybook';

import { BackLink } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/BackLink',
  component: BackLink,
  argTypes: {
    href: {
      table: categoryHtml,
    },
    onClick: htmlEventArgType,
  },
  args: { onClick: fn() },
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story({
  args: { label: 'Forrige nivå', href: '#' },
});

export const As = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { label: 'Forrige nivå', href: '#', as: 'div' },
});
