import { ChangeEvent, useEffect, useState } from 'react';
import { MultiValue, SingleValue } from 'react-select';
import {
  getBaseHTMLProps,
  useScreenSize,
} from '@norges-domstoler/dds-components';
import {
  PageGeneratorField,
  PageGeneratorRow,
  PageGeneratorState,
  PageGeneratorStateOptionTypes,
  SectionGeneratorProps,
} from '../types';
import React from 'react';
import {
  addFieldToState,
  getButtonRow,
  getComponent,
  isMultiValue,
  isPageGeneratorRow,
} from '../helpers';

/**
 * Generer komponenter fra @norges-domstoler/dds-components, basert på `fields` propertien. SectionGenerator legger på en wrapper, basert på `as` propertien.
 * @param props - `fields` inneholder felter eller rader med felter. `stateOnChange` er callback for statehåndtering. `as` setter HTML-element rundt hele SectionGenerator.
 */
export const SectionGenerator = (props: SectionGeneratorProps) => {
  const { fields = [], stateOnChange, as } = props;
  const { id, className, htmlProps, ...rest } = props;

  const [myState, setState] = useState({});

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
      stateOnChange(myState);
    }
  }, [myState]);

  const fieldOnChange = <T extends HTMLInputElement>(event: ChangeEvent<T>) => {
    const { id, name, value, checked } = event.target;
    const newState = {
      ...myState,
      [name || id]: event.target.type === 'checkbox' ? checked : value,
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
  };

  const screenSize = useScreenSize();

  const Parent = (props: { children: (false | JSX.Element)[] }) => {
    if (as === 'div') {
      return (
        <div {...getBaseHTMLProps(id, className, htmlProps, rest)}>
          {props.children}
        </div>
      );
    } else if (as === 'form') {
      return (
        <form {...getBaseHTMLProps(id, className, htmlProps, rest)}>
          {props.children}
        </form>
      );
    } else if (as === 'fragment') {
      return <React.Fragment>{props.children}</React.Fragment>;
    } else {
      return <></>;
    }
  };

  return (
    <Parent>
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
                screenSize
              )
            );
          } else {
            return (
              !obj.hide && (
                <React.Fragment key={index}>
                  {obj.fields.map((field, groupedIndex) => {
                    return (
                      !field.hide &&
                      getComponent(
                        field,
                        groupedIndex,
                        fieldOnChange,
                        selectOnChange,
                        screenSize
                      )
                    );
                  })}
                </React.Fragment>
              )
            );
          }
        } else {
          return (
            !obj.hide && (
              <React.Fragment key={index}>
                {getComponent(
                  obj,
                  index,
                  fieldOnChange,
                  selectOnChange,
                  screenSize
                )}
              </React.Fragment>
            )
          );
        }
      })}
    </Parent>
  );
};
