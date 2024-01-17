import { StoryTemplate } from '@norges-domstoler/storybook-components';

import { RadioButton, type RadioButtonProps } from '.';

export default {
  title: 'dds-components/RadioButton/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
  },
};

export const Overview = (args: RadioButtonProps) => {
  return (
    <StoryTemplate
      title="Radio button - overview"
      display="grid"
      $columnsAmount={2}
    >
      <RadioButton {...args} label={args.label ?? 'Default'} />
      <RadioButton {...args} label={args.label ?? 'Checked'} checked />
      <RadioButton {...args} label={args.label ?? 'Disabled'} disabled />
      <RadioButton
        {...args}
        label={args.label ?? 'Disabled checked'}
        disabled
        checked
      />
      <RadioButton {...args} label={args.label ?? 'Error'} error />
    </StoryTemplate>
  );
};

export const Default = (args: RadioButtonProps) => {
  return (
    <StoryTemplate title="Radio button - default">
      <RadioButton {...args} label={args.label ?? 'Label'} name="test" />
      <RadioButton {...args} label={args.label ?? 'Label'} name="test" />
    </StoryTemplate>
  );
};
