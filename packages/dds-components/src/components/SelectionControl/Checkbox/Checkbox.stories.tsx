import { type Meta, type StoryObj } from '@storybook/react-vite';

import { categoryHtml, htmlPropsArgType } from '../../../storybook/helpers';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { Checkbox } from '.';

export default {
  title: 'dds-components/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { table: categoryHtml },
    htmlProps: htmlPropsArgType,
    'aria-describedby': { control: false, table: categoryHtml },
    name: { control: false, table: categoryHtml },
    checked: { control: false, table: categoryHtml },
    defaultChecked: { control: false, table: categoryHtml },
    value: { control: false, table: categoryHtml },
    defaultValue: { control: false, table: categoryHtml },
    onChange: { control: false, table: categoryHtml },
    onBlur: { control: false, table: categoryHtml },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
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
