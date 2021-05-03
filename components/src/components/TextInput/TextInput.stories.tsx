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
        storyHTMLTemplate('TextInput no label', <TextInput {...args} id='test' />)
    );
}

export const Multiline = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput multiline (Textarea)', <TextInput {...args} multiline label={args.label || 'Label'} id='test' />)
    );
}

export const Disabled = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput disabled', <TextInput {...args} label={args.label || 'Label'} id='test' disabled value='Disabled inputfelt' />)
    );
}

export const Readonly = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput readonly', <TextInput {...args} label={args.label || 'Label'} id='test' readOnly value='Readonly inputfelt' />)
    );
}

export const Error = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput error', <TextInput {...args} label={args.label || 'Label'} id='test' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />)
    );
}

export const WithTip = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput with tip', <TextInput {...args} label={args.label || 'Label'} id='test' tip={args.tip || 'Dette er en hjelpetekst'} />)
    );
}

export const WithCharCounter = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput with Character Counter', <TextInput {...args} label={args.label || 'Label'} id='test' tip={args.tip || 'Dette er en hjelpetekst'} maxCharCount={20} />)
    );
}

export const TextInputVariations = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('TextInput variations',
        <>
        <TextInput {...args} label={args.label || 'Label'} id='test' />
        <TextInput {...args} label={args.label || 'Label'} id='test' disabled value='Disabled inputfelt' />
        <TextInput {...args} label={args.label || 'Label'} id='test' readOnly value='Readonly inputfelt' />
        <TextInput {...args} label={args.label || 'Label'} id='test3' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
        <TextInput {...args} label={args.label || 'Label'} id='test5' tip={args.tip || 'Dette er en hjelpetekst'} />
        <TextInput {...args} label={args.label || 'Label'} id='test7' tip={args.tip || 'Dette er en hjelpetekst'} maxCharCount={20} />
        <TextInput {...args} id='test2' />
        <TextInput {...args} id='test' disabled value='Disabled inputfelt' />
        <TextInput {...args} id='test' readOnly value='Readonly inputfelt' />
        <TextInput {...args} id='test4' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
        <TextInput {...args} id='test6' tip={args.tip || 'Dette er en hjelpetekst'} />
        <TextInput {...args} id='test8' tip={args.tip || 'Dette er en hjelpetekst'} maxCharCount={20} />
        </>
        )
    );
}

export const TextareaVariations = (args: TextInputProps) => {
    return (
        storyHTMLTemplate('Textarea variations',
        <>
        <TextInput {...args} multiline label={args.label || 'Label'} id='test' />
        <TextInput {...args} multiline label={args.label || 'Label'} id='test' disabled value='Disabled textarea' />
        <TextInput {...args} multiline label={args.label || 'Label'} id='test' readOnly value='Readonly textarea' />
        <TextInput {...args} multiline label={args.label || 'Label'} id='test3' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
        <TextInput {...args} multiline label={args.label || 'Label'} id='test5' tip={args.tip || 'Dette er en hjelpetekst'} />
        <TextInput {...args} multiline label={args.label || 'Label'} id='test7' tip={args.tip || 'Dette er en hjelpetekst'} maxCharCount={20} />
        <TextInput {...args} multiline id='test2' />
        <TextInput {...args} multiline id='test' disabled value='Disabled textarea' />
        <TextInput {...args} multiline id='test' readOnly value='Readonly textarea' />
        <TextInput {...args} multiline id='test4' errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
        <TextInput {...args} multiline id='test6' tip={args.tip || 'Dette er en hjelpetekst'} />
        <TextInput {...args} multiline id='test8' tip={args.tip || 'Dette er en hjelpetekst'} maxCharCount={20} />
        </>
        )
    );
}