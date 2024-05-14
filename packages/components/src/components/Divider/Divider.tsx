import { forwardRef } from 'react';

import styles from './Divider.module.css';
import { type BaseComponentProps, getBaseHTMLProps } from '../../types';
import { cn } from '../../utils';

export type DividerColor = 'primary' | 'primaryLighter';

export type DividerProps = BaseComponentProps<
  HTMLHRElement,
  {
    /** Farge på horisontal linje. */
    color?: DividerColor;
  }
>;

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { color = 'primary', id, className, htmlProps, ...rest } = props;
  const colorCn = color === 'primary' ? color : 'light';

  const lineProps = {
    ...getBaseHTMLProps(
      id,
      cn(className, styles.divider, styles[`divider--${colorCn}`]),
      htmlProps,
      rest,
    ),
    color,
  };

  return <hr ref={ref} {...lineProps} />;
});

Divider.displayName = 'Divider';
