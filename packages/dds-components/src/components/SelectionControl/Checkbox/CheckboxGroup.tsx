import { useId } from 'react';

import {
  CheckboxGroupContext,
  type CheckboxGroupContextProps,
} from './CheckboxGroupContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn, derivativeIdGenerator } from '../../../utils';
import { renderInputMessage } from '../../InputMessage';
import { type SelectionControlGroupCommonProps } from '../common/SelectionControl.types';
import styles from '../SelectionControl.module.css';
import { GroupLabel } from '../SelectionControl.styles';
import { convertBooleanishToBoolean } from '../../../types/Booleanish';

export type CheckboxGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  SelectionControlGroupCommonProps & {
    /**Indikerer at det er påkrevd å velge minst ett alternativ. Legger en markør bak ledeteksten. **OBS!** `required` må i tillegg gis til `<Checkbox>`-barna manuelt. */
    required?: boolean;
  }
>;

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    label,
    direction = 'row',
    errorMessage,
    tip,
    required = false,
    disabled = false,
    readOnly = false,
    groupId,
    children,
    id,
    className,
    htmlProps = {},
    ...rest
  } = props;

  const { 'aria-required': ariaRequired } = htmlProps;

  const generatedId = useId();
  const uniqueGroupId = groupId ?? `${generatedId}-checkboxGroup`;
  const hasErrorMessage = !!errorMessage;
  const showRequiredMarker =
    required || convertBooleanishToBoolean(ariaRequired);

  const errorMessageId = derivativeIdGenerator(uniqueGroupId, 'errorMessage');
  const tipId = derivativeIdGenerator(uniqueGroupId, 'tip');

  const contextProps: CheckboxGroupContextProps = {
    error: hasErrorMessage,
    errorMessageId: errorMessage ? errorMessageId : undefined,
    uniqueGroupId,
    tipId: tip ? tipId : undefined,
    disabled,
    readOnly,
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
      {label !== undefined ? (
        <GroupLabel
          id={uniqueGroupId}
          readOnly={readOnly}
          showRequiredMarker={showRequiredMarker}
        >
          {label}
        </GroupLabel>
      ) : null}
      {renderInputMessage(tip, tipId)}
      <CheckboxGroupContext value={{ ...contextProps }}>
        <div
          role="group"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tip ? tipId : undefined}
          className={cn(styles.group, styles[`group--${direction}`])}
        >
          {children}
        </div>
      </CheckboxGroupContext>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
