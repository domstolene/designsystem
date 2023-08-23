import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { MultiValue, SingleValue } from 'react-select';
import {
  getBaseHTMLProps,
  Grid,
  GridChild,
  useScreenSize,
} from '@norges-domstoler/dds-components';
import {
  PageGeneratorField,
  PageGeneratorProps,
  PageGeneratorRow,
  PageGeneratorState,
  PageGeneratorStateOptionTypes,
  PageGeneratorValidation,
} from '../types';
import { SubContainer } from '../styles';
import { PageGeneratorTokens } from '../tokens';
import {
  addFieldToState,
  getButtonRow,
  getComponent,
  isFieldWithValidations,
  isMultiValue,
  isPageGeneratorRow,
} from '../helpers';

/**
 * Generer komponenter fra @norges-domstoler/dds-components i et Grid view, basert på `fields` propertien. PageGenerator bruker Grid-komponenten fra @norges-domstoler/dds-components, slik at den håndterer alt av riktige marginer, mellomrom og responsivt design.
 * @param props - `fields` inneholder felter eller rader med felter. `stateOnChange` er callback for statehåndtering. `as` setter HTML-element rundt hele PageGenerator.
 */
export const PageGenerator = (props: PageGeneratorProps) => {
  const { fields = [], stateOnChange, as } = props;
  const { id, className, htmlProps, ...rest } = props;

  const [state, setState] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(() => {
    let state: PageGeneratorState<PageGeneratorStateOptionTypes> = {};
    fields.forEach((field: PageGeneratorField | PageGeneratorRow) => {
      if (isPageGeneratorRow(field)) {
        field.fields.forEach((field: PageGeneratorField) => {
          state = addFieldToState(field, state);
        });
      } else {
        state = addFieldToState(field, state);
      }
    });
    setState(state);
  }, []);

  useEffect(() => {
    if (stateOnChange) {
      stateOnChange(state, errors);
    }
  }, [state, errors]);

  const setErrorMessage = (index: number, errorMessage: string) => {
    const field = fields[index];
    if (isFieldWithValidations(field)) {
      fields[index] = {
        ...field,
        props: {
          ...field.props,
          errorMessage,
        },
      };
    }
  };

  const getFieldIndex = (name: string) => {
    return fields.findIndex(
      (f: PageGeneratorField | PageGeneratorRow) =>
        isFieldWithValidations(f) && f.props && f.props.name === name
    );
  };

  const updateErrors = (
    fieldErrors: PageGeneratorValidation[],
    name: string,
    value: string
  ) => {
    const newErrors = {
      ...errors,
      [name]: {
        value,
        errors: fieldErrors,
      },
    };
    setErrors(newErrors);
  };

  const validateFields = (name: string, value: string) => {
    const index = getFieldIndex(name);
    const field = fields[index];
    if (isFieldWithValidations(field)) {
      const fieldErrors =
        (field.validations &&
          field.validations.filter(
            (v: PageGeneratorValidation) => !v.rule(value)
          )) ||
        [];
      updateErrors(fieldErrors, name, value);
      setErrorMessage(
        index,
        fieldErrors.length > 0 ? fieldErrors[0].message : ''
      );
    }
  };

  const onBlur = <T extends HTMLInputElement>(event: FocusEvent<T>) => {
    const { name, value } = event.target;
    validateFields(name, value);
  };

  const fieldOnChange = <T extends HTMLInputElement>(event: ChangeEvent<T>) => {
    const { id, name, value, checked } = event.target;
    setErrorMessage(getFieldIndex(name), ''); //clear errormessage when user types
    const newState = {
      ...state,
      [name || id]: event.target.type === 'checkbox' ? checked : value,
    };
    setState(newState);
  };

  const textAreaOnChange = <T extends HTMLTextAreaElement>(event: ChangeEvent<T>) => {
    const { id, name, value } = event.target;
    const newState = {
      ...myState,
      [name || id]: value,
    };
    setState(newState);
  };

  const selectOnChange = (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => {
    let value = null;
    if (isMultiValue(chosen)) {
      value = Array.isArray(chosen) ? chosen : null;
    } else {
      value = chosen || null;
    }
    const newState = {
      ...state,
      [name]: value,
    };
    setState(newState);
  };

  const screenSize = useScreenSize();

  return (
    <Grid
      {...getBaseHTMLProps(id, className, htmlProps, rest)}
      as={as}
      rowGap={PageGeneratorTokens.rowGaps}
    >
      {fields.map((obj, index) => {
        if (isPageGeneratorRow(obj)) {
          if (obj.rowType === 'button') {
            return (
              !obj.hide &&
              getButtonRow(
                index,
                obj,
                fieldOnChange,
                selectOnChange,
                textAreaOnChange,
                screenSize
              )
            );
          } else {
            return (
              !obj.hide && (
                <GridChild columnsOccupied="all" key={index}>
                  <SubContainer
                    screenSize={screenSize}
                    length={obj.fields.length}
                    breakpoint={obj.breakpoint}
                  >
                    {obj.fields.map((field, groupedIndex) => {
                      return (
                        !field.hide &&
                        getComponent(
                          field,
                          groupedIndex,
                          fieldOnChange,
                          selectOnChange,
                          textAreaOnChange,
                          screenSize
                        )
                      );
                    })}
                  </SubContainer>
                </GridChild>
              )
            );
          }
        } else {
          return (
            !obj.hide && (
              <GridChild columnsOccupied="all" key={index}>
                {getComponent(
                  obj,
                  index,
                  fieldOnChange,
                  selectOnChange,
                  textAreaOnChange,
                  screenSize,
                  onBlur
                )}
              </GridChild>
            )
          );
        }
      })}
    </Grid>
  );
};

PageGenerator.displayName = 'PageGenerator';
