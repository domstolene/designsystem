import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { StoryHStack, StoryVStack } from '../../Stack/utils';

import { RadioButton, RadioButtonGroup } from '.';

export default {
  title: 'dds-components/RadioButton/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'hidden' },
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;

type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = {
  args: { label: 'Label' },
  render: args => {
    const [value, setValue] = useState<number | undefined>();
    return (
      <RadioButtonGroup
        {...args}
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    );
  },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => {
    const [value, setValue] = useState<number | undefined>();
    let counter = 0;
    const name = () => `test${counter++}`;
    return (
      <StoryHStack>
        <StoryVStack>
          <RadioButtonGroup
            {...args}
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            value={value}
            name={name()}
            disabled
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            tip="Dette er en hjelpetekst"
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            direction="column"
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
        </StoryVStack>
        <StoryVStack>
          <RadioButtonGroup
            {...args}
            required
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>

          <RadioButtonGroup
            {...args}
            readOnly
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            errorMessage="Dette er en feilmelding"
            value={value}
            name={name()}
            onChange={(_event, value) => {
              setValue(value);
            }}
          >
            <RadioButton label="Option 1" value={1} />
            <RadioButton label="Option 2" value={2} />
            <RadioButton label="Option 3" value={3} />
          </RadioButtonGroup>
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const WithDefaultValue: Story = {
  args: { label: 'Label' },
  render: args => {
    const [value, setValue] = useState<number | undefined>(2);
    return (
      <RadioButtonGroup
        {...args}
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    );
  },
};
