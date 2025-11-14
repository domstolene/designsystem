import { type HTMLAttributes } from 'react';

import styles from './Divider.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';

export type DividerColor = 'default' | 'subtle' | 'on-inverse';

export type DividerProps = BaseComponentProps<
  HTMLHRElement,
  {
    /** Farge på horisontal linje.
     * @default "default"
     */
    color?: DividerColor;
  },
  Omit<HTMLAttributes<HTMLHRElement>, 'color'>
>;

export const Divider = ({
  color = 'default',
  id,
  className,
  htmlProps,
  ...rest
}: DividerProps) => {
  return (
    <hr
      {...getBaseHTMLProps(
        id,
        cn(className, styles.divider, styles[`divider--${color}`]),
        htmlProps,
        rest,
      )}
    />
  );
};
