import { type Property } from 'csstype';
import { type HTMLAttributes, type ReactNode, forwardRef, useId } from 'react';
import {
  type GroupBase,
  type OptionProps,
  default as ReactSelect,
  type Props as ReactSelectProps,
  type SelectInstance,
  type SingleValueProps,
} from 'react-select';

import { Container, getCustomStyles, prefix } from './Select.styles';
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
  derivativeIdGenerator,
  searchFilter,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { type InputSize } from '../helpers';
import { type SvgIcon } from '../Icon/utils';
import { renderInputMessage } from '../InputMessage';
import { Label } from '../Typography';

export interface SelectOption<TValue = unknown> {
  label: string | number;
  value: TValue;
}

const defaultWidth: Property.Width<string> = '320px';

const getPlaceholder = (
  placeholder?: ReactNode,
  isMulti?: boolean,
): ReactNode =>
  placeholder
    ? placeholder
    : isMulti
      ? '-- Velg en eller flere --'
      : '-- Velg fra listen --';

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
  /**Størrelsen på komponenten. */
  componentSize?: InputSize;
  /**Ikonet som vises i komponenten. */
  icon?: SvgIcon;
  /**Nedtrekkslisten blir disabled og får readOnly styling. */
  readOnly?: boolean;
  /**Meldingen som vises ved valideringsfeil. */
  errorMessage?: string;
  /**Hjelpetekst. */
  tip?: string;
  /**Custom bredde ved behov. */
  width?: Property.Width<string>;
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
    width = defaultWidth,
    closeMenuOnSelect,
    className,
    style,
    isDisabled,
    isClearable = true,
    placeholder,
    customOptionElement,
    customSingleValueElement,
    'data-testid': dataTestId,
    ...rest
  } = props;

  const generatedId = useId();
  const uniqueId = id ?? `${generatedId}-select`;

  const singleValueId = !isMulti ? `${uniqueId}-singleValue` : undefined;
  const hasLabel = !!label;
  const hasErrorMessage = !!errorMessage;
  const showRequiredStyling = !!(required || ariaRequired);

  const tipId = derivativeIdGenerator(uniqueId, 'tip');
  const errorMessageId = derivativeIdGenerator(uniqueId, 'errorMessage');

  const containerProps = {
    $width: width,
    $componentSize: componentSize,
    $errorMessage: errorMessage,
    $isDisabled: isDisabled,
    $readOnly: readOnly,
    $isMulti: isMulti,
    className,
    style,
  };

  const reactSelectProps: ReactSelectProps<
    Option,
    IsMulti,
    GroupBase<Option>
  > = {
    options,
    value,
    defaultValue,
    isDisabled: !!isDisabled || readOnly,
    isClearable,
    placeholder: getPlaceholder(placeholder, isMulti),
    closeMenuOnSelect: closeMenuOnSelect
      ? closeMenuOnSelect
      : isMulti
        ? false
        : true,
    isMulti,
    inputId: uniqueId,
    name: uniqueId,
    classNamePrefix: prefix,
    styles: getCustomStyles<Option>(componentSize),
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
          { ...props, 'aria-required': ariaRequired },
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
      Control: props => DDSControl(props, componentSize, icon, dataTestId),
    },
    'aria-invalid': hasErrorMessage ? true : undefined,
    required,
    menuPortalTarget: document?.body,
    ...rest,
  };

  return (
    <Container {...containerProps}>
      {hasLabel && (
        <Label htmlFor={uniqueId} showRequiredStyling={showRequiredStyling}>
          {label}
        </Label>
      )}
      <ReactSelect {...reactSelectProps} ref={ref} />
      {renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </Container>
  );
}

export const Select = forwardRef(SelectInner) as typeof SelectInner;

// @ts-expect-error TODO fix Select type
Select.displayName = 'Select';
