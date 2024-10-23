import { ddsTokens } from '@norges-domstoler/dds-design-tokens';
import { type Properties, type Property } from 'csstype';
import {
  type ChangeEvent,
  type ForwardedRef,
  forwardRef,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { COUNTRIES, type Country, type ISOCountryCode } from './constants';
import styles from './PhoneInput.module.css';
import { useCombinedRef } from '../../hooks';
import {
  cn,
  derivativeIdGenerator,
  spaceSeparatedIdListGenerator,
} from '../../utils';
import {
  type InputProps,
  type ScreenSizeLiteral,
  StatefulInput,
  inputTypographyTypes,
} from '../helpers';
import inputStyles from '../helpers/Input/Input.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
import { NativeSelect } from '../Select';
import { Label, getTypographyCn } from '../Typography';
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
  .sort((a, b) => +a.name - +b.name)
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
  smallScreenBreakpoint?: ScreenSizeLiteral;
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
>;

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
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
        ? ddsTokens.ddsSpacingX1NumberPx + callingCodeWidth + 'px'
        : undefined;

    const styleVariables: Properties = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--dds-phone-input-width' as any]: width
        ? width
        : componentSize === 'tiny'
          ? '131px'
          : '194px',
    };

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
        <div
          className={cn(
            styles['inputs-container'],
            !!props.smallScreenBreakpoint &&
              styles[
                `inputs-container--small-screen-${props.smallScreenBreakpoint}`
              ],
          )}
          style={styleVariables}
          role="group"
          aria-label={groupLabel}
        >
          <label className={utilStyles['visually-hidden']} htmlFor={selectId}>
            {selectLabel}
          </label>
          <NativeSelect
            {...commonProps}
            ref={combinedSelectRef}
            id={selectId}
            className={cn(
              styles.select,
              componentSize === 'tiny' && styles['select--tiny'],
            )}
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
          <div className={inputStyles['input-group']}>
            <span
              className={cn(
                typographyStyles[
                  getTypographyCn(inputTypographyTypes[componentSize])
                ],
                inputStyles['input-group__absolute-element'],
                styles['calling-code'],
              )}
              ref={callingCodeRef}
            >
              {callingCode}
            </span>

            <StatefulInput
              ref={ref}
              type="tel"
              {...commonProps}
              id={phoneNumberId}
              value={displayedValue?.phoneNumber || ''}
              defaultValue={defaultValue?.phoneNumber}
              name={`${name}-phone-number`}
              onChange={handlePhoneNumberChange}
              style={{
                ...styleVariables,
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
          </div>
        </div>
        {hasMessage &&
          renderInputMessage(tip, tipId, errorMessage, errorMessageId)}
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

const getCallingCode = (s: string): string =>
  s.substring(s.indexOf('+'), s.length) ?? '';
