import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { Checkbox, CheckboxGroup } from '../Checkbox';
import { Datepicker } from '../Datepicker';
import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListGroup,
  DescriptionListTerm,
} from '../DescriptionList';
import { Divider } from '../Divider';
import { GlobalMessage } from '../GlobalMessage';
import { InputMessage } from '../InputMessage';
import { List, ListItem } from '../List';
import { LocalMessage } from '../LocalMessage';
import { RadioButton, RadioButtonGroup } from '../RadioButton';
import { Select, SelectOption } from '../Select';
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
  FormGeneratorSupportedFields as SupportedFields,
} from './FormGenerator.types';
import { MultiValue, PropsValue, SingleValue } from 'react-select';
import { ScreenSize, useScreenSize } from '../../hooks/useScreenSize';
import {
  ButtonRow,
  FormGeneratorFlexContainer,
  SubContainer,
} from './FormGenerator.styles';
import { formGeneratorTokens } from './FormGenerator.tokens';
import { getBaseHTMLProps } from '../../types';

type StateOptionTypes =
  | string
  | number
  | boolean
  | readonly string[]
  | undefined
  | PropsValue<SelectOption<unknown>>;

interface State<StateOptionTypes> {
  [name: string]: StateOptionTypes;
}

export const FormGenerator = (props: FormGeneratorProps) => {
  const { fields = [], stateOnChange } = props;
  const { id, className, htmlProps, ...rest } = props;

  const [myState, setState] = useState({});

  const addFieldToState = (
    field: FormGeneratorField,
    state: State<StateOptionTypes>
  ) => {
    let key = '';
    switch (field.component) {
      case SupportedFields.Checkbox:
      case SupportedFields.ToggleButton:
        key = field.props.name || field.props.id || 'FIELD_MISSING_NAME_OR_ID';
        state = {
          ...state,
          [key]: field.props.defaultChecked,
        };
        return state;
      case SupportedFields.CheckboxGroup:
      case SupportedFields.ToggleButtonGroup:
        field.children.forEach(child => {
          state = addFieldToState(child, state);
        });
        return state;
      case SupportedFields.RadioButton:
      case SupportedFields.RadioButtonGroup:
        key = field.props.name || field.props.id || 'FIELD_MISSING_NAME_OR_ID';
        state = {
          ...state,
          [key]: field.props.value,
        };
        return state;
      case SupportedFields.Select:
        key = field.name || field.props.id || 'FIELD_MISSING_NAME_OR_ID';
        state = {
          ...state,
          [key]: field.props.defaultValue,
        };
        return state;
      case SupportedFields.Datepicker:
      case SupportedFields.TextInput:
        key = field.props.name || field.props.id || 'FIELD_MISSING_NAME_OR_ID';
        state = {
          ...state,
          [key]: field.props.defaultValue,
        };
        return state;
    }
    return state;
  };

  useEffect(() => {
    let state: State<StateOptionTypes> = {};
    fields.forEach((field: FormGeneratorField | FormGeneratorRow) => {
      if (isFormGeneratorRow(field)) {
        field.fields.forEach((field: FormGeneratorField) => {
          state = addFieldToState(field, state);
        });
      } else {
        state = addFieldToState(field, state);
      }
    });
    setState(state);
  }, []);

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
      case SupportedFields.Button:
        return <Button {...field.props} key={index} />;
      case SupportedFields.Card:
        return (
          <Card {...field.props} key={index}>
            {field.innerHTML}
          </Card>
        );
      case SupportedFields.Checkbox:
        return (
          <Checkbox {...field.props} key={index} onChange={fieldOnChange} />
        );
      case SupportedFields.CheckboxGroup:
        return (
          <CheckboxGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </CheckboxGroup>
        );
      case SupportedFields.Datepicker:
        return (
          <Datepicker {...field.props} key={index} onChange={fieldOnChange} />
        );
      case SupportedFields.DescriptionList:
        return (
          <DescriptionList {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </DescriptionList>
        );
      case SupportedFields.DescriptionListGroup:
        return (
          <DescriptionListGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </DescriptionListGroup>
        );
      case SupportedFields.DescriptionListDesc:
        return (
          <DescriptionListDesc {...field.props} key={index}>
            {field.innerHTML}
          </DescriptionListDesc>
        );
      case SupportedFields.DescriptionListTerm:
        return (
          <DescriptionListTerm {...field.props} key={index}>
            {field.innerHTML}
          </DescriptionListTerm>
        );
      case SupportedFields.Divider:
        return <Divider {...field.props} key={index} />;
      case SupportedFields.GlobalMessage:
        return (
          <GlobalMessage {...field.props} key={index}>
            {field.innerHTML}
          </GlobalMessage>
        );
      case SupportedFields.Heading:
        return (
          <Heading {...field.props} key={index}>
            {field.innerHTML}
          </Heading>
        );
      case SupportedFields.InputMessage:
        return <InputMessage {...field.props} key={index} />;
      case SupportedFields.Label:
        return (
          <Label {...field.props} key={index}>
            {field.innerHTML}
          </Label>
        );
      case SupportedFields.Link:
        return (
          <Link {...field.props} key={index}>
            {field.innerHTML}
          </Link>
        );
      case SupportedFields.List:
        return (
          <List {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </List>
        );
      case SupportedFields.ListItem:
        return (
          <ListItem {...field.props} key={index}>
            {field.innerHTML}
          </ListItem>
        );
      case SupportedFields.LocalMessage:
        return (
          <LocalMessage {...field.props} key={index}>
            {field.innerHTML}
          </LocalMessage>
        );
      case SupportedFields.Paragraph:
        return (
          <Paragraph {...field.props} key={index}>
            {field.innerHTML}
          </Paragraph>
        );
      case SupportedFields.RadioButton:
        return (
          <RadioButton {...field.props} key={index} onChange={fieldOnChange} />
        );
      case SupportedFields.RadioButtonGroup:
        field.props.direction =
          screenSize > ScreenSize.XSmall ? 'row' : 'column';
        return (
          <RadioButtonGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </RadioButtonGroup>
        );
      case SupportedFields.Select:
        return (
          <Select
            {...field.props}
            key={index}
            onChange={option => selectOnChange(option, field.name)}
          />
        );
      case SupportedFields.Spinner:
        return <Spinner {...field.props} key={index} />;
      case SupportedFields.TextInput:
        return (
          <TextInput {...field.props} key={index} onChange={fieldOnChange} />
        );
      case SupportedFields.ToggleButton:
        return (
          <ToggleButton {...field.props} key={index} onChange={fieldOnChange} />
        );
      case SupportedFields.ToggleButtonGroup:
        return (
          <ToggleButtonGroup {...field.props} key={index}>
            {field.children.map((child, childIndex) => {
              return !child.hide && GetComponent(child, childIndex);
            })}
          </ToggleButtonGroup>
        );
      case SupportedFields.Typography:
        return (
          <Typography {...field.props} key={index}>
            {field.innerHTML}
          </Typography>
        );
      case SupportedFields.VisuallyHidden:
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
    <Grid
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      as="form"
      rowGap={formGeneratorTokens.rowGaps}
    >
      {fields.map((obj, index) => {
        if (isFormGeneratorRow(obj)) {
          if (obj.rowType === 'button') {
            return (
              <ButtonRow columnsOccupied="all" key={index}>
                <FormGeneratorFlexContainer screenSize={screenSize}>
                  {obj.fields.map((field, groupedIndex) => {
                    return !field.hide && GetComponent(field, groupedIndex);
                  })}
                </FormGeneratorFlexContainer>
              </ButtonRow>
            );
          } else {
            return (
              <GridChild columnsOccupied="all" key={index}>
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
              <GridChild columnsOccupied="all" key={index}>
                {GetComponent(obj, index)}
              </GridChild>
            )
          );
        }
      })}
    </Grid>
  );
};
