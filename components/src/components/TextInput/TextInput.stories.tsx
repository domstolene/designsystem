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
    readOnly: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className']
    }
  }
};

export const TextInputOverview = (args: TextInputProps) => {
  return storyHTMLGridTemplate(
    'TextInput - overview',
    <>
      <TextInput {...args} label={args.label || 'Label'} />
      <TextInput {...args} />
      <TextInput
        {...args}
        label={args.label || 'Label'}
        disabled
        value="Disabled inputfelt"
      />
      <TextInput {...args} disabled value="Disabled inputfelt" />
      <TextInput
        {...args}
        label={args.label || 'Label'}
        readOnly
        value="Readonly inputfelt"
      />
      <TextInput {...args} readOnly value="Readonly inputfelt" />
      <TextInput
        {...args}
        label={args.label || 'Label'}
        errorMessage={
          args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput
        {...args}
        errorMessage={
          args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput
        {...args}
        label={args.label || 'Label'}
        tip={args.tip || 'Dette er en hjelpetekst'}
      />
      <TextInput {...args} tip={args.tip || 'Dette er en hjelpetekst'} />
      <TextInput
        {...args}
        label={args.label || 'Label'}
        tip={args.tip || 'Dette er en hjelpetekst med character count'}
        maxLength={20}
      />
      <TextInput
        {...args}
        tip={args.tip || 'Dette er en hjelpetekst med character count'}
        maxLength={20}
      />
    </>,
    '20px',
    2
  );
};

export const TextareaOverview = (args: TextInputProps) => {
  return storyHTMLGridTemplate(
    'Textarea (multiline) - overview',
    <>
      <TextInput {...args} multiline label={args.label || 'Label'} />
      <TextInput {...args} multiline />
      <TextInput
        {...args}
        multiline
        label={args.label || 'Label'}
        disabled
        value="Disabled textarea"
      />
      <TextInput {...args} multiline disabled value="Disabled textarea" />
      <TextInput
        {...args}
        multiline
        label={args.label || 'Label'}
        readOnly
        value="Readonly textarea"
      />
      <TextInput {...args} multiline readOnly value="Readonly textarea" />
      <TextInput
        {...args}
        multiline
        label={args.label || 'Label'}
        errorMessage={
          args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput
        {...args}
        multiline
        errorMessage={
          args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput
        {...args}
        multiline
        label={args.label || 'Label'}
        tip={args.tip || 'Dette er en hjelpetekst'}
      />
      <TextInput
        {...args}
        multiline
        tip={args.tip || 'Dette er en hjelpetekst'}
      />
      <TextInput
        {...args}
        multiline
        label={args.label || 'Label'}
        tip={args.tip || 'Dette er en hjelpetekst med character count'}
        maxLength={20}
      />
      <TextInput
        {...args}
        multiline
        tip={args.tip || 'Dette er en hjelpetekst med character count'}
        maxLength={20}
      />
    </>,
    '20px',
    2
  );
};

export const Default = (args: TextInputProps) => {
  return storyHTMLTemplate('TextInput - default', <TextInput {...args} />);
};

export const dato = (args: TextInputProps) => {
  return storyHTMLTemplate(
    'TextInput - default',
    <TextInput type="date" {...args} />
  );
};

export const InputWithLabel = (args: TextInputProps) => {
  return storyHTMLTemplate(
    'TextInput - with label',
    <TextInput {...args} label={args.label || 'Label'} />
  );
};

export const Textarea = (args: TextInputProps) => {
  return storyHTMLTemplate(
    'Textarea (multiline) - default',
    <TextInput {...args} multiline />
  );
};

export const TextareaWithLabel = (args: TextInputProps) => {
  return storyHTMLTemplate(
    'Textarea (multiline) - with label',
    <TextInput
      {...args}
      label={args.label || 'Label'}
      multiline
      style={{ height: '150px' }}
    />
  );
};

export const WithCharacterCount = (args: TextInputProps) => {
  return storyHTMLTemplate(
    'TextInput - with character count',
    <TextInput {...args} maxLength={25} label={args.label || 'Label'} />
  );
};
