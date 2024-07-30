import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterLeftProps = ComponentProps<'div'>;

export const FooterLeft = forwardRef<HTMLDivElement, FooterLeftProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div ref={ref} className={cn(className, styles['left'])} {...rest} />
    );
  },
);
