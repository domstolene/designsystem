import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { commonArgTypes } from '../../../storybook';
import { Button } from '../../Button';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { RadioButton, RadioButtonGroup } from '.';

export default {
  title: 'dds-components/Components/RadioButton/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    ...commonArgTypes,
    value: { control: false },
  },
} satisfies Meta<typeof RadioButtonGroup>;

type Story = StoryObj<typeof RadioButtonGroup>;

const children = [
  <RadioButton value={1} label="Option 1" key={1} />,
  <RadioButton value={2} label="Option 2" key={2} />,
  <RadioButton value={3} label="Option 3" key={3} />,
];

const childrenString = [
  <RadioButton value="1" label="Option 1" key={1} />,
  <RadioButton value="2" label="Option 2" key={2} />,
  <RadioButton value="3" label="Option 3" key={3} />,
];

let counter = 0;
const name = () => `test${counter++}`;

export const Preview: Story = {
  args: { label: 'Label', children, name: 'test' },
};

export const Overview: Story = {
  args: { label: 'Label' },
  render: args => {
    return (
      <StoryHStack>
        <StoryVStack>
          <RadioButtonGroup {...args} name={name()}>
            {children}
          </RadioButtonGroup>
          <RadioButtonGroup {...args} name={name()} disabled>
            {children}
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            tip="Dette er en hjelpetekst"
            name={name()}
          >
            {children}
          </RadioButtonGroup>
        </StoryVStack>
        <StoryVStack>
          <RadioButtonGroup {...args} required name={name()}>
            {children}
          </RadioButtonGroup>

          <RadioButtonGroup {...args} readOnly name={name()}>
            {children}
          </RadioButtonGroup>
          <RadioButtonGroup
            {...args}
            errorMessage="Dette er en feilmelding"
            name={name()}
          >
            {children}
          </RadioButtonGroup>
        </StoryVStack>
      </StoryHStack>
    );
  },
};

export const Direction: Story = {
  args: { label: 'Label' },
  render: args => {
    return (
      <StoryVStack>
        <RadioButtonGroup {...args} name={name()}>
          {children}
        </RadioButtonGroup>
        <RadioButtonGroup {...args} direction="column" name={name()}>
          {children}
        </RadioButtonGroup>
      </StoryVStack>
    );
  },
};

export const Controlled: Story = {
  args: { label: 'Label', children },
  render: args => {
    const [value, setValue] = useState<number | undefined>();
    return (
      <StoryVStack>
        <RadioButtonGroup
          {...args}
          name={name()}
          value={value}
          onChange={(_event, value) => {
            setValue(value as number);
          }}
        />
        <Button size="small" onClick={() => setValue(2)}>
          Sett til 2
        </Button>
      </StoryVStack>
    );
  },
};

export const WithValue: Story = {
  args: { label: 'Label', children },
  render: args => {
    const [value, setValue] = useState<number | undefined>(2);
    return (
      <RadioButtonGroup
        {...args}
        value={value}
        name={name()}
        onChange={(_event, value) => {
          setValue(value as number);
        }}
      />
    );
  },
};

export const WithStringValue: Story = {
  args: { label: 'Label', children: childrenString },
  render: args => {
    const [value, setValue] = useState<string | undefined>('1');
    return (
      <RadioButtonGroup
        {...args}
        value={value}
        name={name()}
        onChange={(_event, value) => {
          setValue(value as string);
        }}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  args: { label: 'Label', children },
  render: args => {
    return <RadioButtonGroup {...args} defaultValue={2} name={name()} />;
  },
};

export const WithDefaultStringValue: Story = {
  args: { label: 'Label', children: childrenString },
  render: args => {
    return <RadioButtonGroup {...args} defaultValue="2" name={name()} />;
  },
};
