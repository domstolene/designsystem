import React, { useState, HTMLAttributes } from 'react';
import styled from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import InputMessage from '../../helpers/InputMessage/InputMessage';
import { checkboxGroupTokens as tokens } from './checkboxGroupTokens';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupContainer = styled.div<{ direction?: Direction }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
`;

const Label = styled.span`
  ${tokens.label.base}
  padding-left: ${tokens.label.spaceLeft};
`;

type Direction = 'column' | 'row';

export type CheckboxGroupProps = {
  label?: string;
  direction?: Direction;
  errorMessage?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueId = 0;

export const CheckboxGroup = ({
  label,
  direction,
  errorMessage,
  required,
  id,
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

  const [uniqueId] = useState<string>(id ?? `checkboxGroup-${nextUniqueId++}`);

  return (
    <Container {...containerProps}>
      <Label id={uniqueId}>
        {label} {required && <RequiredMarker />}
      </Label>
      <GroupContainer
        role="group"
        aria-labelledby={uniqueId}
        direction={direction}
      >
        {children}
      </GroupContainer>
      {errorMessage ? (
        <InputMessage messageType="error" message={errorMessage} />
      ) : (
        ''
      )}
    </Container>
  );
};
