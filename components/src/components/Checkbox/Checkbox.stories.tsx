import { Checkbox, CheckboxProps } from '.';
import { StoryTemplate } from '../../storybook';

export default {
  title: 'Design system/Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const Overview = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - overview" display="grid">
      <Checkbox {...args} label={args.label || 'Default'} />
      <Checkbox {...args} label={args.label || 'Checked'} checked />
      <Checkbox {...args} label={args.label || 'Indeterminate'} indeterminate />
      <Checkbox {...args} label={args.label || 'Disabled'} disabled />
      <Checkbox
        {...args}
        label={args.label || 'Disabled checked'}
        disabled
        checked
      />
      <Checkbox
        {...args}
        label={args.label || 'Disabled indeterminate'}
        disabled
        indeterminate
      />
      <Checkbox {...args} label={args.label || 'Read only'} readOnly />
      <Checkbox {...args} label={args.label || 'Error'} error />
      <Checkbox {...args} />
    </StoryTemplate>
  );
};

export const Default = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - default">
      <Checkbox {...args} label={args.label || 'Label'} />
    </StoryTemplate>
  );
};
