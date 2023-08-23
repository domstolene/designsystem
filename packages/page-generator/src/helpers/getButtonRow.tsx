import { ScreenSize } from '@norges-domstoler/dds-components';
import { ButtonRow, PageGeneratorFlexContainer } from '../styles';
import { PageGeneratorRow } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { ChangeEvent } from 'react';
import { getComponent } from '.';

type THTMLInputElement = HTMLInputElement & Record<string, never>;
type THTMLTextAreaElement = HTMLTextAreaElement & Record<string, never>;

export const getButtonRow = (
  index: number,
  obj: PageGeneratorRow,
  fieldOnChange: (event: ChangeEvent<THTMLInputElement>) => void,
  selectOnChange: (
    chosen:
      | SingleValue<Record<string, unknown>>
      | MultiValue<Record<string, unknown>>,
    name: string
  ) => void,
  textAreaOnChange: (event: ChangeEvent<THTMLTextAreaElement>) => void,
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
              textAreaOnChange,
              screenSize
            )
          );
        })}
      </PageGeneratorFlexContainer>
    </ButtonRow>
  );
};
