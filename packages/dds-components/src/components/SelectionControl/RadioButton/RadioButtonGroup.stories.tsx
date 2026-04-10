import preview from '#.storybook/preview';
import { useState } from 'react';

import { commonArgTypes, ddsProviderDecorator } from '../../../storybook';
import { StoryHStack, StoryVStack } from '../../layout/Stack/utils';

import { RadioButton, RadioButtonGroup } from '.';

const meta = preview.meta({
  title: 'dds-components/Components/RadioButton/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    ...commonArgTypes,
    value: { control: false },
  },
  decorators: [ddsProviderDecorator],
});

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

export const Preview = meta.story({
  args: { label: 'Label', children, name: 'test' },
});

export const Overview = meta.story({
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
});

export const Direction = meta.story({
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
});

export const WithValue = meta.story({
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
});

export const WithStringValue = meta.story({
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
});

export const WithDefaultValue = meta.story({
  args: { label: 'Label', children },
  render: args => {
    return <RadioButtonGroup {...args} defaultValue={2} name={name()} />;
  },
});

export const WithDefaultStringValue = meta.story({
  args: { label: 'Label', children: childrenString },
  render: args => {
    return <RadioButtonGroup {...args} defaultValue="2" name={name()} />;
  },
});
