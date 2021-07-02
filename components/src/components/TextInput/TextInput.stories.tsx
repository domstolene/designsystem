import { storyHTMLTemplate } from '../../storybook/storyHTMLTemplate';
import { storyHTMLGridTemplate } from '../../storybook/storyHTMLGridTemplate';
import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Design system/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    multiline: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
};

export const TextInputOverview = (args: TextInputProps) => {
    return (
        storyHTMLGridTemplate('TextInput - overview',
            <>
                <TextInput {...args} label={args.label || 'Label'} id='test' />
                <TextInput {...args} id='test2' />
                <TextInput {...args} label={args.label || 'Label'} id='test' disabled value='Disabled inputfelt' />
                <TextInput {...args} id='test' disabled value='Disabled inputfelt' />
                <TextInput {...args} label={args.label || 'Label'} id='test' readOnly value='Readonly inputfelt' />
                <TextInput {...args} id='test' readOnly value='Readonly inputfelt' />
                <TextInput {...args} label={args.label || 'Label'} id='test3' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
                <TextInput {...args} id='test4' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
                <TextInput {...args} label={args.label || 'Label'} id='test5' tip={args.tip || 'Dette er en hjelpetekst'} />
                <TextInput {...args} id='test6' tip={args.tip || 'Dette er en hjelpetekst'} />
                <TextInput {...args} label={args.label || 'Label'} id='test7' tip={args.tip || 'Dette er en hjelpetekst med character count'} maxLength={20} />
                <TextInput {...args} id='test8' tip={args.tip || 'Dette er en hjelpetekst med character count'} maxLength={20} />
            </>,
            '20px',
            2
        )
    );
}

export const TextareaOverview = (args: TextInputProps) => {
    return (
        storyHTMLGridTemplate('Textarea (multiline) - overview',
            <>
                <TextInput {...args} multiline label={args.label || 'Label'} id='test' />
                <TextInput {...args} multiline id='test2' />
                <TextInput {...args} multiline label={args.label || 'Label'} id='test' disabled value='Disabled textarea' />
                <TextInput {...args} multiline id='test' disabled value='Disabled textarea' />
                <TextInput {...args} multiline label={args.label || 'Label'} id='test' readOnly value='Readonly textarea' />
                <TextInput {...args} multiline id='test' readOnly value='Readonly textarea' />
                <TextInput {...args} multiline label={args.label || 'Label'} id='test3' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
                <TextInput {...args} multiline id='test4' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
                <TextInput {...args} multiline label={args.label || 'Label'} id='test5' tip={args.tip || 'Dette er en hjelpetekst'} />
                <TextInput {...args} multiline id='test6' tip={args.tip || 'Dette er en hjelpetekst'} />
                <TextInput {...args} multiline label={args.label || 'Label'} id='test7' tip={args.tip || 'Dette er en hjelpetekst med character count'} maxLength={20} />
                <TextInput {...args} multiline id='test8' tip={args.tip || 'Dette er en hjelpetekst med character count'} maxLength={20} />
            </>,
            '20px',
            2
        )
    );
}

export const Default = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput - default', <TextInput {...args} id='test' />)
        );
}

export const InputWithLabel = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput - with label', <TextInput {...args} label={args.label || 'Label'} id='test' />)
    );
}

export const Textarea = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('Textarea (multiline) - default', <TextInput {...args} id='test' multiline />)
    );
}

export const TextareaWithLabel = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('Textarea (multiline) - with label', <TextInput {...args} label={args.label || 'Label'} id='test' multiline />)
    );
}

export const WithCharacterCount = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput - with character count', <TextInput {...args} maxLength={25} label={args.label || 'Label'} id='test' />)
    );
}