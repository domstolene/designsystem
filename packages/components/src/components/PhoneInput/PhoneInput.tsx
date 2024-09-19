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

import styles from './PhoneInput.module.css';
import { useCombinedRef } from '../../hooks';
import { useControllableState } from '../../hooks/useControllableState';
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
import { COUNTRIES, type ISOCountryCode } from './constants';
import inputStyles from '../helpers/Input/Input.module.css';
import utilStyles from '../helpers/styling/utilStyles.module.css';
import { renderInputMessage } from '../InputMessage';
import { NativeSelect } from '../Select';
import { Label, getTypographyCn } from '../Typography';
import typographyStyles from '../Typography/typographyStyles.module.css';

export interface PhoneInputValue {
  countryCode: ISOCountryCode | string;
  phoneNumber: string;
}

interface PhoneInputCountryOption {
  countryCode: ISOCountryCode;
  label: string;
}

const prioritizedCountryOptions: Array<PhoneInputCountryOption> = [
  { label: 'Norway (Norge) +47', countryCode: 'NO' },
  { label: 'Sweden (Sverige) +46', countryCode: 'SE' },
  { label: 'Denmark (Danmark) +45', countryCode: 'DK' },
  { label: 'Finland (Suomi) +358', countryCode: 'FI' },
];

const sortedCountryOptions: Array<PhoneInputCountryOption> = Object.values(
  COUNTRIES,
)
  .sort((a, b) => a.dialCodeInt - b.dialCodeInt)
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

const countryOptions: Array<PhoneInputCountryOption> = [
  ...prioritizedCountryOptions,
  ...sortedCountryOptions,
];

export type PhoneInputProps = Pick<
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
> & {
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
   * Visuelt skjult ledetekst for nedtrekksliste med landkoder. Brukes hvis default ikke passer.
   * @default "Landskode"
   */
  selectLabel?: string;
  /**
   * Ref for nedtrekksliste med landkoder.
   */
  selectRef?: ForwardedRef<HTMLSelectElement>;
};

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
    const [phoneValue, setPhoneValue] = useControllableState({
      value,
      defaultValue,
      onChange,
    });

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

    const combinedSelectRef = selectRef
      ? useCombinedRef(selectRef, internalSelectRef)
      : internalSelectRef;

    useEffect(() => {
      const selectEl = internalSelectRef.current;
      if (selectEl && selectEl.value) {
        const { options, selectedIndex } = selectEl;
        const content = options[selectedIndex].innerHTML;
        setCallingCode(getCallingCode(content));
      }
    }, [phoneValue?.countryCode]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const { options, selectedIndex } = event.target;
      const content = options[selectedIndex].innerHTML;
      setCallingCode(getCallingCode(content));
      setPhoneValue({
        countryCode: event.target.value as ISOCountryCode,
        phoneNumber: value ? value.phoneNumber : phoneValue?.phoneNumber,
      });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPhoneValue({
        countryCode: value ? value.countryCode : phoneValue?.countryCode,
        phoneNumber: event.target.value,
      });
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
          aria-label="Landskode og telefonnummer"
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
            onChange={e => handleSelectChange(e)}
            defaultValue={defaultValue?.countryCode}
            value={phoneValue?.countryCode}
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
              value={phoneValue?.phoneNumber}
              defaultValue={defaultValue?.phoneNumber}
              name={`${name}-phone-number`}
              onChange={e => handleInputChange(e)}
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
