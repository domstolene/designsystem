import { type ElementType, type HTMLAttributes, forwardRef } from 'react';

import { cn } from '../../../utils';
import typographyStyles from '../../Typography/typographyStyles.module.css';
import { ElementAs } from '../ElementAs';

export type ContrastProps = HTMLAttributes<HTMLElement> & {
  /** HTML-element som returneres. */
  as?: ElementType;
};

export const Contrast = forwardRef<HTMLElement, ContrastProps>((props, ref) => {
  const { className, as = 'div', ...rest } = props;
  return (
    <ElementAs
      ref={ref}
      as={as}
      className={cn(className, typographyStyles.contrast)}
      {...rest}
    />
  );
});
