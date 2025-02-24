import { type StoryObj } from '@storybook/react';

import { htmlPropsArgType } from '../../storybook/helpers';

import { ToggleButton, ToggleButtonGroup } from '.';

export default {
  title: 'dds-components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    htmlProps: htmlPropsArgType,
    labelId: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
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
