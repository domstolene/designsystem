import React, { ChangeEvent, HTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import { InputMessage } from '../InputMessage';
import { radioButtonGroupTokens as tokens } from './RadioButtonGroup.tokens';
import { RadioButtonGroupContext } from './RadioButtonGroupContext';
import { Typography } from '../Typography';
import { combineHandlers } from '../../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${tokens.container.base}
`;

const GroupContainer = styled.div<{ direction: Direction }>`
  display: flex;
  ${({ direction }) => css`
    flex-direction: ${direction};
    ${tokens.groupContainer.direction[direction].base}
  `}
`;

const Label = styled(Typography)`
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
  groupId?: string;
  children?: React.ReactNode;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: unknown) => void;
  className?: string;
  style?: React.CSSProperties;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

let nextUniqueGroupId = 0;

export const RadioButtonGroup = ({
  name,
  label,
  groupId,
  errorMessage,
  tip,
  disabled,
  readOnly,
  direction = 'row',
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

  const [uniqueGroupId] = useState<string>(
    groupId ?? `radioButtonGroup-${nextUniqueGroupId++}`
  );

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value)
  );

  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;

  const tipId = hasTip ? `${uniqueGroupId}-tip` : undefined;
  const errorMessageId = hasErrorMessage
    ? `${uniqueGroupId}-errorMessage`
    : undefined;

  const containerProps = {
    className,
    style,
    ...rest
  };

  const contextProps = {
    name,
    disabled,
    error: hasErrorMessage,
    errorMessageId: errorMessageId,
    required,
    readOnly,
    value: groupValue,
    onChange: handleChange
  };

  return (
    <Container {...containerProps}>
      <Label
        forwardedAs="span"
        typographyType="supportingStyleLabel01"
        id={uniqueGroupId}
      >
        {label} {required && <RequiredMarker />}
      </Label>
      {hasTip && <InputMessage message={tip} messageType="tip" id={tipId} />}
      <RadioButtonGroupContext.Provider value={{ ...contextProps }}>
        <GroupContainer
          role="radiogroup"
          direction={direction}
          aria-labelledby={uniqueGroupId}
          aria-describedby={tipId}
          aria-errormessage={errorMessageId}
        >
          {children}
        </GroupContainer>
      </RadioButtonGroupContext.Provider>
      {hasErrorMessage && (
        <InputMessage
          message={errorMessage}
          messageType="error"
          id={errorMessageId}
        />
      )}
    </Container>
  );
};
