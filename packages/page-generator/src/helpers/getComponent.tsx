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
  Heading,
  InputMessage,
  Label,
  Link,
  List,
  ListItem,
  LocalMessage,
  Paragraph,
  RadioButton,
  ScreenSize,
  RadioButtonGroup,
  Select,
  Spinner,
  TextInput,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  VisuallyHidden,
  HStack,
  VStack,
} from '@norges-domstoler/dds-components';
import { PageGeneratorField, PageGeneratorSupportedFields } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { ChangeEvent } from 'react';

type T = HTMLInputElement & Record<string, never>;

export const getComponent = (
  field: PageGeneratorField,
  index: number,
  fieldOnChange: (event: ChangeEvent<T>) => void,
  selectOnChange: (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => void,
  screenSize: ScreenSize
) => {
  switch (field.component) {
    case PageGeneratorSupportedFields.Button:
      return <Button {...field.props} key={index} />;
    case PageGeneratorSupportedFields.Card:
      return (
        <Card {...field.props} key={index}>
          {field.innerHTML}
        </Card>
      );
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
    case PageGeneratorSupportedFields.TextInput:
      return (
        <TextInput {...field.props} key={index} onChange={fieldOnChange} />
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
