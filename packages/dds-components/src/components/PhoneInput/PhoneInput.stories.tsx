import { type Meta, type StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import {
  categoryCss,
  categoryHtml,
  commonArgTypes,
  ddsProviderDecorator,
  labelText,
  windowWidthDecorator,
} from '../../storybook';
import { INPUT_SIZES } from '../helpers/Input';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { PhoneInput } from '.';

const { id, className, style } = commonArgTypes;

export default {
  title: 'dds-components/Components/PhoneInput',
  component: PhoneInput,
  argTypes: {
    width: { control: 'text', table: categoryCss },
    required: { control: 'boolean', table: categoryHtml },
    disabled: { control: 'boolean', table: categoryHtml },
    readOnly: { control: 'boolean' },
    selectRef: { control: false },
    value: { control: false },
    defaultValue: { control: false },
    id,
    className,
    style,
  },
  args: { onChange: fn() },
  decorators: [ddsProviderDecorator],
} satisfies Meta<typeof PhoneInput>;

type Story = StoryObj<typeof PhoneInput>;

export const Preview: Story = { args: { label: 'Telefonnummer' } };

export const Overview: Story = {
  args: { label: 'Telefonnummer' },
  render: args => (
    <StoryHStack>
      <StoryVStack>
        <PhoneInput {...args} />
        <PhoneInput {...args} disabled />
        <PhoneInput
          {...args}
          errorMessage="Dette er en feilmelding ved valideringsfeil"
        />
      </StoryVStack>
      <StoryVStack>
        <PhoneInput {...args} required />
        <PhoneInput {...args} readOnly />
        <PhoneInput {...args} tip="Dette er en hjelpetekst" />
      </StoryVStack>
    </StoryHStack>
  ),
};

export const Sizes: Story = {
  args: { label: 'Label' },
  render: args => (
    <StoryVStack>
      {INPUT_SIZES.map(size => (
        <PhoneInput
          {...args}
          key={size}
          componentSize={size}
          label={labelText(size)}
        />
      ))}
    </StoryVStack>
  ),
};

export const Responsive: Story = {
  args: {
    smallScreenBreakpoint: 'sm',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    Story =>
      windowWidthDecorator(
        <Story />,
        'Versjonen for liten skjerm vises ved sm brekkpunkt.',
      ),
  ],
};

export const ResponsiveWidth: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: [Story => windowWidthDecorator(<Story />)],
  args: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
      lg: 'var(--dds-input-default-width)',
      xl: 'var(--dds-input-default-width)',
    },
  },
};
