import {
  CardProps,
  CheckboxProps,
  CheckboxGroupProps,
  DatepickerProps,
  DescriptionListProps,
  DescriptionListGroupProps,
  DescriptionListTermProps,
  DescriptionListDescProps,
  DividerProps,
  DrawerProps,
  GlobalMessageProps,
  InputMessageProps,
  ListItemProps,
  ListProps,
  LocalMessageProps,
  RadioButtonProps,
  RadioButtonGroupProps,
  SelectProps,
  SelectOption,
  SpinnerProps,
  TextAreaProps,
  TextInputProps,
  ToggleButtonProps,
  ToggleButtonGroupProps,
  VisuallyHiddenProps,
  DrawerGroupProps,
  StackProps,
  Button,
  HeadingProps,
  LabelProps,
  LinkProps,
  ParagraphProps,
  TypographyProps,
} from '@norges-domstoler/dds-components';
import { PageGeneratorSupportedFields } from './PageGeneratorSupportedFields';
import { ComponentProps } from 'react';
import { SectionGeneratorRow } from './SectionGeneratorRow';

export interface PageGeneratorValidation {
  message: string;
  rule: (value: string) => boolean;
}

export type PageGeneratorField =
  | FieldWithChildren
  | FieldWithoutChildren
  | FieldWithValidations;

type FieldWithChildren =
  | CheckboxGroupField
  | DescriptionListField
  | DescriptionListGroupField
  | DrawerGroupField
  | HStackField
  | ListField
  | RadioButtonGroupField
  | ToggleButtonGroupField
  | VStackField;

type FieldWithoutChildren =
  | ButtonField
  | CardField
  | CheckboxField
  | DatepickerField
  | DescriptionListTermField
  | DescriptionListDescField
  | DividerField
  | DrawerField
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
  | ToggleButtonField
  | TypographyField
  | VisuallyHiddenField;

export type FieldWithValidations = TextInputField | TextAreaField;

interface ButtonField {
  component: PageGeneratorSupportedFields.Button;
  props: ComponentProps<typeof Button>;
  hide?: boolean;
}

interface CardField {
  component: PageGeneratorSupportedFields.Card;
  props: CardProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
  children?: (PageGeneratorField | SectionGeneratorRow)[];
}

interface CheckboxField {
  component: PageGeneratorSupportedFields.Checkbox;
  props: CheckboxProps;
  hide?: boolean;
}

interface CheckboxGroupField {
  component: PageGeneratorSupportedFields.CheckboxGroup;
  props: CheckboxGroupProps;
  hide?: boolean;
  children: CheckboxField[];
}

interface DatepickerField {
  component: PageGeneratorSupportedFields.Datepicker;
  props: DatepickerProps;
  hide?: boolean;
}

interface DescriptionListField {
  component: PageGeneratorSupportedFields.DescriptionList;
  props: DescriptionListProps;
  hide?: boolean;
  children: DescriptionListGroupField[];
}

export interface DescriptionListGroupField {
  component: PageGeneratorSupportedFields.DescriptionListGroup;
  props: DescriptionListGroupProps;
  hide?: boolean;
  children: (DescriptionListTermField | DescriptionListDescField)[];
}

interface DescriptionListTermField {
  component: PageGeneratorSupportedFields.DescriptionListTerm;
  props: DescriptionListTermProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
}

interface DescriptionListDescField {
  component: PageGeneratorSupportedFields.DescriptionListDesc;
  props: DescriptionListDescProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
}

interface DividerField {
  component: PageGeneratorSupportedFields.Divider;
  props: DividerProps;
  hide?: boolean;
}

interface DrawerField {
  component: PageGeneratorSupportedFields.Drawer;
  props: DrawerProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface DrawerGroupField {
  component: PageGeneratorSupportedFields.DrawerGroup;
  props: DrawerGroupProps;
  hide?: boolean;
  children: (ButtonField | DrawerField)[];
}

interface GlobalMessageField {
  component: PageGeneratorSupportedFields.GlobalMessage;
  props: GlobalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface HeadingField {
  component: PageGeneratorSupportedFields.Heading;
  props: HeadingProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface HStackField {
  component: PageGeneratorSupportedFields.HStack;
  props: StackProps;
  hide?: boolean;
  children: PageGeneratorField[];
}

interface InputMessageField {
  component: PageGeneratorSupportedFields.InputMessage;
  props: InputMessageProps;
  hide?: boolean;
}

interface LabelField {
  component: PageGeneratorSupportedFields.Label;
  props: LabelProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface LinkField {
  component: PageGeneratorSupportedFields.Link;
  props: LinkProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface ListItemField {
  component: PageGeneratorSupportedFields.ListItem;
  props?: ListItemProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface ListField {
  component: PageGeneratorSupportedFields.List;
  props?: ListProps;
  hide?: boolean;
  children: ListItemField[];
}

interface LocalMessageField {
  component: PageGeneratorSupportedFields.LocalMessage;
  props: LocalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface ParagraphField {
  component: PageGeneratorSupportedFields.Paragraph;
  props: ParagraphProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
}

interface RadioButtonField {
  component: PageGeneratorSupportedFields.RadioButton;
  props: RadioButtonProps;
  hide?: boolean;
}

interface RadioButtonGroupField {
  component: PageGeneratorSupportedFields.RadioButtonGroup;
  props: RadioButtonGroupProps<string | number>;
  hide?: boolean;
  children: RadioButtonField[];
}

interface SelectField {
  component: PageGeneratorSupportedFields.Select;
  props: SelectProps<SelectOption<unknown>, boolean>;
  name: string;
  hide?: boolean;
}

interface SpinnerField {
  component: PageGeneratorSupportedFields.Spinner;
  props: SpinnerProps;
  hide?: boolean;
}

interface TextAreaField {
  component: PageGeneratorSupportedFields.TextArea;
  props: TextAreaProps;
  validations?: PageGeneratorValidation[];
  hide?: boolean;
}

interface TextInputField {
  component: PageGeneratorSupportedFields.TextInput;
  props: TextInputProps;
  validations?: PageGeneratorValidation[];
  hide?: boolean;
}

interface ToggleButtonField {
  component: PageGeneratorSupportedFields.ToggleButton;
  props: ToggleButtonProps;
  hide?: boolean;
}

interface ToggleButtonGroupField {
  component: PageGeneratorSupportedFields.ToggleButtonGroup;
  props: ToggleButtonGroupProps;
  hide?: boolean;
  children: ToggleButtonField[];
}

interface TypographyField {
  component: PageGeneratorSupportedFields.Typography;
  props: TypographyProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
}

interface VisuallyHiddenField {
  component: PageGeneratorSupportedFields.VisuallyHidden;
  props: VisuallyHiddenProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
}

interface VStackField {
  component: PageGeneratorSupportedFields.VStack;
  props: StackProps;
  hide?: boolean;
  children: PageGeneratorField[];
}
