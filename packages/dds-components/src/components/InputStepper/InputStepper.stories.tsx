import { type Meta, type StoryObj } from '@storybook/react';

import { InputStepper } from './InputStepper';
import { StoryHStack, StoryVStack } from '../Stack/utils';

export default {
  title: 'dds-components/InputStepper',
  component: InputStepper,
  argTypes: {
    label: { control: 'text' },
    decreaseButtonLabel: { control: 'text' },
    increaseButtonLabel: { control: 'text' },
    maxValue: { control: 'number' },
    minValue: { control: 'number' },
    step: { control: 'number' },
    errorMessage: { control: 'text' },
    htmlProps: { control: false },
  },

  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof InputStepper>;

type Story = StoryObj<typeof InputStepper>;

export const Default: Story = {
  render: args => {
    return <InputStepper {...args} label="Label" />;
  },
};

export const Overview: Story = {
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <InputStepper
            {...args}
            label="Label"
            step={1}
            minValue={0}
            maxValue={5}
          />
          <InputStepper
            {...args}
            label="Label"
            step={1}
            minValue={0}
            maxValue={5}
            errorMessage="Error message"
          />
        </StoryVStack>
        <StoryVStack>
          <InputStepper
            {...args}
            label="Label"
            step={1}
            minValue={0}
            maxValue={5}
            componentSize="small"
            tip="Hjelp"
          />
          <InputStepper
            {...args}
            label="Label"
            step={1}
            minValue={0}
            maxValue={5}
            errorMessage="Error message"
            componentSize="small"
          />
        </StoryVStack>
      </StoryHStack>
    );
  },
};
