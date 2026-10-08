import preview from '#.storybook/preview';

import { CHIP_SIZES } from './Chip';
import { commonChipArgTypes } from './Chip.storyArgs';
import {
  StoryLabel,
  ddsProviderDecorator,
  htmlArgType,
  htmlEventArgType,
} from '../../storybook';
import { PersonIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

import { ChipButton, ChipCheckbox, ChipRadio, ChipRemovable } from '.';
const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: ChipCheckbox,
  argTypes: {
    ...commonChipArgTypes,
    checked: htmlArgType,
    defaultChecked: htmlArgType,
    onChange: { ...htmlEventArgType, action: 'onChange' },
    onBlur: { ...htmlEventArgType, action: 'onBlur' },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ ref, onChange, onBlur, htmlProps, ...commonArgs }) => (
    <StoryHStack flexWrap="wrap">
      <ChipRemovable {...commonArgs}>Removable</ChipRemovable>
      <ChipButton {...commonArgs}>Button</ChipButton>
      <ChipButton {...commonArgs} icon={PersonIcon}>
        Button med ikon
      </ChipButton>
      <ChipRadio {...commonArgs}>Radio</ChipRadio>
      <ChipCheckbox {...commonArgs}>Checkbox</ChipCheckbox>
      <ChipCheckbox {...commonArgs} showSelectionControlIndicator={false}>
        Checkbox uten merke
      </ChipCheckbox>
      <ChipCheckbox {...commonArgs} icon={PersonIcon}>
        Checkbox med ikon
      </ChipCheckbox>
    </StoryHStack>
  ),
});

export const Sizes = meta.story({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ ref, onChange, onBlur, htmlProps, ...commonArgs }) => (
    <StoryVStack>
      {CHIP_SIZES.map(size => (
        <StoryVStack key={size}>
          <StoryLabel>{size}</StoryLabel>
          <StoryHStack>
            <ChipRemovable {...commonArgs} size={size}>
              Removable
            </ChipRemovable>
            <ChipButton {...commonArgs} size={size}>
              Button
            </ChipButton>
            <ChipRadio {...commonArgs} size={size}>
              Radio
            </ChipRadio>
            <ChipCheckbox {...commonArgs} size={size}>
              Checkbox
            </ChipCheckbox>
          </StoryHStack>
        </StoryVStack>
      ))}
    </StoryVStack>
  ),
});

export const Checkbox = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { children: 'Chip' },
  render: args => <ChipCheckbox {...args} />,
});

export const CheckboxHiddenSelectionControl = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { children: 'Chip' },
  render: args => (
    <ChipCheckbox {...args} showSelectionControlIndicator={false} />
  ),
});

export const CheckboxWithIcon = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { children: 'Chip' },
  render: args => <ChipCheckbox {...args} icon={PersonIcon} />,
});

export const Radio = meta.story({
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: { children: 'Chip' },
  render: args => <ChipRadio {...args} />,
});
