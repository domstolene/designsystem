import preview from '#.storybook/preview';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  commonArgTypesWithNodeChildren,
  htmlArgType,
  htmlEventArgType,
} from '../../../storybook';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { Checkbox } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { table: categoryHtml },
    ...commonArgTypesWithNodeChildren,
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
});

export default meta;

export const Preview = meta.story({
  args: { label: 'Label' },
});

export const Overview = meta.story({
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
});
