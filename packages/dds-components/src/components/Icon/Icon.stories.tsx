import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OpenExternalIcon as OpenExternal } from './icons/openExternal';
import { StoryLabel, commonArgTypes, labelText } from '../../storybook';
import { StoryHStack } from '../layout/Stack/utils';
import { Paragraph } from '../Typography';
import { ICON_SIZES } from './Icon';
import { VStack } from '../layout';

import { Icon } from '.';

export default {
  title: 'dds-components/Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'text' },
    ...commonArgTypes,
    icon: { control: false },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const icon = OpenExternal;

export const Preview: Story = {
  args: { icon },
};

export const Sizes: Story = {
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
};

export const CustomColor: Story = {
  args: { icon, color: 'icon-action-resting' },
};

export const Inherit: Story = {
  args: {
    icon,
    iconSize: 'inherit',
  },
  render: args => (
    <Paragraph typographyType="bodyLarge">
      <Icon {...args} /> Tekst
    </Paragraph>
  ),
};
