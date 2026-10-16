import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import styles from '../common/layout.module.css';
import { type ResponsiveProps } from '../common/Responsive.types';
import { getResponsiveCSSProperties, hasValue } from '../common/utils';
import { ShowHide } from '../ShowHide';

export type BoxProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<T, ResponsiveProps>;

export const Box = <T extends ElementType = 'div'>({
  id,
  className,
  style,
  padding,
  paddingInline,
  paddingBlock,
  margin,
  marginInline,
  marginBlock,
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
  position,
  left,
  right,
  bottom,
  top,
  overflow,
  overflowX,
  overflowY,
  display,
  textAlign,
  flex,
  flexDirection,
  gap,
  columnGap,
  rowGap,
  alignItems,
  alignContent,
  justifyItems,
  placeItems,
  justifyContent,
  flexWrap,
  flexBasis,
  flexFlow,
  wordBreak,
  zIndex,
  htmlProps,
  ...rest
}: BoxProps<T>) => {
  const responsiveStyles = {
    ...getResponsiveCSSProperties(padding, 'r', 'p'),
    ...getResponsiveCSSProperties(paddingInline, 'r', 'p-i'),
    ...getResponsiveCSSProperties(paddingBlock, 'r', 'p-b'),
    ...getResponsiveCSSProperties(margin, 'r', 'm'),
    ...getResponsiveCSSProperties(marginInline, 'r', 'm-i'),
    ...getResponsiveCSSProperties(marginBlock, 'r', 'm-b'),
    ...getResponsiveCSSProperties(height, 'r', 'h'),
    ...getResponsiveCSSProperties(maxHeight, 'r', 'max-h'),
    ...getResponsiveCSSProperties(minHeight, 'r', 'min-h'),
    ...getResponsiveCSSProperties(width, 'r', 'w'),
    ...getResponsiveCSSProperties(maxWidth, 'r', 'max-w'),
    ...getResponsiveCSSProperties(minWidth, 'r', 'min-w'),
    ...getResponsiveCSSProperties(position, 'r', 'pos', { mode: 'raw' }),
    ...getResponsiveCSSProperties(left, 'r', 'l'),
    ...getResponsiveCSSProperties(right, 'r', 'r'),
    ...getResponsiveCSSProperties(top, 'r', 't'),
    ...getResponsiveCSSProperties(bottom, 'r', 'b'),
    ...getResponsiveCSSProperties(overflow, 'r', 'o', { mode: 'raw' }),
    ...getResponsiveCSSProperties(overflowX, 'r', 'o-x', { mode: 'raw' }),
    ...getResponsiveCSSProperties(overflowY, 'r', 'o-y', { mode: 'raw' }),
    ...getResponsiveCSSProperties(display, 'r', 'display', { mode: 'raw' }),
    ...getResponsiveCSSProperties(textAlign, 'r', 'text-align', {
      mode: 'raw',
    }),
    ...getResponsiveCSSProperties(flex, 'r', 'flex', { mode: 'raw' }),
    ...getResponsiveCSSProperties(flexDirection, 'r', 'flex-dir', {
      mode: 'raw',
    }),
    ...getResponsiveCSSProperties(gap, 'r', 'gap'),
    ...getResponsiveCSSProperties(columnGap, 'r', 'c-gap'),
    ...getResponsiveCSSProperties(rowGap, 'r', 'r-gap'),
    ...getResponsiveCSSProperties(alignItems, 'r', 'a-i', { mode: 'raw' }),
    ...getResponsiveCSSProperties(alignContent, 'r', 'a-c', { mode: 'raw' }),
    ...getResponsiveCSSProperties(justifyItems, 'r', 'j-i', { mode: 'raw' }),
    ...getResponsiveCSSProperties(placeItems, 'r', 'pl-i', { mode: 'raw' }),
    ...getResponsiveCSSProperties(justifyContent, 'r', 'j-c', { mode: 'raw' }),
    ...getResponsiveCSSProperties(flexWrap, 'r', 'wrap', { mode: 'raw' }),
    ...getResponsiveCSSProperties(flexBasis, 'r', 'basis', { mode: 'raw' }),
    ...getResponsiveCSSProperties(flexFlow, 'r', 'flow', { mode: 'raw' }),
    ...getResponsiveCSSProperties(wordBreak, 'r', 'word-break', {
      mode: 'raw',
    }),
    ...getResponsiveCSSProperties(zIndex, 'r', 'z-index'),
  };

  return (
    <ShowHide
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          hasValue(padding) && styles['dds-p'],
          hasValue(paddingInline) && styles['dds-p-i'],
          hasValue(paddingBlock) && styles['dds-p-b'],
          hasValue(margin) && styles['dds-m'],
          hasValue(marginInline) && styles['dds-m-i'],
          hasValue(marginBlock) && styles['dds-m-b'],
          hasValue(height) && styles['dds-h'],
          hasValue(maxHeight) && styles['dds-max-h'],
          hasValue(minHeight) && styles['dds-min-h'],
          hasValue(width) && styles['dds-w'],
          hasValue(maxWidth) && styles['dds-max-w'],
          hasValue(minWidth) && styles['dds-min-w'],
          hasValue(position) && styles['dds-pos'],
          hasValue(left) && styles['dds-l'],
          hasValue(right) && styles['dds-r'],
          hasValue(top) && styles['dds-t'],
          hasValue(bottom) && styles['dds-b'],
          hasValue(overflow) && styles['dds-o'],
          hasValue(overflowX) && styles['dds-o-x'],
          hasValue(overflowY) && styles['dds-o-y'],
          hasValue(display) && styles['dds-display'],
          hasValue(textAlign) && styles['dds-text-align'],
          hasValue(flex) && styles['dds-flex'],
          hasValue(flexDirection) && styles['dds-flex-dir'],
          hasValue(gap) && styles['dds-gap'],
          hasValue(columnGap) && styles['dds-c-gap'],
          hasValue(rowGap) && styles['dds-r-gap'],
          hasValue(alignContent) && styles['dds-a-c'],
          hasValue(alignItems) && styles['dds-a-i'],
          hasValue(justifyContent) && styles['dds-j-c'],
          hasValue(justifyItems) && styles['dds-j-i'],
          hasValue(placeItems) && styles['dds-pl-i'],
          hasValue(flexWrap) && styles['dds-wrap'],
          hasValue(flexBasis) && styles['dds-basis'],
          hasValue(flexFlow) && styles['dds-flow'],
          hasValue(wordBreak) && styles['dds-word-break'],
          hasValue(zIndex) && styles['dds-z-index'],
        ),
        { ...style, ...responsiveStyles },
        htmlProps,
        rest,
      )}
    />
  );
};

Box.displayName = 'Box';
