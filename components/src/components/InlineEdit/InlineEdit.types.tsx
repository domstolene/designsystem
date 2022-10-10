import { Property } from 'csstype';

export type BaseInlineInputProps = {
  /**Spesifiserer error state. Hvis `errorMessage` ikke brukes må inputfeltet knyttes med ARIA til en feilmelding som vises andre steder i applikasjonen. */
  error?: boolean;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
  /** Bredde på komponenten. */
  width?: Property.Width;
  /** **OBS!** settes automatisk av forelder. Spesifiserer om brukeren kan tømme inputfeltet. */
  emptiable?: boolean;
  /** **OBS!** settes automatisk av forelder. Spesifiserer om komponenten er i redigeringsmodus. */
  isEditing?: boolean;
};
