import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { Breadcrumb, Breadcrumbs } from '.';

export default {
  title: 'dds-components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  decorators: Story => (
    <StoryTemplate title="Breadcrumbs - default">
      <Story />
    </StoryTemplate>
  ),
  args: {
    children: [
      <Breadcrumb href="#">Side 1</Breadcrumb>,
      <Breadcrumb href="#">Side 2</Breadcrumb>,
      <Breadcrumb>Side 3</Breadcrumb>,
    ],
  },
};
