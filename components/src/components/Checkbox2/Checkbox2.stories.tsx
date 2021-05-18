import { Checkbox2 as DDSCheckbox,  Checkbox2Props as CheckboxProps } from './Checkbox2';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Checkbox2',
  component: DDSCheckbox,
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
    className: {control: {type: 'text'}},
  },
};

export const Default = (args: CheckboxProps) => {
    return storyHTMLTemplate(
        'Checkbox default',
        <DDSCheckbox {...args} label={args.label || 'Label'} />
        );
}

export const Overview = (args: CheckboxProps) => {
    return storyHTMLGridTemplate(
        'Checkbox - overview',
        <>
          <DDSCheckbox {...args} label={args.label || 'Default'} />
          <DDSCheckbox {...args} label={args.label || 'Checked'} checked />
          <DDSCheckbox {...args} label={args.label || 'Indeterminate'} indeterminate />
          <DDSCheckbox {...args} label={args.label || 'Disabled'} disabled />
          <DDSCheckbox {...args} label={args.label || 'Disabled checked'} disabled checked />
          <DDSCheckbox {...args} label={args.label || 'Disabled indeterminate'} disabled indeterminate/>
          <DDSCheckbox {...args} label={args.label || 'Read only'} readOnly/>
          <DDSCheckbox {...args} label={args.label || 'Error'} error />
        </>
        );
}