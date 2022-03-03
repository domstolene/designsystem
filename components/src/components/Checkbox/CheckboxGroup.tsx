import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import { InputMessage } from '../../helpers/InputMessage/InputMessage';
import { checkboxGroupTokens as tokens } from './CheckboxGroup.tokens';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import { Typography } from '../Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupContainer = styled.div<{ direction?: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
`;

const Label = styled(Typography)`
  padding-left: ${tokens.label.spaceLeft};
`;

type Direction = 'column' | 'row';

export type CheckboxGroupProps = {
  label?: string;
  direction?: Direction;
  groupId?: string;
  errorMessage?: string;
  tip?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueGroupId = 0;

export const CheckboxGroup = ({
  label,
  direction,
  errorMessage,
  tip,
  required,
  groupId,
  children,
  className,
  style,
  ...rest
}: CheckboxGroupProps) => {
  const containerProps = {
    className,
    style,
    ...rest
  };

  const [uniqueGroupId] = useState<string>(
    groupId ?? `checkboxGroup-${nextUniqueGroupId++}`
  );
  const hasErrorMessage = !!errorMessage;
  const errorMessageId = hasErrorMessage
    ? `${uniqueGroupId}-errorMessage`
    : undefined;
  const hasTip = !!tip;
  const tipId = hasTip ? `${uniqueGroupId}-tip` : undefined;

  const contextProps = {
    error: hasErrorMessage,
    errorMessageId,
    uniqueGroupId,
    tipId
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
      {tip && (
        <InputMessage messageType="tip" message={tip} messageId={tipId} />
      )}
      <CheckboxGroupContext.Provider value={{ ...contextProps }}>
        <GroupContainer
          role="group"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tipId}
          direction={direction}
        >
          {children}
        </GroupContainer>
      </CheckboxGroupContext.Provider>
      {errorMessage && (
        <InputMessage
          messageType="error"
          message={errorMessage}
          messageId={errorMessageId}
        />
      )}
    </Container>
  );
};
