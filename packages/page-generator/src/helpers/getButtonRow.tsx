import { ScreenSize } from '@norges-domstoler/dds-components';
import { ButtonRow, PageGeneratorFlexContainer } from '../styles';
import { PageGeneratorRow } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { ChangeEvent } from 'react';
import { getComponent } from '.';

type T = HTMLInputElement & Record<string, never>;

export const getButtonRow = (
  index: number,
  obj: PageGeneratorRow,
  fieldOnChange: (event: ChangeEvent<T>) => void,
  selectOnChange: (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => void,
  screenSize: ScreenSize
) => {
  return (
    <ButtonRow columnsOccupied="all" key={index}>
      <PageGeneratorFlexContainer screenSize={screenSize}>
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
      </PageGeneratorFlexContainer>
    </ButtonRow>
  );
};
