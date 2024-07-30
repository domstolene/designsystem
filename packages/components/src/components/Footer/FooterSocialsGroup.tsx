import { type ComponentProps, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterSocialsGroupProps = ComponentProps<'div'>;

export const FooterSocialsGroup = forwardRef<
  HTMLDivElement,
  FooterSocialsGroupProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(className, styles['socials-group'])}
      {...rest}
    />
  );
});
