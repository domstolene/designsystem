import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Breadcrumb, Breadcrumbs } from '.';

export default {
  title: 'dds-components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: { smallScreen: { control: { type: 'boolean' } } },
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

const children = [
  <Breadcrumb href="#">Side 1</Breadcrumb>,
  <Breadcrumb href="#">Side 2</Breadcrumb>,
  <Breadcrumb href="#">Side 3</Breadcrumb>,
  <Breadcrumb>Siden du er på</Breadcrumb>,
];

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  args: {
    children,
  },
};

export const Overview: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  args: {
    children,
  },
  render: args => (
    <>
      <Breadcrumbs {...args} />
      <Breadcrumbs {...args} smallScreen />
    </>
  ),
};

export const SmallScreen: Story = {
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  args: {
    children,
    smallScreen: true,
  },
};
