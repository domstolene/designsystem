import {
  type ChangeEvent,
  type HTMLAttributes,
  type ReactElement,
  type Ref,
  forwardRef,
  useId,
  useState,
} from 'react';

import {
  RadioButtonGroupContext,
  type RadioButtonGroupContextProps,
} from './RadioButtonGroupContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker, cn, combineHandlers } from '../../../utils';
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
      /**Default verdi - en `<RadioButton />` blir forhåndsvalgt. **OBS!** brukes kun når brukeren ikke skal fylle ut selv. */
      value?: T | undefined;
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

  const contextProps: RadioButtonGroupContextProps = {
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
    <div
      {...getBaseHTMLProps(
        id,
        cn(className, styles.container),
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
      ref={ref}
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
      <RadioButtonGroupContext.Provider value={{ ...contextProps }}>
        <div
          role="radiogroup"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tipId}
          aria-errormessage={errorMessageId}
          className={cn(styles.group, styles[`group--${direction}`])}
        >
          {children}
        </div>
      </RadioButtonGroupContext.Provider>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </div>
  );
};

export const RadioButtonGroup = forwardRef(RadioButtonGroupInner) as <
  T extends string | number = string,
>(
  props: RadioButtonGroupProps<T> & { ref?: Ref<HTMLDivElement> },
) => ReactElement;

// @ts-expect-error TODO fix RadioButtonGroup type
RadioButtonGroup.displayName = 'RadioButtonGroup';
