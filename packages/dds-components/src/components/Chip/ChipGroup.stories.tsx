import { type StoryObj } from '@storybook/react-vite';

import { htmlPropsArgType } from '../../storybook/helpers';

import { Chip, ChipGroup } from '.';

export default {
  title: 'dds-components/Components/Chip/ChipGroup',
  component: ChipGroup,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
  argTypes: {
    htmlProps: htmlPropsArgType,
  },
};

type Story = StoryObj<typeof ChipGroup>;

export const Default: Story = {
  render: args => (
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  ),
};
