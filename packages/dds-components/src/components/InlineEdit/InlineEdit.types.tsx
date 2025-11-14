import { type ComponentProps, type Ref } from 'react';

import { type ResponsiveProps } from '../layout';
import { type InlineEditContextType } from './InlineEdit.context';

interface TagToElementMap {
  input: HTMLInputElement;
  textarea: HTMLTextAreaElement;
  select: HTMLSelectElement;
}

export type EditElementTag = keyof TagToElementMap;
export type EditElement = TagToElementMap[EditElementTag];
export type ElementFromTag<T extends EditElementTag> = TagToElementMap[T];

type PickedContextType = Partial<
  Omit<InlineEditContextType, 'isEditing' | 'emptiable'>
>;

export type InlineEditHTMLProps<T extends EditElementTag> = Omit<
  React.ComponentPropsWithRef<T>,
  keyof PickedContextType | 'width'
>;

export interface CommonInlineFieldProps {
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

type InlineEditGenericProps<T extends EditElementTag> = CommonInlineFieldProps &
  InlineEditHTMLProps<T> & {
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
    value?: ComponentProps<T>['value'];
  };

export type InlineEditTextAreaProps = InlineEditGenericProps<'textarea'>;
export type InlineEditInputProps = InlineEditGenericProps<'input'>;
export type InlineEditSelectProps = InlineEditGenericProps<'select'>;

export type InlineFieldProps<T extends EditElementTag> =
  CommonInlineFieldProps & {
    elementType: T;
    ref?: Ref<ElementFromTag<T>>;
  } & InlineEditHTMLProps<T>;
