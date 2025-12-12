import { type Property } from 'csstype';

import styles from './DescriptionList.module.css';
import {
  type BaseComponentPropsWithChildren,
  getBaseHTMLProps,
} from '../../types';
import { cn } from '../../utils';
import { Box } from '../layout';

export type DescriptionListGroupProps = BaseComponentPropsWithChildren<
  HTMLDivElement,
  {
    /**Custom margin. */
    margin?: Property.Margin<string>;
    /**Custom min-width. */
    minWidth?: Property.MinWidth<string>;
    /**Custom max-width. */
    maxWidth?: Property.MaxWidth<string>;
  }
>;

export const DescriptionListGroup = ({
  children,
  margin,
  minWidth,
  maxWidth,
  id,
  className,
  style,
  htmlProps,
  ...rest
}: DescriptionListGroupProps) => (
  <Box
    {...getBaseHTMLProps(
      id,
      cn(className, styles.group),
      style,
      htmlProps,
      rest,
    )}
    maxWidth={maxWidth}
    minWidth={minWidth}
    margin={margin}
  >
    {children}
  </Box>
);

DescriptionListGroup.displayName = 'DescriptionListGroup';
