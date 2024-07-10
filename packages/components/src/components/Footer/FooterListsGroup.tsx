import { type ComponentPropsWithRef, forwardRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterListsGroupProps = ComponentPropsWithRef<'div'>;

export const FooterListsGroup = forwardRef<
  HTMLDivElement,
  FooterListsGroupProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div ref={ref} className={cn(className, styles['lists-group'])} {...rest} />
  );
});
