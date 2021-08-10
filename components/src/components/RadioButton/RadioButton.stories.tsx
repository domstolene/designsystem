import { RadioButton as DDSRadioButton, RadioButtonProps } from './RadioButton';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Radio/RadioButton',
  component: DDSRadioButton,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } }
  }
};

export const Default = (args: RadioButtonProps) => {
  return storyHTMLTemplate(
    'Radio button - default',
    <>
      <DDSRadioButton {...args} label={args.label || 'Label'} name="test" />
      <DDSRadioButton {...args} label={args.label || 'Label'} name="test" />
    </>
  );
};

export const Overview = (args: RadioButtonProps) => {
  return storyHTMLGridTemplate(
    'Radio button - overview',
    <>
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
    </>,
    undefined,
    2
  );
};
