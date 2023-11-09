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

  const setErrorMessage = (name: string, errorMessage: string) => {
    const field = getFieldByName(name);
    if (field && isFieldWithValidations(field)) {
      field.props.errorMessage = errorMessage;
    }
  };

  const findFieldByNameInternal = (
    name: string,
    fieldsToSearch: (PageGeneratorField | PageGeneratorRow)[],
  ): PageGeneratorField | PageGeneratorRow | null => {
    for (const f of fieldsToSearch) {
      // Search for fields with validation named name
      if (isFieldWithValidations(f) && f.props && f.props.name === name) {
        return f;
      }
      // If it's a row, search through it's fields recursively
      if (isPageGeneratorRow(f) && f.fields && Array.isArray(f.fields)) {
        const result = findFieldByNameInternal(name, f.fields);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  const getFieldByName = (name: string) => {
    return findFieldByNameInternal(name, fields);
  };

  const updateErrors = (
    fieldErrors: PageGeneratorValidation[],
    name: string,
    value: string,
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
    const field = getFieldByName(name);
    if (field && isFieldWithValidations(field)) {
      const fieldErrors =
        (field.validations?.filter(
            (v: PageGeneratorValidation) => !v.rule(value),
          )) ||
        [];
      updateErrors(fieldErrors, name, value);
      setErrorMessage(
        name,
        fieldErrors.length > 0 ? fieldErrors[0].message : '',
      );
    }
  };

  const onBlur = <T extends HTMLInputElement | HTMLTextAreaElement>(
    event: FocusEvent<T>,
  ) => {
    const { name, value } = event.target;
    validateFields(name, value);
  };

  const fieldOnChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    event: ChangeEvent<T>,
  ) => {
    const { id, name, value } = event.target;
    const checked = (event as ChangeEvent<HTMLInputElement>).target?.checked;
    setErrorMessage(name, ''); //clear errormessage when user types
    const newState = {
      ...state,
      [name || id]: event.target.type === 'checkbox' ? checked : value,
    };
    setState(newState);
  };

  const selectOnChange = (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string,
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
                screenSize,
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
                          screenSize,
                          onBlur,
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
                  screenSize,
                  onBlur,
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
