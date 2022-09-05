import { ChangeEvent, HTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';
import { RequiredMarker } from '../../helpers';
import { InputMessage } from '../InputMessage';
import { radioButtonGroupTokens as tokens } from './RadioButtonGroup.tokens';
import { RadioButtonGroupContext } from './RadioButtonGroupContext';
import { Typography } from '../Typography';
import { combineHandlers } from '../../utils';
import { BaseComponentPropsWithChildren, getBaseHTMLProps } from '../../types';

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

export type RadioButtonGroupProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    {
      /** Gir alle barna `name` prop.*/
      name?: string;
      /**Ledetekst for hele gruppen. */
      label?: string;
      /**Funksjonen for onChange-event for barna. */
      onChange?: (
        event: ChangeEvent<HTMLInputElement>,
        value: T | undefined
      ) => void;
      /**Legger en markør (*) bak label som indikerer at input er påkrevd. Gjør alle barna påkrevd ved å gi dem `required` prop. */
      required?: boolean;
      /**Meldingen som vises ved valideringsfeil. Gir alle barna error prop. */
      errorMessage?: string;
      /**Hjelpetekst for gruppen. */
      tip?: string;
      /**Gir alle barna `disabled` prop. */
      disabled?: boolean;
      /**Gir alle barna `readOnly` prop */
      readOnly?: boolean;
      /**Retningen radioknappene skal gjengis i. */
      direction?: Direction;
      /**Default verdi - en `<RadioButton />` blir forhåndsvalgt. **OBS!** brukes kun når brukeren ikke skal fylle ut selv. */
      value?: T | undefined;
      /**custom id for for gruppen, knytter `label` til gruppen via `aria-label`. */
      groupId?: string;
    },
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
  >;

let nextUniqueGroupId = 0;

export const RadioButtonGroup = <T extends string | number = string>({
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
  id,
  className,
  htmlProps,
  ...rest
}: RadioButtonGroupProps<T>) => {
  const [groupValue, setGroupValue] = useState<
    string | number | null | undefined
  >(value);

  const [uniqueGroupId] = useState<string>(
    groupId ?? `radioButtonGroup-${nextUniqueGroupId++}`
  );

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value as T)
  );

  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;

  const tipId = tip && `${uniqueGroupId}-tip`;
  const errorMessageId = errorMessage && `${uniqueGroupId}-errorMessage`;

  const contextProps = {
    name,
    disabled,
    error: hasErrorMessage,
    errorMessageId: errorMessageId,
    required,
    readOnly,
    value: groupValue,
    onChange: handleChange,
  };

  return (
    <Container {...getBaseHTMLProps(id, className, htmlProps, rest)}>
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
