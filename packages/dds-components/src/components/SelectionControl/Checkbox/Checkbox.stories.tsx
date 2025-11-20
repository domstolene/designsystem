import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  commonArgTypes,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { Checkbox } from '.';

export default {
  title: 'dds-components/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { table: categoryHtml },
    ...commonArgTypes,
    'aria-describedby': htmlArgType,
    name: htmlArgType,
    checked: htmlArgType,
    defaultChecked: htmlArgType,
    value: htmlArgType,
    defaultValue: htmlArgType,
    onBlur: htmlEventArgType,
    onChange: htmlEventArgType,
  },
  args: { onChange: fn(), onBlur: fn() },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Preview: Story = {
  args: { label: 'Label' },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <Checkbox {...args} label="Default" />
        <Checkbox {...args} label="Disabled" disabled />
        <Checkbox {...args} label="ReadOnly" readOnly />
        <Checkbox {...args} label="Error" error />
      </StoryVStack>
      <StoryVStack>
        <Checkbox {...args} label="Checked" checked />
        <Checkbox {...args} label="Disabled checked" disabled checked />
        <Checkbox {...args} label="ReadOnly checked" readOnly checked />
        <Checkbox {...args} label="Error checked" error checked />
      </StoryVStack>
      <StoryVStack>
        <Checkbox {...args} label="Indeterminate" indeterminate />
        <Checkbox
          {...args}
          label="Disabled indeterminate"
          disabled
          indeterminate
        />
        <Checkbox
          {...args}
          label="ReadOnly indeterminate"
          readOnly
          indeterminate
        />
        <Checkbox {...args} />
      </StoryVStack>
    </StoryHStack>
  ),
};
