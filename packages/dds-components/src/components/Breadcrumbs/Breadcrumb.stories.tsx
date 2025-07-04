import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { categoryHtml, htmlEventArgType } from '../../storybook/helpers';
import { StoryVStack } from '../layout/Stack/utils';

import { Breadcrumb } from '.';

export default {
  title: 'dds-components/Components/Breadcrumbs/Breadcrumb',
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
    onClick: htmlEventArgType,
  },
  args: { onClick: fn() },
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
