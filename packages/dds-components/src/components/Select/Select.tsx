import { type Properties, type Property } from 'csstype';
import { type HTMLAttributes, forwardRef, useContext, useId } from 'react';
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
import { type InputSize } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import { type SvgIcon } from '../Icon/utils';
import { renderInputMessage } from '../InputMessage';
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
  /**Custom bredde ved behov. */
  width?: Property.Width;
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
} & Pick<HTMLAttributes<HTMLInputElement>, 'aria-required'> &
  WrappedReactSelectProps<Option, IsMulti, GroupBase<Option>>;

type ForwardRefType<Option, IsMulti extends boolean> = React.ForwardedRef<
  SelectInstance<Option, IsMulti, GroupBase<Option>>
>;

function SelectInner<Option = unknown, IsMulti extends boolean = false>(
  props: SelectProps<Option, IsMulti>,
  ref: ForwardRefType<Option, IsMulti>,
) {
  const {
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
    ...rest
  } = props;

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

  const styleVariables: Properties = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ['--dds-select-width' as any]: width
      ? width
      : componentSize === 'tiny'
        ? '210px'
        : 'var(--dds-input-default-width)',
  };

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
      Control: props =>
        DDSControl(props, componentSize, readOnly, icon, dataTestId),
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    required,
    onKeyDown: readOnlyKeyDownHandler('select', readOnly, props.onKeyDown),
    openMenuOnClick: readOnly
      ? false
      : props.openMenuOnClick
        ? props.openMenuOnClick
        : undefined,
    ...rest,
  };

  return (
    <div
      className={cn(
        className,
        styles.container,
        isDisabled && styles['container--disabled'],
        readOnly && styles['container--readonly'],
      )}
      style={{ ...style, ...styleVariables }}
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
    </div>
  );
}

export const Select = forwardRef(SelectInner) as typeof SelectInner;

// @ts-expect-error TODO fix Select type
Select.displayName = 'Select';
