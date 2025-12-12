import { type StoryObj } from '@storybook/react-vite';

import { commonArgTypesWithNodeChildren } from '../../storybook';

import { ToggleButton, ToggleButtonGroup } from '.';

export default {
  title: 'dds-components/Components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    ...commonArgTypesWithNodeChildren,
    labelId: { control: false },
  },
};

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Preview: Story = {
  args: { label: 'Label' },
  render: args => (
    <ToggleButtonGroup {...args}>
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
    </ToggleButtonGroup>
  ),
};
