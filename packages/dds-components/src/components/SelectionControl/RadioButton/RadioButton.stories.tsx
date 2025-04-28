import { type Meta, type StoryObj } from '@storybook/react';

import { categoryHtml, htmlPropsArgType } from '../../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { RadioButton } from '.';

export default {
  title: 'dds-components/Components/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { table: categoryHtml },
    htmlProps: htmlPropsArgType,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
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
