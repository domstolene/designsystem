import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  commonArgTypes,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { RadioButton } from '.';

export default {
  title: 'dds-components/Components/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { table: categoryHtml },
    required: { table: categoryHtml },
    ...commonArgTypes,
    'aria-describedby': htmlArgType,
    name: htmlArgType,
    checked: htmlArgType,
    value: htmlArgType,
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
} satisfies Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const Preview: Story = {
  args: { label: 'Label' },
};

export const Overview: Story = {
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <RadioButton {...args} label="Default" />
        <RadioButton {...args} label="Disabled" disabled />
        <RadioButton {...args} label="ReadOnly" readOnly />
        <RadioButton {...args} label="Error" error />
      </StoryVStack>
      <StoryVStack>
        <RadioButton {...args} label="Checked" checked />
        <RadioButton {...args} label="Disabled checked" disabled checked />
        <RadioButton {...args} label="ReadOnly checked" readOnly checked />
      </StoryVStack>
    </StoryHStack>
  ),
};
