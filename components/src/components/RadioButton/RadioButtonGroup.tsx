import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import { radioButtonGroupTokens as tokens } from './radioButtonGroupTokens';
import { RadioButtonGroupContext } from './RadioButtonGroupContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupContainer = styled.div<{ direction?: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
`;

const Label = styled.label`
  ${tokens.label.base}
  padding-left: ${tokens.label.spaceLeft};
`;

type Direction = 'column' | 'row';

export type RadioButtonGroupProps = {
  name?: string;
  label?: string;
  errorMessage?: string;
  tip?: string;
  disabled?: boolean;
  readOnly?: boolean;
  direction?: Direction;
  value?: string | number;
  children?: React.ReactNode;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: any) => void;
  className?: string;
  style?: React.CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const RadioButtonGroup = ({
  name,
  label,
  errorMessage,
  tip,
  disabled,
  readOnly,
  direction,
  value,
  children,
  required,
  onChange,
  className,
  style,
  ...rest
}: RadioButtonGroupProps) => {
  const [groupValue, setGroupValue] = useState<
    string | number | null | undefined
  >(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setGroupValue(target.value);

    if (onChange) {
      onChange(event, target.value);
    }
  };
  const containerProps = {
    className,
    style,
    ...rest
  };

  const contextProps = {
    name,
    disabled,
    error: !!errorMessage,
    required,
    readOnly,
    value: groupValue,
    onChange: handleChange
  };

  return (
    <Container {...containerProps}>
      <Label>
        {label} {required && <RequiredMarker />}
      </Label>
      <RadioButtonGroupContext.Provider value={{ ...contextProps }}>
        <GroupContainer role="radiogroup" direction={direction}>
          {children}
        </GroupContainer>
      </RadioButtonGroupContext.Provider>
      {errorMessage ? (
        <InputMessage message={errorMessage} messageType={'error'} />
      ) : tip ? (
        <InputMessage message={tip} messageType={'tip'} />
      ) : (
        ''
      )}
    </Container>
  );
};
