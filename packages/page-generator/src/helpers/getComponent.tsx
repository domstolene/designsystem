import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListDesc,
  DescriptionListTerm,
  Divider,
  Drawer,
  DrawerGroup,
  GlobalMessage,
  InputMessage,
  List,
  ListItem,
  LocalMessage,
  RadioButton,
  ScreenSize,
  RadioButtonGroup,
  Select,
  Spinner,
  TextArea,
  TextInput,
  ToggleButton,
  ToggleButtonGroup,
  VisuallyHidden,
  HStack,
  VStack,
} from '@norges-domstoler/dds-components';
import {
  Heading,
  Label,
  Link,
  Paragraph,
  Typography,
} from '@norges-domstoler/dds-typography';
import { PageGeneratorField, PageGeneratorSupportedFields } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { FocusEvent, ChangeEvent } from 'react';
import { SectionGenerator } from '../components';

type THTMLInputElement = HTMLInputElement & Record<string, never>;
type THTMLTextAreaElement = HTMLTextAreaElement & Record<string, never>;

export const getComponent = (
  field: PageGeneratorField,
  index: number,
  fieldOnChange: (event: ChangeEvent<THTMLInputElement>) => void,
  selectOnChange: (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => void,
  textAreaOnChange: (event: ChangeEvent<THTMLTextAreaElement>) => void,
  screenSize: ScreenSize,
  onBlur?: <T extends HTMLInputElement | HTMLTextAreaElement>(event: FocusEvent<T>) => void
) => {
  switch (field.component) {
    case PageGeneratorSupportedFields.Button:
      return <Button {...field.props} key={index} />;
    case PageGeneratorSupportedFields.Card:
      if (field.innerHTML) {
        return (
          <Card {...field.props} key={index}>
            {field.innerHTML}
          </Card>
        );
      } else if (field.children) {
        <Card {...field.props} key={index}>
          <SectionGenerator as="fragment" fields={field.children} />
        </Card>;
      }
      return <></>;
    case PageGeneratorSupportedFields.Checkbox:
      return <Checkbox {...field.props} key={index} onChange={fieldOnChange} />;
    case PageGeneratorSupportedFields.CheckboxGroup:
      return (
        <CheckboxGroup {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </CheckboxGroup>
      );
    case PageGeneratorSupportedFields.Datepicker:
      return (
        <Datepicker {...field.props} key={index} onChange={fieldOnChange} />
      );
    case PageGeneratorSupportedFields.DescriptionList:
      return (
        <DescriptionList {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </DescriptionList>
      );
    case PageGeneratorSupportedFields.DescriptionListGroup:
      return (
        <DescriptionListGroup {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </DescriptionListGroup>
      );
    case PageGeneratorSupportedFields.DescriptionListDesc:
      return (
        <DescriptionListDesc {...field.props} key={index}>
          {field.innerHTML}
        </DescriptionListDesc>
      );
    case PageGeneratorSupportedFields.DescriptionListTerm:
      return (
        <DescriptionListTerm {...field.props} key={index}>
          {field.innerHTML}
        </DescriptionListTerm>
      );
    case PageGeneratorSupportedFields.Divider:
      return <Divider {...field.props} key={index} />;
    case PageGeneratorSupportedFields.Drawer:
      return (
        <Drawer {...field.props} key={index}>
          {field.innerHTML}
        </Drawer>
      );
    case PageGeneratorSupportedFields.DrawerGroup:
      return (
        <DrawerGroup {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </DrawerGroup>
      );
    case PageGeneratorSupportedFields.GlobalMessage:
      return (
        <GlobalMessage {...field.props} key={index}>
          {field.innerHTML}
        </GlobalMessage>
      );
    case PageGeneratorSupportedFields.Heading:
      return (
        <Heading {...field.props} key={index}>
          {field.innerHTML}
        </Heading>
      );
    case PageGeneratorSupportedFields.HStack:
      return (
        <HStack {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </HStack>
      );
    case PageGeneratorSupportedFields.InputMessage:
      return <InputMessage {...field.props} key={index} />;
    case PageGeneratorSupportedFields.Label:
      return (
        <Label {...field.props} key={index}>
          {field.innerHTML}
        </Label>
      );
    case PageGeneratorSupportedFields.Link:
      return (
        <Link {...field.props} key={index}>
          {field.innerHTML}
        </Link>
      );
    case PageGeneratorSupportedFields.List:
      return (
        <List {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </List>
      );
    case PageGeneratorSupportedFields.ListItem:
      return (
        <ListItem {...field.props} key={index}>
          {field.innerHTML}
        </ListItem>
      );
    case PageGeneratorSupportedFields.LocalMessage:
      return (
        <LocalMessage {...field.props} key={index}>
          {field.innerHTML}
        </LocalMessage>
      );
    case PageGeneratorSupportedFields.Paragraph:
      return (
        <Paragraph {...field.props} key={index}>
          {field.innerHTML}
        </Paragraph>
      );
    case PageGeneratorSupportedFields.RadioButton:
      return (
        <RadioButton {...field.props} key={index} onChange={fieldOnChange} />
      );
    case PageGeneratorSupportedFields.RadioButtonGroup:
      field.props.direction = screenSize > ScreenSize.XSmall ? 'row' : 'column';
      return (
        <RadioButtonGroup {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </RadioButtonGroup>
      );
    case PageGeneratorSupportedFields.Select:
      return (
        <Select
          {...field.props}
          key={index}
          onChange={option => selectOnChange(option, field.name)}
        />
      );
    case PageGeneratorSupportedFields.Spinner:
      return <Spinner {...field.props} key={index} />;
    case PageGeneratorSupportedFields.TextArea:
      return (
        <TextArea
          {...field.props}
          key={index}
          onChange={textAreaOnChange}
          onBlur={onBlur} />
      );
    case PageGeneratorSupportedFields.TextInput:
      return (
        <TextInput
          {...field.props}
          key={index}
          onChange={fieldOnChange}
          onBlur={onBlur}
        />
      );
    case PageGeneratorSupportedFields.ToggleButton:
      return (
        <ToggleButton {...field.props} key={index} onChange={fieldOnChange} />
      );
    case PageGeneratorSupportedFields.ToggleButtonGroup:
      return (
        <ToggleButtonGroup {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </ToggleButtonGroup>
      );
    case PageGeneratorSupportedFields.Typography:
      return (
        <Typography {...field.props} key={index}>
          {field.innerHTML}
        </Typography>
      );
    case PageGeneratorSupportedFields.VisuallyHidden:
      return (
        <VisuallyHidden {...field.props} key={index}>
          {field.innerHTML}
        </VisuallyHidden>
      );
    case PageGeneratorSupportedFields.VStack:
      return (
        <VStack {...field.props} key={index}>
          {field.children.map((child, childIndex) => {
            return (
              !child.hide &&
              getComponent(
                child,
                childIndex,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          })}
        </VStack>
      );
    default:
      return <></>;
  }
};
