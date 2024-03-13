import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { ToggleButton, ToggleButtonGroup } from '.';

export default {
  title: 'dds-components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    label: { control: 'text' },
    htmlProps: { control: false },
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
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <ToggleButtonGroup {...args}>
        <ToggleButton label="Tekst" />
        <ToggleButton label="Tekst" />
        <ToggleButton label="Tekst" />
        <ToggleButton label="Tekst" />
      </ToggleButtonGroup>
    </>
  ),
};
