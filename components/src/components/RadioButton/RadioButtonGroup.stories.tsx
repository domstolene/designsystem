import { RadioButton as DDSRadioButton } from './RadioButton';
import {
  RadioButtonGroup as DDSRadioButtonGroup,
  RadioButtonGroupProps
} from './RadioButtonGroup';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Design system/RadioButton/RadioButtonGroup',
  component: DDSRadioButtonGroup,
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
      <DDSRadioButtonGroup {...args} direction="row" label="Label">
        <DDSRadioButton label="Option 1" name="test" />
        <DDSRadioButton label="Option 2" name="test" />
        <DDSRadioButton label="Option 3" name="test" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup {...args} direction="column" label="Label">
        <DDSRadioButton label="Option 1" name="test1" />
        <DDSRadioButton label="Option 2" name="test1" />
        <DDSRadioButton label="Option 3" name="test1" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        tip="Dette er en hjelpetekst"
        direction="row"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test2" />
        <DDSRadioButton label="Option 2" name="test2" />
        <DDSRadioButton label="Option 3" name="test2" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        tip="Dette er en hjelpetekst"
        direction="column"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test3" />
        <DDSRadioButton label="Option 2" name="test3" />
        <DDSRadioButton label="Option 3" name="test3" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        direction="row"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test2" />
        <DDSRadioButton label="Option 2" name="test2" />
        <DDSRadioButton label="Option 3" name="test2" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        direction="column"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test3" />
        <DDSRadioButton label="Option 2" name="test3" />
        <DDSRadioButton label="Option 3" name="test3" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        tip="Dette er en hjelpetekst"
        direction="row"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test2" />
        <DDSRadioButton label="Option 2" name="test2" />
        <DDSRadioButton label="Option 3" name="test2" />
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        errorMessage="Dette er en feilmelding"
        tip="Dette er en hjelpetekst"
        direction="column"
        label="Label"
      >
        <DDSRadioButton label="Option 1" name="test3" />
        <DDSRadioButton label="Option 2" name="test3" />
        <DDSRadioButton label="Option 3" name="test3" />
      </DDSRadioButtonGroup>
    </StoryTemplate>
  );
};

export const Default = (args: RadioButtonGroupProps) => {
  const [value, setValue] = useState<number | undefined>();
  return (
    <StoryTemplate title="Radio button group - default">
      <DDSRadioButtonGroup
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
        <DDSRadioButton value={1} label="Option 1" name="test" />
        <DDSRadioButton value={2} label="Option 2" name="test" />
        <DDSRadioButton value={3} label="Option 3" name="test" />
      </DDSRadioButtonGroup>
    </StoryTemplate>
  );
};

export const WithDefaultValue = (args: RadioButtonGroupProps) => {
  const [value, setValue] = useState<number>(2);
  return (
    <StoryTemplate title="Radio button group - default value">
      <DDSRadioButtonGroup
        {...args}
        label="Label"
        value={value}
        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {
          setValue(value);
        }}
      >
        <DDSRadioButton value={1} label="Option 1" name="test" />
        <DDSRadioButton value={2} label="Option 2" name="test" />
        <DDSRadioButton value={3} label="Option 3" name="test" />
      </DDSRadioButtonGroup>
    </StoryTemplate>
  );
};
