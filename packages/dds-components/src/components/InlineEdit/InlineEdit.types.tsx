import { type Property } from 'csstype';
import {
  type InputHTMLAttributes,
  type ReactNode,
  type RefObject,
  type TextareaHTMLAttributes,
} from 'react';

export interface BaseInlineInputProps {
  /**Spesifiserer error state. Hvis `errorMessage` ikke brukes må inputfeltet knyttes med ARIA til en feilmelding som vises andre steder i applikasjonen. */
  error?: boolean;
  /**Feilmelding. Setter også error state. */
  errorMessage?: string;
  /** Bredde på komponenten.
   * @default "140px"
   */
  width?: Property.Width;
  /**Om redigeringsikonet skal vises. */
  hideIcon?: boolean;
  /** **OBS!** settes automatisk av forelder. Spesifiserer om brukeren kan tømme inputfeltet. */
  emptiable?: boolean;
  /** **OBS!** settes automatisk av forelder. Spesifiserer om komponenten er i redigeringsmodus. */
  isEditing?: boolean;
}

export type InlineEditProps = {
  /**Callback for når verdien blir lagret. */
  onSetValue?: (value: string) => void;
  /** Ref til barnet. */
  inputRef: RefObject<HTMLElement | null>;
  /** Barn (inputelementet). */
  children: ReactNode;
  /**Spesifiserer om brukeren kan tømme inputfeltet. */
  emptiable?: boolean;
  /**Ekstra callback ved `onChange`-event. */
  onChange?: () => void;
  /**Ekstra callback ved `onFocus`-event. */
  onFocus?: () => void;
  /**Ekstra callback ved `onBlur`-event. */
  onBlur?: () => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'value'>;

export type CommonInlineEditWrapperProps = Pick<
  InlineEditProps,
  'onSetValue' | 'emptiable' | 'onBlur' | 'onFocus' | 'onChange'
> &
  Pick<BaseInlineInputProps, 'error' | 'errorMessage' | 'width' | 'hideIcon'>;

export type InlineEditTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'onFocus' | 'onBlur'
> &
  CommonInlineEditWrapperProps;

export type InlineEditInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'width' | 'onChange' | 'onFocus' | 'onBlur'
> &
  CommonInlineEditWrapperProps;
