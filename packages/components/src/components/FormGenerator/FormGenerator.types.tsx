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

export enum FormGeneratorSupportedFields {
  Button = 'Button',
  Card = 'Card',
  Checkbox = 'Checkbox',
  CheckboxGroup = 'CheckboxGroup',
  Datepicker = 'Datepicker',
  DescriptionList = 'DescriptionList',
  DescriptionListGroup = 'DescriptionListGroup',
  DescriptionListDesc = 'DescriptionListDesc',
  DescriptionListTerm = 'DescriptionListTerm',
  Divider = 'Divider',
  GlobalMessage = 'GlobalMessage',
  Heading = 'Heading',
  InputMessage = 'InputMessage',
  Label = 'Label',
  Link = 'Link',
  List = 'List',
  ListItem = 'ListItem',
  LocalMessage = 'LocalMessage',
  Paragraph = 'Paragraph',
  RadioButton = 'RadioButton',
  RadioButtonGroup = 'RadioButtonGroup',
  Select = 'Select',
  Spinner = 'Spinner',
  TextInput = 'TextInput',
  ToggleButton = 'ToggleButton',
  ToggleButtonGroup = 'ToggleButtonGroup',
  Typography = 'Typography',
  VisuallyHidden = 'VisuallyHidden',
}

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
  component: FormGeneratorSupportedFields.Button;
  props: ButtonProps;
  hide?: boolean;
};

type CardField = {
  component: FormGeneratorSupportedFields.Card;
  props: CardProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type CheckboxField = {
  component: FormGeneratorSupportedFields.Checkbox;
  props: CheckboxProps;
  hide?: boolean;
};

type CheckboxGroupField = {
  component: FormGeneratorSupportedFields.CheckboxGroup;
  props: CheckboxGroupProps;
  hide?: boolean;
  children: CheckboxField[];
};

type DatepickerField = {
  component: FormGeneratorSupportedFields.Datepicker;
  props: DatepickerProps;
  hide?: boolean;
};

type DescriptionListField = {
  component: FormGeneratorSupportedFields.DescriptionList;
  props: DescriptionListProps;
  hide?: boolean;
  children: DescriptionListGroupField[];
};

type DescriptionListGroupField = {
  component: FormGeneratorSupportedFields.DescriptionListGroup;
  props: DescriptionListGroupProps;
  hide?: boolean;
  children: (DescriptionListTermField | DescriptionListDescField)[];
};

type DescriptionListTermField = {
  component: FormGeneratorSupportedFields.DescriptionListTerm;
  props: DescriptionListTermProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DescriptionListDescField = {
  component: FormGeneratorSupportedFields.DescriptionListDesc;
  props: DescriptionListDescProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DividerField = {
  component: FormGeneratorSupportedFields.Divider;
  props: DividerProps;
  hide?: boolean;
};

type GlobalMessageField = {
  component: FormGeneratorSupportedFields.GlobalMessage;
  props: GlobalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type HeadingField = {
  component: FormGeneratorSupportedFields.Heading;
  props: HeadingProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type InputMessageField = {
  component: FormGeneratorSupportedFields.InputMessage;
  props: InputMessageProps;
  hide?: boolean;
};

type LabelField = {
  component: FormGeneratorSupportedFields.Label;
  props: LabelProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type LinkField = {
  component: FormGeneratorSupportedFields.Link;
  props: LinkProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListItemField = {
  component: FormGeneratorSupportedFields.ListItem;
  props?: ListItemProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListField = {
  component: FormGeneratorSupportedFields.List;
  props?: ListProps;
  hide?: boolean;
  children: ListItemField[];
};

type LocalMessageField = {
  component: FormGeneratorSupportedFields.LocalMessage;
  props: LocalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ParagraphField = {
  component: FormGeneratorSupportedFields.Paragraph;
  props: ParagraphProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type RadioButtonField = {
  component: FormGeneratorSupportedFields.RadioButton;
  props: RadioButtonProps;
  hide?: boolean;
};

type RadioButtonGroupField = {
  component: FormGeneratorSupportedFields.RadioButtonGroup;
  props: RadioButtonGroupProps<string | number>;
  hide?: boolean;
  children: RadioButtonField[];
};

type SelectField = {
  component: FormGeneratorSupportedFields.Select;
  props: SelectProps<SelectOption<unknown>, boolean>;
  name: string;
  hide?: boolean;
};

type SpinnerField = {
  component: FormGeneratorSupportedFields.Spinner;
  props: SpinnerProps;
  hide?: boolean;
};

type TextInputField = {
  component: FormGeneratorSupportedFields.TextInput;
  props: TextInputProps;
  hide?: boolean;
};

type ToggleButtonField = {
  component: FormGeneratorSupportedFields.ToggleButton;
  props: ToggleButtonProps;
  hide?: boolean;
};

type ToggleButtonGroupField = {
  component: FormGeneratorSupportedFields.ToggleButtonGroup;
  props: ToggleButtonGroupProps;
  hide?: boolean;
  children: ToggleButtonField[];
};

type TypographyField = {
  component: FormGeneratorSupportedFields.Typography;
  props: TypographyProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type VisuallyHiddenField = {
  component: FormGeneratorSupportedFields.VisuallyHidden;
  props: VisuallyHiddenProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};
