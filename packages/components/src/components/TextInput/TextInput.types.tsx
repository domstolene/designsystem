import { InputProps } from '../../helpers';
import { SvgIcon } from '../../icons/utils';

export type TextInputProps = InputProps & {
  /** Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt. */
  withCharacterCounter?: boolean;
  /** Ikonet som vises i komponenten. */
  icon?: SvgIcon;
  /**
   * Prefiks som vises før inputfeltet.
   * OBS! Prefiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
   * for en beskrivende label. */
  prefix?: string;
  /**
   * Suffiks som vises etter inputfeltet.
   * OBS! Suffiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
   * for en beskrivende label. */
  suffix?: string;
};

export type TextAffixProps = {
  readOnly?: boolean;
};
