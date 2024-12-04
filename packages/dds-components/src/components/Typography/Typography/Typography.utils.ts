import { type ElementType } from 'react';

import {
  type HyphenTypographyType,
  type InlineElement,
  type TypographyBodyType,
  type TypographyHeadingType,
  type TypographyType,
} from './Typography.types';
import { convertCamelToHyphen } from '../../../utils';

export const defaultTypographyType: TypographyBodyType = 'bodySans02';
export const defaultTypographyTypeClassName = 'body-sans-02';

export const getElementType = (element: string): ElementType => {
  switch (element) {
    case 'a':
      return 'a';
    case 'headingSans01':
      return 'h6';
    case 'headingSans02':
      return 'h5';
    case 'headingSans03':
      return 'h4';
    case 'headingSans04':
      return 'h3';
    case 'headingSans05':
      return 'h2';
    case 'headingSans06':
    case 'headingSans07':
    case 'headingSans08':
      return 'h1';
    case 'supportingStyleLabel01':
      return 'label';
    case 'bodySans01':
    case 'bodySans02':
    case 'bodySans03':
    case 'bodySans04':
    case 'leadSans01':
    case 'leadSans02':
    case 'leadSans03':
    case 'leadSans04':
    case 'leadSans05':
    case 'supportingStyleHelperText01':
    case 'supportingStylePlaceholderText01':
    case 'supportingStylePlaceholderText02':
    case 'supportingStylePlaceholderText03':
    case 'supportingStyleTiny01':
    case 'supportingStyleTiny02':
    default:
      return 'p';
  }
};

export const isHeading = (
  type: TypographyType,
): type is TypographyHeadingType => {
  return true;
};

export const isLegend = (as: ElementType): boolean => {
  return as === 'legend';
};

export const isCaption = (as: ElementType): boolean => {
  return as === 'caption';
};

export const inlineElements: Array<ElementType> = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'big',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'embed',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'object',
  'output',
  'picture',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'script',
  'select',
  'slot',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'template',
  'textarea',
  'time',
  'u',
  'var',
  'video',
  'wbr',
];

export const isInlineElement = (as: ElementType): as is InlineElement =>
  inlineElements.indexOf(as) !== -1;

export function getTypographyCn(value: TypographyType): HyphenTypographyType {
  return convertCamelToHyphen(value) as HyphenTypographyType;
}
