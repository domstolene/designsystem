import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'Design system/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    maxCharCount: { control: { type: 'number' } },
    width: { control: { type: 'text' } }
  },
};

export const withLabel = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput', <TextInput {...args} label={args.label || 'Label'} id='test' />)
    );
}

export const noLabel = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput', <TextInput {...args} id='test' />)
    );
}