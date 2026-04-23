import preview from '#.storybook/preview';

import { ICON_SIZES } from './Icon';
import { StoryLabel, commonArgTypes, labelText } from '../../storybook';
import { VStack } from '../layout';
import { OpenExternalIcon as OpenExternal } from './icons/openExternal';
import { StoryHStack } from '../layout/Stack/utils';

import { Icon } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'text' },
    ...commonArgTypes,
    icon: { control: false },
    iconState: { control: false },
  },
});

export default meta;

const icon = OpenExternal;

export const Preview = meta.story({
  args: { icon },
});

export const Sizes = meta.story({
  args: { icon },
  render: args => (
    <StoryHStack>
      {ICON_SIZES.map(size => (
        <VStack key={size}>
          <StoryLabel>{labelText(size)}</StoryLabel>
          <Icon {...args} iconSize={size} />
        </VStack>
      ))}
    </StoryHStack>
  ),
});

export const CustomColor = meta.story({
  args: { icon, color: 'icon-action-resting' },
});
