import {
  type ComponentPropsWithRef,
  type HTMLProps,
  type InputHTMLAttributes,
  type JSX,
  type ReactElement,
} from 'react';

import { type ResponsiveProps } from '../layout';
import { type InlineEditContextType } from './InlineEdit.context';

export type EditElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

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

export interface InlineEditCommonProps {
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
  /**HTML `value`. */
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
}

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

export type InlineSelectProps = BaseInlineInputProps &
  Omit<
    ComponentPropsWithRef<'select'>,
    'value' | 'onChange' | 'onFocus' | 'onBlur' | 'multiple'
  >;

export type InlineEditTextAreaProps = InlineTextAreaProps &
  InlineEditCommonProps;

export type InlineEditInputProps = InlineInputProps & InlineEditCommonProps;
export type InlineEditSelectProps = InlineSelectProps & InlineEditCommonProps;
type PickedContextType = Partial<
  Omit<InlineEditContextType, 'isEditing' | 'emptyable'>
>;
export type InlineETag<T extends EditElement> = T extends HTMLInputElement
  ? 'input'
  : T extends HTMLTextAreaElement
    ? 'textarea'
    : T extends HTMLSelectElement
      ? 'select'
      : never;

export type InlineEditHTMLProps<TElement extends EditElement> = Omit<
  HTMLProps<TElement>,
  keyof PickedContextType | 'width'
>;

export type RenderInputProps<TElement extends EditElement> = {
  ref: React.Ref<TElement>;
  hasError?: boolean;
} & InlineEditHTMLProps<TElement>;

export type InlineEditFieldProps<TElement extends EditElement> = {
  elementType: InlineETag<TElement>;
  id?: string;
  error?: boolean;
  errorMessage?: string;
  hideIcon?: boolean;
  ref?: React.Ref<TElement>;
  'aria-describedby'?: string;
  className?: string;
  renderInput: (
    props: RenderInputProps<TElement>,
  ) => ReactElement<JSX.IntrinsicElements[InlineETag<TElement>]>;
} & Pick<ResponsiveProps, 'width'> &
  InlineEditHTMLProps<TElement>;
