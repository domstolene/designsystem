import { type HTMLAttributes, useId } from 'react';

import {
  CardSelectableContext,
  type CardSelectableContextProps,
} from './CardSelectable.context';
import { useControllableGroupState } from '../../../hooks/useControllableState';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { spaceSeparatedIdListGenerator } from '../../../utils';
import { renderInputMessage } from '../../InputMessage';
import { Box, type ResponsiveProps } from '../../layout';
import { CheckboxGroupContext } from '../../SelectionControl/Checkbox/CheckboxGroupContext';
import { type SelectionControlGroupCommonProps } from '../../SelectionControl/common/SelectionControl.types';
import {
  RadioButtonGroupContext,
  type RadioButtonGroupContextProps,
} from '../../SelectionControl/RadioButton/RadioButtonGroupContext';
import { type CardSelectableType } from '../Card.types';

export type CardSelectableGroupProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    Omit<SelectionControlGroupCommonProps, 'label' | 'direction' | 'tip'> &
      Pick<
        ResponsiveProps,
        | 'display'
        | 'gap'
        | 'padding'
        | 'margin'
        | 'flexDirection'
        | 'rowGap'
        | 'flexWrap'
        | 'alignItems'
        | 'columnGap'
      > & {
        /** Spesifiserer inputtype som returneres. */
        cardType: CardSelectableType;
        /**Id til valgfri hjelpetekst; Tar hånd om semantisk tilknytting og annen UU. */
        tipId?: string;
        /** Gir alle barna `name` prop.*/
        name?: string;
        /**Funksjonen for `onChange`-event for barna. */
        onChange?: (value: T | undefined) => void;
        /** Gjør alle barna påkrevd ved å gi dem `required` prop. */
        required?: boolean;
        /**Verdi - en `<CardSelectable>` med denne verdien blir valgt med controlled state. */
        value?: T | undefined;
        /**Default verdi - en `<CardSelectable>` med denne verdien blir forhåndsvalgt med uncontrolled state. */
        defaultValue?: T | undefined;
      },
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
  >;

export const CardSelectableGroup = <T extends string | number = string>({
  name,
  cardType,
  errorMessage,
  disabled,
  readOnly,
  value,
  defaultValue,
  children,
  required,
  onChange,
  id,
  tipId,
  className,
  style,
  htmlProps = {},
  ...rest
}: CardSelectableGroupProps<T>) => {
  const {
    'aria-required': ariaRequired = false,
    'aria-describedby': ariaDescribedby,
  } = htmlProps;

  const generatedId = useId();
  const uniqueGroupId = id ?? `${generatedId}-cardSelectableGroup`;

  const { groupValue, handleChange } = useControllableGroupState({
    value,
    defaultValue,
    onChange: (e, v) => onChange?.(v),
  });

  const hasErrorMessage = !!errorMessage;
  const errorMessageId = errorMessage && `${uniqueGroupId}-errorMessage`;

  const contextProps: RadioButtonGroupContextProps = {
    name,
    disabled,
    defaultValue,
    error: hasErrorMessage,
    errorMessageId: errorMessageId,
    required,
    readOnly,
    value: groupValue,
    onChange: handleChange,
  };

  const generalContextProps: CardSelectableContextProps = {
    cardType,
    tipId,
  };

  const mainContent = (
    <Box
      {...getBaseHTMLProps(
        uniqueGroupId,
        className,
        style,
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
      role={cardType === 'radio' ? 'radiogroup' : 'group'}
      aria-describedby={spaceSeparatedIdListGenerator([tipId, ariaDescribedby])}
      aria-errormessage={errorMessageId}
    >
      <CardSelectableContext value={generalContextProps}>
        {cardType === 'radio' ? (
          <RadioButtonGroupContext value={contextProps}>
            {children}
          </RadioButtonGroupContext>
        ) : cardType === 'checkbox' ? (
          <CheckboxGroupContext value={contextProps}>
            {children}
          </CheckboxGroupContext>
        ) : null}
      </CardSelectableContext>
    </Box>
  );

  return hasErrorMessage ? (
    <div>
      {mainContent}
      {renderInputMessage({ errorMessage, errorMessageId })}
    </div>
  ) : (
    mainContent
  );
};

CardSelectableGroup.displayName = 'CardSelectableGroup';
