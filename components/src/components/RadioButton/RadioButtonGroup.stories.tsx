import { RadioButton, RadioButtonGroup, RadioButtonGroupProps } from '.';
import { StoryTemplate } from '../../storybook';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Design system/RadioButton/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    tip: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    required: { control: { type: 'boolean' } }
  },
  parameters: {
    controls: {
      exclude: ['style', 'className', 'onChange', 'name', 'value']
    }
  }
};

export const Overview = (args: RadioButtonGroupProps) => {
  return (
    <StoryTemplate
      title="Radio button group - overview"
      display="grid"
      columnsAmount={2}
    >
      <RadioButtonGroup {...args} direction="row" label="Label">
        <RadioButton label="Option 1" name="test" />
        <RadioButton label="Option 2" name="test" />
        <RadioButton label="Option 3" name="test" />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} direction="column" label="Label">
        <RadioButton label="Option 1" name="test1" />
        <RadioButton label="Option 2" name="test1" />
        <RadioButton label="Option 3" name="test1" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        tip="Dette er en hjelpetekst"
        direction="row"
        label="Label"
      >
        <RadioButton label="Option 1" name="test2" />
        <RadioButton label="Option 2" name="test2" />
        <RadioButton label="Option 3" name="test2" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        tip="Dette er en hjelpetekst"
        direction="column"
        label="Label"
      >
        <RadioButton label="Option 1" name="test3" />
        <RadioButton label="Option 2" name="test3" />
        <RadioButton label="Option 3" name="test3" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        direction="row"
        label="Label"
      >
        <RadioButton label="Option 1" name="test2" />
        <RadioButton label="Option 2" name="test2" />
        <RadioButton label="Option 3" name="test2" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        direction="column"
        label="Label"
      >
        <RadioButton label="Option 1" name="test3" />
        <RadioButton label="Option 2" name="test3" />
        <RadioButton label="Option 3" name="test3" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        tip="Dette er en hjelpetekst"
        direction="row"
        label="Label"
      >
        <RadioButton label="Option 1" name="test2" />
        <RadioButton label="Option 2" name="test2" />
        <RadioButton label="Option 3" name="test2" />
      </RadioButtonGroup>
      <RadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        tip="Dette er en hjelpetekst"
        direction="column"
        label="Label"
      >
        <RadioButton label="Option 1" name="test3" />
        <RadioButton label="Option 2" name="test3" />
        <RadioButton label="Option 3" name="test3" />
      </RadioButtonGroup>
    </StoryTemplate>
  );
};

export const Default = (args: RadioButtonGroupProps) => {
  const [value, setValue] = useState<number | undefined>();
  return (
    <StoryTemplate title="Radio button group - default">
      <RadioButtonGroup
        {...args}
        label={args.label || 'Label'}
        value={value}
        onChange={(
          _event: ChangeEvent<HTMLInputElement>,
          value: number | undefined
        ) => {
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

export const WithDefaultValue = (args: RadioButtonGroupProps) => {
  const [value, setValue] = useState<number>(2);
  return (
    <StoryTemplate title="Radio button group - default value">
      <RadioButtonGroup
        {...args}
        label="Label"
        value={value}
        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {
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
