import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import {
  StoryLabel,
  commonArgTypes,
  ddsProviderDecorator,
} from '../../storybook';
import { PersonIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/storybook-utils';

import {
  CHIP_SIZES,
  ChipButton,
  ChipCheckbox,
  ChipRadio,
  ChipRemovable,
} from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: ChipRemovable,
  argTypes: {
    ...commonArgTypes,
  },
  args: { onClose: fn() },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Preview = meta.story({
  args: { children: 'Chip' },
  render: args => (
    <StoryHStack>
      <ChipRemovable {...args}>Removable</ChipRemovable>
      <ChipButton {...args}>Button</ChipButton>
      <ChipButton {...args} icon={PersonIcon}>
        Button med ikon
      </ChipButton>
      <ChipRadio {...args}>Radio</ChipRadio>
      <ChipCheckbox {...args}>Checkbox</ChipCheckbox>
    </StoryHStack>
  ),
});

export const Sizes = meta.story({
  render: args => (
    <StoryVStack>
      {CHIP_SIZES.map(size => (
        <StoryVStack key={size}>
          <StoryLabel>{size}</StoryLabel>
          <StoryHStack>
            <ChipRemovable {...args} size={size}>
              Removable
            </ChipRemovable>
            <ChipButton {...args} size={size}>
              Button
            </ChipButton>
            <ChipRadio {...args} size={size}>
              Radio
            </ChipRadio>
            <ChipCheckbox {...args} size={size}>
              Checkbox
            </ChipCheckbox>
          </StoryHStack>
        </StoryVStack>
      ))}
    </StoryVStack>
  ),
});

export const Button = meta.story({
  args: { children: 'Chip' },
  render: args => <ChipButton {...args} />,
});

export const Checkbox = meta.story({
  args: { children: 'Chip' },
  render: args => <ChipCheckbox {...args} />,
});

export const Radio = meta.story({
  args: { children: 'Chip' },
  render: args => <ChipRadio {...args} />,
});
