import {
  BaseComponentPropsWithChildren,
  getBaseHTMLProps,
  ScreenSize,
} from '@norges-domstoler/dds-components';
import { SectionGeneratorRow } from '../types';
import { MultiValue, SingleValue } from 'react-select';
import { ChangeEvent } from 'react';
import { getComponent } from '.';
import React from 'react';

type T = HTMLInputElement & Record<string, never>;

const Row = (
  props: BaseComponentPropsWithChildren<HTMLElement, SectionGeneratorRow>
) => {
  const { id, className, htmlProps, ...rest } = props;
  if (props.as === 'div') {
    return (
      <div {...getBaseHTMLProps(id, className, htmlProps, rest)}>
        {props.children}
      </div>
    );
  } else if (props.as === 'fragment') {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return <></>;
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
