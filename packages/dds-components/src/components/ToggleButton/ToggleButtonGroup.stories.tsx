import preview from '#.storybook/preview';

import { commonArgTypesWithNodeChildren } from '../../storybook';

import { ToggleButton, ToggleButtonGroup } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,

  argTypes: {
    ...commonArgTypesWithNodeChildren,
    labelId: { control: false },
  },
});

export const Preview = meta.story({
  args: { label: 'Label' },
  render: args => (
    <ToggleButtonGroup {...args}>
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
      <ToggleButton label="Tekst" />
    </ToggleButtonGroup>
  ),
});
