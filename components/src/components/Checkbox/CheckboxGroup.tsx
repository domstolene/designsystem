import React, { useState, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import RequiredMarker from '../../helpers/RequiredMarker';
import { InputMessage } from '../../helpers/InputMessage/InputMessage';
import { checkboxGroupTokens as tokens } from './CheckboxGroup.tokens';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import { Typography } from '../Typography';
import { derivativeIdGenerator } from '../../utils';

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

export type CheckboxGroupProps = {
  /**Ledetekst for gruppen. */
  label?: string;
  /**Retningen barna gjengis i. */
  direction?: Direction;
  /**Custom id for for gruppen, knytter ledetekst til gruppen via `aria-label`. */
  groupId?: string;
  /**Meldingen som vises ved valideringsfeil. Sender error-tilstand til barna når det finnes  og setter `aria-describedby` for barna. */
  errorMessage?: string;
  tip?: string;
  /**Indikerer at det er påkrevd å velge minst ett alternativ. Innebærer visuell endring. OBS! `required` må i tillegg gis til `<Checkbox />` manuelt. */
  required?: boolean;
} & HTMLAttributes<HTMLDivElement>;

let nextUniqueGroupId = 0;

export const CheckboxGroup = ({
  label,
  direction = 'row',
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
  const errorMessageId = derivativeIdGenerator(
    uniqueGroupId,
    'errorMessage',
    errorMessage
  );
  const tipId = derivativeIdGenerator(uniqueGroupId, 'tip', tip);

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
