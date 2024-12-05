import { type ElementType } from 'react';

import {
  type HyphenTypographyType,
  type InlineElement,
  type TypographyBodyType,
  type TypographyHeadingType,
  type TypographyType,
} from './Typography.types';
import { convertCamelToHyphen } from '../../../utils';

export const defaultTypographyType: TypographyBodyType = 'bodyMedium';
export const defaultTypographyTypeClassName: HyphenTypographyType =
  'body-medium';

export const getElementType = (element: TypographyType): ElementType => {
  switch (element) {
    case 'a':
      return 'a';
    case 'headingXxsmall':
      return 'h6';
    case 'headingXsmall':
      return 'h5';
    case 'headingSmall':
      return 'h4';
    case 'headingMedium':
      return 'h3';
    case 'headingLarge':
      return 'h2';
    case 'headingXlarge':
    case 'headingXxlarge':
      return 'h1';
    case 'labelMedium':
      return 'label';
    case 'bodyXsmall':
    case 'bodySmall':
    case 'bodyMedium':
    case 'bodyLarge':
    case 'leadMedium':
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
