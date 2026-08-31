import { type ElementType } from 'react';

import {
  type PolymorphicBaseComponentProps,
  getBaseHTMLProps,
} from '../../../types';
import { cn } from '../../../utils';
import { Box } from '../Box';
import styles from '../common/layout.module.css';
import { type ResponsiveBleedProps } from '../common/Responsive.types';
import { getResponsiveCSSProperties, hasValue } from '../common/utils';

export type BleedProps<T extends ElementType = 'div'> =
  PolymorphicBaseComponentProps<
    T,
    {
      /**
       * Setter positiv padding som gjenspeiler negativ margin satt med `bleedMarginBlock` og `bleedMarginInline`. Overskriver `paddingInline` og `paddingBlock`.
       */
      reflectivePadding?: boolean;
    } & ResponsiveBleedProps
  >;

export const Bleed = <T extends ElementType = 'div'>({
  id,
  className,
  style,
  htmlProps,
  bleedMarginBlock,
  bleedMarginInline,
  reflectivePadding,
  ...rest
}: BleedProps<T>) => {
  const reflStyles = reflectivePadding
    ? {
        ...getResponsiveCSSProperties(bleedMarginInline, 'r', 'p-i'),
        ...getResponsiveCSSProperties(bleedMarginBlock, 'r', 'p-b'),
      }
    : {};
  const responsiveStyles = {
    ...getResponsiveCSSProperties(bleedMarginInline, 'r', 'bleed-m-i', true),
    ...getResponsiveCSSProperties(bleedMarginBlock, 'r', 'bleed-m-b', true),
    ...reflStyles,
  };

  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(
          className,
          hasValue(bleedMarginInline) && styles['dds-bleed-m-i'],
          hasValue(bleedMarginBlock) && styles['dds-bleed-m-b'],
          hasValue(bleedMarginInline) && reflectivePadding && styles['dds-p-i'],
          hasValue(bleedMarginBlock) && reflectivePadding && styles['dds-p-b'],
        ),
        { ...style, ...responsiveStyles },
        htmlProps,
        rest,
      )}
    />
  );
};

Bleed.displayName = 'Bleed';
