import { type HTMLAttributes } from 'react';

import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import styles from '../common/layout.module.css';
import {
  type CSSProps,
  type ResponsiveProps,
} from '../common/Responsive.types';
import { getResponsiveCSSProperties } from '../common/utils';
import { Hide } from '../Hide';

export type BoxProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  ResponsiveProps & CSSProps,
  Omit<HTMLAttributes<HTMLDivElement>, keyof CSSProps>
>;

export const Box = ({
  id,
  as = 'div',
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
  flexDirection,
  gap,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexBasis,
  flexFlow,
  htmlProps,
  ...rest
}: BoxProps) => {
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
    ...getResponsiveCSSProperties(position, 'r', 'pos'),
    ...getResponsiveCSSProperties(left, 'r', 'l'),
    ...getResponsiveCSSProperties(right, 'r', 'r'),
    ...getResponsiveCSSProperties(top, 'r', 't'),
    ...getResponsiveCSSProperties(bottom, 'r', 'b'),
    ...getResponsiveCSSProperties(overflow, 'r', 'o'),
    ...getResponsiveCSSProperties(overflowX, 'r', 'o-x'),
    ...getResponsiveCSSProperties(overflowY, 'r', 'o-y'),
    ...getResponsiveCSSProperties(display, 'r', 'display'),
    ...getResponsiveCSSProperties(flexDirection, 'r', 'flex-dir'),
    ...getResponsiveCSSProperties(gap, 'r', 'gap'),
    ...getResponsiveCSSProperties(alignItems, 'r', 'a-i'),
    ...getResponsiveCSSProperties(alignContent, 'r', 'a-c'),
    ...getResponsiveCSSProperties(justifyItems, 'r', 'j-i'),
    ...getResponsiveCSSProperties(justifyContent, 'r', 'j-c'),
    ...getResponsiveCSSProperties(flexWrap, 'r', 'wrap'),
    ...getResponsiveCSSProperties(flexBasis, 'r', 'basis'),
    ...getResponsiveCSSProperties(flexFlow, 'r', 'flow'),
  };

  return (
    <Hide
      as={as}
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          padding && styles['dds-p'],
          paddingInline && styles['dds-p-i'],
          paddingBlock && styles['dds-p-b'],
          margin && styles['dds-m'],
          marginInline && styles['dds-m-i'],
          marginBlock && styles['dds-m-b'],
          height && styles['dds-h'],
          maxHeight && styles['dds-max-h'],
          minHeight && styles['dds-min-h'],
          width && styles['dds-w'],
          maxWidth && styles['dds-max-w'],
          minWidth && styles['dds-min-w'],
          position && styles['dds-pos'],
          left && styles['dds-l'],
          right && styles['dds-r'],
          top && styles['dds-t'],
          bottom && styles['dds-b'],
          overflow && styles['dds-o'],
          overflowX && styles['dds-o-x'],
          overflowY && styles['dds-o-y'],
          display && styles['dds-display'],
          flexDirection && styles['dds-flex-dir'],
          gap && styles['dds-gap'],
          alignContent && styles['dds-a-c'],
          alignItems && styles['dds-a-i'],
          justifyContent && styles['dds-j-c'],
          justifyItems && styles['dds-j-i'],
          flexWrap && styles['dds-wrap'],
          flexBasis && styles['dds-basis'],
          flexFlow && styles['dds-flow'],
        ),
        htmlProps,
        rest,
      )}
      style={{ ...style, ...responsiveStyles }}
    />
  );
};

Box.displayName = 'Box';
