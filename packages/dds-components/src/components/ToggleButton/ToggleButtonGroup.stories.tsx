import { type StoryObj } from '@storybook/react-vite';

import { commonArgTypes } from '../../storybook/helpers';

import { ToggleButton, ToggleButtonGroup } from '.';

export default {
  title: 'dds-components/Components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    ...commonArgTypes,
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
