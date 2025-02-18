import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InputStepper } from './InputStepper';
import { Button } from '../Button';
import { StoryHStack, StoryVStack } from '../Stack/utils';

export default {
  title: 'dds-components/InputStepper',
  component: InputStepper,
  argTypes: {
    componentSize: { control: 'radio' },
    label: { control: 'text' },
    decreaseButtonLabel: { control: 'text' },
    increaseButtonLabel: { control: 'text' },
    maxValue: { control: 'number' },
    minValue: { control: 'number' },
    step: { control: 'number' },
    defaultValue: { control: 'number' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    errorMessage: { control: 'text' },
    tip: { control: 'text' },
    value: { control: 'number' },
    onChange: { control: false },
    htmlProps: { control: false },
  },

  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
} satisfies Meta<typeof InputStepper>;

type Story = StoryObj<typeof InputStepper>;

export const Default: Story = {
  args: {},
  render: args => {
    return <InputStepper {...args} label="Label" />;
  },
};

export const Sizes: Story = {
  render: args => {
    return (
      <StoryHStack>
        <InputStepper
          {...args}
          label="Medium"
          step={1}
          minValue={0}
          maxValue={5}
        />
        <InputStepper
          {...args}
          label="Small"
          step={1}
          minValue={0}
          maxValue={5}
          componentSize="small"
        />
      </StoryHStack>
    );
  },
};

export const Overview: Story = {
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <InputStepper {...args} label="Label" />
          <InputStepper
            {...args}
            label="Error"
            step={1}
            minValue={0}
            maxValue={5}
            errorMessage="Feilmelding"
          />
          <InputStepper
            {...args}
            label="Hjelpetekst"
            step={1}
            minValue={0}
            maxValue={5}
            tip="Hjelpetekst"
          />
        </StoryVStack>
        <StoryVStack>
          <InputStepper
            {...args}
            label="ReadOnly"
            step={1}
            minValue={0}
            maxValue={5}
            readOnly
          />
          <InputStepper
            {...args}
            label="Disabled"
            step={1}
            minValue={0}
            maxValue={5}
            disabled
          />
        </StoryVStack>
      </StoryHStack>
    );
  },
};
export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState(4);

    return (
      <StoryVStack>
        <InputStepper
          {...args}
          label="Label"
          step={1}
          minValue={0}
          maxValue={5}
          value={value}
          onChange={e => {
            if (typeof e === 'number') {
              setValue(e);
            } else {
              setValue(Number(e.target.value));
            }
          }}
        />
        <Button
          onClick={() => {
            setValue(0);
          }}
        >
          Nullstill
        </Button>
      </StoryVStack>
    );
  },
};
