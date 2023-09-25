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
  TextInputProps,
  ToggleButtonProps,
  ToggleButtonGroupProps,
  VisuallyHiddenProps,
  DrawerGroupProps,
  StackProps,
  Button,
} from '@norges-domstoler/dds-components';
import {
  HeadingProps,
  LabelProps,
  LinkProps,
  ParagraphProps,
  TypographyProps,
} from '@norges-domstoler/dds-typography';
import { PageGeneratorSupportedFields } from './PageGeneratorSupportedFields';
import { ComponentProps } from 'react';
import { SectionGeneratorRow } from './SectionGeneratorRow';

export type PageGeneratorValidation = {
  message: string;
  rule: (value: string) => boolean;
};

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

export type FieldWithValidations = TextInputField;

type ButtonField = {
  component: PageGeneratorSupportedFields.Button;
  props: ComponentProps<typeof Button>;
  hide?: boolean;
};

type CardField = {
  component: PageGeneratorSupportedFields.Card;
  props: CardProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
  children?: (PageGeneratorField | SectionGeneratorRow)[];
};

type CheckboxField = {
  component: PageGeneratorSupportedFields.Checkbox;
  props: CheckboxProps;
  hide?: boolean;
};

type CheckboxGroupField = {
  component: PageGeneratorSupportedFields.CheckboxGroup;
  props: CheckboxGroupProps;
  hide?: boolean;
  children: CheckboxField[];
};

type DatepickerField = {
  component: PageGeneratorSupportedFields.Datepicker;
  props: DatepickerProps;
  hide?: boolean;
};

type DescriptionListField = {
  component: PageGeneratorSupportedFields.DescriptionList;
  props: DescriptionListProps;
  hide?: boolean;
  children: DescriptionListGroupField[];
};

export type DescriptionListGroupField = {
  component: PageGeneratorSupportedFields.DescriptionListGroup;
  props: DescriptionListGroupProps;
  hide?: boolean;
  children: (DescriptionListTermField | DescriptionListDescField)[];
};

type DescriptionListTermField = {
  component: PageGeneratorSupportedFields.DescriptionListTerm;
  props: DescriptionListTermProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DescriptionListDescField = {
  component: PageGeneratorSupportedFields.DescriptionListDesc;
  props: DescriptionListDescProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type DividerField = {
  component: PageGeneratorSupportedFields.Divider;
  props: DividerProps;
  hide?: boolean;
};

type DrawerField = {
  component: PageGeneratorSupportedFields.Drawer;
  props: DrawerProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type DrawerGroupField = {
  component: PageGeneratorSupportedFields.DrawerGroup;
  props: DrawerGroupProps;
  hide?: boolean;
  children: (ButtonField | DrawerField)[];
};

type GlobalMessageField = {
  component: PageGeneratorSupportedFields.GlobalMessage;
  props: GlobalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type HeadingField = {
  component: PageGeneratorSupportedFields.Heading;
  props: HeadingProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type HStackField = {
  component: PageGeneratorSupportedFields.HStack;
  props: StackProps;
  hide?: boolean;
  children: PageGeneratorField[];
};

type InputMessageField = {
  component: PageGeneratorSupportedFields.InputMessage;
  props: InputMessageProps;
  hide?: boolean;
};

type LabelField = {
  component: PageGeneratorSupportedFields.Label;
  props: LabelProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type LinkField = {
  component: PageGeneratorSupportedFields.Link;
  props: LinkProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListItemField = {
  component: PageGeneratorSupportedFields.ListItem;
  props?: ListItemProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ListField = {
  component: PageGeneratorSupportedFields.List;
  props?: ListProps;
  hide?: boolean;
  children: ListItemField[];
};

type LocalMessageField = {
  component: PageGeneratorSupportedFields.LocalMessage;
  props: LocalMessageProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type ParagraphField = {
  component: PageGeneratorSupportedFields.Paragraph;
  props: ParagraphProps;
  hide?: boolean;
  innerHTML?: JSX.Element | string;
};

type RadioButtonField = {
  component: PageGeneratorSupportedFields.RadioButton;
  props: RadioButtonProps;
  hide?: boolean;
};

type RadioButtonGroupField = {
  component: PageGeneratorSupportedFields.RadioButtonGroup;
  props: RadioButtonGroupProps<string | number>;
  hide?: boolean;
  children: RadioButtonField[];
};

type SelectField = {
  component: PageGeneratorSupportedFields.Select;
  props: SelectProps<SelectOption<unknown>, boolean>;
  name: string;
  hide?: boolean;
};

type SpinnerField = {
  component: PageGeneratorSupportedFields.Spinner;
  props: SpinnerProps;
  hide?: boolean;
};

type TextInputField = {
  component: PageGeneratorSupportedFields.TextInput;
  props: TextInputProps;
  validations?: PageGeneratorValidation[];
  hide?: boolean;
};

type ToggleButtonField = {
  component: PageGeneratorSupportedFields.ToggleButton;
  props: ToggleButtonProps;
  hide?: boolean;
};

type ToggleButtonGroupField = {
  component: PageGeneratorSupportedFields.ToggleButtonGroup;
  props: ToggleButtonGroupProps;
  hide?: boolean;
  children: ToggleButtonField[];
};

type TypographyField = {
  component: PageGeneratorSupportedFields.Typography;
  props: TypographyProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type VisuallyHiddenField = {
  component: PageGeneratorSupportedFields.VisuallyHidden;
  props: VisuallyHiddenProps;
  hide?: boolean;
  innerHTML: JSX.Element | string;
};

type VStackField = {
  component: PageGeneratorSupportedFields.VStack;
  props: StackProps;
  hide?: boolean;
  children: PageGeneratorField[];
};