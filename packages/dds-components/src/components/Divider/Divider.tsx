import styles from './Divider.module.css';
import {
  type BaseComponentProps,
  getBaseHTMLProps,
  getBorderCn,
} from '../../types';
import { cn } from '../../utils';

export type DividerColor = 'default' | 'subtle' | 'onInverse';

export type DividerProps = BaseComponentProps<
  HTMLHRElement,
  {
    /** Farge på horisontal linje.
     * @default "default"
     */
    color?: DividerColor;
  }
>;

export const Divider = ({
  color = 'default',
  id,
  className,
  htmlProps,
  ...rest
}: DividerProps) => {
  const colorCn = getBorderCn(color);

  return (
    <hr
      {...getBaseHTMLProps(
        id,
        cn(className, styles.divider, styles[`divider--${colorCn}`]),
        htmlProps,
        rest,
      )}
    />
  );
};
