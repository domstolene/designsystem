import { RadioButton as DDSRadioButton } from './RadioButton';
import {
  RadioButtonGroup as DDSRadioButtonGroup,
  RadioButtonGroupProps
} from './RadioButtonGroup';
import { StoryTemplate } from '../../storybook/StoryTemplate';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { ddsBaseTokens } from '@norges-domstoler/dds-design-tokens';
import { ReactElement } from 'react';
import { IconWrapper } from '../../helpers/IconWrapper';
import Check from '@material-ui/icons/Check';

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


type ColorDotProps = {
  color: string,
  size?: string,
  checked?: boolean,
}

const StyledColorDot = styled.div<ColorDotProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  border-radius: 100%;
  width: ${props => props.size};
  height: ${props => props.size};
  color: ${ddsBaseTokens.colors.DdsColorNeutralsGray6};

  &:hover {
    border: 2px solid ${ddsBaseTokens.colors.DdsColorNeutralsGray6};
  }
`;

const ColorDot = ({
  color,
  size = '2rem',
  checked,
}: ColorDotProps): ReactElement => (
    <StyledColorDot color={color} size={size} checked={checked}>
      {checked && <IconWrapper Icon={Check}/>}
    </StyledColorDot>
);

export const WithCustomChild = (args: RadioButtonGroupProps) => {
  const [value, setValue] = useState<number>(2);
  return (
    <StoryTemplate title="Radio button group - with colored dot as custom child">
      <DDSRadioButtonGroup
        {...args}
        direction="column"
        label="With label as column"
        value={value}
        hideDefaultRadio={true}
        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {
          setValue(value);
        }}
      >
        <DDSRadioButton value={1} name="test" label="Option 1"><ColorDot color="#b4d455"/></DDSRadioButton>
        <DDSRadioButton value={2} name="test" label="Option 2"><ColorDot color="#b00b55"/></DDSRadioButton>
        <DDSRadioButton value={3} name="test" label="Option 3"><ColorDot color="#dad"/></DDSRadioButton>
      </DDSRadioButtonGroup>
      <DDSRadioButtonGroup
        {...args}
        direction="row"
        label="Without label as row"
        value={value}
        hideDefaultRadio={true}
        onChange={(_event: ChangeEvent<HTMLInputElement>, value: number) => {
          setValue(value);
        }}
      >
        <DDSRadioButton value={1} name="test"><ColorDot color="#b4d455"/></DDSRadioButton>
        <DDSRadioButton value={2} name="test"><ColorDot color="#b00b55"/></DDSRadioButton>
        <DDSRadioButton value={3} name="test"><ColorDot color="#dad"/></DDSRadioButton>
      </DDSRadioButtonGroup>
    </StoryTemplate>
  );
};
