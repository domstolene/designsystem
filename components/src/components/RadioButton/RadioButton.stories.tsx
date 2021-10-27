import { RadioButton as DDSRadioButton } from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';
import { StoryTemplate } from '../../storybook/StoryTemplate';

export default {
  title: 'Design system/RadioButton/RadioButton',
  component: DDSRadioButton,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } }
  }
};

export const Overview = (args: RadioButtonProps) => {
  return (
    <StoryTemplate
      title="Radio button - overview"
      display="grid"
      columnsAmount={2}
    >
      <DDSRadioButton {...args} label={args.label || 'Default'} />
      <DDSRadioButton {...args} label={args.label || 'Checked'} checked />
      <DDSRadioButton {...args} label={args.label || 'Disabled'} disabled />
      <DDSRadioButton
        {...args}
        label={args.label || 'Disabled checked'}
        disabled
        checked
      />
      <DDSRadioButton {...args} label={args.label || 'Read only'} readOnly />
      <DDSRadioButton
        {...args}
        label={args.label || 'Read only checked'}
        readOnly
        checked
      />
      <DDSRadioButton {...args} label={args.label || 'Error'} error />
    </StoryTemplate>
  );
};

export const Default = (args: RadioButtonProps) => {
  return (
    <StoryTemplate title="Radio button - default">
      <DDSRadioButton {...args} label={args.label || 'Label'} name="test" />
      <DDSRadioButton {...args} label={args.label || 'Label'} name="test" />
    </StoryTemplate>
  );
};
