import preview from '#.storybook/preview';

import { commonArgTypes, ddsProviderDecorator } from '../../storybook';

import { Spinner } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    ...commonArgTypes,
  },
  decorators: [ddsProviderDecorator],
});

export const Preview = meta.story();

export const CustomColor = meta.story({
  args: { color: 'icon-on-success-default' },
});

export const CustomSize = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { size: '150px' },
});

export const CustomTooltip = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    tooltip: 'Egendefinert melding',
  },
});
