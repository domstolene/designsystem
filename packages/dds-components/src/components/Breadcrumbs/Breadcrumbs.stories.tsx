import { type Meta, type StoryObj } from '@storybook/react';

import {
  htmlPropsArgType,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

import { Breadcrumb, Breadcrumbs } from '.';

export default {
  title: 'dds-components/Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

const children = [
  <Breadcrumb href="#">Side 1</Breadcrumb>,
  <Breadcrumb href="#">Side 2</Breadcrumb>,
  <Breadcrumb href="#">Side 3</Breadcrumb>,
  <Breadcrumb>Siden du er på</Breadcrumb>,
];

export const Default: Story = {
  args: {
    children,
  },
};

export const Overview: Story = {
  args: {
    children,
  },
  render: args => (
    <StoryVStack>
      <Breadcrumbs {...args} />
      <Breadcrumbs {...args} smallScreenBreakpoint="xl" />
    </StoryVStack>
  ),
};

export const SmallScreen: Story = {
  args: {
    children,
    smallScreenBreakpoint: 'xl',
  },
};

export const responsive: Story = {
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
