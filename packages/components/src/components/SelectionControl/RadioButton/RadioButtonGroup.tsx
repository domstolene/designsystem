import {
  type ChangeEvent,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
  forwardRef,
  useId,
  useState,
} from 'react';

import { RadioButtonGroupContext } from './RadioButtonGroupContext';
import {
  type BaseComponentPropsWithChildren,
  type Direction,
  getBaseHTMLProps,
} from '../../../types';
import { combineHandlers } from '../../../utils';
import { renderInputMessage } from '../../../utils/renderInputMessage';
import { RequiredMarker } from '../../helpers';
import { Typography } from '../../Typography';
import {
  GroupContainer,
  OuterGroupContainer,
} from '../SelectionControl.styles';

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
        value: T | undefined,
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

const RadioButtonGroupInner = <T extends string | number = string>(
  props: RadioButtonGroupProps<T>,
  ref: Ref<HTMLDivElement>,
) => {
  const {
    name,
    label,
    groupId,
    errorMessage,
    tip,
    disabled = false,
    readOnly = false,
    direction = 'row',
    value,
    children,
    required = false,
    onChange,
    id,
    className,
    htmlProps = {},
    ...rest
  } = props;

  const { 'aria-required': ariaRequired = false } = htmlProps;

  const [groupValue, setGroupValue] = useState<
    string | number | null | undefined
  >(value);

  const generatedId = useId();
  const uniqueGroupId = groupId ?? `${generatedId}-radioButtonGroup`;

  const handleChange = combineHandlers(
    (e: ChangeEvent<HTMLInputElement>) => setGroupValue(e.target.value),
    e => onChange && onChange(e, e.target.value as T),
  );

  const hasErrorMessage = !!errorMessage;
  const showRequiredMarker = required || ariaRequired;

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
    <OuterGroupContainer
      {...getBaseHTMLProps(
        id,
        className,
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
      ref={ref}
    >
      <Typography
        as="span"
        typographyType="supportingStyleLabel01"
        id={uniqueGroupId}
      >
        {label} {showRequiredMarker && <RequiredMarker />}
      </Typography>
      {renderInputMessage(tip, tipId)}
      <RadioButtonGroupContext.Provider value={{ ...contextProps }}>
        <GroupContainer
          role="radiogroup"
          $direction={direction}
          aria-labelledby={uniqueGroupId}
          aria-describedby={tipId}
          aria-errormessage={errorMessageId}
        >
          {children}
        </GroupContainer>
      </RadioButtonGroupContext.Provider>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </OuterGroupContainer>
  );
};

export const RadioButtonGroup = forwardRef(RadioButtonGroupInner) as <
  T extends string | number = string,
>(
  props: RadioButtonGroupProps<T> & { ref?: Ref<HTMLDivElement> },
) => ReactElement;

// @ts-expect-error TODO fix RadioButtonGroup type
RadioButtonGroup.displayName = 'RadioButtonGroup';
