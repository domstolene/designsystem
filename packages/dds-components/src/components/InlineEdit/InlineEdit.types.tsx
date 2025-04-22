import { type ComponentPropsWithRef, type InputHTMLAttributes } from 'react';

import { type ResponsiveProps } from '../layout';

export type EditElement = HTMLInputElement | HTMLTextAreaElement;

export interface BaseInlineInputProps {
  /**Spesifiserer error state. Hvis `errorMessage` ikke brukes må inputfeltet knyttes med ARIA til en feilmelding som vises andre steder i applikasjonen. */
  error?: boolean;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
  /** Bredde på komponenten.
   * @default "140px"
   */
  width?: ResponsiveProps['width'];
  /**Om redigeringsikonet skal vises. */
  hideIcon?: boolean;
}

export type InlineEditProps = {
  /**Callback for når verdien blir lagret. */
  onSetValue?: (value: string) => void;
  /**Spesifiserer om brukeren kan tømme inputfeltet. */
  emptiable?: boolean;
  /**Ekstra callback ved `onChange`-event. */
  onChange?: () => void;
  /**Ekstra callback ved `onFocus`-event. */
  onFocus?: () => void;
  /**Ekstra callback ved `onBlur`-event. */
  onBlur?: () => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'value'>;

export type InlineInputProps = BaseInlineInputProps &
  Omit<
    ComponentPropsWithRef<'input'>,
    'width' | 'value' | 'onChange' | 'onFocus' | 'onBlur'
  >;

export type InlineTextAreaProps = BaseInlineInputProps &
  Omit<
    ComponentPropsWithRef<'textarea'>,
    'value' | 'onChange' | 'onFocus' | 'onBlur'
  >;

export type InlineEditTextAreaProps = InlineTextAreaProps & InlineEditProps;

export type InlineEditInputProps = InlineInputProps & InlineEditProps;
