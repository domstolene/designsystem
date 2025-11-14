import { type InputIconProps, type InputProps } from '../helpers/Input';

export type TextInputProps = Omit<InputProps, 'prefix'> &
  InputIconProps & {
    /** Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt. */
    withCharacterCounter?: boolean;
    /**
     * Prefiks som vises før inputfeltet. **OBS!** Prefiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter for en beskrivende label.
     * */
    prefix?: string;
    /**
     * Suffiks som vises etter inputfeltet. **OBS!** Suffiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter for en beskrivende label.
     */
    suffix?: string;
  };

export interface TextAffixProps {
  readOnly?: boolean;
}
