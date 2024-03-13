import { StoryTemplate } from '@norges-domstoler/storybook-components';
import { type StoryObj } from '@storybook/react';

import { MailIcon } from '../Icon/icons';
import { LocalMessage } from '../LocalMessage';

import { TextInput } from '.';

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
    icon: { control: { disable: true } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
};

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};

export const Overview: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate
      display="grid"
      $columnsAmount={2}
      style={{ alignItems: 'end' }}
    >
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <TextInput {...args} />
      <TextInput {...args} required value="Påkrevd inputfelt" />

      <TextInput {...args} disabled value="Disabled inputfelt" />
      <TextInput {...args} readOnly value="Readonly inputfelt" />
      <TextInput
        {...args}
        errorMessage={
          args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
        }
      />
      <TextInput {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
      <TextInput
        {...args}
        autoComplete="off"
        tip={args.tip ?? 'Dette er en hjelpetekst med en tegnteller'}
        maxLength={20}
      />
      <TextInput {...args} icon={MailIcon} />
      <TextInput {...args} prefix="Prefix" />
      <TextInput {...args} suffix="Suffix" />
    </>
  ),
};

export const Sizes: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate display="grid" $columnsAmount={2}>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
      <TextInput {...args} />
      <TextInput {...args} icon={MailIcon} />
      <TextInput {...args} componentSize="small" />
      <TextInput {...args} componentSize="small" icon={MailIcon} />
      <TextInput {...args} componentSize="tiny" />
      <TextInput {...args} componentSize="tiny" icon={MailIcon} />
    </>
  ),
};

export const WithAffixes: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => (
    <>
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
    </>
  ),
};

export const WithCharacterCount: Story = {
  args: { label: 'Label' },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
  render: args => <TextInput {...args} maxLength={25} />,
};

export const WithAriaRequired: Story = {
  args: { label: 'Label', 'aria-required': true },
  decorators: Story => (
    <StoryTemplate>
      <Story />
    </StoryTemplate>
  ),
};
