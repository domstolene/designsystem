import { type Meta, type StoryObj } from '@storybook/react';

import { MailIcon } from '../Icon/icons';
import { LocalMessage } from '../LocalMessage';
import { StoryHStack, StoryVStack } from '../Stack/utils';

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
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: { label: 'Label' },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TextInput {...args} />
        <TextInput {...args} disabled value="Disabled inputfelt" />
        <TextInput
          {...args}
          errorMessage={
            args.errorMessage ?? 'Dette er en feilmelding ved valideringsfeil'
          }
        />
        <TextInput {...args} icon={MailIcon} />
        <TextInput {...args} prefix="Prefix" />
      </StoryVStack>
      <StoryVStack>
        <TextInput {...args} required value="Påkrevd inputfelt" />
        <TextInput {...args} readOnly value="Readonly inputfelt" />
        <TextInput {...args} tip={args.tip ?? 'Dette er en hjelpetekst'} />
        <TextInput
          {...args}
          autoComplete="off"
          tip={args.tip ?? 'Dette er en hjelpetekst med en tegnteller'}
          maxLength={20}
        />
        <TextInput {...args} suffix="Suffix" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TextInput {...args} />
        <TextInput {...args} componentSize="small" />
        <TextInput {...args} componentSize="xsmall" />
      </StoryVStack>
      <StoryVStack>
        <TextInput {...args} icon={MailIcon} />
        <TextInput {...args} componentSize="small" icon={MailIcon} />
        <TextInput {...args} componentSize="xsmall" icon={MailIcon} />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const WithAffixes: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryVStack>
      <LocalMessage purpose="tips">
        <strong>OBS!</strong> Skjermleser leser ikke opp affixes. Husk derfor å
        inkludere en tilstrekkelig beskrivende label i tillegg.
      </LocalMessage>
      <TextInput
        {...args}
        prefix={args.prefix ?? 'Prefix'}
        label="Med prefix"
      />
      <TextInput
        {...args}
        suffix={args.suffix ?? 'Suffix'}
        label="Med suffix"
      />
      <TextInput
        {...args}
        prefix={args.prefix ?? 'Prefix'}
        suffix={args.suffix ?? 'Suffix'}
        label="Med prefix og suffix"
      />
    </StoryVStack>
  ),
};

export const WithCharacterCount: Story = {
  args: { label: 'Label', maxLength: 25 },
};

export const WithAriaRequired: Story = {
  args: { label: 'Label', 'aria-required': true },
};
