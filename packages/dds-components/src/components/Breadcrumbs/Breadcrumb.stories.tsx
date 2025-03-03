import { type Meta, type StoryObj } from '@storybook/react';

import { categoryHtml } from '../../storybook/helpers';
import { StoryVStack } from '../Stack/utils';

import { Breadcrumb } from '.';

export default {
  title: 'dds-components/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    href: {
      control: 'text',
      table: categoryHtml,
    },
  },
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbDefault: Story = {
  args: {
    children: 'Side',
  },
};

export const BreadcrumbOverview: Story = {
  render: args => (
    <StoryVStack>
      <Breadcrumb {...args} href="#">
        Forrige nivå
      </Breadcrumb>
      <Breadcrumb {...args}>Siden du er på</Breadcrumb>
    </StoryVStack>
  ),
};
