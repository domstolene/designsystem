import { forwardRef, useId } from 'react';

import { CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { CustomSelectionControl, Container } from '../SelectionControl.styles';
import { getBaseHTMLProps } from '../../../types';
import { cn, spaceSeparatedIdListGenerator } from '../../../utils';
import { HiddenInput } from '../../helpers';
import { Typography } from '../../Typography';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      id,
      name,
      label,
      error = false,
      disabled,
      readOnly,
      indeterminate,
      'aria-describedby': ariaDescribedby,
      className,
      htmlProps = {},
      ...rest
    } = props;

    const generatedId = useId();
    const uniqueId = id ?? `${generatedId}-checkbox`;
    const checkboxGroup = useCheckboxGroup();

    const hasLabel = !!label;

    const {
      style,
      className: htmlPropsClassName,
      ...restHtmlProps
    } = htmlProps;

    type AriaChecked = 'mixed' | boolean | undefined;

    return (
      <Container
        $error={error || checkboxGroup?.error}
        disabled={disabled}
        htmlFor={uniqueId}
        $hasLabel={hasLabel}
        $controlType="checkbox"
        className={cn(className, htmlPropsClassName)}
        style={style}
      >
        <HiddenInput
          {...getBaseHTMLProps(uniqueId, restHtmlProps, rest)}
          ref={ref}
          name={name}
          disabled={disabled}
          aria-describedby={spaceSeparatedIdListGenerator([
            checkboxGroup?.tipId,
            checkboxGroup?.errorMessageId,
            ariaDescribedby,
          ])}
          aria-invalid={error || checkboxGroup?.error ? true : undefined}
          aria-labelledby={checkboxGroup?.uniqueGroupId}
          aria-checked={indeterminate ? ('mixed' as AriaChecked) : undefined}
          aria-readonly={readOnly}
          type="checkbox"
          data-indeterminate={indeterminate}
        />
        <CustomSelectionControl $controlType="checkbox" />
        {hasLabel && (
          <Typography color="inherit" as="span" typographyType="bodySans02">
            {label}
          </Typography>
        )}
      </Container>
    );
  },
);

Checkbox.displayName = 'Checkbox';
