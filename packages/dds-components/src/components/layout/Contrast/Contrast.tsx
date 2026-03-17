import { type ElementType } from 'react';

import { Box, type BoxProps } from '..';
import styles from './Contrast.module.css';
import { getBaseHTMLProps } from '../../../types';
import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';

export type ContrastProps<T extends ElementType = 'div'> = BoxProps<T>;

export const Contrast = <T extends ElementType = 'div'>({
  id,
  className,
  style,
  htmlProps,
  ...rest
}: ContrastProps<T>) => {
  return (
    <Box
      {...getBaseHTMLProps(
        id,
        cn(className, typographyStyles.contrast, styles.container),
        style,
        htmlProps,
        rest,
      )}
    />
  );
};

Contrast.displayName = 'Contrast';
