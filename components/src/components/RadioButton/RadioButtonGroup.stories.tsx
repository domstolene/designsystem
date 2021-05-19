import { RadioButton as DDSRadioButton,  RadioButtonProps } from './RadioButton';
import { RadioButtonGroup as DDSRadioButtonGroup, RadioButtonGroupProps } from './RadioButtonGroup';
import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';

export default {
  title: 'Design system/Radio/RadioButtonGroup',
  component: DDSRadioButtonGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    // disabled: { control: { type: 'boolean' } },
    // readOnly: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    className: {control: {type: 'text'}},
  },
};

export const Default = (args: RadioButtonGroupProps) => {
    return storyHTMLTemplate(
        'Radio button group - default',
        <DDSRadioButtonGroup {...args} label='Label'>
            <DDSRadioButton label='Option 1' name='test' />
            <DDSRadioButton label='Option 2' name='test' />
            <DDSRadioButton label='Option 3' name='test' />
        </DDSRadioButtonGroup>
        );
}

export const Overview = (args: RadioButtonGroupProps) => {
    return storyHTMLGridTemplate(
        'Radio button group - default',
        <>
            <DDSRadioButtonGroup {...args} direction='row' label='Label'>
                <DDSRadioButton label='Option 1' name='test' />
                <DDSRadioButton label='Option 2' name='test' />
                <DDSRadioButton label='Option 3' name='test' />
            </DDSRadioButtonGroup>
            <DDSRadioButtonGroup {...args} direction='column' label='Label'>
                <DDSRadioButton label='Option 1' name='test1' />
                <DDSRadioButton label='Option 2' name='test1' />
                <DDSRadioButton label='Option 3' name='test1' />
            </DDSRadioButtonGroup>
            <DDSRadioButtonGroup {...args} errorMessage='Dette er en feilmelding' direction='row' label='Label'>
                <DDSRadioButton label='Option 1' name='test2' />
                <DDSRadioButton label='Option 2' name='test2' />
                <DDSRadioButton label='Option 3' name='test2' />
            </DDSRadioButtonGroup>
            <DDSRadioButtonGroup {...args} errorMessage='Dette er en feilmelding' direction='column' label='Label'>
                <DDSRadioButton label='Option 1' name='test3' />
                <DDSRadioButton label='Option 2' name='test3' />
                <DDSRadioButton label='Option 3' name='test3' />
            </DDSRadioButtonGroup>
        </>,
        '20px',
        2
        );
}