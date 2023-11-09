import { Checkbox, CheckboxProps } from '.';
import { StoryTemplate } from '@norges-domstoler/storybook-components';

export default {
  title: 'dds-components/Checkbox/Checkbox',
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
      <Checkbox {...args} label={args.label ?? 'Default'} />
      <Checkbox {...args} label={args.label ?? 'Checked'} checked />
      <Checkbox {...args} label={args.label ?? 'Indeterminate'} indeterminate />
      <Checkbox {...args} label={args.label ?? 'Disabled'} disabled />
      <Checkbox
        {...args}
        label={args.label ?? 'Disabled checked'}
        disabled
        checked
      />
      <Checkbox
        {...args}
        label={args.label ?? 'Disabled indeterminate'}
        disabled
        indeterminate
      />
      <Checkbox {...args} label={args.label ?? 'Error'} error />
      <Checkbox {...args} label={args.label ?? 'Error checked'} error checked />
      <Checkbox {...args} />
    </StoryTemplate>
  );
};

export const Default = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - default" display="block">
      <Checkbox {...args} />
    </StoryTemplate>
  );
};
export const WithLabel = (args: CheckboxProps) => {
  return (
    <StoryTemplate title="Checkbox - with label" display="block">
      <Checkbox {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};
