import { forwardRef, useId } from 'react';
import {
  getBaseHTMLProps,
  joinClassNames,
  spaceSeparatedIdListGenerator,
} from '@norges-domstoler/dds-core';

import { Typography } from '@norges-domstoler/dds-typography';
import { CheckboxProps } from './Checkbox.types';
import { useCheckboxGroup } from './CheckboxGroupContext';
import { CustomSelectionControl, Container } from '../SelectionControl.styles';
import { HiddenInput } from '@norges-domstoler/dds-form';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      id,
      name,
      label,
      error,
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

    const containerProps = {
      error: error || checkboxGroup?.error,
      disabled,
      indeterminate,
      htmlFor: uniqueId,
      hasLabel,
      className: joinClassNames(className, htmlPropsClassName),
      style,
    };
    type AriaChecked = 'mixed' | boolean | undefined;

    const inputProps = {
      ...getBaseHTMLProps(uniqueId, restHtmlProps, rest),
      ref,
      name,
      indeterminate,
      disabled,
      'aria-describedby': spaceSeparatedIdListGenerator([
        checkboxGroup?.tipId,
        checkboxGroup?.errorMessageId,
        ariaDescribedby,
      ]),
      'aria-invalid': error || checkboxGroup?.error ? true : undefined,
      'aria-labelledby': checkboxGroup?.uniqueGroupId,
      'aria-checked': indeterminate ? ('mixed' as AriaChecked) : undefined,
      'aria-readonly': readOnly,
    };

    return (
      <Container {...containerProps} controlType="checkbox">
        <HiddenInput
          {...inputProps}
          type="checkbox"
          data-indeterminate={indeterminate}
        />
        <CustomSelectionControl controlType="checkbox" />
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
