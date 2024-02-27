import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';

export default {
  title: 'dds-components/Breadcrumbs',
  component: Breadcrumb,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: { href: { control: { type: 'text' } } },
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbDefault: Story = {
  decorators: Story => (
    <StoryTemplate title="Breadcrumb - default">
      <Story />
    </StoryTemplate>
  ),
  args: {
    children: 'Side',
  },
};

export const BreadcrumbOverview: Story = {
  decorators: Story => (
    <StoryTemplate title="Breadcrumb - overview">
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <Breadcrumb {...args} href="#">
        Forrige nivå
      </Breadcrumb>
      <Breadcrumb {...args}>Siden du er på</Breadcrumb>
    </>
  ),
};
