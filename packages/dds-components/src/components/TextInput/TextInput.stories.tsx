import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { INPUT_SIZES } from '../helpers/Input';
import { MailIcon } from '../Icon/icons';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';
import { LocalMessage } from '../LocalMessage';

import { TextInput } from '.';

export default {
  title: 'dds-components/Components/TextInput',
  component: TextInput,
  argTypes: {
    width: responsivePropsArgTypes.width,
    maxLength: { control: 'number', table: categoryHtml },
    required: { control: 'boolean', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean', table: categoryHtml },
    prefix: { control: { type: 'text' } },
    icon: { control: { disable: true } },
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Preview: Story = {
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
  render: args => (
    <StoryHStack>
      <StoryVStack>
        {INPUT_SIZES.map(size => (
          <TextInput
            {...args}
            key={size}
            label={labelText(size)}
            componentSize={size}
          />
        ))}
      </StoryVStack>
      <StoryVStack>
        {INPUT_SIZES.map(size => (
          <TextInput
            {...args}
            label={labelText(size)}
            componentSize={size}
            icon={MailIcon}
          />
        ))}
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

export const ResponsiveWidth: Story = {
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    label: 'Label',
    width: {
      xs: '100%',
      sm: '100%',
      md: '20%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
