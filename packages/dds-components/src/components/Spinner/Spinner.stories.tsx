import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook/helpers';
import { StoryHStack } from '../layout/Stack/utils';

import { Spinner } from '.';

export default {
  title: 'dds-components/Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    ...commonArgTypes,
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Preview: Story = {};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <Spinner {...args} />
      <Spinner {...args} color="icon-subtle" />
      <Spinner {...args} color="icon-on-success-default" />
      <Spinner {...args} size="60px" />
    </StoryHStack>
  ),
};

export const CustomTooltip: Story = {
  args: {
    tooltip: 'Egendefinert melding',
  },
};
