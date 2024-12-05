import { useId } from 'react';

import {
  CheckboxGroupContext,
  type CheckboxGroupContextProps,
} from './CheckboxGroupContext';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { RequiredMarker, cn, derivativeIdGenerator } from '../../../utils';
import { Icon } from '../../Icon';
import { LockIcon } from '../../Icon/icons';
import { renderInputMessage } from '../../InputMessage';
import { Typography } from '../../Typography';
import labelStyles from '../../Typography/Label/Label.module.css';
import { type SelectionControlGroupCommonProps } from '../common/SelectionControl.types';
import styles from '../SelectionControl.module.css';

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
  const showRequiredMarker = required || ariaRequired;

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
      ) : null}
      {renderInputMessage(tip, tipId)}
      <CheckboxGroupContext.Provider value={{ ...contextProps }}>
        <div
          role="group"
          aria-labelledby={uniqueGroupId}
          aria-describedby={tip ? tipId : undefined}
          className={cn(styles.group, styles[`group--${direction}`])}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
      {renderInputMessage(undefined, undefined, errorMessage, errorMessageId)}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
