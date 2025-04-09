import { type Meta, type StoryObj } from '@storybook/react';

import { categoryHtml, htmlPropsArgType } from '../../storybook/helpers';
import { NotificationsIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { ToggleButton } from '.';

export default {
  title: 'dds-components/Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    htmlProps: htmlPropsArgType,
    'aria-describedby': { control: 'text', table: categoryHtml },
    name: { control: false, table: categoryHtml },
    checked: { control: false, table: categoryHtml },
    defaultChecked: { control: 'boolean', table: categoryHtml },
    value: { control: false, table: categoryHtml },
    defaultValue: { control: false, table: categoryHtml },
    onChange: { control: false, table: categoryHtml },
    onBlur: { control: false, table: categoryHtml },
    icon: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof ToggleButton>;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: { label: 'Tekst' },
};

export const WithIcon: Story = {
  args: { label: 'Tekst', icon: NotificationsIcon },
};

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <ToggleButton {...args} label="Small" />
        <ToggleButton {...args} label="Xsmall" size="xsmall" />
      </StoryVStack>
      <StoryVStack>
        <ToggleButton {...args} label="Small" icon={NotificationsIcon} />
        <ToggleButton
          {...args}
          label="Xsmall"
          icon={NotificationsIcon}
          size="xsmall"
        />
      </StoryVStack>
    </StoryHStack>
  ),
};
