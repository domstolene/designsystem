import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterListGroupProps = ComponentPropsWithRef<'div'>;

export const FooterListGroup = ({
  className,
  ...rest
}: FooterListGroupProps) => (
  <div className={cn(className, styles['list-group'])} {...rest} />
);
