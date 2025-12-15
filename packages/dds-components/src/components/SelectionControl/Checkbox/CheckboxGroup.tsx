import { useId } from 'react';

import {
  CheckboxGroupContext,
  type CheckboxGroupContextProps,
} from './CheckboxGroupContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { convertBooleanishToBoolean } from '../../../types/Booleanish';
import { cn, derivativeIdGenerator } from '../../../utils';
import { renderInputMessage } from '../../InputMessage';
import { type SelectionControlGroupCommonProps } from '../common/SelectionControl.types';
import styles from '../SelectionControl.module.css';
import { renderGroupLabel } from '../SelectionControl.styles';

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
    style,
    htmlProps = {},
    ...rest
  } = props;

  const { 'aria-required': ariaRequired } = htmlProps;

  const generatedId = useId();
  const uniqueGroupId = groupId ?? `${generatedId}-checkboxGroup`;
  const hasErrorMessage = !!errorMessage;
  const showRequiredStyling =
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
        style,
        { ...htmlProps, 'aria-required': ariaRequired },
        rest,
      )}
    >
      {renderGroupLabel({
        label,
        id: uniqueGroupId,
        readOnly,
        showRequiredStyling,
      })}
      {renderInputMessage({ tip, tipId })}
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
      {renderInputMessage({ errorMessage, errorMessageId })}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
