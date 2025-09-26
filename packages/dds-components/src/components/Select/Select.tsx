import {
  type HTMLAttributes,
  type JSX,
  type ReactNode,
  type Ref,
  useCallback,
  useContext,
  useId,
} from 'react';
import {
  type ClearIndicatorProps,
  type ControlProps,
  type DropdownIndicatorProps,
  type GroupBase,
  type InputProps,
  type OptionProps,
  default as ReactSelect,
  type Props as ReactSelectProps,
  type SelectInstance,
  type SingleValueProps,
} from 'react-select';

import styles from './Select.module.css';
import { getCustomStyles, prefix } from './Select.styles';
import {
  CustomOption,
  CustomSingleValue,
  DDSClearIndicator,
  DDSControl,
  DDSDropdownIndicator,
  DDSInput,
  DDSMultiValueRemove,
  DDSNoOptionsMessage,
  DDSOption,
} from './SelectComponents';
import { type WithRequiredIf } from '../../types';
import {
  cn,
  derivativeIdGenerator,
  searchFilter,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { readOnlyKeyDownHandler } from '../../utils/readonlyEventHandlers';
import { type InputSize, getInputWidth } from '../helpers/Input';
import { type SvgIcon } from '../Icon/utils';
import { renderInputMessage } from '../InputMessage';
import { Box, type ResponsiveProps } from '../layout';
import { ThemeContext } from '../ThemeProvider';
import { renderLabel } from '../Typography/Label/Label.utils';

export interface SelectOption<TValue = unknown> {
  label: string | number;
  value: TValue;
}

type WrappedReactSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = WithRequiredIf<
  Option extends SelectOption ? false : true,
  ReactSelectProps<Option, IsMulti, Group>,
  'getOptionLabel' | 'getOptionValue'
>;

export type SelectProps<Option = unknown, IsMulti extends boolean = false> = {
  /**Ledetekst for nedtrekkslisten. */
  label?: string;
  /**Størrelsen på komponenten.
   * @default "medium"
   */
  componentSize?: InputSize;
  /**Ikonet som vises i komponenten. */
  icon?: SvgIcon;
  /**Nedtrekkslisten blir `readonly` og får readOnly styling. */
  readOnly?: boolean;
  /**Meldingen som vises ved valideringsfeil. */
  errorMessage?: string;
  /**Hjelpetekst. */
  tip?: string;
  /** CSS klassenavn. */
  className?: string;
  /** Inline styling. */
  style?: React.CSSProperties;
  /** Custom element som vises for det valgte elementet. */
  customOptionElement?: (
    props: OptionProps<Option, IsMulti, GroupBase<Option>>,
  ) => JSX.Element;
  /** Custom element som vises i listen over alternativer. */
  customSingleValueElement?: (
    props: SingleValueProps<Option, IsMulti, GroupBase<Option>>,
  ) => JSX.Element;
  /** Testid. Legges på control-div med suffiks "control". */
  'data-testid'?: string;
  /**Ref til komponenten. */
  ref?: SelectForwardRefType<Option, IsMulti>;
} & Pick<HTMLAttributes<HTMLInputElement>, 'aria-required'> &
  Pick<ResponsiveProps, 'width'> &
  WrappedReactSelectProps<Option, IsMulti, GroupBase<Option>>;

export type SelectForwardRefType<Option, IsMulti extends boolean> = Ref<
  SelectInstance<Option, IsMulti, GroupBase<Option>>
>;

export function Select<Option = unknown, IsMulti extends boolean = false>({
  id,
  label,
  componentSize = 'medium',
  errorMessage,
  tip,
  'aria-required': ariaRequired,
  readOnly,
  options,
  isMulti,
  value,
  icon,
  defaultValue,
  width,
  closeMenuOnSelect,
  className,
  style,
  isDisabled,
  isClearable = true,
  placeholder,
  menuPortalTarget,
  customOptionElement,
  customSingleValueElement,
  'data-testid': dataTestId,
  onKeyDown,
  openMenuOnClick,
  ref,
  instanceId,
  ...rest
}: SelectProps<Option, IsMulti>) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('Select must be used within a ThemeProvider');
  }

  const portalTarget = menuPortalTarget ?? themeContext?.el;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-select`;

  const singleValueId = !isMulti ? `${uniqueId}-singleValue` : undefined;
  const hasErrorMessage = !!errorMessage;
  const hasIcon = !!icon;
  const showRequiredStyling = !!(rest.required || ariaRequired);

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const inputWidth = getInputWidth(
    width,
    componentSize === 'xsmall' && 'var(--dds-input-default-width-xsmall)',
  );

  const customInput = useCallback(
    <Option, IsMulti extends boolean>(
      props: InputProps<Option, IsMulti>,
    ): ReactNode => (
      <DDSInput
        {...props}
        readOnly={readOnly}
        aria-required={ariaRequired}
        aria-activedescendant={
          props['aria-activedescendant'] === ''
            ? undefined
            : props['aria-activedescendant']
        }
        ariaInvalid={hasErrorMessage}
        ariaDescribedby={spaceSeparatedIdListGenerator([
          singleValueId,
          tip ? tipId : undefined,
          errorMessage ? errorMessageId : undefined,
        ])}
      />
    ),
    [],
  );

  const customSingleValue = useCallback(
    (
      props: SingleValueProps<Option, IsMulti, GroupBase<Option>>,
    ): ReactNode => (
      <CustomSingleValue
        {...props}
        id={singleValueId}
        Element={customSingleValueElement}
      />
    ),
    [],
  );

  const customClearIndicator = useCallback(
    (
      props: ClearIndicatorProps<Option, IsMulti, GroupBase<Option>>,
    ): ReactNode => <DDSClearIndicator {...props} size={componentSize} />,
    [componentSize],
  );

  const customDropdownIndicator = useCallback(
    (
      props: DropdownIndicatorProps<Option, IsMulti, GroupBase<Option>>,
    ): ReactNode => (
      <DDSDropdownIndicator {...props} componentSize={componentSize} />
    ),
    [componentSize],
  );

  const customControl = useCallback(
    (props: ControlProps<Option, IsMulti, GroupBase<Option>>): ReactNode => (
      <DDSControl
        {...props}
        componentSize={componentSize}
        readOnly={readOnly}
        icon={icon}
        dataTestId={dataTestId}
      />
    ),
    [componentSize, readOnly, icon, dataTestId],
  );

  const customOptionComponent = useCallback(
    (props: OptionProps<Option, IsMulti, GroupBase<Option>>): ReactNode => {
      if (customOptionElement) {
        return <CustomOption {...props} customElement={customOptionElement} />;
      } else {
        return <DDSOption {...props} />;
      }
    },
    [customOptionElement, componentSize],
  );

  const reactSelectProps: ReactSelectProps<
    Option,
    IsMulti,
    GroupBase<Option>
  > = {
    options,
    value,
    defaultValue,
    isDisabled: !!isDisabled,
    isClearable,
    placeholder: placeholder ? placeholder : '',
    closeMenuOnSelect: closeMenuOnSelect
      ? closeMenuOnSelect
      : isMulti
        ? false
        : true,
    isMulti,
    instanceId: instanceId ?? useId(),
    inputId: uniqueId,
    name: uniqueId,
    menuPortalTarget: portalTarget,
    classNamePrefix: prefix,
    styles: getCustomStyles<Option>(
      componentSize,
      hasErrorMessage,
      hasIcon,
      readOnly,
    ),
    filterOption: (option, inputValue) => {
      const { label } = option;
      return searchFilter(label, inputValue) || inputValue === '';
    },
    components: {
      Option: customOptionComponent,
      NoOptionsMessage: DDSNoOptionsMessage,
      Input: customInput,
      SingleValue: customSingleValue,
      ClearIndicator: customClearIndicator,
      DropdownIndicator: customDropdownIndicator,
      MultiValueRemove: DDSMultiValueRemove,
      Control: customControl,
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    onKeyDown: readOnlyKeyDownHandler('select', readOnly, onKeyDown),
    openMenuOnClick: readOnly
      ? false
      : openMenuOnClick
        ? openMenuOnClick
        : undefined,
    ...rest,
  };

  return (
    <Box
      width={inputWidth}
      position="relative"
      margin="0"
      className={cn(
        className,
        isDisabled && styles['container--disabled'],
        readOnly && styles['container--readonly'],
      )}
      style={style}
    >
      {renderLabel({
        label,
        htmlFor: uniqueId,
        showRequiredStyling,
        readOnly,
      })}
      <ReactSelect {...reactSelectProps} ref={ref} />
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </Box>
  );
}

Select.displayName = 'Select';
