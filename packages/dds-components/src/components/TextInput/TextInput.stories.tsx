import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryHtml,
  ddsProviderDecorator,
  htmlEventArgType,
  labelText,
  responsivePropsArgTypes,
  windowWidthDecorator,
} from '../../storybook';
import { INPUT_SIZES } from '../helpers/Input';
import { CourtIcon, MailIcon } from '../Icon/icons';
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
    icon: { control: { disable: true } },
    onChange: htmlEventArgType,
  },
  args: { onChange: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Preview: Story = {
  args: { label: 'Label' },
};

export const States: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <TextInput {...args} required value="Påkrevd" />
        <TextInput {...args} disabled value="Disabled" />
        <TextInput {...args} readOnly value="Readonly" />
        <TextInput {...args} value="Med ikon" icon={CourtIcon} />
      </StoryVStack>
      <StoryVStack>
        <TextInput {...args} value="Med tegnteller" maxLength={25} />
        <TextInput {...args} tip={args.tip ?? 'Hjelpetekst'} />
        <TextInput
          {...args}
          errorMessage={args.errorMessage ?? 'Feilmelding ved valideringsfeil'}
        />
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
            key={size}
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
