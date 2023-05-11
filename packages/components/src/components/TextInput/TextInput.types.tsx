import { InputProps } from '../../helpers';
import { SvgIcon } from '../../icons/utils';

export type TextInputProps = InputProps & {
  /** Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt. */
  withCharacterCounter?: boolean;
  /** Ikonet som vises i komponenten. */
  icon?: SvgIcon;
  /** Prefiks som vises før inputfeltet. */
  prefix?: string;
  /** Suffiks som vises etter inputfeltet. */
  suffix?: string;
};

export type TextAffixProps = {
  readOnly?: boolean;
};
