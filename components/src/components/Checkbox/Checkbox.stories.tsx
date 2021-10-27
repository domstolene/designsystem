import { Checkbox as DDSCheckbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/Checkbox/Checkbox',
  component: DDSCheckbox,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className']
    }
  }
};

export const Overview = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - overview" display="grid">
      <DDSCheckbox {...args} label={args.label || 'Default'} />
      <DDSCheckbox {...args} label={args.label || 'Checked'} checked />
      <DDSCheckbox
        {...args}
        label={args.label || 'Indeterminate'}
        indeterminate
      />
      <DDSCheckbox {...args} label={args.label || 'Disabled'} disabled />
      <DDSCheckbox
        {...args}
        label={args.label || 'Disabled checked'}
        disabled
        checked
      />
      <DDSCheckbox
        {...args}
        label={args.label || 'Disabled indeterminate'}
        disabled
        indeterminate
      />
      <DDSCheckbox {...args} label={args.label || 'Read only'} readOnly />
      <DDSCheckbox {...args} label={args.label || 'Error'} error />
      <DDSCheckbox {...args} />
    </StoryTemplate>
  );
};

export const Default = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - default">
      <DDSCheckbox {...args} label={args.label || 'Label'} />
    </StoryTemplate>
  );
};
