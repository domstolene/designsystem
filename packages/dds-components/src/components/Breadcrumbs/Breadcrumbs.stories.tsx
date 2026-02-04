import { type Meta, type StoryObj } from '@storybook/react-vite';

import {
  commonArgTypesWithNodeChildren,
  ddsProviderDecorator,
  windowWidthDecorator,
} from '../../storybook';

import { Breadcrumb, Breadcrumbs } from '.';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'dds-components/Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
  },
  decorators: [ddsProviderDecorator],
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const children = [
  <Breadcrumb href="#">Side 1</Breadcrumb>,
  <Breadcrumb href="#">Side 2</Breadcrumb>,
  <Breadcrumb href="#">Side 3</Breadcrumb>,
  <Breadcrumb>Siden du er på</Breadcrumb>,
];

export const Preview: Story = {
  args: {
    children,
  },
};

export const SmallScreen: Story = {
  args: {
    children,
    smallScreenBreakpoint: 'xl',
  },
};

export const Responsive: Story = {
  args: {
    children,
    smallScreenBreakpoint: 'sm',
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt og nedover.',
      ),
  ],
};
