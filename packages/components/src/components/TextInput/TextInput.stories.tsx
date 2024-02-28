import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { MailIcon } from '../Icon/icons';
import { LocalMessage } from '../LocalMessage';

import { TextInput, type TextInputProps } from '.';

export default {
  title: 'dds-components/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    withCharacterCounter: { control: { type: 'boolean' } },
    maxLength: { control: { type: 'number' } },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    prefix: { control: { type: 'text' } },
    suffix: { control: { type: 'text' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof TextInput>;

export const TextInputOverview = (args: TextInputProps) => {
  return (
    <StoryTemplate
      display="grid"
      $columnsAmount={2}
      style={{ alignItems: 'end' }}
    >
      <TextInput {...args} label={args.label ?? 'Label'} />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        required
        value="Påkrevd inputfelt"
      />
      <TextInput
        {...args}
        aria-required
        label={args.label ?? 'Label'}
        value="Påkrevd inputfelt med aria-required"
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        disabled
        value="Disabled inputfelt"
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        readOnly
        value="Readonly inputfelt"
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        tip={args.tip ?? 'Dette er en hjelpetekst'}
      />
      <TextInput
        {...args}
        label={args.label ?? 'Label'}
        autoComplete="off"
        tip={args.tip ?? 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
      <TextInput {...args} icon={MailIcon} label={args.label ?? 'Label'} />
      <TextInput {...args} label={args.label ?? 'Label'} prefix="Prefix" />
      <TextInput {...args} label={args.label ?? 'Label'} suffix="Suffix" />
      <TextInput {...args} />
    </StoryTemplate>
  );
};

export const TextInputOverviewSizes = () => (
  <StoryTemplate display="grid" $columnsAmount={2}>
    <TextInput label="Label" />
    <TextInput label="Label" icon={MailIcon} />
    <TextInput label="Label" componentSize="small" />
    <TextInput label="Label" componentSize="small" icon={MailIcon} />
    <TextInput label="Label" componentSize="tiny" />
    <TextInput label="Label" componentSize="tiny" icon={MailIcon} />
  </StoryTemplate>
);

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const WithCharacterCount = (args: TextInputProps) => {
  return (
    <StoryTemplate>
      <TextInput {...args} maxLength={25} label={args.label ?? 'Label'} />
    </StoryTemplate>
  );
};

export const TextInputAffixes = (args: TextInputProps) => (
  <StoryTemplate display="grid" $columnsAmount={1}>
    <LocalMessage purpose="tips">
      <strong>OBS!</strong> Skjermleser leser ikke opp affixes. Husk derfor å
      inkludere en tilstrekkelig beskrivende label i tillegg.
    </LocalMessage>
    <TextInput {...args} prefix="Prefix" label="Med prefix" />
    <TextInput {...args} suffix="Suffix" label="Med suffix" />
    <TextInput
      {...args}
      prefix="Prefix"
      suffix="Suffix"
      label="Med prefix og suffix"
    />
  </StoryTemplate>
);
