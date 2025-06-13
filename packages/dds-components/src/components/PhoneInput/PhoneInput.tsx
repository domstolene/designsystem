import { type Property } from 'csstype';
import {
  type ChangeEvent,
  type ForwardedRef,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { COUNTRIES, type Country, type ISOCountryCode } from './constants';
import styles from './PhoneInput.module.css';
import { useCombinedRef } from '../../hooks';
import { createTexts, useTranslation } from '../../i18n';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import { type InputProps, StatefulInput, getInputWidth } from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
import { Box, type Breakpoint } from '../layout';
import { applyResponsiveStyle } from '../layout/common/utils';
import { NativeSelect } from '../Select';
import { Label } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export interface PhoneInputValue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  countryCode: ISOCountryCode | (string & {});
  phoneNumber: string;
}

interface PhoneInputCountryOption {
  countryCode: ISOCountryCode;
  label: string;
}

const prioritizedCountries: Array<Country> = [
  COUNTRIES.NO,
  COUNTRIES.SE,
  COUNTRIES.DK,
  COUNTRIES.FI,
];

const prioritizedCountryOptions: Array<PhoneInputCountryOption> =
  prioritizedCountries.map(country => {
    return {
      label: `${country.name} ${country.dialCode}`,
      countryCode: country.id,
    };
  });

const sortedCountryOptions: Array<PhoneInputCountryOption> = Object.values(
  COUNTRIES,
)
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  .map(country => ({
    countryCode: country.id,
    label: `${country.name} ${country.dialCode}`,
  }))
  .filter(
    country =>
      !prioritizedCountryOptions.some(
        pCountry => pCountry.countryCode === country.countryCode,
      ),
  );

export const countryOptions: Array<PhoneInputCountryOption> = [
  ...prioritizedCountryOptions,
  ...sortedCountryOptions,
];

export type PhoneInputProps = {
  /**
   * Custom id for gruppen ved behov. setter `${id}-country-code` som `id` for landskode og `${id}-phone-number` for telefonnummer.
   */
  id?: string;
  /**
   * Verdi bestående av landskode og telefonnummer.
   * */
  value?: PhoneInputValue;
  /** Default verdi bestående av landkode og telefonnummer. */
  defaultValue?: PhoneInputValue;
  /**
   * `onChange` funksjon.
   */
  onChange?: (value: PhoneInputValue) => void;
  /** `name` attributt; setter `${name}-country-code` som `name` for landskode og `${name}-phone-number` for telefonnummer. */
  name?: string;
  /**
   * Spesifiserer ved hvilket brekkpunkt og nedover versjonen for små skjermer skal vises; den stacker subkomponentene vertikalt.
   */
  smallScreenBreakpoint?: Breakpoint;
  /**
   * Usynlig ledetekst for nedtrekksliste med landkoder. Brukes hvis default ikke passer eller ikke er beskrivende nok.
   * @default "Landskode"
   */
  selectLabel?: string;
  /**
   * Ref for nedtrekksliste med landkoder.
   */
  selectRef?: ForwardedRef<HTMLSelectElement>;
  /**
   * Usynlig ledetekst for gruppen.  Brukes hvis default ikke passer eller ikke er beskrivende nok.
   * @default "Landskode og telefonnummer"
   */
  groupLabel?: string;
} & Pick<
  InputProps,
  | 'readOnly'
  | 'disabled'
  | 'width'
  | 'componentSize'
  | 'errorMessage'
  | 'label'
  | 'tip'
  | 'required'
  | 'className'
  | 'style'
  | 'aria-required'
  | 'aria-describedby'
  | 'ref'
>;

export const PhoneInput = ({
  label,
  readOnly,
  errorMessage,
  tip,
  required,
  width,
  componentSize = 'medium',
  name,
  className,
  style,
  value,
  selectLabel = 'Landskode',
  selectRef,
  onChange,
  defaultValue,
  'aria-required': ariaRequired,
  'aria-describedby': ariaDescribedby,
  groupLabel = 'Landskode og telefonnummer',
  ref,
  ...props
}: PhoneInputProps) => {
  const { t } = useTranslation();
  const tGroupLabel = groupLabel ?? t(texts.countryCodeAndPhoneNumber);
  const tSelectLabel = selectLabel ?? t(texts.countryCode);
  const generatedId = useId();
  const uniqueId = props.id ?? generatedId;
  const phoneInputId = `${uniqueId}-phone-input`;
  const phoneNumberId = `${uniqueId}-phone-number`;
  const selectId = `${uniqueId}-country-code`;

  const hasErrorMessage = !!errorMessage;
  const hasTip = !!tip;
  const hasLabel = !!label;
  const hasMessage = hasErrorMessage || hasTip;

  const tipId = derivativeIdGenerator(phoneInputId, 'tip');
  const errorMessageId = derivativeIdGenerator(phoneInputId, 'errorMessage');

  const [callingCode, setCallingCode] = useState('');
  const [selectedCountryCodeText, setSelectedCountryCodeText] = useState('');
  const [internalValue, setInternalValue] = useState<PhoneInputValue>(
    defaultValue ?? {
      countryCode: '',
      phoneNumber: '',
    },
  );

  const isControlled = value !== undefined;

  const [callingCodeWidth, setCallingCodeWidth] = useState(0);

  const callingCodeRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (callingCodeRef.current) {
      setCallingCodeWidth(callingCodeRef.current.offsetWidth);
    }
  }, [callingCode]);

  const callingCodeInlineStart: Property.PaddingInlineStart | undefined =
    callingCodeWidth
      ? `calc(var(--dds-spacing-x1) + ${callingCodeWidth}px)`
      : undefined;

  const internalSelectRef = useRef<HTMLSelectElement>(null);

  const combinedSelectRef = useCombinedRef(selectRef, internalSelectRef);

  const displayedValue = isControlled ? value : internalValue;

  useEffect(() => {
    const selectEl = internalSelectRef.current;
    if (selectEl && selectEl.value) {
      const { options, selectedIndex } = selectEl;
      const content = options[selectedIndex].innerHTML;
      setSelectedCountryCodeText(content);
      setCallingCode(getCallingCode(content));
    }
  }, [displayedValue?.countryCode]);

  const handleCountryCodeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = {
      countryCode: e.target.value,
      phoneNumber: displayedValue?.phoneNumber ?? '',
    };

    const { options, selectedIndex } = e.target;
    const content = options[selectedIndex].innerHTML;
    setCallingCode(getCallingCode(content));

    if (isControlled && onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = {
      countryCode: displayedValue?.countryCode ?? '',
      phoneNumber: e.target.value,
    };

    if (isControlled && onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const commonProps = {
    required,
    'aria-required': ariaRequired,
    disabled: props.disabled,
    readOnly,
    componentSize,
  };

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const showRequiredStyling = !!(required || ariaRequired);

  const bp = props.smallScreenBreakpoint;

  const widthDefault =
    componentSize === 'xsmall' && 'var(--dds-input-default-width-xsmall)';

  return (
    <div className={cn(className, inputStyles.container)} style={style}>
      {hasLabel && (
        <Label
          htmlFor={phoneNumberId}
          showRequiredStyling={showRequiredStyling}
          className={inputStyles.label}
          readOnly={readOnly}
        >
          {label}
        </Label>
      )}
      <Box
        display="flex"
        flexDirection={applyResponsiveStyle('column', bp, 'row')}
        className={cn(
          styles['inputs-container'],
          !!bp && styles[`inputs-container--small-screen-${bp}`],
        )}
        width={getInputWidth(width, widthDefault)}
        role="group"
        aria-label={tGroupLabel}
      >
        <label className={utilStyles['visually-hidden']} htmlFor={selectId}>
          {tSelectLabel}
        </label>
        <NativeSelect
          width={applyResponsiveStyle(
            '100%',
            bp,
            componentSize === 'xsmall' ? '5rem' : '8rem',
          )}
          {...commonProps}
          ref={combinedSelectRef}
          id={selectId}
          className={cn(styles.select)}
          onChange={handleCountryCodeChange}
          defaultValue={defaultValue?.countryCode}
          value={displayedValue?.countryCode || ''}
          title={selectedCountryCodeText}
          name={`${name}-country-code`}
          aria-describedby={spaceSeparatedIdListGenerator([
            hasTip ? tipId : undefined,
            ariaDescribedby,
          ])}
        >
          {countryOptions.map((item, index) => (
            <option value={item.countryCode} key={index}>
              {item.label}
            </option>
          ))}
        </NativeSelect>
        <Box width="100%" className={inputStyles['input-group']}>
          <span
            className={cn(
              typographyStyles[`body-${componentSize}`],
              inputStyles['input-group__absolute-element'],
              styles['calling-code'],
            )}
            ref={callingCodeRef}
          >
            {callingCode}
          </span>

          <Box
            as={StatefulInput}
            ref={ref}
            type="tel"
            {...commonProps}
            id={phoneNumberId}
            value={displayedValue?.phoneNumber || ''}
            defaultValue={defaultValue?.phoneNumber}
            name={`${name}-phone-number`}
            onChange={handlePhoneNumberChange}
            width="100%"
            style={{
              paddingInlineStart: callingCodeInlineStart,
            }}
            className={styles.input}
            hasErrorMessage={hasErrorMessage}
            aria-invalid={hasErrorMessage ? true : undefined}
            aria-describedby={spaceSeparatedIdListGenerator([
              hasTip ? tipId : undefined,
              hasErrorMessage ? errorMessageId : undefined,
              ariaDescribedby,
            ])}
          />
        </Box>
      </Box>
      {hasMessage &&
        renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
    </div>
  );
};

PhoneInput.displayName = 'PhoneInput';

const getCallingCode = (s: string): string =>
  s.substring(s.indexOf('+'), s.length) ?? '';

const texts = createTexts({
  countryCode: {
    nb: 'Landskode',
    no: 'Landskode',
    nn: 'Landskode',
    en: 'Country code',
  },
  countryCodeAndPhoneNumber: {
    nb: 'Landskode og telefonnummer',
    no: 'Landskode og telefonnummer',
    nn: 'Landskode og telefonnummer',
    en: 'Country code and phone number',
  },
});
