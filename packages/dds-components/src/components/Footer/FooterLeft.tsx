import { type ComponentPropsWithRef } from 'react';

import styles from './Footer.module.css';
import { cn } from '../../utils';

export type FooterLeftProps = ComponentPropsWithRef<'div'>;

export const FooterLeft = ({ className, ...rest }: FooterLeftProps) => (
  <div className={cn(className, styles['left'])} {...rest} />
);
