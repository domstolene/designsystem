import { type Meta, type StoryObj } from '@storybook/react-vite';

import { OpenExternalIcon as OpenExternal } from './icons/openExternal';
import { htmlPropsArgType } from '../../storybook/helpers';
import { StoryHStack } from '../layout/Stack/utils';
import { Paragraph } from '../Typography';

import { Icon } from '.';

export default {
  title: 'dds-components/Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'text' },
    htmlProps: htmlPropsArgType,
    icon: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

const icon = OpenExternal;

export const Default: Story = {
  args: { icon },
};

export const Sizes: Story = {
  args: { icon },
  render: args => (
    <StoryHStack>
      <Icon {...args} iconSize="inherit" />
      <Icon {...args} iconSize="small" />
      <Icon {...args} iconSize="medium" />
      <Icon {...args} iconSize="large" />
    </StoryHStack>
  ),
};

export const CustomColor: Story = {
  args: { icon, color: 'iconActionResting' },
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
