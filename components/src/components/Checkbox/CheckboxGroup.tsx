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
  groupId?: string;
  errorMessage?: string;
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

  return (
    <Container {...containerProps}>
      <Label id={uniqueGroupId}>
        {label} {required && <RequiredMarker />}
      </Label>
      <GroupContainer
        role="group"
        aria-labelledby={uniqueGroupId}
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
