import { type Control } from '@storybook/addon-docs/blocks';
import { type ArgTypes } from '@storybook/react-vite';

import {
  type ResponsiveProps,
  type ResponsiveStackProps,
  type ShowHideProps,
} from '../components/layout';

export interface ArgType {
  control?: Control;
  table?: { category: string };
}

type ResponsiveArgTypes<T> = {
  [k in keyof T]: ArgType;
};

export const categories = {
  html: 'HTML attributes',
  css: 'CSS properties',
};
export const categoryHtml = { category: categories.html };
export const categoryCss = { category: categories.css };

export const htmlArgType: Partial<ArgTypes> = {
  control: { disable: true },
  table: categoryHtml,
};

export const commonArgTypes: Partial<ArgTypes> = {
  id: htmlArgType,
  className: htmlArgType,
  htmlProps: htmlArgType,
  ref: { control: { disable: true } },
};

export const htmlEventArgType: Partial<ArgTypes> = {
  control: { disable: true },
  table: categoryHtml,
};

export const CSSArgType: ArgType = {
  control: { type: 'text' },
  table: categoryCss,
};

export const CSSSelectArgType: ArgType = {
  control: { type: 'select' },
  table: categoryCss,
};

export const commonResponsivePropsArgTypes: ResponsiveArgTypes<ShowHideProps> =
  {
    ...commonArgTypes,
    as: { control: 'text' },
    children: { control: { disable: true } },
    style: htmlArgType,
    showBelow: { control: { type: 'select' } },
    hideBelow: { control: { type: 'select' } },
  };

export const responsivePropsArgTypes: ResponsiveArgTypes<ResponsiveProps> = {
  ...commonResponsivePropsArgTypes,
  padding: CSSArgType,
  paddingBlock: CSSArgType,
  paddingInline: CSSArgType,
  margin: CSSArgType,
  marginBlock: CSSArgType,
  marginInline: CSSArgType,
  bottom: CSSArgType,
  top: CSSArgType,
  left: CSSArgType,
  right: CSSArgType,
  overflow: CSSArgType,
  overflowX: CSSArgType,
  overflowY: CSSArgType,
  width: CSSArgType,
  maxWidth: CSSArgType,
  minWidth: CSSArgType,
  height: CSSArgType,
  maxHeight: CSSArgType,
  minHeight: CSSArgType,
  position: CSSArgType,
  display: CSSArgType,
  flexDirection: CSSArgType,
  flexBasis: CSSArgType,
  flexFlow: CSSArgType,
  flexWrap: CSSArgType,
  alignContent: CSSArgType,
  alignItems: CSSArgType,
  justifyContent: CSSArgType,
  justifyItems: CSSArgType,
  gap: CSSArgType,
  rowGap: CSSArgType,
  columnGap: CSSArgType,
  textAlign: CSSArgType,
};

export const responsiveStackPropsArgTypes: ResponsiveArgTypes<ResponsiveStackProps> =
  {
    ...(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { display, flexDirection, ...rest } = responsivePropsArgTypes;
      return rest;
    })(),
  };
