import preview from '#.storybook/preview';

import { commonChipArgTypes } from './Chip.storyArgs';
import { ddsProviderDecorator, htmlEventArgType } from '../../storybook';

import { ChipButton } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Chip',
  component: ChipButton,
  argTypes: {
    ...commonChipArgTypes,
    onClick: { ...htmlEventArgType, action: 'onClick' },
  },
  decorators: [ddsProviderDecorator],
});

export default meta;

export const Button = meta.story({
  args: { children: 'ChipButton' },
  render: args => <ChipButton {...args} />,
});

export const ButtonWithBadge = meta.story({
  args: {
    children: 'ChipButton',
    badgeProps: { children: 5, purpose: 'neutral' },
  },
  render: args => <ChipButton {...args} />,
});
