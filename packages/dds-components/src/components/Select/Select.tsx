import {
  type HTMLAttributes,
  type JSX,
  type Ref,
  useContext,
  useId,
} from 'react';
import {
  type GroupBase,
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
import inputStyles from '../helpers/Input/Input.module.css';
import { type SvgIcon } from '../Icon/utils';
import { renderInputMessage } from '../InputMessage';
import { Box, type ResponsiveProps } from '../layout';
import { ThemeContext } from '../ThemeProvider';
import { Label } from '../Typography';

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
  required,
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
  const hasLabel = !!label;
  const hasErrorMessage = !!errorMessage;
  const hasIcon = !!icon;
  const showRequiredStyling = !!(required || ariaRequired);

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const inputWidth = getInputWidth(
    width,
    componentSize === 'xsmall' && 'var(--dds-input-default-width-xsmall)',
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
      Option: customOptionElement
        ? props => CustomOption(props, customOptionElement)
        : props => DDSOption(props, componentSize),
      NoOptionsMessage: DDSNoOptionsMessage,
      Input: props =>
        DDSInput(
          {
            ...props,
            readOnly,
            'aria-required': ariaRequired,
          },
          hasErrorMessage,
          spaceSeparatedIdListGenerator([
            singleValueId,
            tip ? tipId : undefined,
            errorMessage ? errorMessageId : undefined,
          ]),
        ),
      SingleValue: props =>
        CustomSingleValue(props, singleValueId, customSingleValueElement),
      ClearIndicator: props => DDSClearIndicator(props, componentSize),
      DropdownIndicator: props => DDSDropdownIndicator(props, componentSize),
      MultiValueRemove: DDSMultiValueRemove,
      Control: DDSControl(componentSize, readOnly, icon, dataTestId),
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    required,
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
      {hasLabel && (
        <Label
          htmlFor={uniqueId}
          showRequiredStyling={showRequiredStyling}
          className={inputStyles.label}
          readOnly={readOnly}
        >
          {label}
        </Label>
      )}
      <ReactSelect {...reactSelectProps} ref={ref} />
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </Box>
  );
}

Select.displayName = 'Select';
