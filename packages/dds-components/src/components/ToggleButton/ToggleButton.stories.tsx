import preview from '#.storybook/preview';
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

const meta = preview.meta({
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
});

export default meta;

export const Preview = meta.story({
  args: { label: 'Tekst' },
});

export const WithIcon = meta.story({
  args: { label: 'Tekst', icon: NotificationsIcon },
});

export const Sizes = meta.story({
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
});
