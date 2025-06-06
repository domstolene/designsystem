import { type Meta, type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../storybook/helpers';
import { StoryHStack } from '../layout/Stack/utils';

import { Spinner } from '.';

export default {
  title: 'dds-components/Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'text' },
    size: { control: 'text' },
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <Spinner {...args} />
      <Spinner {...args} color="iconSubtle" />
      <Spinner {...args} color="iconOnSuccessDefault" />
      <Spinner {...args} size="60px" />
    </StoryHStack>
  ),
};

export const CustomTooltip: Story = {
  args: {
    tooltip: 'Egendefinert melding',
  },
};
