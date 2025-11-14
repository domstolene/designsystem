import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { TOGGLE_BUTTON_SIZES } from './ToggleButton.types';
import {
  categoryHtml,
  commonArgTypes,
  htmlArgType,
  htmlEventArgType,
  labelText,
} from '../../storybook';
import { NotificationsIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { ToggleButton } from '.';

export default {
  title: 'dds-components/Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    ...commonArgTypes,
    'aria-describedby': htmlArgType,
    name: htmlArgType,
    checked: htmlArgType,
    defaultChecked: { control: 'boolean', table: categoryHtml },
    value: htmlArgType,
    defaultValue: htmlArgType,
    onChange: htmlEventArgType,
    onBlur: htmlEventArgType,
    icon: { control: false },
  },
  args: { onChange: fn(), onBlur: fn() },
} satisfies Meta<typeof ToggleButton>;

type Story = StoryObj<typeof ToggleButton>;

export const Preview: Story = {
  args: { label: 'Tekst' },
};

export const WithIcon: Story = {
  args: { label: 'Tekst', icon: NotificationsIcon },
};

export const Sizes: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {TOGGLE_BUTTON_SIZES.map(size => (
          <ToggleButton
            {...args}
            key={size}
            size={size}
            label={labelText(size)}
          />
        ))}
      </StoryVStack>
      <StoryVStack>
        {TOGGLE_BUTTON_SIZES.map(size => (
          <ToggleButton
            {...args}
            key={size}
            size={size}
            label={labelText(size)}
            icon={NotificationsIcon}
          />
        ))}
      </StoryVStack>
    </StoryHStack>
  ),
};
