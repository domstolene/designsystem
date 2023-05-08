import { StoryTemplate } from '../../storybook';
import { TextInput, TextInputProps } from '.';
import { MailIcon } from '../../icons/tsx';

export default {
  title: 'Design system/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
  },
  parameters: {
    controls: {
      exclude: ['style', 'className'],
    },
  },
};

export const TextInputOverview = (args: TextInputProps) => {
  return (
    <StoryTemplate
      title="TextInput - overview"
      display="grid"
      columnsAmount={2}
      style={{ alignItems: 'end' }}
    >
      <TextInput {...args} label={args.label ?? 'Label'} />
      <TextInput {...args} />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        required
        value="Påkrevd inputfelt"
      />
      <TextInput {...args} required value="Påkrevd inputfelt" />
      <TextInput
        {...args}
        aria-required
        label={args.label ?? 'Label'}
        value="Påkrevd inputfelt med aria-required"
      />
      <TextInput
        {...args}
        aria-required
        value="Påkrevd inputfelt med aria-required"
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        disabled
        value="Disabled inputfelt"
      />
      <TextInput {...args} disabled value="Disabled inputfelt" />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        value="Readonly inputfelt"
      />
      <TextInput {...args} readOnly value="Readonly inputfelt" />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
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
        label={args.label ?? 'Label'}
        tip={args.tip || 'Dette er en hjelpetekst'}
      />
      <TextInput {...args} tip={args.tip || 'Dette er en hjelpetekst'} />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        autoComplete="off"
        tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
      <TextInput
        {...args}
        tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
      <TextInput {...args} icon={MailIcon} label={args.label ?? 'Label'} />
      <TextInput {...args} icon={MailIcon} />
    </StoryTemplate>
  );
};

export const TextInputOverviewSizes = () => (
  <StoryTemplate
    title="TextInput - overview sizes"
    display="grid"
    columnsAmount={2}
  >
    <TextInput label="Label" />
    <TextInput label="Label" icon={MailIcon} />
    <TextInput label="Label" componentSize="small" />
    <TextInput label="Label" componentSize="small" icon={MailIcon} />
    <TextInput label="Label" componentSize="tiny" />
    <TextInput label="Label" componentSize="tiny" icon={MailIcon} />
  </StoryTemplate>
);

export const Default = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - default">
      <TextInput {...args} />
    </StoryTemplate>
  );
};

export const WithLabel = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - with label">
      <TextInput {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};

export const WithCharacterCount = (args: TextInputProps) => {
  return (
    <StoryTemplate title="TextInput - with character count">
      <TextInput {...args} maxLength={25} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};

export const TextInputAffixes = (args: TextInputProps) => (
  <StoryTemplate
    title="TextInput - With affixes"
    display="grid"
    columnsAmount={2}
  >
    <TextInput {...args} prefix="Prefix" label="Med prefix" />
    <TextInput {...args} prefix="NOK" label="Med prefix" width="120px" />
    <TextInput {...args} suffix="dager" label="Med suffix" />
    <TextInput
      {...args}
      width="80px"
      value={20}
      disabled
      suffix="%"
      label="Med suffix"
    />
    <TextInput
      {...args}
      prefix="Prefix"
      suffix="suffix"
      label="Med prefix og suffix"
    />
    <TextInput
      {...args}
      prefix="Prefix"
      suffix="suffix"
      label="Med prefix og suffix"
      errorMessage="Dette er en feilmelding"
    />
    <TextInput
      {...args}
      prefix="Prefix"
      suffix="suffix"
      label="Med prefix og suffix"
      componentSize="small"
    />
    <TextInput {...args} prefix="$" label="Med suffix" componentSize="tiny" />
  </StoryTemplate>
);
