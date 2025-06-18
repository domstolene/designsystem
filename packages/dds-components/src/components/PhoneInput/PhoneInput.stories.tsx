import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';

import {
  categoryCss,
  categoryHtml,
  windowWidthDecorator,
} from '../../storybook/helpers';
import { Button } from '../Button';
import { StoryHStack, StoryVStack } from '../layout/Stack/utils';

import { PhoneInput, type PhoneInputValue } from '.';

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
    id: { control: false },
  },
  args: { onChange: fn() },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof PhoneInput>;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = { args: { label: 'Telefonnummer' } };

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
      <PhoneInput {...args} />
      <PhoneInput {...args} componentSize="small" />
      <PhoneInput {...args} componentSize="xsmall" />
    </StoryVStack>
  ),
};

export const Responsive: Story = {
  args: {
    smallScreenBreakpoint: 'sm',
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

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState<PhoneInputValue | undefined>();

    return (
      <StoryVStack>
        <PhoneInput {...args} onChange={setValue} value={value} />
        <div>
          <Button
            onClick={() =>
              setValue({
                countryCode: 'SE',
                phoneNumber: '99999999',
              })
            }
          >
            Sett svensk nummer
          </Button>
        </div>
      </StoryVStack>
    );
  },
};
