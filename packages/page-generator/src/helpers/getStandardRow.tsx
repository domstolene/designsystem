import { getBaseHTMLProps, ScreenSize } from '@norges-domstoler/dds-components';
import { SectionGeneratorRow } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { ChangeEvent } from 'react';
import { getComponent } from '.';
import React from 'react';

type T = HTMLInputElement & Record<string, never>;

const Row = (props: SectionGeneratorRow) => {
  const { id, className, htmlProps, ...rest } = props;
  const restPartial = { ...rest } as Partial<SectionGeneratorRow>;
  delete restPartial.rowType;

  if (props.as === 'div') {
    return (
      <div {...getBaseHTMLProps(id, className, htmlProps, restPartial)}>
        {props.children}
      </div>
    );
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
};

export const getStandardRow = (
  index: number,
  obj: SectionGeneratorRow,
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
    <Row {...obj} key={index}>
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
    </Row>
  );
};
