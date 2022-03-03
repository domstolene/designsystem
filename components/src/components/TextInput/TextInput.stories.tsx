import { StoryTemplate } from '../../storybook/StoryTemplate';

import { TextInput, TextInputProps } from '.';

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
  return (
    <StoryTemplate
      title="TextInput - overview"
      display="grid"
      columnsAmount={2}
    >
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
        autoComplete="off"
        tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
      <TextInput
        {...args}
        tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
    </StoryTemplate>
  );
};

export const TextareaOverview = (args: TextInputProps) => {
  return (
    <StoryTemplate
      title="Textarea (multiline) - overview"
      display="grid"
      columnsAmount={2}
    >
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
    </StoryTemplate>
  );
};

export const Default = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - default">
      <TextInput {...args} />
    </StoryTemplate>
  );
};

export const InputWithLabel = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - with label">
      <TextInput {...args} label={args.label || 'Label'} />
    </StoryTemplate>
  );
};

export const Textarea = (args: TextInputProps) => {
  return (
    <StoryTemplate title="Textarea (multiline) - default">
      <TextInput {...args} multiline />
    </StoryTemplate>
  );
};

export const TextareaWithLabel = (args: TextInputProps) => {
  return (
    <StoryTemplate title="Textarea (multiline) - with label">
      <TextInput {...args} label={args.label || 'Label'} multiline />
    </StoryTemplate>
  );
};

export const WithCharacterCount = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - with character count">
      <TextInput {...args} maxLength={25} label={args.label || 'Label'} />
    </StoryTemplate>
  );
};
