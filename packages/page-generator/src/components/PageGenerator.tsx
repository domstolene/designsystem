import { ChangeEvent, useEffect, useState } from 'react';
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
} from '../types';
import { SubContainer } from '../styles';
import { PageGeneratorTokens } from '../tokens';
import {
  addFieldToState,
  getButtonRow,
  getComponent,
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
      value = Array.isArray(chosen) ? chosen : null;
    } else {
      value = chosen || null;
    }
    const newState = {
      ...myState,
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
                  screenSize
                )}
              </GridChild>
            )
          );
        }
      })}
    </Grid>
  );
};
