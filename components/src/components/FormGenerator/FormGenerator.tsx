import { ChangeEvent, useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { Checkbox, CheckboxGroup } from '../Checkbox';
import { Datepicker } from '../Datepicker';
import { Divider } from '../Divider';
import { GlobalMessage } from '../GlobalMessage';
import { InputMessage } from '../InputMessage';
import { List, ListItem } from '../List';
import { LocalMessage } from '../LocalMessage';
import { RadioButton, RadioButtonGroup } from '../RadioButton';
import { Select } from '../Select';
import { Spinner } from '../Spinner';
import { TextInput } from '../TextInput';
import { ToggleButton, ToggleButtonGroup } from '../ToggleButton';
import { Heading, Label, Link, Paragraph, Typography } from '../Typography';
import { VisuallyHidden } from '../VisuallyHidden';
import { Grid, GridChild } from '../Grid';
import {
  FormGeneratorField,
  FormGeneratorProps,
  FormGeneratorRow,
} from './FormGenerator.types';
import { MultiValue, SingleValue } from 'react-select';
import { ScreenSize, useScreenSize } from '../../hooks/useScreenSize';
import {
  ButtonRow,
  FormGeneratorFlexContainer,
  SubContainer,
} from './FormGenerator.styles';
import { formGeneratorTokens } from './FormGenerator.tokens';

export const FormGenerator = (props: FormGeneratorProps) => {
  const { fields = [], stateOnChange } = props;

  const [myState, setState] = useState({});

  const fieldOnChange = <T extends HTMLInputElement>(event: ChangeEvent<T>) => {
    const { id, name, value, checked } = event.target;
    const newState = {
      ...myState,
      [name || id]: event.target.type === 'checkbox' ? checked : value,
    };
    setState(newState);
    stateOnChange(newState);
  };

  const isMultiValue = (
    obj:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>
  ): obj is MultiValue<Record<string, unknown>> => {
    return (obj as MultiValue<Record<string, unknown>>)?.values !== undefined;
  };

  const selectOnChange = (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => {
    let value = null;
    if (isMultiValue(chosen)) {
      value = Array.isArray(chosen)
        ? chosen?.map(test => {
            return test.value;
          })
        : null;
    } else {
      value = chosen?.value || null;
    }
    const newState = {
      ...myState,
      [name]: value,
    };
    setState(newState);
    stateOnChange(newState);
  };

  const GetComponent = (field: FormGeneratorField, index: number) => {
    switch (field.component) {
      case 'Button':
        return <Button {...field.props} key={index} />;
      case 'Card':
        return (
          <Card {...field.props} key={index}>
            {field.innerHTML}
          </Card>
        );
      case 'Checkbox':
        return (
          <Checkbox {...field.props} key={index} onChange={fieldOnChange} />
        );
      case 'CheckboxGroup':
        return (
          <CheckboxGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </CheckboxGroup>
        );
      case 'Datepicker':
        return (
          <Datepicker {...field.props} key={index} onChange={fieldOnChange} />
        );
      case 'Divider':
        return <Divider {...field.props} key={index} />;
      case 'GlobalMessage':
        return (
          <GlobalMessage {...field.props} key={index}>
            {field.innerHTML}
          </GlobalMessage>
        );
      case 'Heading':
        return (
          <Heading {...field.props} key={index}>
            {field.innerHTML}
          </Heading>
        );
      case 'InputMessage':
        return <InputMessage {...field.props} key={index} />;
      case 'Label':
        return (
          <Label {...field.props} key={index}>
            {field.innerHTML}
          </Label>
        );
      case 'Link':
        return (
          <Link {...field.props} key={index}>
            {field.innerHTML}
          </Link>
        );
      case 'List':
        return (
          <List {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </List>
        );
      case 'ListItem':
        return (
          <ListItem {...field.props} key={index}>
            {field.innerHTML}
          </ListItem>
        );
      case 'LocalMessage':
        return (
          <LocalMessage {...field.props} key={index}>
            {field.innerHTML}
          </LocalMessage>
        );
      case 'Paragraph':
        return (
          <Paragraph {...field.props} key={index}>
            {field.innerHTML}
          </Paragraph>
        );
      case 'RadioButton':
        return (
          <RadioButton {...field.props} key={index} onChange={fieldOnChange} />
        );
      case 'RadioButtonGroup':
        field.props.direction =
          screenSize > ScreenSize.XSmall ? 'row' : 'column';
        return (
          <RadioButtonGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </RadioButtonGroup>
        );
      case 'Select':
        return (
          <Select
            {...field.props}
            key={index}
            onChange={option => selectOnChange(option, field.name)}
          />
        );
      case 'Spinner':
        return <Spinner {...field.props} key={index} />;
      case 'TextInput':
        return (
          <TextInput {...field.props} key={index} onChange={fieldOnChange} />
        );
      case 'ToggleButton':
        return (
          <ToggleButton {...field.props} key={index} onChange={fieldOnChange} />
        );
      case 'ToggleButtonGroup':
        return (
          <ToggleButtonGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </ToggleButtonGroup>
        );
      case 'Typography':
        return (
          <Typography {...field.props} key={index}>
            {field.innerHTML}
          </Typography>
        );
      case 'VisuallyHidden':
        return (
          <VisuallyHidden {...field.props} key={index}>
            {field.innerHTML}
          </VisuallyHidden>
        );
      default:
        return <></>;
    }
  };

  const isFormGeneratorRow = (
    obj: FormGeneratorField | FormGeneratorRow
  ): obj is FormGeneratorRow => {
    return (obj as FormGeneratorRow).rowType !== undefined;
  };

  const screenSize = useScreenSize();

  return (
    <Grid as="form" rowGap={formGeneratorTokens.rowGaps}>
      {fields.map((obj, index) => {
        if (isFormGeneratorRow(obj)) {
          if (obj.rowType === 'button') {
            return (
              <ButtonRow columnsOccupied="all">
                <FormGeneratorFlexContainer screenSize={screenSize}>
                  {obj.fields.map((field, groupedIndex) => {
                    return !field.hide && GetComponent(field, groupedIndex);
                  })}
                </FormGeneratorFlexContainer>
              </ButtonRow>
            );
          } else {
            return (
              <GridChild columnsOccupied="all">
                <SubContainer
                  screenSize={screenSize}
                  length={obj.fields.length}
                  breakpoint={obj.breakpoint}
                >
                  {obj.fields.map((field, groupedIndex) => {
                    return !field.hide && GetComponent(field, groupedIndex);
                  })}
                </SubContainer>
              </GridChild>
            );
          }
        } else {
          return (
            !obj.hide && (
              <GridChild columnsOccupied="all">
                {GetComponent(obj, index)}
              </GridChild>
            )
          );
        }
      })}
    </Grid>
  );
};
