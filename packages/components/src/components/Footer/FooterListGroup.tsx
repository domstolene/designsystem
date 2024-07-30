import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterListGroupProps = ComponentProps<'div'>;

export const FooterListGroup = forwardRef<HTMLDivElement, FooterListGroupProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn(className, styles['list-group'])}
        {...rest}
      />
    );
  },
);
