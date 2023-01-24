import { RadioButton, RadioButtonGroup, RadioButtonGroupProps } from '.';
import { StoryTemplate } from '../../storybook';
import { useState } from 'react';

export default {
  title: 'Design system/RadioButton/RadioButtonGroup',
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
    controls: {
      exclude: ['style', 'className', 'onChange', 'name', 'value'],
    },
  },
};

export const Overview = (args: RadioButtonGroupProps<string>) => {
  const [value, setValue] = useState<number | undefined>();
  return (
    <StoryTemplate
      title="Radio button group - overview"
      display="grid"
      columnsAmount={2}
    >
      <RadioButtonGroup
        {...args}
        direction="row"
        label="Label"
        value={value}
        name="test"
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
        label="Label"
        value={value}
        name="test1"
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
        direction="row"
        label="Label"
        value={value}
        name="test2"
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
        direction="column"
        label="Label"
        value={value}
        name="test3"
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
        direction="row"
        label="Label"
        value={value}
        name="test4"
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
        direction="column"
        label="Label"
        value={value}
        name="test5"
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
        tip="Dette er en hjelpetekst"
        direction="row"
        label="Label"
        value={value}
        name="test6"
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
        tip="Dette er en hjelpetekst"
        direction="column"
        label="Label"
        value={value}
        name="test7"
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
    </StoryTemplate>
  );
};

export const Default = (args: RadioButtonGroupProps<number>) => {
  const [value, setValue] = useState<number | undefined>();
  return (
    <StoryTemplate title="Radio button group - default">
      <RadioButtonGroup
        {...args}
        label={args.label ?? 'Label'}
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    </StoryTemplate>
  );
};

export const WithDefaultValue = (args: RadioButtonGroupProps<number>) => {
  const [value, setValue] = useState<number | undefined>(2);
  return (
    <StoryTemplate title="Radio button group - default value">
      <RadioButtonGroup
        {...args}
        label="Label"
        value={value}
        onChange={(_event, value) => {
          setValue(value);
        }}
      >
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    </StoryTemplate>
  );
};
