import { type ElementType } from 'react';

import {
  type InlineElement,
  TG_HEADING_TYPES,
  type TypographyHeadingType,
  type TypographyType,
} from './Typography.types';
import { type TextColor, isTextColor } from '../../../utils';
import typographyStyles from '../typographyStyles.module.css';

export const getElementType = (element: TypographyType): ElementType => {
  switch (element) {
    case 'a':
      return 'a';
    case 'heading-xxsmall':
      return 'h6';
    case 'heading-xsmall':
      return 'h5';
    case 'heading-small':
      return 'h4';
    case 'heading-medium':
      return 'h3';
    case 'heading-large':
      return 'h2';
    case 'heading-xlarge':
    case 'heading-xxlarge':
      return 'h1';
    case 'label-medium':
      return 'label';
    case 'body-short-xsmall':
    case 'body-short-small':
    case 'body-short-medium':
    case 'body-short-large':
    case 'body-long-xsmall':
    case 'body-long-small':
    case 'body-long-medium':
    case 'body-long-large':
    case 'lead-medium':
    default:
      return 'p';
  }
};

export const isHeading = (
  type: TypographyType,
): type is TypographyHeadingType => {
  return TG_HEADING_TYPES.includes(type as TypographyHeadingType);
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

export const getColorCn = (color?: TextColor) => {
  if (!isTextColor(color)) return null;
  const [prefix] = color.split('-', 1);
  const key = `${prefix}-color--${color.slice(prefix.length + 1)}`;
  return (typographyStyles as Record<string, string>)[key] || null;
};
