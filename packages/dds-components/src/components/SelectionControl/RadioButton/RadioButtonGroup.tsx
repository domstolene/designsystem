import { type ChangeEvent, type HTMLAttributes, useId, useState } from 'react';

import {
  RadioButtonGroupContext,
  type RadioButtonGroupContextProps,
} from './RadioButtonGroupContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker, cn } from '../../../utils';
import { Icon } from '../../Icon';
import { LockIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Typography } from '../../Typography';
import labelStyles from '../../Typography/Label/Label.module.css';
import { type SelectionControlGroupCommonProps } from '../common/SelectionControl.types';
import styles from '../SelectionControl.module.css';

export type RadioButtonGroupProps<T extends string | number> =
  BaseComponentPropsWithChildren<
    HTMLDivElement,
    SelectionControlGroupCommonProps & {
      /** Gir alle barna `name` prop.*/
      name?: string;
      /**Funksjonen for onChange-event for barna. */
      onChange?: (
        event: ChangeEvent<HTMLInputElement>,
        value: T | undefined,
      ) => void;
      /** Gjør alle barna påkrevd ved å gi dem `required` prop. Legger en markør (*) bak ledeteksten. */
      required?: boolean;
      /**Verdi - en `<RadioButton>` med denne verdien blir valgt med controlled state. */
      value?: T | undefined;
      /**Default verdi - en `<RadioButton>` med denne verdien blir forhåndsvalgt med uncontrolled state. */
      defaultValue?: T | undefined;
    },
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
  >;

export const RadioButtonGroup = <T extends string | number = string>({
  name,
  label,
  groupId,
  errorMessage,
  tip,
  disabled = false,
  readOnly = false,
  direction = 'row',
  value,
  defaultValue,
  children,
  required = false,
  onChange,
  id,
  className,
  htmlProps = {},
  ...rest
}: RadioButtonGroupProps<T>) => {
  const { 'aria-required': ariaRequired = false } = htmlProps;

  const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(
    defaultValue,
  );

  const generatedId = useId();
  const uniqueGroupId = groupId ?? `${generatedId}-radioButtonGroup`;

  const isControlled = value !== undefined;
  const groupValue = isControlled ? value : uncontrolledValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setUncontrolledValue(newValue as T);
    }
    if (onChange) {
      onChange(e, newValue as T);
    }
  };

  const hasErrorMessage = !!errorMessage;
  const showRequiredMarker = required || ariaRequired;

  const tipId = tip && `${uniqueGroupId}-tip`;
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

  return (
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
    >
      <Typography
        as="span"
        typographyType="labelMedium"
        id={uniqueGroupId}
        className={readOnly ? labelStyles['read-only'] : undefined}
      >
        {readOnly && (
          <Icon icon={LockIcon} className={labelStyles['read-only__icon']} />
        )}
        {label} {showRequiredMarker && <RequiredMarker />}
      </Typography>
      {renderInputMessage(tip, tipId)}
      <RadioButtonGroupContext value={{ ...contextProps }}>
        <div
          role="radiogroup"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tipId}
          aria-errormessage={errorMessageId}
          className={cn(styles.group, styles[`group--${direction}`])}
        >
          {children}
        </div>
      </RadioButtonGroupContext>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </div>
  );
};

RadioButtonGroup.displayName = 'RadioButtonGroup';
