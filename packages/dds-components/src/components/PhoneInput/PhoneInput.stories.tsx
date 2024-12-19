import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { StoryHStack, StoryVStack } from '../Stack/utils';

import { PhoneInput, type PhoneInputValue } from '.';

export default {
  title: 'dds-components/PhoneInput',
  component: PhoneInput,
  argTypes: {
    label: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
    selectLabel: { control: 'text' },
    required: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    selectRef: { control: false },
    value: { control: false },
    defaultValue: { control: false },
    id: { control: false },
  },
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
