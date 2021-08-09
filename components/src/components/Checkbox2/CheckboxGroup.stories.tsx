import { CheckboxGroup as DDSCheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import { Checkbox2 as DDSCheckbox } from './Checkbox2';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Checkbox/CheckboxGroup',
  component: DDSCheckboxGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    indeterminate: { control: { type: 'boolean' } },
  },
  parameters: {
        controls: {
            exclude: [
                'style',
                'className'
            ]
        }
    }
};

export const Default = (args: CheckboxGroupProps) => {
    return storyHTMLTemplate(
        'CheckboxGroup default',
        <DDSCheckboxGroup {...args} label={args.label || 'Label'}>
            <DDSCheckbox label={args.label || 'Option 1'} />
            <DDSCheckbox label={args.label || 'Option 2'} />
            <DDSCheckbox label={args.label || 'Option 3'} />
        </DDSCheckboxGroup>
        );
}

export const Overview = (args: CheckboxGroupProps) => {
    return storyHTMLGridTemplate(
        'CheckboxGroup - overview',
        <>
            <DDSCheckboxGroup {...args} label={args.label || 'Label'}>
                <DDSCheckbox label={args.label || 'Option 1'} />
                <DDSCheckbox label={args.label || 'Option 2'} />
                <DDSCheckbox label={args.label || 'Option 3'} />
            </DDSCheckboxGroup>
            <DDSCheckboxGroup {...args} label={args.label || 'Label'} direction='column'>
                <DDSCheckbox label={args.label || 'Option 1'} />
                <DDSCheckbox label={args.label || 'Option 2'} />
                <DDSCheckbox label={args.label || 'Option 3'} />
            </DDSCheckboxGroup>
            <DDSCheckboxGroup {...args} label={args.label || 'Label'} errorMessage='Dette er en feilmelding'>
                <DDSCheckbox error label={args.label || 'Option 1'} />
                <DDSCheckbox error label={args.label || 'Option 2'} />
                <DDSCheckbox error label={args.label || 'Option 3'} />
            </DDSCheckboxGroup>
            <DDSCheckboxGroup {...args} label={args.label || 'Label'} direction='column' errorMessage='Dette er en feilmelding'>
                <DDSCheckbox error label={args.label || 'Option 1'} />
                <DDSCheckbox error label={args.label || 'Option 2'} />
                <DDSCheckbox error label={args.label || 'Option 3'} />
            </DDSCheckboxGroup>
        </>,
        '15px',
        2
        );
}