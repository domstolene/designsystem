import { type Meta, type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook/helpers';

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

export const CustomColor: Story = {
  args: { color: 'icon-on-success-default' },
};

export const CustomSize: Story = {
  args: { size: '150px' },
};

export const CustomTooltip: Story = {
  args: {
    tooltip: 'Egendefinert melding',
  },
};
