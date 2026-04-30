import preview from '#.storybook/preview';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  windowWidthDecorator,
} from '../../storybook';

import { Breadcrumb, Breadcrumbs } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

const children = [
  <Breadcrumb href="#">Side 1</Breadcrumb>,
  <Breadcrumb href="#">Side 2</Breadcrumb>,
  <Breadcrumb href="#">Side 3</Breadcrumb>,
  <Breadcrumb>Siden du er på</Breadcrumb>,
];

export const Preview = meta.story({
  args: {
    children,
  },
});

export const SmallScreen = meta.story({
  args: {
    children,
    smallScreenBreakpoint: 'xl',
  },
});

export const Responsive = meta.story({
  args: {
    children,
    smallScreenBreakpoint: 'sm',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
});
