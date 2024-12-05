import { type ElementType, type HTMLAttributes, forwardRef } from 'react';

import styles from './Contrast.module.css';
import { cn } from '../../utils';
import { ElementAs } from '../helpers/ElementAs';
import typographyStyles from '../Typography/typographyStyles.module.css';

export type ContrastProps = HTMLAttributes<HTMLElement> & {
  /** HTML-element som returneres.
   * @default "div"
   */
  as?: ElementType;
};

export const Contrast = forwardRef<HTMLElement, ContrastProps>((props, ref) => {
  const { className, as = 'div', ...rest } = props;
  return (
    <ElementAs
      ref={ref}
      as={as}
      className={cn(className, typographyStyles.contrast, styles.container)}
      {...rest}
    />
  );
});
