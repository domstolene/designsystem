import { ScreenSize } from '../..';
import { BaseComponentPropsWithChildren } from '../../types';
import { ButtonProps } from '../Button';
import { CardProps } from '../Card';
import { CheckboxGroupProps, CheckboxProps } from '../Checkbox';
import { DatepickerProps } from '../Datepicker';
import {
  DescriptionListProps,
  DescriptionListDescProps,
  DescriptionListGroupProps,
  DescriptionListTermProps,
} from '../DescriptionList';
import { DividerProps } from '../Divider';
import { GlobalMessageProps } from '../GlobalMessage';
import { InputMessageProps } from '../InputMessage';
import { ListProps, ListItemProps } from '../List';
import { LocalMessageProps } from '../LocalMessage';
import { RadioButtonGroupProps, RadioButtonProps } from '../RadioButton';
import { SelectOption, SelectProps } from '../Select';
import { SpinnerProps } from '../Spinner';
import { TextInputProps } from '../TextInput';
import { ToggleButtonProps, ToggleButtonGroupProps } from '../ToggleButton';
import {
  HeadingProps,
  LabelProps,
  LinkProps,
  ParagraphProps,
  TypographyProps,
} from '../Typography';
import { VisuallyHiddenProps } from '../VisuallyHidden';

export type FormGeneratorProps = BaseComponentPropsWithChildren<
  HTMLElement,
  {
    /** Definere liste med felt/komponenter og/eller rader med felt/komponenter */
    fields: (FormGeneratorField | FormGeneratorRow)[];
    /** For å hente ut state etter endringer */
    stateOnChange: (newState: object) => void;
  }
>;

export type FormGeneratorRow = {
  rowType: 'button' | 'standard';
  breakpoint?: ScreenSize;
  fields: FormGeneratorField[];
};

export type FormGeneratorField = FieldWithChildren | FieldWithoutChildren;

type FieldWithChildren =
  | CheckboxGroupField
  | DescriptionListField
  | DescriptionListGroupField
  | ListField
  | RadioButtonGroupField
  | ToggleButtonGroupField;

type FieldWithoutChildren =
  | ButtonField
  | CardField
  | CheckboxField
  | DatepickerField
  | DescriptionListTermField
  | DescriptionListDescField
  | DividerField
  | GlobalMessageField
  | HeadingField
  | InputMessageField
  | LabelField
  | LinkField
  | ListItemField
  | LocalMessageField
  | ParagraphField
  | RadioButtonField
  | SelectField
  | SpinnerField
  | TextInputField
  | ToggleButtonField
  | TypographyField
  | VisuallyHiddenField;

type ButtonField = {
  component: 'Button';
  props: ButtonProps;
  hide?: boolean;
};

type CardField = {
  component: 'Card';
  props: CardProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type CheckboxField = {
  component: 'Checkbox';
  props: CheckboxProps;
  hide?: boolean;
};

type CheckboxGroupField = {
  component: 'CheckboxGroup';
  props: CheckboxGroupProps;
  hide?: boolean;
  children: CheckboxField[];
};

type DatepickerField = {
  component: 'Datepicker';
  props: DatepickerProps;
  hide?: boolean;
};

type DescriptionListField = {
  component: 'DescriptionList';
  props: DescriptionListProps;
  hide?: boolean;
  children: DescriptionListGroupField[];
};

type DescriptionListGroupField = {
  component: 'DescriptionListGroup';
  props: DescriptionListGroupProps;
  hide?: boolean;
  children: (DescriptionListTermField | DescriptionListDescField)[];
};

type DescriptionListTermField = {
  component: 'DescriptionListTerm';
  props: DescriptionListTermProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DescriptionListDescField = {
  component: 'DescriptionListDesc';
  props: DescriptionListDescProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DividerField = {
  component: 'Divider';
  props: DividerProps;
  hide?: boolean;
};

type GlobalMessageField = {
  component: 'GlobalMessage';
  props: GlobalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type HeadingField = {
  component: 'Heading';
  props: HeadingProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type InputMessageField = {
  component: 'InputMessage';
  props: InputMessageProps;
  hide?: boolean;
};

type LabelField = {
  component: 'Label';
  props: LabelProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type LinkField = {
  component: 'Link';
  props: LinkProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListItemField = {
  component: 'ListItem';
  props?: ListItemProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListField = {
  component: 'List';
  props?: ListProps;
  hide?: boolean;
  children: ListItemField[];
};

type LocalMessageField = {
  component: 'LocalMessage';
  props: LocalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ParagraphField = {
  component: 'Paragraph';
  props: ParagraphProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type RadioButtonField = {
  component: 'RadioButton';
  props: RadioButtonProps;
  hide?: boolean;
};

type RadioButtonGroupField = {
  component: 'RadioButtonGroup';
  props: RadioButtonGroupProps<string | number>;
  hide?: boolean;
  children: RadioButtonField[];
};

type SelectField = {
  component: 'Select';
  props: SelectProps<SelectOption<unknown>, boolean>;
  name: string;
  hide?: boolean;
};

type SpinnerField = {
  component: 'Spinner';
  props: SpinnerProps;
  hide?: boolean;
};

type TextInputField = {
  component: 'TextInput';
  props: TextInputProps;
  hide?: boolean;
};

type ToggleButtonField = {
  component: 'ToggleButton';
  props: ToggleButtonProps;
  hide?: boolean;
};

type ToggleButtonGroupField = {
  component: 'ToggleButtonGroup';
  props: ToggleButtonGroupProps;
  hide?: boolean;
  children: ToggleButtonField[];
};

type TypographyField = {
  component: 'Typography';
  props: TypographyProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type VisuallyHiddenField = {
  component: 'VisuallyHidden';
  props: VisuallyHiddenProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};
